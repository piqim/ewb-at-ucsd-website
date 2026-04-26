const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

export default function Contact() {

  const handleSubmit = async (e) => {
    // TODO: prevent the default form submission behavior

    // TODO: get a reference to the form element from e.target

    // TODO: convert the form's fields into a plain object using FormData

    // TODO: wrap the following in a try/catch:
    //   - POST to https://formspree.io/f/${FORMSPREE_ID}
    //   - set headers: Content-Type application/json, Accept application/json
    //   - send the form data object as a JSON string in the body
    //   - if response is ok: alert a success message and call form.reset()
    //   - if response is not ok: alert an error message
    // TODO: in the catch block, alert a network error message
  };

  return (
    <main>

      {/* HERO */}
      {/* TODO: ucsd-navy background, white text, py-20, px-4, centered */}
      <section className="">
        <div className="">
          <p className="">Reach Out</p>
          <h1 className="">Contact Us</h1>
          <p className="">
            Questions, partnerships, media inquiries — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      {/* TODO: white background, py-16, px-4 */}
      <section className="">
        {/* TODO: max-w-4xl, mx-auto, 2 columns on desktop (md:grid-cols-2), gap-12 */}
        <div className="">

          {/* INFO COLUMN */}
          <div>
            {/* TODO: text-2xl, font-bold, text-ucsd-navy, mb-6 */}
            <h2 className="">Get in Touch</h2>
            {/* TODO: space-y-5, text-gray-600, text-sm */}
            <div className="">
              <div>
                {/* TODO: font-semibold, text-ucsd-navy, mb-1 */}
                <p className="">Email</p>
                {/* TODO: text-ewb-blue, hover:underline */}
                <a href="mailto:ewb@ucsd.edu" className="">ewb@ucsd.edu</a>
              </div>
              <div>
                <p className="">Instagram</p>
                <a href="https://www.instagram.com/ewb.ucsd/" target="_blank" rel="noopener noreferrer" className="">
                  @ewb.ucsd
                </a>
              </div>
              <div>
                <p className="">Campus</p>
                <p>UC San Diego — La Jolla, CA 92093</p>
              </div>
              <div>
                <p className="">Meetings</p>
                <p>Weekly — check our Discord or Instagram for time and location.</p>
              </div>
            </div>
          </div>

          {/* FORM COLUMN */}
          {/* TODO: space-y-5 between form fields */}
          <form onSubmit={handleSubmit} className="">
            <div>
              {/* TODO: label — block, text-sm, font-medium, text-gray-700, mb-1 */}
              <label className="">Name *</label>
              {/* TODO: w-full, border border-gray-200, rounded-lg,
                  px-4 py-2.5, text-sm,
                  focus:outline-none focus:ring-2 focus:ring-ewb-blue */}
              <input name="name" type="text" required className="" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="">Email *</label>
              <input name="email" type="email" required className="" placeholder="you@example.com" />
            </div>
            <div>
              <label className="">Subject *</label>
              <input name="subject" type="text" required className="" placeholder="Partnership inquiry…" />
            </div>
            <div>
              <label className="">Message *</label>
              {/* TODO: same input styling as above but as a <textarea>,
                  rows={5}, resize-none to prevent manual resizing */}
              <textarea name="message" required rows={5} className="" placeholder="How can we help?" />
            </div>
            {/* TODO: .btn-primary, w-full */}
            <button type="submit" className="">Send Message</button>
          </form>

        </div>
      </section>

    </main>
  );
}