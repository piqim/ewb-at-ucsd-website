import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useFetch';

// Maps project status strings to the correct badge utility class
const statusClass = {
  active:    'badge-active',
  planning:  'badge-planning',
  completed: 'badge-completed',
};

export default function ProjectCards() {
  const { data: projects, loading } = useApi('projects');
  if (loading || !projects) return null;

  return (
    // TODO: section with a light gray background (bg-gray-50),
    // vertical padding py-16, horizontal px-4
    <section className="bg-gray-50 py-16 px-4">

      <div className="max-w-5xl mx-auto">

        <p className="section-tag text-center">Our Work</p>

        <h2 className="text-3xl font-bold text-ucsd-navy text-center mb-12">
          Active &amp; Past Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="card p-6 flex flex-col">

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-ucsd-navy text-xl">{project.name}</h3>
                <span className={`${statusClass[project.status] ?? 'badge-planning'} ml-2 shrink-0`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              <p className="text-sm text-gray-500 flex-1 leading-relaxed mb-6">{project.tagline}</p>

              <Link to={`/projects/${project.slug}`} className="text-ewb-blue font-semibold text-sm hover:underline">
                Learn More →
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}