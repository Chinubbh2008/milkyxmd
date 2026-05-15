# 🌌 MILKY-XMD

<div align="center">

# MILKY XMD ELITE

### ⚡ Advanced WhatsApp Multi Device Bot powered by Baileys

<p align="center">
  <a href="https://github.com/darksayan/milkyxmd">
    <img src="https://img.shields.io/badge/Repository-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  
  <a href="#features">
    <img src="https://img.shields.io/badge/Features-06B6D4?style=for-the-badge&logo=windows-terminal&logoColor=white">
  </a>
  
  <a href="#deployment-methods">
    <img src="https://img.shields.io/badge/Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white">
  </a>
</p>

<br>

<p align="center">
  <a href="https://www.sayanxmilkyxmd.site/">
    <img src="https://img.shields.io/badge/GET_SESSION_ID-5B21B6?style=for-the-badge&logo=hackthebox&logoColor=white">
  </a>
</p>

</div>

---

# ✨ Overview

MILKY-XMD is a powerful WhatsApp Multi Device bot built with Baileys.
It provides high speed performance, advanced event handling, anti-crash stability,
and smooth deployment support for VPS, Panels, Render, and Koyeb.

---

# 🚀 Features

- ⚡ Fast & Stable Baileys Connection
- 🔐 Session Restore System
- 🧠 Advanced Event Handling
- 🛡️ Auto Reconnect Protection
- 📦 Multi Platform Deployment
- 🎨 Modern Web Pairing Interface
- 🔥 Optimized Logging System
- 📡 WhatsApp MD Support
- 🧩 Plugin Based Core
- 💻 VPS / Panel / Render Ready

---

# 📂 Project Structure

```bash
MILKY-XMD/
├── session/
├── node_modules/
├── .env
├── index.js
├── package.json
└── README.md
```

---

# 📥 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/darksayan/milkyxmd
cd milkyxmd
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Add Session ID

Create a `.env` file:

```env
SESSION_ID=YOUR_SESSION_ID_HERE
```

## 4️⃣ Start Bot

```bash
npm start
```

---

# 🔑 Session ID

Generate your Session ID from your pairing website and paste it inside `.env`.

```env
SESSION_ID=PASTE_YOUR_SESSION
```

---

# 🌍 Deployment Methods

## 🚀 Deploy to VPS

```bash
curl -s "https://raw.githubusercontent.com/darksayan/milkyxmd/refs/heads/main/setup.sh" | bash -s YOUR_SESSION_ID
```

---

## 🐳 Deploy to Pterodactyl / Panel

Create `index.js`

```js
const { spawn } = require('child_process');

const SESSION = "YOUR_SESSION_ID";

const S = `curl -s "https://raw.githubusercontent.com/darksayan/milkyxmd/refs/heads/main/setup.sh" | bash -s ${SESSION}`;

spawn(S, {
    shell: true,
    stdio: 'inherit'
});
```

Startup Command:

```bash
node index.js
```

---

## ☁️ Deploy to Render

### Build Command

```bash
npm install
```

### Start Command

```bash
npm start
```

### Environment Variable

```env
SESSION_ID=YOUR_SESSION_ID
```

---

## ⚡ Deploy to Koyeb

```env
SESSION_ID=YOUR_SESSION_ID
```

---

# 🔘 One Click Deployment Buttons

<div align="center">

<a href="https://render.com/">
<img src="https://img.shields.io/badge/Deploy_to_Render-000000?style=for-the-badge&logo=render&logoColor=white" />
</a>

<a href="https://app.koyeb.com/">
<img src="https://img.shields.io/badge/Deploy_to_Koyeb-121212?style=for-the-badge&logo=koyeb&logoColor=white" />
</a>

<a href="https://github.com/darksayan/milkyxmd">
<img src="https://img.shields.io/badge/Fork_Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

---

# ⚠️ Important Notes

- Wait 2 minutes after connection before using commands.
- Never share your SESSION_ID publicly.
- Delete `session/` folder if session becomes invalid.
- Reconnect system is enabled automatically.

# 📜 License

This project is protected under custom copyright.
Unauthorized selling, recoding, or redistribution without credit is prohibited.

---

<div align="center">

### ❤️ 

```txt
MILKY-XMD • ELITE WhatsApp Automation System
```

</div>
