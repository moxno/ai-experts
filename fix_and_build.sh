#!/bin/bash
echo "🔧 Fixing permissions and building AI Experts..."

# 1. Fix ownership of the current folder
echo "👉 Fixing project permissions..."
sudo chown -R $(whoami) .

# 2. Fix ownership of the hidden .npm folder (critical)
echo "👉 Fixing npm cache permissions..."
sudo chown -R $(whoami) ~/.npm 2>/dev/null || true
sudo chown -R $(whoami) ~/.npmrc 2>/dev/null || true

# 3. Clean install (safe mode)
echo "🧹 Cleaning and installing dependencies..."
rm -rf node_modules package-lock.json
npm install

# 4. Generate Prisma
echo "🧬 Generating Prisma client..."
npx prisma generate

# 5. Build
echo "🏗️ Building project..."
npm run build

echo "✅ Build complete! You can now let the AI agent deploy it."
