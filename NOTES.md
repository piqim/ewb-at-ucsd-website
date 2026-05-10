# Week 1 Notes

## Reflection Questions

**1. What is the difference between `main` and `fullstack-mern` in terms of how data reaches the React component?**

In `main`, React imports data directly from local JSON files bundled with the app. In `fullstack-mern`, React fetches data from the Express API, which queries MongoDB. The components look the same but the data source is completely different.

**2. What does Mongoose do that plain MongoDB driver doesn't?**

Mongoose adds schema validation. You define what fields a document must have, what types they are, and which are required. The plain driver lets you insert anything without checking. Mongoose also adds helpful methods like `.findOne()` with query shortcuts and model-level hooks.

**3. Why does `ProjectDetail.jsx` chain two API calls instead of using `useApi`?**

The second call needs data from the first. You call `getProjectBySlug(slug)` to get the project, then use `project.name` to call `getMembersByProject`. Since `useApi` fires once on mount with no way to pass a value from a previous call, you chain `.then()` manually so the second call waits for the first to finish.

**4. What does the `proxy` field in `package.json` do and why is it needed?**

It forwards any request that the React dev server does not recognize to `http://localhost:5000`. So when React code calls `/api/projects`, the request goes to Express instead of failing. Without it, the fetch would hit port 3000 where there is no API.
