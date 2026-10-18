# Importpreneur VIP ⚓

> Practical Import & Customs Learning Community Web Application.

A responsive, high-performance web platform built strictly with **pure HTML5, CSS3, and Vanilla JavaScript** — zero frameworks, zero build steps, and zero external runtime dependencies.

---

## 🚀 Live Features

- **📚 10 Publication-Grade E-Book Handbooks**:
  - Realistic 3D book cover graphics
  - Complete, structured syllabuses, checklists, and chapter guides
  - Embedded online PDF reader and direct one-click PDF downloading
- **🧮 Interactive Customs Duty & Landed Cost Calculator**:
  - Assessable Value (CIF), Basic Customs Duty (BCD) slider with tariff presets
  - Social Welfare Surcharge (SWS 10%), IGST rate selector, and port CHA clearance input
  - Detailed assessment statement according to official CBIC Customs Valuation Rules
- **🔍 Real-Time Book Search & Category Filters**:
  - Instant live title and keyword search
  - Filter pills: *All Handbooks (10)*, *Customs & Clearance*, *Documentation & Compliance*, *Costing & Logistics*, *AI & Starter*
- **🤖 AI Question Brief Helper**:
  - Sample query prompt chips (e.g., Motor HSN Chap 84, Missing Incoterm, Demurrage)
  - Interactive text brief generator with one-click copy and form transfer
- **📱 100% Responsive & Touch-Friendly**:
  - Optimized for mobile viewports (320px, 375px, 414px) up to full 4K desktop screens
  - Touch-friendly sliding mobile navigation drawer
  - Horizontal touch-scrollable tabs and comparison tables with zero horizontal overflow
- **🌐 Full Bilingual Localization (English & தமிழ்)**:
  - Complete, dynamic toggle between English and Tamil across all sections, books, forms, and tools
- **💬 Direct WhatsApp Community Integration**:
  - Direct integration with the Importpreneur VIP WhatsApp community

---

## 📂 Project Structure

```text
Importpreneur/
├── index.html            # Main semantic HTML5 markup
├── css/
│   └── style.css         # Pure CSS3 stylesheet (responsive grid, flexbox, variables, media queries)
├── js/
│   ├── translations.js   # Complete bilingual dictionary (English & Tamil)
│   └── app.js            # Pure Vanilla JS application logic (calculator, search, modals, nav)
├── assets/
│   ├── hero-port.jpg     # Hero banner photograph
│   └── books/            # High-resolution 3D book cover graphics
├── ebooks/               # 10 official publication handbook PDFs
└── scripts/
    ├── serve.cjs                 # Lightweight zero-dependency local static server
    └── generate-pro-ebooks.cjs   # Automated Chrome headless PDF generation script
```

---

## 🛠️ How to Run Locally

### Option 1: Direct File Explorer (No Server Required)
Simply double-click [`index.html`](index.html) in your file manager to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Using the Lightweight Local Server
If Node.js is installed on your machine, you can launch the zero-dependency local static server:

```bash
node scripts/serve.cjs
```

Then visit:
```text
http://localhost:3000
```

---

## 📦 Deployment

This project contains no build steps and can be deployed directly to:
- **GitHub Pages**
- **Netlify**
- **Cloudflare Pages**
- **Vercel**
- Any standard web server (Apache, Nginx, Caddy, AWS S3)

---

## ⚖️ License & Disclaimer

The information provided through this platform and community is for general educational purposes. Official import declarations and clearances must always align with CBIC and DGFT regulations.
