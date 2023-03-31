#!/bin/bash
set -e

#
# Use composer to list all available versions of Nova.
#

# Get the directory of the current script
dir="$(dirname "$(realpath "$0")")"

# List all of the available Nova versions and write them to the versions.txt file.
composer show --all --no-ansi laravel/nova '^4.13' | grep 'versions :' | sed 's/versions : \* //' | tr ', ' '\n' | sed '/^$/d' | sed 's/^/v/' > "$dir/versions.txt"