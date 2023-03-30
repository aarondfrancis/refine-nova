#!/bin/bash
set -e

#
# Build the final versions of our CSS for every version of Nova's css
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

  npm run prod --nova="$version" --cssonly
done < "$versions"