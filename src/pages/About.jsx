import { useApi } from '../hooks/useFetch';

export default function About() {
  const { data: members, loading } = useApi('members');

  const leads   = members?.filter((m) => m.role === 'Project Lead') ?? [];
  const rest    = members?.filter((m) => m.role !== 'Project Lead') ?? [];
  const ordered = [...leads, ...rest];

  return (
    <main>

      {/* HERO SECTION */}
      {/* TODO: dark navy background (bg-ucsd-navy), white text,
          py-20 vertical padding, px-4 horizontal, centered text */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="">
          {/* TODO: .section-tag + text-ucsd-gold */}
          <p className="section-tag text-ucsd-gold">Who We Are</p>
          {/* TODO: text-4xl md:text-5xl, font-bold, mb-4 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EWB-UCSD</h1>
          {/* TODO: text-blue-100, text-lg, max-w-2xl, mx-auto */}
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A student-run chapter of Engineers Without Borders USA, dedicated to building
            sustainable infrastructure alongside communities in need.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="bg-white py-16 px-4">
        {/* TODO: max-w-5xl, mx-auto, two columns on desktop (md:grid-cols-2), gap-12 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            {/* TODO: .section-tag */}
            <p className="section-tag">Mission</p>
            {/* TODO: text-2xl, font-bold, text-ucsd-navy, mb-4 */}
            <h2 className="text-2xl font-bold text-ucsd-navy mb-4">Why We Exist</h2>
            {/* TODO: text-gray-600, leading-relaxed */}
            <p className="text-gray-600 leading-relaxed">
              Engineers Without Borders UCSD partners with disadvantaged communities
              worldwide to improve their quality of life through the implementation of
              sustainable engineering projects. We develop internationally responsible
              engineers while serving those in need.
            </p>
          </div>

          <div>
            {/* TODO: .section-tag */}
            <p className="section-tag">Vision</p>
            {/* TODO: text-2xl, font-bold, text-ucsd-navy, mb-4 */}
            <h2 className="text-2xl font-bold text-ucsd-navy mb-4">What We Strive For</h2>
            {/* TODO: text-gray-600, leading-relaxed */}
            <p className="text-gray-600 leading-relaxed">
              A world where communities have access to the basic infrastructure they
              need to thrive — clean water, sanitation, energy, and education — driven
              by locally owned, long-term solutions rather than short-term fixes.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      {/* TODO: light gray background (bg-gray-50), py-16, px-4 */}
      <section className="bg-gray-50 py-16 px-4">
        {/* TODO: max-w-5xl, mx-auto, text centered */}
        <div className="max-w-5xl mx-auto text-center">
          {/* TODO: .section-tag */}
          <p className="section-tag">What Guides Us</p>
          {/* TODO: text-3xl, font-bold, text-ucsd-navy, mb-12 */}
          <h2 className="text-3xl font-bold text-ucsd-navy mb-12">Our Core Values</h2>

          {/* TODO: 3-column grid on desktop (md:grid-cols-3), gap-6 */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Community First',  desc: 'Every decision centers on the long-term wellbeing of the communities we serve — not our own convenience.' },
              { title: 'Ethical Practice', desc: "We follow EWB-USA's code of ethics and prioritize solutions that communities can own and maintain independently." },
              { title: 'Student Growth',   desc: 'We believe engineering education is strengthened by real-world impact. Every project is also a learning experience.' },
            ].map((v) => (
              // TODO: .card class, p-6, text aligned left
              <div key={v.title} className="card p-6 text-left">
                {/* TODO: text-lg, font-bold, text-ucsd-navy, mb-2 */}
                <h3 className="text-lg font-bold text-ucsd-navy mb-2">{v.title}</h3>
                {/* TODO: text-gray-500, text-sm, leading-relaxed */}
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="bg-white py-16 px-4">
        {/* TODO: max-w-5xl, mx-auto */}
        <div className="max-w-5xl mx-auto">
          {/* TODO: .section-tag, centered */}
          <p className="section-tag text-center">The People</p>
          {/* TODO: text-3xl, font-bold, text-ucsd-navy, centered, mb-12 */}
          <h2 className="text-3xl font-bold text-ucsd-navy text-center mb-12">Meet the Team</h2>

          {loading ? (
            // TODO: centered, muted gray text
            <p className="text-center text-gray-500">Loading members…</p>
          ) : (
            // TODO: 2 columns on mobile (grid-cols-2), 4 on desktop (md:grid-cols-4), gap-6
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ordered.map((member) => (
                // TODO: .card class, p-5, centered text
                <div key={member.id} className="card p-5 text-center">

                  {/* TODO: circular avatar — w-16 h-16, rounded-full,
                      bg-gray-200, centered (mx-auto), mb-3, overflow-hidden */}
                  <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                    {member.photo ? (
                      // TODO: full width/height image, object-cover
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      // TODO: fallback initial — centered flex, text-2xl,
                      // font-bold, text-gray-400
                      <div className="w-full h-full flex items-center justify-center flex text-2xl font-bold text-gray-400">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* TODO: member name — font-semibold, text-ucsd-navy, text-sm */}
                  <p className="font-semibold text-ucsd-navy text-sm">{member.name}</p>
                  {/* TODO: role — text-gray-400, text-xs, mt-1 */}
                  <p className="text-gray-400 text-xs mt-1">{member.role}</p>
                  {/* TODO: project tag — text-ewb-blue, text-xs, mt-1 */}
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