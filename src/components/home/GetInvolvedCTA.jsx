import { Link } from 'react-router-dom';

export default function GetInvolvedCTA() {
  return (
    // TODO: full-width section with ucsd-navy background, white text,
    // py-20 vertical padding, px-4 horizontal, centered text
    <section className="bg-ucsd-navy text-white py-20 px-4 text-center">

      <div className="max-w-3xl mx-auto">

        <p className="section-tag text-ucsd-gold">Join Us</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make an Impact?
        </h2>

        <p className="text-blue-100 text-lg mb-8">
          Whether you're an engineer, designer, or community-minded UCSD student —
          there's a place for you on our team.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/get-involved" className="btn-gold">Apply to Join</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>

      </div>
    </section>
  );
}