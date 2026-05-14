#!/data/data/com.termux/files/usr/bin/bash

SESSION_ID="$1"

if [ -z "$SESSION_ID" ]; then
    echo ""
    echo "Usage:"
    echo 'curl -s "https://domain.com/file.sh" | bash -s YOUR_SESSION_ID'
    echo ""
    exit 1
fi

REPO_URL="https://github.com/darksayan/milkyxmd"
REPO_NAME="milkyxmd"
STARTUP_FILE=".startup"

echo "[+] Starting installer..."

echo "[+] Checking Node.js..."

if ! command -v node >/dev/null 2>&1; then
    echo "[!] Node.js not found"

    if [ -d "/data/data/com.termux/files/usr" ]; then
        echo "[+] Installing Node.js for Termux..."
        pkg update -y
        pkg install nodejs-lts git -y
    else
        echo "[+] Installing Node.js for Linux VPS..."

        if command -v apt >/dev/null 2>&1; then
            apt update -y
            apt install nodejs npm git -y

        elif command -v yum >/dev/null 2>&1; then
            yum install nodejs npm git -y

        elif command -v dnf >/dev/null 2>&1; then
            dnf install nodejs npm git -y

        else
            echo "[!] Unsupported Linux system"
            exit 1
        fi
    fi
else
    echo "[+] Node.js already installed"
fi

if [ ! -d "$REPO_NAME" ]; then
    echo "[+] Cloning repository..."

    git clone "$REPO_URL" || {
        echo "[!] Failed to clone repository"
        exit 1
    }
fi

cd "$REPO_NAME" || exit 1

if [ -f "$STARTUP_FILE" ]; then
    STARTUP_STATUS=$(cat "$STARTUP_FILE")

    if [ "$STARTUP_STATUS" = "true" ]; then
        echo "[+] Bot already installed"
        echo "[+] Starting directly..."
        npm start
        exit 0
    fi
fi

echo "[+] Detecting environment..."

if [ -d "/data/data/com.termux/files/usr" ]; then
    echo "[+] Termux detected"

    if [ -f "package.json" ]; then
        rm -f package.json
    fi

    if [ -f "termux-package.json" ]; then
        mv termux-package.json package.json
    else
        echo "[!] termux-package.json not found"
        exit 1
    fi

else
    echo "[+] Linux VPS detected"
fi

echo "[+] Creating .env file..."

cat > .env <<EOF
SESSION_ID=$SESSION_ID
EOF

echo "[+] Installing modules..."
npm install

echo "true" > "$STARTUP_FILE"

echo "[+] Installation completed"

echo "[+] Starting bot..."
npm start