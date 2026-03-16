#!/bin/bash

set -e

echo "🚀 madebynz Personal Website — Deploy Script"
echo "=============================================="

# Get original user who called sudo
ORIGINAL_USER="${SUDO_USER:-$(whoami)}"
ORIGINAL_HOME=$(getent passwd "$ORIGINAL_USER" | cut -d: -f6)

# Configuration
DOMAIN="${1:-madebynz.xyz}"
SOURCE_DIR="${2:-$ORIGINAL_HOME/personal-website}"
APP_DIR="/var/www/madebynz"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}📍 Domain:     $DOMAIN${NC}"
echo -e "${BLUE}📍 Source:     $SOURCE_DIR${NC}"
echo -e "${BLUE}📍 Serve from: $APP_DIR${NC}"
echo ""

# ── Guard: must run as root ──
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run as root: sudo ./setup.sh [domain] [source_dir]${NC}"
    exit 1
fi

# ── Guard: source directory must exist ──
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}❌ Source directory not found: $SOURCE_DIR${NC}"
    echo -e "${YELLOW}Clone your repo first:${NC}"
    echo -e "${YELLOW}   git clone <your-repo-url> $SOURCE_DIR${NC}"
    exit 1
fi

# ── Install Nginx if missing ──
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}📦 Installing Nginx...${NC}"
    apt update && apt install -y nginx
fi

echo -e "${GREEN}✅ Nginx: $(nginx -v 2>&1)${NC}"

# ── Pull latest code ──
cd "$SOURCE_DIR"
if [ -d ".git" ]; then
    echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
    sudo -u "$ORIGINAL_USER" git pull origin main 2>/dev/null \
        || sudo -u "$ORIGINAL_USER" git pull origin master 2>/dev/null \
        || true
fi

# ── Copy files to serve directory ──
echo -e "${YELLOW}📁 Copying files to $APP_DIR...${NC}"
mkdir -p "$APP_DIR"
rm -rf "${APP_DIR:?}"/*

# Copy all site files
cp index.html "$APP_DIR/"
cp styles.css "$APP_DIR/"
cp script.js  "$APP_DIR/"

# Copy screenshots folder if it exists
if [ -d "$SOURCE_DIR/screenshots" ]; then
    cp -r "$SOURCE_DIR/screenshots" "$APP_DIR/"
fi

# Copy any other assets (favicon, fonts, images) if present
for asset in favicon.ico favicon.png robots.txt; do
    [ -f "$SOURCE_DIR/$asset" ] && cp "$SOURCE_DIR/$asset" "$APP_DIR/"
done

# Set permissions
chmod -R 755 "$APP_DIR"
chown -R www-data:www-data "$APP_DIR"

# Verify
if [ ! -f "$APP_DIR/index.html" ]; then
    echo -e "${RED}❌ Failed to copy files!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Files copied successfully${NC}"

# ── Configure Nginx ──
echo -e "${YELLOW}⚙️  Configuring Nginx...${NC}"

cat > /etc/nginx/sites-available/madebynz << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    root $APP_DIR;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Long-lived cache for fingerprinted assets (CSS/JS)
    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Screenshots and images
    location ~* \.(png|jpg|jpeg|gif|webp|svg|ico)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Fonts
    location ~* \.(woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*";
    }

    # HTML — never cache (so redeploys take effect immediately)
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    # Main entry
    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

# Enable site, remove default
ln -sf /etc/nginx/sites-available/madebynz /etc/nginx/sites-enabled/madebynz
rm -f /etc/nginx/sites-enabled/default

# Test config, reload
nginx -t
systemctl reload nginx

echo ""
echo "=============================================="
echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo "=============================================="
echo ""
echo -e "${GREEN}🌐  http://$DOMAIN${NC}"
echo ""
echo "To enable HTTPS run:"
echo "  sudo apt install certbot python3-certbot-nginx"
echo "  sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
