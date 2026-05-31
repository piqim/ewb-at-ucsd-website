const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // same ID as GetInvolved

export default function Contact() {
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
        alert('Message sent! We\'ll get back to you shortly.');
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
        <p className="section-tag text-ucsd-gold">Reach Out</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          Questions, partnerships, media inquiries — we'd love to hear from you.
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Info column */}
          <div>
            <h2 className="text-2xl font-bold text-ucsd-navy mb-6">Get in Touch</h2>
            <div className="space-y-5 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Email</p>
                <a href="mailto:ewb@ucsd.edu" className="text-ewb-blue hover:underline">
                  ewb@ucsd.edu
                </a>
              </div>
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/ewb.at.ucsd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ewb-blue hover:underline"
                >
                  @ewb.at.ucsd
                </a>
              </div>
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Campus</p>
                <p>UC San Diego — La Jolla, CA 92093</p>
              </div>
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Meetings</p>
                <p>Weekly — check our Discord or Instagram for time and location.</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                name="name" type="text" required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                name="email" type="email" required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input
                name="subject" type="text" required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                placeholder="Partnership inquiry, general question…"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                name="message" required rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-ewb-blue resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>

        </div>
      </section>
    </main>
  );
}