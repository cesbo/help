package main

import (
	"fmt"
	"io"
	"io/fs"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
)

func copyFile(src, dst string) error {
	// Открываем исходный файл
	sourceFile, err := os.Open(src)
	if err != nil {
		return fmt.Errorf("ошибка открытия исходного файла: %v", err)
	}
	defer sourceFile.Close()

	// Создаем целевой файл
	destFile, err := os.Create(dst)
	if err != nil {
		return fmt.Errorf("ошибка создания целевого файла: %v", err)
	}
	defer destFile.Close()

	// Копируем содержимое из исходного файла в целевой файл
	_, err = io.Copy(destFile, sourceFile)
	if err != nil {
		return fmt.Errorf("ошибка копирования файла: %v", err)
	}

	return nil
}

func removeNumericPrefix(filename string) string {
	// Регулярное выражение для поиска числового префикса с точкой
	re := regexp.MustCompile(`^\d+\.`)
	return re.ReplaceAllString(filename, "")
}

// Рекурсивный обход дерева файлов с нумерацией листьев
func processDirectory(
	currentDir string,
	fileOrder *int,
	productDir string,
	targetDir string,
) {
	// Находим все подкаталоги и сортируем их
	subdirs := []string{}
	err := filepath.WalkDir(currentDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() && path != currentDir {
			subdirs = append(subdirs, path)
		}
		return nil
	})
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error walking directory: %v\n", err)
		return
	}
	sort.Strings(subdirs)

	for _, subdir := range subdirs {
		processDirectory(subdir, fileOrder, productDir, targetDir)
	}
	if len(subdirs) > 0 {
		return
	}

	// Находим все файлы в текущем каталоге и сортируем их
	files := []string{}
	err = filepath.WalkDir(currentDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".md" {
			files = append(files, path)
		}
		return nil
	})
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error walking directory: %v\n", err)
		return
	}

	sort.Strings(files)

	for _, file := range files {
		filename := filepath.Base(file)
		if filename == "index.md" || filename == "_dir.yml" {
			continue
		}

		// If file name starts with a %number%.md, remove the number
		newFilename := strconv.Itoa(*fileOrder) + "." + removeNumericPrefix(filename)
		fmt.Fprintf(os.Stdout, "%d %s -> %s\n", *fileOrder, filename, newFilename)

		// Copy, not rename the file to the new directory
		newFilePath := filepath.Join(targetDir, newFilename)
		if err := copyFile(file, newFilePath); err != nil {
			panic(fmt.Errorf("Error copying file: %v\n", err))
		}

		*fileOrder++
	}
}

func main() {
	rootDir := filepath.Join(os.Getenv("PWD"), "pages")
	targetDir := filepath.Join(os.Getenv("PWD"), "new_pages")
	products := []string{"alta", "astra", "misc"}

	for _, product := range products {
		productSource := filepath.Join(rootDir, product)
		productTarget := filepath.Join(targetDir, product)
		if err := os.MkdirAll(productTarget, 0755); err != nil {
			panic(fmt.Errorf("Error creating directory: %v\n", err))
		}

		// Iterate over the folders in the product directory
		folders, err := os.ReadDir(productSource)
		if err != nil {
			panic(fmt.Errorf("Error reading directory: %v\n", err))
		}
		for _, folder := range folders {
			if !folder.IsDir() {
				continue
			}
			sectionSource := filepath.Join(productSource, folder.Name())
			sectionTarget := filepath.Join(productTarget, removeNumericPrefix(folder.Name()))
			if err := os.MkdirAll(sectionTarget, 0755); err != nil {
				panic(fmt.Errorf("Error creating directory: %v\n", err))
			}

			fileOrder := 1
			processDirectory(
				sectionSource,
				&fileOrder,
				sectionSource,
				sectionTarget,
			)
		}
	}
}
