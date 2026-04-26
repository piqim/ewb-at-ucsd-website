import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, getMembersByProject } from '../utils/api';
import Timeline from '../components/projects/Timeline';
import TeamSection from '../components/projects/TeamSection';

const statusClass = {
  active:   'badge-active',
  planning: 'badge-planning',
  completed:'badge-completed',
};

export default function ProjectDetail() {
  const { slug } = useParams();

  // TODO: declare state for project, members, and loading

  useEffect(() => {
    // TODO:
    // - set loading to true
    // - call getProjectBySlug(slug)
    // - on success, set project state, then call getMembersByProject with the project name
    // - on second success, set members state and set loading to false
    // - catch any errors and set loading to false
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading…
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="">Project not found</h2>
        <p className="">That project doesn't exist or the URL is incorrect.</p>
        <Link to="/" className="">Back to Home</Link>
      </div>
    );
  }

  return (
    <main>
      <section className="">
        <div className="">
          <Link to="/" className="">← Back to Home</Link>
          <div className="">
            <h1 className="">{project.name}</h1>
            <span className={statusClass[project.status] ?? 'badge-planning'}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          <p className="">{project.tagline}</p>
        </div>
      </section>

      <section className="">
        <div className="">
          <p className="">Overview</p>
          <h2 className="">About This Project</h2>
          <p className="">{project.description}</p>
        </div>
      </section>

      {project.timeline?.length > 0 && (
        <section className="">
          <div className="">
            <p className="">Progress</p>
            <h2 className="">Project Timeline</h2>
            <Timeline items={project.timeline} />
          </div>
        </section>
      )}

      {members.length > 0 && (
        <section className="">
          <div className="">
            <p className="">The People</p>
            <h2 className="">Project Team</h2>
            <TeamSection members={members} />
          </div>
        </section>
      )}

      <section className="">
        <div className="">
          <h2 className="">Want to Join This Project?</h2>
          <p className="">
            We're always looking for passionate students to contribute their skills.
          </p>
          <Link to="/get-involved" className="">Get Involved</Link>
        </div>
      </section>
    </main>
  );
}