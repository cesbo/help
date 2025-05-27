set -e
rm -rf new_pages
mkdir new_pages
echo Dir refreshed...

go run rearrange.go
echo Files rearranged...

go run update_frontmatters.go
echo Frontmatters updated...
