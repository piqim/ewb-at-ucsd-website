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
    <section className="">

      {/* TODO: constrain to max-w-5xl, centered with mx-auto */}
      <div className="">

        {/* TODO: small section label — use .section-tag class, centered */}
        <p className="">Our Work</p>

        {/* TODO: large bold heading in ucsd-navy, centered,
            with bottom margin mb-12 */}
        <h2 className="">
          Active &amp; Past Projects
        </h2>

        {/* TODO: 3-column grid on desktop (md:grid-cols-3),
            single column on mobile. gap-6 between cards */}
        <div className="">
          {projects.map((project) => (

            // TODO: use the custom .card class for the card container.
            // Add padding (p-6) and use flex column layout (flex flex-col)
            // so the "Learn More" link always sits at the bottom
            <div key={project.slug} className="">

              {/* TODO: row with space between — flex, items-start,
                  justify-between, margin below (mb-3) */}
              <div className="">

                {/* TODO: project name — bold, ucsd-navy, text-xl */}
                <h3 className="">{project.name}</h3>

                {/* TODO: status badge — use the statusClass lookup above.
                    Add ml-2 and shrink-0 so it doesn't wrap onto a new line */}
                <span className={`${statusClass[project.status] ?? 'badge-planning'} `}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              {/* TODO: tagline — small gray text (text-sm text-gray-500),
                  flex-1 so it fills remaining space, leading-relaxed, mb-6 */}
              <p className="">{project.tagline}</p>

              {/* TODO: "Learn More" link — ewb-blue color, font-semibold,
                  text-sm, hover:underline */}
              <Link to={`/projects/${project.slug}`} className="">
                Learn More →
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}