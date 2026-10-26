# Joshi Freight Carriers — Corporate Portfolio Website (Pure HTML / CSS / JS)

An ultra-fast, zero-dependency, pure **HTML5, CSS3, and Vanilla JavaScript** corporate portfolio website designed for **Joshi Freight Carriers**, an established road freight transportation enterprise operating at the strategic national highway crossroads of **Dhule, Maharashtra, India** (Intersection of NH-52 Agra–Mumbai Highway & NH-53 Surat–Nagpur Highway).

Optimized specifically for **Render Free Static Site Hosting**, Cloudflare Pages, GitHub Pages, or any standard web server with:
- **0ms Cold Starts:** Pure static assets served directly from edge CDN (no server sleep or spin-down delays).
- **Zero Build Dependencies:** No Node.js runtime or npm build required during hosting.
- **Lightning Fast Performance:** Loads in under 0.5 seconds on mobile 4G/5G connections.
- **Official Brand Emblem:** Integrated official truck emblem (`logo.png`) and tab favicon (`favicon.ico` / `favicon.png`).
- **Direct Phone & WhatsApp:** Optimized for B2B commercial coordination via `+91 94227 93077` and WhatsApp.

---

## 1. Verified Corporate Credentials

- **Legal Entity:** Joshi Freight Carriers
- **Verified GSTIN:** `27AFDPJ9493A1ZE` (State Code 27, Maharashtra)
- **MSME Udyam Registration:** `UDYAM-MH-04-0039447` (Government of India, District Dhule)
- **Enterprise Logistics Partner:** Authorized Carrying & Forwarding (C&F), Warehousing, and Logistics Partner for **Adani Cements** (Ambuja Cement & ACC) across Dhule & Nandurbar districts.
- **Verified Operations Phone:** `+91 94227 93077` (Clickable for mobile calling & WhatsApp)
- **Strategic Physical Location:** Opp. Surat Bypass, Near Hotel Residency Park, Agra–Mumbai Road (NH 52 / AH 47), Dhule, Maharashtra — 424311, India.
- **Highway Crossroads:** Intersection of **National Highway 52** (North–South Agra–Mumbai corridor) and **National Highway 53** (West–East Gujarat–Nagpur corridor).
- **Official Domain Reference:** `https://www.joshifreightcarriers.co.in/`

---

## 2. File Organization

```
JFC/
├── index.html            # Complete semantic HTML5 page with Schema.org JSON-LD
├── styles.css            # Pure modern CSS with responsive grid and brand tokens
├── script.js             # Vanilla JS for mobile drawer, scroll-to-top & header elevation
├── logo.png              # Official JFC truck & carrier emblem
├── favicon.ico           # Browser tab favicon
├── favicon.png           # High-resolution PNG favicon
├── robots.txt            # Search engine crawler configuration
├── sitemap.xml           # XML sitemap for SEO
├── render.yaml           # One-click Render static site deployment blueprint
└── images/               # High-resolution operational freight imagery
    ├── hero-truck.jpg        # Highway commercial freight truck
    ├── freight-operations.jpg# Dispatch staging & fleet dock
    ├── cotton-logistics.jpg  # Cotton bales & agro-commodity stacking
    ├── industrial-cargo.jpg  # Heavy engineering machinery transit
    ├── highway-corridor.jpg  # Arterial national highway transit
    └── warehouse-dispatch.jpg# Packaged goods & FMCG facility handling
```

---

## 3. How to Deploy to Render (100% Free Forever)

Render provides free static site hosting with global CDN, automated SSL certificates, and zero cold-start delays.

### Method A: Using Git (Recommended)
1. Push this folder to your GitHub or GitLab account.
2. Sign in to your [Render Dashboard](https://dashboard.render.com/).
3. Click **"New +"** &rarr; Select **"Static Site"**.
4. Connect your GitHub repository (`JFC`).
5. Configure the deployment settings:
   - **Name:** `joshi-freight-carriers`
   - **Branch:** `main` (or `master`)
   - **Build Command:** *(Leave blank)*
   - **Publish Directory:** `.` *(Single dot for root folder)*
6. Click **"Create Static Site"**.
7. Render will deploy the website in under 20 seconds at `https://joshi-freight-carriers.onrender.com`.

### Method B: Using `render.yaml` (Blueprint Deploy)
Render automatically recognizes `render.yaml` in this repository, configuring static rewrites and security headers automatically.

---

## 4. Connecting Custom Domain `joshifreightcarriers.co.in` on Render

1. In your Render Static Site dashboard, navigate to **Settings** &rarr; **Custom Domains**.
2. Click **"Add Custom Domain"** and enter:
   - `joshifreightcarriers.co.in`
   - `www.joshifreightcarriers.co.in`
3. In your domain registrar (GoDaddy, BigRock, Namecheap, etc.), add the following DNS records:

| Type | Name / Host | Target / Value |
| :--- | :--- | :--- |
| **CNAME** | `www` | `joshi-freight-carriers.onrender.com` |
| **A** | `@` | `216.24.57.1` (or the IP provided in your Render dashboard) |

4. Render will automatically issue a free Let's Encrypt SSL certificate once DNS propagates (usually 15–60 minutes).

---

## 5. Local Preview & Testing

To preview the website locally without any installation:

```bash
# Using Node.js built-in npx
npx serve . -p 8080

# Or with Python 3
python -m http.server 8080
```
Open your browser to `http://localhost:8080`.
