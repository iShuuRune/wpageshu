#!/bin/bash
set -e
echo "Starting custom build script..."
node node_modules/vite/bin/vite.js build
echo "Build completed successfully!"
