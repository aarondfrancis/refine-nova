#!/bin/bash
set -e

#
# Install all the versions of Nova listed in the versions.txt
# file and copy the app.css out to the build/css directory.
#

# Get the directory of the current script
dir="$(dirname "$(realpath "$0")")"

# Construct the path to the versions.txt file
versions="$dir/versions.txt"

while read version; do
  # if the version is blank, continue
  if [[ -z "$version" ]]; then
      continue
  fi

  # Check if the version directory already exists
  if [ -d "$dir/nova/$version" ]; then
    echo "Version $version already exists."
    continue
  fi

  mkdir -p "$dir/nova/$version"

  echo "Installing Laravel Nova version: $version"
  composer update --with "laravel/nova:$version"

  echo "Version $version installed successfully."

  # Copy the "app.css" file to the versioned Nova directory
  file="vendor/laravel/nova/public/app.css"

  if [ -f "$file" ]; then
    cp "$file" "$dir/nova/$version/app.css"
    echo "Copied $file to $dir/nova/$version/app.css"
  else
    echo "Error: File $file not found."
    exit 1
  fi

done < "$versions"

composer update --with "laravel/nova:^4.13.0"

echo "Installation of all versions and stashing of files completed."