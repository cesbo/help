package main

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
)

const FRONTMATTER_CLOJURE = "---"
const UNIQUE_PREFIX = "_another."

func updateFrontMatter(filePath string) error {
	if strings.HasPrefix(filepath.Base(filePath), UNIQUE_PREFIX) {
		return nil // Skip files with the unique prefix
	}

	// Get the number from the file name prefix
	fileOrder, err := strconv.Atoi(strings.Split(filepath.Base(filePath), ".")[0])
	if err != nil {
		return fmt.Errorf("Error converting file name to number: %v\n", err)
	}

	// Read the file content
	fileToRead, err := os.Open(filePath)
	if err != nil {
		return fmt.Errorf("Error reading file: %v\n", err)
	}

	fileScanner := bufio.NewScanner(fileToRead)
	fileScanner.Split(bufio.ScanLines)

	firstLine := true
	var newContents strings.Builder

	for fileScanner.Scan() {
		line := fileScanner.Text()
		lineIsFrontmatterClosure := (line == FRONTMATTER_CLOJURE)

		if firstLine {
			if !lineIsFrontmatterClosure {
				fmt.Fprintf(&newContents, "%s\n", FRONTMATTER_CLOJURE)
			}
			firstLine = false
		} else if lineIsFrontmatterClosure {
			fmt.Fprintf(&newContents, "sidebar:\n    order: %d\n", fileOrder)
		}
		fmt.Fprintf(&newContents, "%s\n", line)
	}
	if err := fileToRead.Close(); err != nil {
		return fmt.Errorf("Error closing file: %v\n", err)
	}

	// Write the updated content back to the file
	if err = os.WriteFile(filePath, []byte(newContents.String()), 0644); err != nil {
		return fmt.Errorf("Error writing file: %v\n", err)
	}

	return nil
}

func mappingExists(mappings map[string]string, fileOfInterest string) bool {
	for existingFileFrom, _ := range mappings {
		if existingFileFrom == fileOfInterest {
			return true
		}
	}
	return false
}

func renameToWithoutDigitPrefix(filePath string) string {
	directory := filepath.Dir(filePath)
	fileName := filepath.Base(filePath)
	re := regexp.MustCompile(`^\d+.`)
	newFileName := re.ReplaceAllString(fileName, "")
	return filepath.Join(directory, newFileName)
}

func prepareRenames(directoryToScan string) map[string]string {
	result := make(map[string]string)

	filesInThatSection, err := os.ReadDir(directoryToScan)
	if err != nil {
		panic(fmt.Errorf("Error reading directory: %v\n", err))
	}

	for _, file := range filesInThatSection {
		if file.IsDir() {
			panic(fmt.Errorf("Section directory has nested folders: %v\n", err))
		}

		originalFilePath := filepath.Join(directoryToScan, file.Name())
		filePath := originalFilePath
		filePath = renameToWithoutDigitPrefix(filePath)

		for mappingExists(result, filePath) {
			filePath = filepath.Join(
				directoryToScan,
				UNIQUE_PREFIX+filepath.Base(filePath),
			)
		}

		result[originalFilePath] = filePath
	}

	return result
}

func main() {
	rootDir := filepath.Join(os.Getenv("PWD"), "new_pages")
	products := []string{"alta", "astra", "misc"}

	for _, product := range products {
		productDir := filepath.Join(rootDir, product)
		sections, err := os.ReadDir(productDir)
		if err != nil {
			panic(fmt.Errorf("Error reading section directory: %v\n", err))
		}

		for _, section := range sections {
			if !section.IsDir() {
				continue
			}
			sectionDir := filepath.Join(productDir, section.Name())
			filesInThatSection, err := os.ReadDir(sectionDir)
			if err != nil {
				panic(fmt.Errorf("Error reading directory: %v\n", err))
			}

			for _, file := range filesInThatSection {
				if file.IsDir() {
					panic(fmt.Errorf("Section directory has nested folders: %v\n", err))
				}

				filePath := filepath.Join(sectionDir, file.Name())
				if err := updateFrontMatter(filePath); err != nil {
					panic(fmt.Errorf("Error updating front matter: %v\n", err))
				}
			}

			fileRenames := prepareRenames(sectionDir)
			for oldPath, newPath := range fileRenames {
				if err := os.Rename(oldPath, newPath); err != nil {
					panic(fmt.Errorf("Error renaming file: %v\n", err))
				}
				fmt.Printf("Renamed %s to %s\n", oldPath, newPath)
			}
		}
	}
}
