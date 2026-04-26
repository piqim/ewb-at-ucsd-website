import { useApi } from '../hooks/useFetch';

// You should probably put this in your .env file, and then import dotenv :P
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

export default function GetInvolved() {
  const { data: events, loading } = useApi('events');

  /* Form Submission using Formspree */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    /* Try-Catch Statement */
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      /* if-else statement if res.ok, and else => alet if submitted or not. */
      if (res.ok) { /*TODO*/ ); form.reset(); }
      else { /*TODO*/ }
    } catch { alert('Network error. Please try again.'); }
  };

  return (
    <main>

      {/* HERO */}
      {/* TODO: ucsd-navy background, white text, py-20, px-4, centered */}
      <section className="">
        <div className="">
          {/* TODO: .section-tag + text-ucsd-gold */}
          <p className="">Join the Team</p>
          {/* TODO: text-4xl md:text-5xl, font-bold, mb-4 */}
          <h1 className="">Get Involved</h1>
          {/* TODO: text-blue-100, text-lg, max-w-2xl, mx-auto */}
          <p className="">
            Apply to join EWB-UCSD, attend an info session, or show up to one of our events.
            No experience required — just curiosity and commitment.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="">
        {/* TODO: max-w-5xl, mx-auto */}
        <div className="">
          {/* TODO: .section-tag, centered */}
          <p className="">Why Join?</p>
          {/* TODO: text-3xl, font-bold, text-ucsd-navy, centered, mb-12 */}
          <h2 className="">What You'll Gain</h2>

          {/* TODO: 3 columns on desktop (md:grid-cols-3), gap-6 */}
          <div className="">
            {[
              { title: 'Real Engineering Experience', desc: 'Work on live infrastructure projects with actual community impact — not simulations.' },
              { title: 'International Travel',         desc: 'Selected members travel to project sites for assessment and implementation trips.' },
              { title: 'Leadership Opportunities',     desc: 'Take on project lead, subteam, and officer roles as you grow with the chapter.' },
            ].map((item) => (
              // TODO: .card, p-6
              <div key={item.title} className="">
                {/* TODO: font-bold, text-ucsd-navy, mb-2 */}
                <h3 className="">{item.title}</h3>
                {/* TODO: text-gray-500, text-sm, leading-relaxed */}
                <p className="">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      {/* TODO: bg-gray-50, py-16, px-4 */}
      <section className="">
        {/* TODO: max-w-4xl, mx-auto */}
        <div className="">
          {/* TODO: .section-tag */}
          <p className="">Come Say Hi</p>
          {/* TODO: text-3xl, font-bold, text-ucsd-navy, mb-10 */}
          <h2 className="">Upcoming Events</h2>

          {loading ? (
            <p className="">Loading events…</p>
          ) : !events?.length ? (
            <p className="">No upcoming events right now — check back soon.</p>
          ) : (
            // TODO: vertical stack of cards, space-y-4
            <div className="">
              {events.map((event) => (
                // TODO: .card, p-6, flex column on mobile / row on desktop
                // (flex flex-col md:flex-row), items aligned center on desktop,
                // gap-4 between children
                <div key={event.id} className="">

                  {/* Date badge — TODO: fixed size square (w-16 h-16),
                      rounded-xl, ewb-blue background, white text,
                      flex column centered, shrink-0 so it never squishes */}
                  <div className="">
                    {/* TODO: tiny bold uppercase month label, tight line height */}
                    <span className="">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    {/* TODO: large bold day number, tight line height */}
                    <span className="">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>

                  {/* Info — TODO: flex-1 so it fills remaining space */}
                  <div className="">
                    {/* TODO: font-bold, text-ucsd-navy */}
                    <h3 className="">{event.title}</h3>
                    {/* TODO: text-gray-400, text-sm */}
                    <p className="">{event.location}</p>
                    {event.description && (
                      // TODO: text-gray-500, text-sm, mt-1
                      <p className="">{event.description}</p>
                    )}
                  </div>

                  {/* Optional RSVP link */}
                  {event.link && (
                    // TODO: .btn-primary, text-sm, shrink-0
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="">
                      RSVP
                    </a>
                  )}

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* APPLICATION FORM */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="">
        {/* TODO: max-w-2xl, mx-auto */}
        <div className="">
          {/* TODO: .section-tag, centered */}
          <p className="">Apply</p>
          {/* TODO: text-3xl, font-bold, text-ucsd-navy, centered, mb-10 */}
          <h2 className="">Join EWB-UCSD</h2>

          <form onSubmit={handleSubmit} className="">

            {/* TODO: 2-column grid on desktop (md:grid-cols-2), gap-5 */}
            <div className="">
              <div>
                {/* TODO: label — block, text-sm, font-medium, text-gray-700, mb-1 */}
                <label className="">Full Name *</label>
                {/* TODO: input — full width, border border-gray-200, rounded-lg,
                    px-4 py-2.5, text-sm, focus:outline-none focus:ring-2 focus:ring-ewb-blue */}
                <input name="name" type="text" required className="" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="">UCSD Email *</label>
                <input name="email" type="email" required className="" placeholder="jdoe@ucsd.edu" />
              </div>
            </div>

            {/* TODO: same 2-column grid */}
            <div className="">
              <div>
                <label className="">Major *</label>
                <input name="major" type="text" required className="" placeholder="Structural Engineering" />
              </div>
              <div>
                <label className="">Year *</label>
                {/* TODO: same input styling but as a <select> */}
                <select name="year" required className="">
                  <option value="">Select year</option>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+', 'Graduate'].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="">Project Interest *</label>
              <select name="project" required className="">
                <option value="">Select a project</option>
                <option value="Project Tijuana">Project Tijuana</option>
                <option value="Project Kachieng">Project Kachieng</option>
                <option value="K-12 Outreach">K-12 Outreach</option>
                <option value="No preference">No preference</option>
              </select>
            </div>

            <div>
              <label className="">Why do you want to join EWB-UCSD? *</label>
              {/* TODO: same styling as inputs but as a <textarea>.
                  rows={4}, resize-none to prevent manual resizing */}
              <textarea name="motivation" required rows={4} className="" placeholder="Tell us a bit about yourself…" />
            </div>

            {/* TODO: .btn-primary, full width (w-full) */}
            <button type="submit" className="">Submit Application</button>

          </form>
        </div>
      </section>

    </main>
  );
}