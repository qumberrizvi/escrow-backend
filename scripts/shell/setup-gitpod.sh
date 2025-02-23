#!/bin/bash
echo "Running setup.sh..."
bash setup.sh

# Install Redis if not already installed
if ! command -v redis-server &> /dev/null; then
  echo "Installing Redis..."
  sudo apt-get update && sudo apt-get install -y redis-server
else
  echo "Redis is already installed."
fi

echo "Running start.sh..."
bash start.sh
