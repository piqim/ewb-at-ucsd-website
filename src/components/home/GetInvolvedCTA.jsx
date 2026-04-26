import { Link } from 'react-router-dom';

export default function GetInvolvedCTA() {
  return (
    // TODO: full-width section with ucsd-navy background, white text,
    // py-20 vertical padding, px-4 horizontal, centered text
    <section className="">

      {/* TODO: constrain content to max-w-3xl, centered with mx-auto */}
      <div className="">

        {/* TODO: small label — use .section-tag class + text-ucsd-gold */}
        <p className="">Join Us</p>

        {/* TODO: large heading — text-3xl on mobile, text-4xl on desktop,
            font-bold, margin below mb-4 */}
        <h2 className="">
          Ready to Make an Impact?
        </h2>

        {/* TODO: subtitle — text-blue-100 for contrast on dark background,
            text-lg, mb-8 */}
        <p className="">
          Whether you're an engineer, designer, or community-minded UCSD student —
          there's a place for you on our team.
        </p>

        {/* TODO: centered row of two buttons with gap-4 between.
            Use flex, flex-wrap, gap-4, justify-center */}
        <div className="">
          {/* TODO: use .btn-gold */}
          <Link to="/get-involved" className="">Apply to Join</Link>
          {/* TODO: use .btn-outline */}
          <Link to="/contact" className="">Contact Us</Link>
        </div>

      </div>
    </section>
  );
}