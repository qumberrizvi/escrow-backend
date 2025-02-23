#!/bin/bash
set -e

echo "Setting up environment..."

# Copy .env.example to .env if .env doesn't exist
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ Copied .env.example to .env"
fi

# Inject DATABASE_HOST from Codespaces secrets
if [ -n "$DATABASE_HOST" ]; then
  sed -i "s/^DATABASE_HOST=.*/DATABASE_HOST=$DATABASE_HOST/" .env
  echo "✅ Set DATABASE_HOST in .env"
else
  echo "⚠️ DATABASE_HOST not set! Using default from .env.example"
fi

# Install dependencies
pnpm install
echo "✅ Dependencies installed"

# Define the file path
TARGET_FILE="node_modules/.pnpm/@apollo+gateway@2.9.3_encoding@0.1.13_graphql@16.10.0/node_modules/@apollo/gateway/src/supergraphManagers/UplinkSupergraphManager/loadSupergraphSdlFromStorage.ts"

# Check if the file exists
if [[ -f "$TARGET_FILE" ]]; then
  # Check if the line exists before modifying it
  if grep -q "throw new UplinkFetcherError(fetchErrorMsg + result.status + ' ' + e.message ?? e);" "$TARGET_FILE"; then
    sed -i 's|throw new UplinkFetcherError(fetchErrorMsg + result.status + ' ' + e.message ?? e);|// @ts-ignore\
      throw new UplinkFetcherError(fetchErrorMsg + result.status + ' ' + e.message ?? e);|' "$TARGET_FILE"
    echo "✅ Applied @ts-ignore patch to UplinkSupergraphManager"
  else
    echo "⚠️ Target line not found, skipping modification."
  fi
else
  echo "⚠️ Target file not found, skipping modification."
fi

echo "🚀 Setup complete!"
