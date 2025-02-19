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

echo "🚀 Setup complete!"
