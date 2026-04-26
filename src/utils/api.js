const BASE = '/api';

export const getProjects        = () => fetch(`${BASE}/projects`).then(r => r.json());
export const getProjectBySlug   = (slug) => fetch(`${BASE}/projects/${slug}`).then(r => r.json());
export const getMembers         = () => fetch(`${BASE}/members`).then(r => r.json());
export const getMembersByProject = (project) => fetch(`${BASE}/members/${encodeURIComponent(project)}`).then(r => r.json());
export const getEvents          = () => fetch(`${BASE}/events`).then(r => r.json());
export const getStats           = () => fetch(`${BASE}/stats`).then(r => r.json());