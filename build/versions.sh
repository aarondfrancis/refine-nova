#!/bin/bash
set -e

#
# Install all the versions of Nova listed in the versions.txt
# file and copy the app.css out to the build/css directory.
#

# Get the directory of the current script
dir="$(dirname "$(realpath "$0")")"

# List all of the available Nova versions and write them to the versions.txt file.
composer show --all --no-ansi laravel/nova '^4.13' | grep 'versions :' | sed 's/versions : \* //' | tr ', ' '\n' | sed '/^$/d' | sed 's/^/v/' > "$dir/versions.txt"