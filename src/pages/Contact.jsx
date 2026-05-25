const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

export default function Contact() {

  const handleSubmit = async (e) => {
    // TODO: prevent the default form submission behavior
    e.preventDefault();
    // TODO: get a reference to the form element from e.target
    const form = e.target;
    // TODO: convert the form's fields into a plain object using FormData
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // TODO: wrap the following in a try/catch:
    //   - POST to https://formspree.io/f/${FORMSPREE_ID}
    //   - set headers: Content-Type application/json, Accept application/json
    //   - send the form data object as a JSON string in the body
    //   - if response is ok: alert a success message and call form.reset()
    //   - if response is not ok: alert an error message
    // TODO: in the catch block, alert a network error message
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <main>

      {/* HERO */}
      {/* TODO: ucsd-navy background, white text, py-20, px-4, centered */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="">
          <p className="section-tag text-ucsd-gold">Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Questions, partnerships, media inquiries — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="bg-white py-16 px-4">
        {/* TODO: max-w-4xl, mx-auto, 2 columns on desktop (md:grid-cols-2), gap-12 */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* INFO COLUMN */}
          <div>
            {/* TODO: text-2xl, font-bold, text-ucsd-navy, mb-6 */}
            <h2 className="text-2xl font-bold text-ucsd-navy mb-6">Get in Touch</h2>
            {/* TODO: space-y-5, text-gray-600, text-sm */}
            <div className="space-y-5 text-gray-600 text-sm">
              <div>
                {/* TODO: font-semibold, text-ucsd-navy, mb-1 */}
                <p className="font-semibold text-ucsd-navy mb-1">Email</p>
                {/* TODO: text-ewb-blue, hover:underline */}
                <a href="mailto:ewb@ucsd.edu" className="text-ewb-blue hover:underline">ewb@ucsd.edu</a>
              </div>
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Instagram</p>
                <a href="https://www.instagram.com/ewb.ucsd/" target="_blank" rel="noopener noreferrer" className="">
                  @ewb.ucsd
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

          {/* FORM COLUMN */}
          {/* TODO: space-y-5 between form fields */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              {/* TODO: label — block, text-sm, font-medium, text-gray-700, mb-1 */}
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              {/* TODO: w-full, border border-gray-200, rounded-lg,
                  px-4 py-2.5, text-sm,
                  focus:outline-none focus:ring-2 focus:ring-ewb-blue */}
              <input name="name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ewb-blue" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ewb-blue" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input name="subject" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ewb-blue" placeholder="Partnership inquiry…" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              {/* TODO: same input styling as above but as a <textarea>,
                  rows={5}, resize-none to prevent manual resizing */}
              <textarea name="message" required rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ewb-blue resize-none" placeholder="How can we help?" />
            </div>
            {/* TODO: .btn-primary, w-full */}
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>

        </div>
      </section>

    </main>
  );
}