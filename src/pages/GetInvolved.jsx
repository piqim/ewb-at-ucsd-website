import { useApi } from '../hooks/useFetch';

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // replace after creating form at formspree.io

export default function GetInvolved() {
  const { data: events, loading } = useApi('events');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert('Application submitted! We\'ll be in touch soon.');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <p className="section-tag text-ucsd-gold">Join the Team</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Apply to join EWB-UCSD, attend an info session, or show up to one of our events.
          No experience required — just curiosity and commitment.
        </p>
      </section>

      {/* Why Join */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="section-tag text-center">Why Join?</p>
          <h2 className="text-3xl font-bold text-ucsd-navy text-center mb-12">
            What You'll Gain
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Real Engineering Experience', desc: 'Work on live infrastructure projects with actual community impact — not simulations.' },
              { title: 'International Travel',         desc: 'Selected members travel to project sites for assessment and implementation trips.' },
              { title: 'Leadership Opportunities',     desc: 'Take on project lead, subteam, and officer roles as you grow with the chapter.' },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-bold text-ucsd-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="section-tag">Come Say Hi</p>
          <h2 className="text-3xl font-bold text-ucsd-navy mb-10">Upcoming Events</h2>

          {loading ? (
            <p className="text-gray-400">Loading events…</p>
          ) : !events?.length ? (
            <p className="text-gray-400">No upcoming events right now — check back soon.</p>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="card p-6 flex flex-col md:flex-row md:items-center gap-4">
                  {/* Date badge */}
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-ewb-blue text-white flex flex-col
                                  items-center justify-center text-center">
                    <span className="text-xs font-bold uppercase leading-none">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-2xl font-bold leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-ucsd-navy">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.location}</p>
                    {event.description && (
                      <p className="text-gray-500 text-sm mt-1">{event.description}</p>
                    )}
                  </div>
                  {/* Optional link */}
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm shrink-0"
                    >
                      RSVP
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="section-tag text-center">Apply</p>
          <h2 className="text-3xl font-bold text-ucsd-navy text-center mb-10">
            Join EWB-UCSD
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  name="name" type="text" required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UCSD Email *</label>
                <input
                  name="email" type="email" required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                  placeholder="jdoe@ucsd.edu"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Major *</label>
                <input
                  name="major" type="text" required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                  placeholder="Structural Engineering"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
                <select
                  name="year" required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                >
                  <option value="">Select year</option>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+', 'Graduate'].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Interest *
              </label>
              <select
                name="project" required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue"
              >
                <option value="">Select a project</option>
                <option value="Project Tijuana">Project Tijuana</option>
                <option value="Project Kachieng">Project Kachieng</option>
                <option value="K-12 Outreach">K-12 Outreach</option>
                <option value="No preference">No preference</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to join EWB-UCSD? *
              </label>
              <textarea
                name="motivation" required rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue resize-none"
                placeholder="Tell us a bit about yourself and what draws you to this work…"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}