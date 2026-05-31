const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    try{
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(res.ok){
        alert('Message sent! We\'ll get back to you shortly.');
        form.reset();
      }
      else{
        alert('Something went wrong. Please try again.');
      }
    } catch{
      alert('Network error. Please try again.');
    };
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="">
          <p className="">Reach Out</p>
          <h1 className="">Contact Us</h1>
          <p className="">
            Questions, partnerships, media inquiries — we'd love to hear from you.
          </p>
        </div>
      </section>
      {/* TWO-COLUMN LAYOUT */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4x1 mx-auto grid md:grid-cols-2 gap-12">
          {/* INFO COLUMN */}
          <div>
            <h2 className="text-2x1 font-bold text-ucsd-naby mb-6">Get in Touch</h2>
            <div className="space-y-5 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Email</p>
                <a href="mailto:ewb@ucsd.edu" className="text-ewb-blue hover:underline">ewb@ucsd.edu</a>
              </div>
              <div>
                <p className="font-semibold text-ucsd-navy mb-1">Instagram</p>
                <a 
                  href="https://www.instagram.com/ewb.ucsd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ewb-blue hover:underline"
                >
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-medium text-gray-700 mb-1">Name *</label>
              <input 
                name="name"
                type="text" required 
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                placeholder="Jane Doe" />
            </div>
            <div>
              <label className="">Email *</label>
              <input
                name="email"
                type="email" required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-ewb-blue"
                placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input name="subject" type="text" required className="" placeholder="Partnership inquiry…" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea name="message" required rows={5} className="" placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}