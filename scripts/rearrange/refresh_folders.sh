rm -rf ./pages
mkdir pages
# Склонируйте в соседнюю от help папку help-original, с версией, когда он был на nuxt
cp -a ../help-original/content/ru/. pages
cd pages
mv 1.astra/ astra/
mv 2.alta/ alta/
mv 3.misc/ misc/
