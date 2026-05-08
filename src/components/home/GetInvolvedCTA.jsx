import { Link } from 'react-router-dom';

export default function GetInvolvedCTA() {
  return (
    // TODO: full-width section with ucsd-navy background, white text,
    // py-20 vertical padding, px-4 horizontal, centered text
    <section className="w-full bg-ucsd-navy text-white py-20 px-4 text-center">

      {/* TODO: constrain content to max-w-3xl, centered with mx-auto */}
      <div className="max-w-3x1 mx-auto">

        {/* TODO: small label — use .section-tag class + text-ucsd-gold */}
        <p className="section-tag text-ucsd-gold">Join Us</p>

        {/* TODO: large heading — text-3xl on mobile, text-4xl on desktop,
            font-bold, margin below mb-4 */}
        <h2 className="text-3x1 md:text-4x1 font-bold mb-4">
          Ready to Make an Impact?
        </h2>

        {/* TODO: subtitle — text-blue-100 for contrast on dark background,
            text-lg, mb-8 */}
        <p className="text-blue-100 text-lg mb-8">
          Whether you're an engineer, designer, or community-minded UCSD student —
          there's a place for you on our team.
        </p>

        {/* TODO: centered row of two buttons with gap-4 between.
            Use flex, flex-wrap, gap-4, justify-center */}
        <div className="gap-4 flex flex-wrap gap-4 justify-center">
          {/* TODO: use .btn-gold */}
          <Link to="/get-involved" className="btn-gold">Apply to Join</Link>
          {/* TODO: use .btn-outline */}
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>

      </div>
    </section>
  );
}