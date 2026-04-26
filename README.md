# EWB-UCSD Website
### Engineers Without Borders — UC San Diego Chapter
Built and maintained by **Triton Web Developers (TWD) at UCSD**

---

## Table of Contents
- [Project Overview](#project-overview)
- [Branch Strategy](#branch-strategy)
- [Branch: fullstack-mern](#branch-fullstack-mern)
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

## Branch: `fullstack-mern`

### Purpose
This is the **complete full-stack reference implementation**. It contains a working Express + MongoDB backend wired to the same React frontend. This branch exists as:
- The **answer key** for the `fullstack-mern-practice` assignment
- A **reference** for how a MERN stack application is structured
- A **learning resource** for team members to read and understand

> ⚠️ **Do not use this branch for active development. Do not modify it.** It is the source of truth for what the finished full-stack app should look like.

### Tech Stack
| Layer | Tool |
|---|---|
| Frontend | React 19 + React Router v6 + Tailwind CSS v3 |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Forms | Formspree |

### Architecture

```
Browser (React)
    ↓ fetch /api/projects
Express Server (port 5000)
    ↓ Project.find()
MongoDB Atlas (ewb-ucsd database)
```

The React frontend proxies all `/api/*` requests to the Express server via the `"proxy"` field in `package.json`. The Express server queries MongoDB using Mongoose models and returns JSON.

### Getting Started

**Prerequisites**
- Node.js v18 or higher
- A MongoDB Atlas account with a cluster set up
- npm v9 or higher

**Installation**
```bash
git checkout fullstack-mern
npm install
cd server && npm install && cd ..
```

**Environment Setup**

Create `server/.env` (never commit this file):
```
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/ewb-ucsd?retryWrites=true&w=majority
PORT=5000
```

**Seed the database**
```bash
cd server
npm run seed
```
This clears and repopulates all four MongoDB collections from the `src/data/` JSON files.

**Run locally**

You need two terminals running simultaneously:

Terminal 1 — Backend:
```bash
cd server
npm run dev
```

Terminal 2 — Frontend:
```bash
# from project root
npm start
```

Visit `http://localhost:3000`. Open DevTools → Network tab and confirm you see `/api/projects`, `/api/members`, `/api/stats`, `/api/events` requests returning 200.

### Folder Structure

```
server/
├── config/
│   └── db.js                  ← mongoose connection
├── controllers/
│   ├── projectController.js   ← getProjects, getProjectBySlug
│   ├── memberController.js    ← getMembers, getMembersByProject
│   ├── eventController.js     ← getEvents (future events only)
│   └── statController.js      ← getStats
├── models/
│   ├── Project.js             ← slug, name, tagline, status, timeline[], gallery[]
│   ├── Member.js              ← name, role, project, photo, active
│   ├── Event.js               ← title, date, location, description, link
│   └── Stat.js                ← label, value, prefix, suffix, order
├── routes/
│   ├── projectRoutes.js
│   ├── memberRoutes.js
│   ├── eventRoutes.js
│   └── statRoutes.js
├── seed.js                    ← populates MongoDB from JSON files
├── server.js                  ← Express entry point
└── .env                       ← gitignored — add your own
```

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Server health check |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/:slug` | Single project by slug |
| GET | `/api/members` | All active members |
| GET | `/api/members/:project` | Members filtered by project name |
| GET | `/api/events` | Upcoming events (date ≥ today) |
| GET | `/api/stats` | All stats ordered by `order` field |

### How the Frontend Connects

`src/utils/api.js` exports named fetch functions:
```js
export const getProjects = () => fetch('/api/projects').then(r => r.json());
```

`src/hooks/useFetch.js` maps resource strings to those functions:
```js
const resourceMap = {
  projects: api.getProjects,
  members:  api.getMembers,
  events:   api.getEvents,
  stats:    api.getStats,
};
```

Components call the hook exactly as before — only the data source changed:
```js
const { data: projects, loading } = useApi('projects');
// now fetches from MongoDB via Express instead of JSON file
```

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