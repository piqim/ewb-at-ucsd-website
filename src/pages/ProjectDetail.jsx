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

  const [project, setProject] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProjectBySlug(slug)
      .then((data) => {
        setProject(data);
        return getMembersByProject(data.name);
      })
      .then((memberData) => {
        setMembers(memberData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
      <section className="bg-ucsd-navy text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-blue-300 hover:text-white text-sm mb-6 inline-block transition-colors">← Back to Home</Link>
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>
            <span className={statusClass[project.status] ?? 'badge-planning'}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          <p className="text-blue-100 text-lg">{project.tagline}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="section-tag">Overview</p>
          <h2 className="text-3xl font-bold text-ucsd-navy mb-6">About This Project</h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </section>

      {project.timeline?.length > 0 && (
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="section-tag">Progress</p>
            <h2 className="text-3xl font-bold text-ucsd-navy mb-10">Project Timeline</h2>
            <Timeline items={project.timeline} />
          </div>
        </section>
      )}

      {members.length > 0 && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="section-tag">The People</p>
            <h2 className="text-3xl font-bold text-ucsd-navy mb-10">Project Team</h2>
            <TeamSection members={members} />
          </div>
        </section>
      )}

      <section className="bg-ewb-blue text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want to Join This Project?</h2>
          <p className="text-blue-100 mb-8">
            We're always looking for passionate students to contribute their skills.
          </p>
          <Link to="/get-involved" className="btn-gold">Get Involved</Link>
        </div>
      </section>
    </main>
  );
}