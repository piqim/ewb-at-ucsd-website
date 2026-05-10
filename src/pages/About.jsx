import { useApi } from '../hooks/useFetch';

export default function About() {
  const { data: members, loading } = useApi('members');

  const leads   = members?.filter((m) => m.role === 'Project Lead') ?? [];
  const rest    = members?.filter((m) => m.role !== 'Project Lead') ?? [];
  const ordered = [...leads, ...rest];

  return (
    <main>

      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-tag text-ucsd-gold">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EWB-UCSD</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A student-run chapter of Engineers Without Borders USA, dedicated to building
            sustainable infrastructure alongside communities in need.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <p className="section-tag">Mission</p>
            <h2 className="text-2xl font-bold text-ucsd-navy mb-4">Why We Exist</h2>
            <p className="text-gray-600 leading-relaxed">
              Engineers Without Borders UCSD partners with disadvantaged communities
              worldwide to improve their quality of life through the implementation of
              sustainable engineering projects. We develop internationally responsible
              engineers while serving those in need.
            </p>
          </div>

          <div>
            <p className="section-tag">Vision</p>
            <h2 className="text-2xl font-bold text-ucsd-navy mb-4">What We Strive For</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where communities have access to the basic infrastructure they
              need to thrive — clean water, sanitation, energy, and education — driven
              by locally owned, long-term solutions rather than short-term fixes.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-tag">What Guides Us</p>
          <h2 className="text-3xl font-bold text-ucsd-navy mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Community First',  desc: 'Every decision centers on the long-term wellbeing of the communities we serve — not our own convenience.' },
              { title: 'Ethical Practice', desc: "We follow EWB-USA's code of ethics and prioritize solutions that communities can own and maintain independently." },
              { title: 'Student Growth',   desc: 'We believe engineering education is strengthened by real-world impact. Every project is also a learning experience.' },
            ].map((v) => (
              <div key={v.title} className="card p-6 text-left">
                <h3 className="text-lg font-bold text-ucsd-navy mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="section-tag text-center">The People</p>
          <h2 className="text-3xl font-bold text-ucsd-navy text-center mb-12">Meet the Team</h2>

          {loading ? (
            <p className="text-center text-gray-400">Loading members…</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ordered.map((member) => (
                <div key={member._id} className="card p-5 text-center">

                  <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <p className="font-semibold text-ucsd-navy text-sm">{member.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{member.role}</p>
                  {member.project && <p className="text-ewb-blue text-xs mt-1">{member.project}</p>}

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}