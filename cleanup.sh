#!/bin/bash

# Create a temporary directory
temp_dir=$(mktemp -d)

# Copy files from docs/browser/ to the temporary directory
cp -r docs/browser/* "$temp_dir"

# Delete all contents of the docs/ folder
rm -r docs/*

# Copy the contents of the temporary directory back to the docs folder
cp -r "$temp_dir"/* docs/

# Delete the temporary directory
rm -r "$temp_dir"