// In the frontend-only branch, all data comes from local JSON files.
// In the fullstack-mern branch, these functions are replaced with
// axios calls to the Express API.

export const getProjects = () =>
  import('../data/projects.json');

export const getProjectBySlug = async (slug) => {
  const mod      = await import('../data/projects.json');
  const projects = mod.default ?? mod;
  return projects.find(p => p.slug === slug) ?? null;
};

export const getMembersByProject = async (slug) => {
  const mod     = await import('../data/members.json');
  const members = mod.default ?? mod;
  return slug ? members.filter(m => m.project === slug) : members;
};

export const getAllMembers = () =>
  import('../data/members.json');

export const getEvents = () =>
  import('../data/events.json');

export const getStats = () =>
  import('../data/stats.json');