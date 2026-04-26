# EWB-UCSD — Assignment TODO
### `fullstack-mern-practice` branch

---

## How This Works

All three members work on **the same files every week**, independently and without looking at each other's code. At the end of each week, everyone opens a pull request and the team meets to compare all three implementations side by side.

There are no wrong answers — the goal is to see how three people approach the same problem differently, discuss the tradeoffs, and learn from each other before the project lead merges the best version (or a combination).

The completed `fullstack-mern` branch is your reference and answer key. Use it when you are genuinely stuck, but always attempt the task on your own first. Reading the answer before trying defeats the purpose.

**Ground rules:**
- Work only on `fullstack-mern-practice` — never touch `main` or `fullstack-mern`
- Commit your work at the end of every session, not just at the end of the week
- If you get stuck for more than 30 minutes, check the answer key — then write the solution yourself from memory, not by copying
- Every PR must include a short written comment explaining what you built and one thing you found confusing or interesting

---

## Week 1 — Orientation & Setup

**Goal:** Get the full environment running locally and understand the entire codebase before writing a single line of new code.

**Everyone completes the following:**

### Environment Setup
- [ ] Clone the repository and switch to `fullstack-mern-practice`
  ```bash
  git clone https://github.com/piqim/ewb-at-ucsd-website.git
  cd ewb-at-ucsd-website
  git checkout fullstack-mern-practice
  ```
- [ ] Install frontend dependencies from the project root
  ```bash
  npm install
  ```
- [ ] Install backend dependencies
  ```bash
  cd server && npm install && cd ..
  ```
- [ ] Create your own free MongoDB Atlas cluster (M0 tier)
  - Sign up at cloud.mongodb.com
  - Create a cluster named `ewb-ucsd-cluster`
  - Create a database user with a username and password
  - Under Network Access, allow access from anywhere (`0.0.0.0/0`)
- [ ] Get your MongoDB connection string and create `server/.env`
  ```
  MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/ewb-ucsd?retryWrites=true&w=majority
  PORT=5000
  ```
- [ ] Create `.env` at the project root
  ```
  DANGEROUSLY_DISABLE_HOST_CHECK=true
  NODE_OPTIONS=--openssl-legacy-provider
  ```
- [ ] Run `npm start` from the root — confirm the React app loads at `localhost:3000`

### Codebase Reading (required before Week 2)
Read every file listed below. Don't skim — understand what each one does and why.

**`fullstack-mern` branch (complete answer key):**
- [ ] `server/config/db.js` — how does Express connect to MongoDB?
- [ ] `server/server.js` — how is the Express app set up? What middleware is used?
- [ ] All four files in `server/models/` — what fields does each collection have?
- [ ] All four files in `server/controllers/` — how do controllers query the database?
- [ ] All four files in `server/routes/` — how do routes connect to controllers?
- [ ] `server/seed.js` — how does data get loaded into MongoDB?
- [ ] `src/utils/api.js` — how does the frontend make API calls?
- [ ] `src/hooks/useFetch.js` — how does the hook abstract the fetching logic?
- [ ] `src/pages/ProjectDetail.jsx` — why does this page use direct API calls instead of the hook?

**`main` branch (frontend-only reference):**
- [ ] `src/utils/api.js` — how is this different from the fullstack version?
- [ ] `src/hooks/useFetch.js` — how does this version load data without a backend?

### Reflection Questions
Write short answers to these in your own notes before the Week 1 meeting:
1. What is the difference between `main` and `fullstack-mern` in terms of how data reaches the React component?
2. What does Mongoose do that plain MongoDB driver doesn't?
3. Why does `ProjectDetail.jsx` chain two API calls instead of using `useApi`?
4. What does the `proxy` field in `package.json` do and why is it needed?

### Week 1 PR
Open a pull request titled `[YourName] Week 1 — Setup` containing:
- Your `.env.example` (no real credentials — just the keys with placeholder values)
- A short `NOTES.md` in the root with answers to the four reflection questions above

---

## Week 2 — Database Layer (Models + Server Bootstrap)

**Goal:** Implement the Mongoose schemas, the database connection, the Express server bootstrap, and the seed script. By the end of this week, `npm run seed` should work and all four collections should appear in Atlas.

**Everyone implements all of the following files:**

### `server/config/db.js`
Implement the `connectDB` async function:
- Connect to MongoDB using `mongoose.connect()` with `process.env.MONGO_URI`
- On success, log the connected host (`conn.connection.host`)
- On failure, log the error message and call `process.exit(1)` to stop the server
- Export the function as the default export

### `server/server.js`
Set up the complete Express application:
- Load environment variables using `dotenv.config()`
- Call `connectDB()` to establish the database connection
- Initialize an Express app
- Add `cors()` middleware to allow cross-origin requests from React
- Add `express.json()` middleware to parse JSON request bodies
- Mount all four route files at their correct paths:
  - `/api/projects` → `projectRoutes`
  - `/api/members` → `memberRoutes`
  - `/api/events` → `eventRoutes`
  - `/api/stats` → `statRoutes`
- Keep the existing `/api/health` route and 404 fallback
- Read `PORT` from environment variables (default 5000) and start the server

### `server/models/Project.js`
Define two schemas:

`timelineItemSchema` (used inside projectSchema):
- `date` — String, required
- `title` — String, required
- `description` — String, required

`projectSchema`:
- `slug` — String, required, unique
- `name` — String, required
- `tagline` — String, required
- `description` — String, required
- `status` — String, enum of `['active', 'planning', 'completed']`, default `'planning'`
- `timeline` — array of `timelineItemSchema`
- `gallery` — array of Strings
- Enable `timestamps` option so Mongoose auto-adds `createdAt` and `updatedAt`

Export as `mongoose.model('Project', projectSchema)`.

### `server/models/Member.js`
Define `memberSchema`:
- `name` — String, required
- `role` — String, required
- `project` — String, required
- `photo` — String, default `''`
- `active` — Boolean, default `true`
- Enable `timestamps`

Export as `mongoose.model('Member', memberSchema)`.

### `server/models/Event.js`
Define `eventSchema`:
- `title` — String, required
- `date` — **Date** type, required
- `location` — String, required
- `description` — String, default `''`
- `link` — String, default `''`
- Enable `timestamps`

Export as `mongoose.model('Event', eventSchema)`.

### `server/models/Stat.js`
Define `statSchema`:
- `label` — String, required
- `value` — **Number** type, required
- `prefix` — String, default `''`
- `suffix` — String, default `''`
- `order` — Number, default `0`
- Enable `timestamps`

Export as `mongoose.model('Stat', statSchema)`.

### `server/seed.js`
Implement the body of the `seed` async function:
- Use `Promise.all` to call `deleteMany()` on all four models simultaneously — this clears existing data before re-seeding
- Use `insertMany()` to insert all four JSON datasets into their respective collections
- The JSON imports at the top of the file are already provided — use them

### Verification Checklist
- [ ] `cd server && npm run seed` completes with `✅ Seed complete`
- [ ] Atlas → Browse Collections shows `ewb-ucsd` database with 4 collections
- [ ] Each collection has the correct number of documents matching the JSON files
- [ ] `cd server && npm run dev` starts without errors and logs `MongoDB connected: ...`
- [ ] `GET http://localhost:5000/api/health` returns `{ "status": "ok" }`

### Week 2 PR
Open a pull request titled `[YourName] Week 2 — Models & Server Bootstrap`. In your PR comment, explain:
- One Mongoose concept you didn't know before (e.g. `timestamps`, `enum`, nested schemas)
- Why `process.exit(1)` is called on a database connection failure instead of just logging the error

---

## Week 3 — API Layer (Controllers & Routes)

**Goal:** Implement all controllers and routes so the Express server returns real data from MongoDB on every endpoint. By the end of this week, every `/api/*` URL should return correct JSON when visited directly in the browser or Postman.

**Everyone implements all of the following files:**

### `server/controllers/projectController.js`

`getProjects`:
- Fetch all documents from the `Project` collection
- Sort by `createdAt` descending (newest first)
- Return the array as JSON
- Wrap in try/catch — on error return status 500 with `{ message: err.message }`

`getProjectBySlug`:
- Find a single document where `slug` matches `req.params.slug`
- If no document found, return status 404 with `{ message: 'Project not found' }`
- Otherwise return the document as JSON
- Wrap in try/catch — on error return status 500

### `server/controllers/memberController.js`

`getMembers`:
- Fetch all documents where `active` is `true`
- Sort by `name` ascending (A→Z)
- Return as JSON
- Wrap in try/catch

`getMembersByProject`:
- Fetch documents where `project` matches `req.params.project` AND `active` is `true`
- Sort by `name` ascending
- Return as JSON
- Wrap in try/catch

### `server/controllers/eventController.js`

`getEvents`:
- Fetch only documents where `date` is greater than or equal to today
- Use `{ date: { $gte: new Date() } }` as the filter
- Sort by `date` ascending (soonest first)
- Return as JSON
- Wrap in try/catch

### `server/controllers/statController.js`

`getStats`:
- Fetch all documents from the `Stat` collection
- Sort by `order` ascending
- Return as JSON
- Wrap in try/catch

### `server/routes/projectRoutes.js`
- Register `GET /` → `getProjects`
- Register `GET /:slug` → `getProjectBySlug`
- Export the router

### `server/routes/memberRoutes.js`
- Register `GET /` → `getMembers`
- Register `GET /:project` → `getMembersByProject`
- Export the router

### `server/routes/eventRoutes.js`
- Register `GET /` → `getEvents`
- Export the router

### `server/routes/statRoutes.js`
- Register `GET /` → `getStats`
- Export the router

### Verification Checklist
Test every endpoint directly in your browser with the server running:
- [ ] `GET /api/projects` — returns array of all projects
- [ ] `GET /api/projects/tijuana` — returns the Tijuana project object
- [ ] `GET /api/projects/nonexistent` — returns `{ message: 'Project not found' }` with status 404
- [ ] `GET /api/members` — returns all active members
- [ ] `GET /api/members/Project%20Tijuana` — returns only Tijuana members
- [ ] `GET /api/events` — returns only future events (none if all test events are in the past)
- [ ] `GET /api/stats` — returns all stats in order

### Week 3 PR
Open a pull request titled `[YourName] Week 3 — Controllers & Routes`. In your PR comment, explain:
- What the difference is between a controller and a route in Express
- Why `$gte: new Date()` is used in the events query instead of just fetching all events

---

## Week 4 — Frontend JavaScript Logic

**Goal:** Wire the React frontend to the Express backend by implementing the API utility functions, the data fetching hook, the ProjectDetail page logic, and all stripped JavaScript in components and pages. By end of this week, the full app runs with real MongoDB data and zero JSON file imports.

**Everyone implements all of the following:**

### `src/utils/api.js`
Implement and export six functions using `fetch()`:

| Function | Method | Endpoint |
|---|---|---|
| `getProjects` | GET | `/api/projects` |
| `getProjectBySlug(slug)` | GET | `/api/projects/:slug` |
| `getMembers` | GET | `/api/members` |
| `getMembersByProject(project)` | GET | `/api/members/:project` |
| `getEvents` | GET | `/api/events` |
| `getStats` | GET | `/api/stats` |

Each function should return the parsed JSON response (chain `.then(r => r.json())`). For `getMembersByProject`, wrap the project parameter in `encodeURIComponent()` so spaces in project names are handled correctly.

### `src/hooks/useFetch.js`
Implement the `useFetch` function:

1. Create a `resourceMap` object that maps these string keys to the api functions:
   - `'projects'` → `api.getProjects`
   - `'members'` → `api.getMembers`
   - `'events'` → `api.getEvents`
   - `'stats'` → `api.getStats`

2. Inside the hook, declare three state variables: `data` (null), `loading` (true), `error` (null)

3. Inside `useEffect`:
   - Declare a `cancelled` boolean flag set to `false`
   - Look up the correct fetcher from `resourceMap` using the `resource` argument
   - If no fetcher is found, set an error and return early
   - Set loading to `true`
   - Call the fetcher function, then on success set `data` and set `loading` to `false`
   - On failure set `error` and set `loading` to `false`
   - Only update state if `cancelled` is still false (prevents memory leaks)
   - Return a cleanup function that sets `cancelled = true`

4. Return `{ data, loading, error }`

5. Export as both `export const useApi = useFetch` and `export default useFetch`

### `src/pages/ProjectDetail.jsx`
Implement the state and effect logic:

1. Declare three state variables: `project` (null), `members` (empty array), `loading` (true)

2. Inside `useEffect` watching `[slug]`:
   - Set loading to `true`
   - Call `getProjectBySlug(slug)`
   - On success, store the project in state, then immediately call `getMembersByProject(data.name)`
   - On the second success, store members in state and set loading to `false`
   - Catch any error and set loading to `false`

   > Hint: chain `.then()` calls — the first `.then()` returns the result of `getMembersByProject()`, which is itself a Promise, so the second `.then()` receives the members array.

### `src/components/home/StatsSection.jsx`
Implement the `CountUp` animation inside `useEffect`:
- Create an `IntersectionObserver` with `threshold: 0.3`
- When the element enters the viewport (and hasn't started yet):
  - Set `started.current = true`
  - Record start time with `performance.now()`
  - Write a `tick` function using `requestAnimationFrame` that:
    - Calculates progress = `(now - startTime) / duration`, clamped to 1
    - Sets count to `Math.floor(progress * target)`
    - Calls `requestAnimationFrame(tick)` again if progress < 1
- Observe `containerRef.current`
- Return a cleanup function that calls `observer.disconnect()`

### `src/pages/Gallery.jsx`
Implement all stripped JavaScript:
- Declare `active` state (default `ALL`) and `lightbox` state (default `null`)
- Build the `photos` array by flatMapping over projects
- Build the `filters` array from project names prefixed with `ALL`
- Build the `visible` array filtered by `active`
- Wire `setActive(f)` to the filter button `onClick`
- Wire `setLightbox(photo)` to the photo div `onClick`
- Wire `setLightbox(null)` to the lightbox overlay and close button `onClick`
- Render the lightbox conditionally when `lightbox` is not null

### `src/pages/Contact.jsx`
Implement `handleSubmit`:
- Call `e.preventDefault()`
- Get a reference to `e.target` (the form)
- Convert form fields to a plain object using `new FormData(form)` and `Object.fromEntries()`
- POST the data to `https://formspree.io/f/${FORMSPREE_ID}` with the correct headers
- On success: alert a success message, call `form.reset()`
- On failure: alert an error message
- Catch network errors and alert accordingly

### `src/pages/GetInvolved.jsx`
Implement `handleSubmit` — identical logic to `Contact.jsx` above.

### `src/components/common/Navbar.jsx`
Implement both `useEffect` hooks:

Effect 1 — close menu on route change:
- Watch `[location]`
- Call `setMenuOpen(false)` inside

Effect 2 — shadow on scroll:
- Define `onScroll` handler: sets `scrolled` to `true` if `window.scrollY > 10`, `false` otherwise
- Add event listener: `window.addEventListener('scroll', onScroll)`
- Return cleanup: `window.removeEventListener('scroll', onScroll)`

### Verification Checklist
Run both servers simultaneously and check:
- [ ] Home page loads — DevTools Network tab shows `/api/projects`, `/api/stats` requests
- [ ] Stats section counts up when scrolled into view
- [ ] About page loads all members from `/api/members`
- [ ] `/projects/tijuana` makes requests to `/api/projects/tijuana` AND `/api/members/Project%20Tijuana`
- [ ] Gallery filter buttons work — switching between All / project names
- [ ] Lightbox opens on photo click and closes on overlay or ✕ click
- [ ] Contact form submits to Formspree (check your Formspree dashboard)
- [ ] Navbar adds shadow when you scroll down and closes the mobile menu on navigation

### Week 4 PR
Open a pull request titled `[YourName] Week 4 — Frontend JS Logic`. In your PR comment, explain:
- Why the `cancelled` flag is needed in `useFetch` (what problem does it prevent?)
- Why `ProjectDetail` uses direct API calls instead of `useApi('projects')` + client-side filter

---

## Week 5 — Frontend Styling (Tailwind CSS)

**Goal:** Apply all Tailwind classes across every component and page so the app visually matches the completed `main` branch. By end of this week, the app should be pixel-close to the production frontend.

**Everyone styles all of the following files:**

> Reference: Open the `main` branch in a separate VS Code window and run `npm start` on it at `localhost:3001` (change the PORT in `.env`) so you can see the target design while you work.

### Styling Reference — Design System

| Token | Value | Tailwind class |
|---|---|---|
| UCSD Navy | `#182B49` | `bg-ucsd-navy` / `text-ucsd-navy` |
| UCSD Gold | `#C69214` | `bg-ucsd-gold` / `text-ucsd-gold` |
| EWB Blue | `#0065B2` | `bg-ewb-blue` / `text-ewb-blue` |
| Section padding | `py-16 px-4` | Standard for all sections |
| Max content width | `max-w-5xl` | Most sections |
| Max nav/footer width | `max-w-7xl` | Navbar and Footer only |

Custom utility classes (already defined in `index.css`):
- `.btn-primary` — blue pill button
- `.btn-gold` — gold pill button
- `.btn-outline` — white outline pill button
- `.section-tag` — tiny uppercase section label
- `.card` — white card with rounded corners and soft shadow
- `.badge-active` / `.badge-planning` / `.badge-completed`

### Files to Style

#### `src/components/common/Navbar.jsx`
- Fixed header with navy background
- Shadow appears when `scrolled` is true
- Logo badge: gold background, navy text
- Desktop nav: active link in gold, inactive in `text-white/80`
- Mobile hamburger: three lines animate into an X when open
- Mobile dropdown: slides open/closed using `max-h` transition

#### `src/components/common/Footer.jsx`
- Navy background, white text
- 4-column grid (brand spans 2)
- Muted text hierarchy using `text-white/60`, `text-white/40`
- Instagram pill hovers to `bg-instagram`, Discord to `bg-discord`
- Bottom bar with `border-t border-white/10`

#### `src/components/home/Hero.jsx`
- Full-width navy section, py-28
- Radial gold glow using inline `style` with `radial-gradient`
- Large heading with gold `<span>` for the second line
- Two buttons side by side using flex

#### `src/components/home/StatsSection.jsx`
- EWB blue background strip, py-14
- 2-column mobile / 4-column desktop grid
- Large bold numbers, muted `text-blue-100` labels

#### `src/components/home/ProjectCards.jsx`
- Gray-50 background section
- 3-column grid of `.card` elements
- Status badges using the correct `.badge-*` class
- "Learn More →" in ewb-blue

#### `src/components/home/GetInvolvedCTA.jsx`
- Navy background, centered text
- Gold section tag
- Two buttons: `.btn-gold` and `.btn-outline`

#### `src/components/home/StayConnected.jsx`
- White background section
- Discord iframe: `rounded-xl shadow-sm`
- Instagram card: `.card` with `hover:border-pink-300 group`
- Gradient avatar circle: `bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400`
- "View Profile →" text uses inline `style={{ color: '#C13584' }}`

#### `src/pages/About.jsx`
- Hero: navy, py-20, centered
- Mission/Vision: 2-column grid on desktop
- Values: 3-column grid of cards
- Team grid: 2-col mobile / 4-col desktop, circular avatars

#### `src/pages/ProjectDetail.jsx`
- Hero: navy, large heading + status badge
- Timeline section: gray-50 background
- Team section: white background
- CTA strip: ewb-blue background

#### `src/components/projects/Timeline.jsx`
- Vertical gray line (absolute positioned)
- Blue dot on the line at each item (absolute, z-10)
- Cards alternate left/right on desktop, always right on mobile

#### `src/components/projects/TeamSection.jsx`
- 2-col mobile / 4-col desktop grid
- Circular avatar with initial fallback

#### `src/pages/GetInvolved.jsx`
- Hero: navy, py-20
- Why Join: 3 cards on desktop
- Events: date badge (ewb-blue square), flex row layout
- Form: consistent input styling, 2-column rows where applicable

#### `src/pages/Gallery.jsx`
- Filter tab pills: active = ewb-blue, inactive = gray
- Masonry grid using CSS `columns-2 md:columns-3`
- Hover zoom effect on images using `group` + `group-hover:scale-105`
- Lightbox: `fixed inset-0 bg-black/80`, centered content, close button

#### `src/pages/Contact.jsx`
- 2-column layout: info left, form right
- Input styling: `border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-ewb-blue`
- Full-width submit button using `.btn-primary w-full`

#### `src/pages/NotFound.jsx`
- Centered full-height layout
- Giant faint `404` using `text-8xl text-gray-100 select-none`

### Verification Checklist
Open both `main` (answer key) and `fullstack-mern-practice` (your work) side by side:
- [ ] Navbar looks identical — logo, links, mobile menu
- [ ] Footer looks identical — columns, muted text, social pills
- [ ] Hero section — gold glow, correct heading sizes
- [ ] Stats strip — blue background, animated numbers
- [ ] Project cards — correct badge colors per status
- [ ] About team grid — circular avatars, correct layout
- [ ] Gallery masonry — hover zoom works, lightbox opens correctly
- [ ] All forms — consistent input styling, button styling
- [ ] NotFound page — faint 404, centered layout
- [ ] Mobile responsive — check all pages at 375px width in DevTools

### Week 5 PR
Open a pull request titled `[YourName] Week 5 — Tailwind Styling`. In your PR comment, explain:
- One Tailwind technique you found particularly useful or clever (e.g. `group`, `columns-*`, opacity modifiers like `text-white/60`)
- One place where your styling differs from the reference and why you made that choice

---

## Weekly Meeting Format

Each week, the team meets after all three PRs are open. The meeting follows this structure:

1. **Demo** (5 min each) — each member shows their implementation running locally
2. **Code compare** (15–20 min) — project lead shares screen and opens all three PRs side by side, focusing on the key implementation differences
3. **Discussion** (10 min) — the group discusses:
   - Which approach is most readable?
   - Which approach is most correct / handles edge cases best?
   - Is there something in someone else's code you didn't think of?
4. **Merge** (5 min) — project lead merges the agreed-upon version or cherry-picks the best parts

---

## Final Deliverable

By the end of Week 5, `fullstack-mern-practice` should be a fully working full-stack MERN app that is visually identical to `main` but powered by MongoDB + Express.

Each team member should be able to:
- Explain every file they implemented, line by line
- Describe the full request lifecycle: React component → useFetch → api.js → Express → Mongoose → MongoDB → JSON response → React state → rendered UI
- Make a small change to any part of the stack (e.g. add a new field to a model, add a new API endpoint, update a component) without breaking anything