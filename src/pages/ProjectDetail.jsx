import { useParams, Link } from 'react-router-dom';
import { useApi } from '../hooks/useFetch';
import Timeline from '../components/projects/Timeline';
import TeamSection from '../components/projects/TeamSection';

const statusClass = {
  active:    'badge-active',
  planning:  'badge-planning',
  completed: 'badge-completed',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { data: projects, loading } = useApi('projects');
  const { data: allMembers }        = useApi('members');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading…
      </div>
    );
  }

  const project = projects?.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-ucsd-navy mb-2">Project not found</h2>
        <p className="text-gray-500 mb-6">That project doesn't exist or the URL is incorrect.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  const projectMembers = allMembers?.filter((m) => m.project === project.name) ?? [];

  return (
    <main>
      {/* Hero */}
      <section className="bg-ucsd-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-blue-300 text-sm hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>
            <span className={statusClass[project.status] ?? 'badge-planning'}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl">{project.tagline}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="section-tag">Overview</p>
          <h2 className="text-2xl font-bold text-ucsd-navy mb-4">About This Project</h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Timeline */}
      {project.timeline?.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="section-tag">Progress</p>
            <h2 className="text-2xl font-bold text-ucsd-navy mb-10">Project Timeline</h2>
            <Timeline items={project.timeline} />
          </div>
        </section>
      )}

      {/* Team */}
      {projectMembers.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="section-tag">The People</p>
            <h2 className="text-2xl font-bold text-ucsd-navy mb-10">Project Team</h2>
            <TeamSection members={projectMembers} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ewb-blue text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Want to Join This Project?</h2>
          <p className="text-blue-100 mb-8">
            We're always looking for passionate students to contribute their skills.
          </p>
          <Link to="/get-involved" className="btn-gold">Get Involved</Link>
        </div>
      </section>
    </main>
  );
}