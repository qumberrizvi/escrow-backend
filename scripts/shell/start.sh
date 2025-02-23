#!/bin/bash
set -e

echo "Starting Redis server..."

# Check if Redis is already running
if redis-cli ping | grep -q "PONG"; then
  echo "✅ Redis is already running."
else
  # Start Redis in the background
  redis-server --daemonize yes
  sleep 1

  # Verify Redis is running
  if redis-cli ping | grep -q "PONG"; then
    echo "✅ Redis server started successfully!"
  else
    echo "❌ Failed to start Redis."
    exit 1
  fi
fi
