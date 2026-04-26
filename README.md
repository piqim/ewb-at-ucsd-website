# ewb-at-ucsd-website
A website designed and developed with Reactfor Engineers Without Borders at UCSD by Triton Web Developers at UCSD.
# EWB-UCSD Website
### Engineers Without Borders — UC San Diego Chapter
Built and maintained by **Triton Web Developers (TWD) at UCSD**

---

## Table of Contents
- [Project Overview](#project-overview)
- [Branch Strategy](#branch-strategy)
- [Branch: main](#branch-main)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Data Structure](#data-structure)
- [Team](#team)

---

## Project Overview

This repository contains the website for the Engineers Without Borders UC San Diego chapter. The site showcases EWB-UCSD's three active projects (Tijuana, Kachieng, and K-12 Outreach), allows prospective members to apply and get involved, and keeps the community connected through a gallery, events, and social links.

The repository is structured across **three branches** with distinct purposes — a production frontend, a complete full-stack reference implementation, and a learning assignment skeleton.

---

## Branch Strategy

```
main                     ← Production frontend (JSON-based, Vercel hosted)
fullstack-mern           ← Complete MERN stack (answer key — do not modify)
fullstack-mern-practice  ← Assignment skeleton (student working branch)
```

Each branch serves a different audience and purpose. Read the section for your branch carefully before starting work.

---

## Branch: `main`

### Purpose
This is the **production branch**. It is a fully complete, frontend-only React site that reads data from static JSON files. This branch is deployed to Vercel and is what the public sees at the live URL. **Do not break this branch.**

### Tech Stack
| Layer | Tool |
|---|---|
| Framework | React 19 (Create React App) |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Data | Static JSON files in `src/data/` |
| Forms | Formspree |
| Hosting | Vercel |

### Getting Started

**Prerequisites**
- Node.js v18 or higher
- npm v9 or higher

**Installation**
```bash
git clone https://github.com/piqim/ewb-at-ucsd-website.git
cd ewb-at-ucsd-website
git checkout main
npm install
```

**Environment Setup**

Create a `.env` file at the root:
```
DANGEROUSLY_DISABLE_HOST_CHECK=true
NODE_OPTIONS=--openssl-legacy-provider
```

**Run locally**
```bash
npm start
```
Visit `http://localhost:3000`

### Folder Structure
```
src/
├── assets/images/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ProjectCards.jsx
│   │   ├── GetInvolvedCTA.jsx
│   │   └── StayConnected.jsx
│   └── projects/
│       ├── Timeline.jsx
│       └── TeamSection.jsx
├── data/
│   ├── projects.json
│   ├── members.json
│   ├── events.json
│   └── stats.json
├── hooks/
│   └── useFetch.js       ← imports JSON files dynamically
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── ProjectDetail.jsx
│   ├── GetInvolved.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
└── utils/
    └── api.js            ← named helper functions over useFetch
```

### How Data Works
Data is loaded from the `src/data/` JSON files using a custom `useFetch` hook:
```js
const { data: projects, loading } = useApi('projects');
// loads from src/data/projects.json
```

To update content (projects, members, events, stats), edit the corresponding JSON file in `src/data/`. No backend required.

### Formspree Setup
The Contact and Get Involved forms submit to Formspree. To configure:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form and copy your Form ID
3. Replace `YOUR_FORMSPREE_ID` in both `Contact.jsx` and `GetInvolved.jsx`

### Deployment
This branch auto-deploys to Vercel on every push to `main`. No manual steps required. Vercel is configured to use `main` as the production branch.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | Frontend framework |
| Create React App | 5 (react-scripts) | Build tooling |
| React Router | v6 | Client-side routing |
| Tailwind CSS | v3 | Utility-first styling |
| Express | 4 | Backend API server |
| Mongoose | 8 | MongoDB ODM |
| MongoDB Atlas | M0 (free) | Cloud database |
| Formspree | Free tier | Form submissions |
| Vercel | Free tier | Frontend hosting |

---

## Design System

### Colors
| Name | Hex | Usage |
|---|---|---|
| `ucsd-navy` | `#182B49` | Primary background, headings |
| `ucsd-gold` | `#C69214` | Accents, CTAs, highlights |
| `ewb-blue` | `#0065B2` | Links, buttons, badges |
| `discord` | `#5865F2` | Discord hover state |
| `instagram` | `#C13584` | Instagram hover state |

### Custom Tailwind Classes
Defined in `src/index.css` under `@layer components`:

| Class | Description |
|---|---|
| `.btn-primary` | Blue filled pill button |
| `.btn-gold` | Gold filled pill button |
| `.btn-outline` | White outline pill button (for dark backgrounds) |
| `.section-tag` | Small uppercase label above section headings |
| `.card` | White rounded card with soft border and shadow |
| `.badge-active` | Green pill badge |
| `.badge-planning` | Gray pill badge |
| `.badge-completed` | Blue pill badge |

### Typography
- Font: **Inter** (Google Fonts)
- Headings: `font-semibold` or `font-bold`, `leading-tight`

### Layout
- Max content width: `max-w-5xl` (sections), `max-w-7xl` (Navbar/Footer)
- Section padding: `py-16 px-4` desktop, `py-10 px-4` mobile
- Cards: `rounded-xl border border-gray-100 shadow-sm`

---

## Data Structure

### `src/data/projects.json`
```json
[
  {
    "slug": "tijuana",
    "name": "Project Tijuana",
    "tagline": "Short one-liner description.",
    "description": "Full paragraph description.",
    "status": "active",
    "timeline": [
      { "id": 1, "date": "Fall 2022", "title": "Phase title", "description": "What happened." }
    ],
    "gallery": ["https://...image-url.jpg"]
  }
]
```
Valid `status` values: `active`, `planning`, `completed`

### `src/data/members.json`
```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "role": "Project Lead",
    "project": "Project Tijuana",
    "photo": ""
  }
]
```
The `project` field must exactly match the project's `name` field for the ProjectDetail page to link them correctly.

### `src/data/events.json`
```json
[
  {
    "id": 1,
    "title": "Info Night",
    "date": "2025-10-15",
    "location": "Price Center, UCSD",
    "description": "Optional extra detail.",
    "link": "https://optional-rsvp-link.com"
  }
]
```

### `src/data/stats.json`
```json
[
  { "id": 1, "value": 60,  "suffix": "+", "label": "Active Members"  },
  { "id": 2, "value": 3,               "label": "Active Projects"   },
  { "id": 3, "value": 7,   "suffix": "+", "label": "Years of Impact"  },
  { "id": 4, "value": 500, "suffix": "+", "label": "Lives Impacted"   }
]
```

---

## Team

**Project Lead:** [@piqim](https://github.com/piqim) — Triton Web Developers @ UCSD

Built for **Engineers Without Borders UC San Diego** as a Triton Web Developers club project.

---

*For questions about the codebase, contact the project lead or open an issue on GitHub.*