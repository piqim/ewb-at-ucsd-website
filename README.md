# EWB-UCSD Website
### Engineers Without Borders — UC San Diego Chapter
Built and maintained by **Triton Web Developers (TWD) at UCSD**

---

## Table of Contents
- [Project Overview](#project-overview)
- [Branch Strategy](#branch-strategy)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Data Structure](#data-structure)
- [Team](#team)

---

## Project Overview

This repository contains the website for the Engineers Without Borders UC San Diego chapter. The site showcases EWB-UCSD's three active projects (Tijuana, Kachieng, and K-12 Outreach), allows prospective members to apply and get involved, and keeps the community connected through a gallery, events, and social links.

The repository is structured across **three branches** with distinct purposes — a production frontend, a complete full-stack reference implementation, and a learning assignment skeleton.

## Branch: `fullstack-mern-practice`

### Purpose
This is the **practice assignment branch**. It is a skeleton version of `fullstack-mern` with all implementation logic and Tailwind classes stripped out and replaced with detailed `// TODO:` comments. All three team members rebuild the full-stack app from scratch — independently, on the same files, every week.

This branch is where **all student work happens**. The `fullstack-mern` branch is the answer key — reference it when genuinely stuck, but always attempt every task independently first.

### How the Assignment Works

Rather than dividing files between members, **all three members implement all the same files every week**. At the end of each week, everyone opens a pull request and the team meets to compare all three implementations side by side — discussing tradeoffs, catching each other's bugs, and deciding together what the best approach is before the project lead merges.

This means every team member gets full-stack experience across the entire codebase — backend models, Express controllers, React hooks, API integration, and Tailwind styling — not just one slice of it.

**The weekly rhythm:**
1. Everyone works independently on the same set of files
2. Everyone opens a PR by the end of the week
3. The team meets, compares all three implementations, and discusses
4. The project lead merges the agreed-upon version

For the complete week-by-week breakdown, task descriptions, verification checklists, and meeting format, see **[TODO.md](./TODO.md)**.

### Assignment Overview

| Week | Focus | What Everyone Builds |
|---|---|---|
| 1 | Orientation & Setup | Environment, Atlas cluster, full codebase read-through |
| 2 | Database Layer | All 4 Mongoose models + `db.js` + `server.js` + `seed.js` |
| 3 | API Layer | All controllers + all routes |
| 4 | Frontend JS Logic | `api.js`, `useFetch.js`, `ProjectDetail.jsx`, form handlers, Gallery logic, CountUp animation, Navbar effects |
| 5 | Frontend Styling | All Tailwind classes across every component and page |

### Getting Started

**Step 1 — Clone and switch to the practice branch**
```bash
git clone https://github.com/piqim/ewb-at-ucsd-website.git
cd ewb-at-ucsd-website
git checkout fullstack-mern-practice
```

**Step 2 — Install dependencies**
```bash
npm install
cd server && npm install && cd ..
```

**Step 3 — Set up your own MongoDB Atlas cluster**
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) and sign in
2. Create a free M0 cluster named `ewb-ucsd-cluster`
3. Create a database user with a username and password
4. Under Network Access, allow access from anywhere (`0.0.0.0/0`)
5. Get your connection string from Connect → Drivers → Node.js

**Step 4 — Create your environment file**

Create `server/.env`:
```
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/ewb-ucsd?retryWrites=true&w=majority
PORT=5000
```

**Step 5 — Read the entire codebase before writing anything**

Before touching any TODO, read every file in both `fullstack-mern` (answer key) and `main` (frontend reference). Understanding both will make the TODOs much clearer.

### How to Use the TODO Comments

Every file contains `// TODO:` comments describing exactly what to implement:

```js
// TODO: create an async function called connectDB that:
// - connects to MongoDB using mongoose.connect() with process.env.MONGO_URI
// - logs the connected host on success
// - logs the error message and exits the process on failure
```

Work through each TODO in order within a file. Later TODOs often depend on earlier ones.

### Submitting Your Work
At the end of each week, commit and open a pull request:
```bash
git add .
git commit -m "feat: Week N — [what you built]"
git push origin fullstack-mern-practice
```

The project lead reviews all four PRs together with the members at the weekly meeting before merging.

→ **See [TODO.md](./TODO.md) for the full week-by-week breakdown.**



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

**Project Developer Lead:** [@piqim](https://github.com/piqim)
**Contributing Developers:** [@contributor1](https://github.com/contributor1)
**Contributing Developers:** [@contributor2](https://github.com/contributor2)
**Contributing Developers:** [@contributor3](https://github.com/contributor3)
**Contributing Developers:** [@contributor4](https://github.com/contributor4)

Built for **Engineers Without Borders UC San Diego** as a Triton Web Developers club project.

---
