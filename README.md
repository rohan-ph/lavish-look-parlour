# 💅 Lavish Look — Beauty Parlour Website

A modern, responsive beauty parlour website built with **React**, **TypeScript**, and **Vite**, featuring smooth animations, a services showcase, gallery, and WhatsApp booking integration. Deployed live on **Netlify**.

---

## 🌐 Live Demo

> Deployed on Netlify — [View Live Site](https://lavishlook.netlify.app)
---

## 📸 Project Overview

Lavish Look is a fully responsive static website designed for a premium beauty parlour. It includes:

- **Home** — Hero section with call-to-action and highlights
- **Services** — A detailed listing of all salon services with pricing cards
- **Gallery** — Visual showcase of the parlour's work
- **About** — Story and team section
- **Contact** — Contact details and location info
- **WhatsApp Button** — Floating button for instant booking via WhatsApp

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **TypeScript** | Type-safe JavaScript |
| **Vite 7** | Fast build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Smooth page & element animations |
| **React Router DOM v7** | Client-side routing (multi-page navigation) |
| **Lucide React** | Icon library |
| **Netlify** | Hosting & deployment |

---

## 📁 Project Structure

```
beauty-parlour-lavish/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── GalleryImage.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages/            # Page-level components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx           # Root component with routing
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies & scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rohan-ph/lavish-look-parlour.git

# 2. Navigate into the project
cd lavish-look-parlour

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will run at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

---

## ☁️ Deployment — Netlify

This project is deployed using **[Netlify](https://www.netlify.com/)**, a platform for fast, continuous deployment of static and JAMstack sites.

### How It Was Deployed

1. **Push to GitHub** — The project code was pushed to a GitHub repository.
2. **Connect to Netlify** — The GitHub repo was linked to a Netlify project via the Netlify dashboard.
3. **Configure Build Settings** on Netlify:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. **Auto Deploy** — Every push to the `main` branch automatically triggers a new Netlify build and deploys the updated site.

### Netlify Features Used

- ✅ **Continuous Deployment** from GitHub
- ✅ **Automatic HTTPS / SSL** (free, managed by Netlify)
- ✅ **Global CDN** for fast load times worldwide
- ✅ **Instant Rollbacks** to any previous deployment

> **Note for React Router:** Since this app uses client-side routing (`react-router-dom`), a `_redirects` file or `netlify.toml` with a rewrite rule is required so that page refreshes don't return a 404. Add the following to your `public/_redirects` file:
> ```
> /*    /index.html    200
> ```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Rohan](https://github.com/rohan-ph)
