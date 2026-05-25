import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    // TODO: full-width section with a dark navy background, white text,
    // generous vertical padding (py-28), horizontal padding (px-4),
    // and overflow hidden to contain the background accent
    <section className="relative w-full bg-ucsd-navy text-white py-28 px-4 overflow-hidden">

      {/* TODO: this is a decorative background glow effect — an absolutely
          positioned full-cover div with very low opacity (opacity-10).
          Use an inline style with a radial-gradient from ucsd-gold (#C69214)
          at 70% 50% fading to transparent. Add pointer-events-none so it
          doesn't block clicks. */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{background: 'radial-gradient(circle at 70% 50%, #C69214 0%, transparent 60%)'}} />

      {/* TODO: constrain content width (max-w-5xl), center it (mx-auto),
          and center-align all text */}
      <div className="relative max-w-5xl mx-auto text-center">

        {/* TODO: small uppercase label above the heading.
            Use the custom .section-tag class + gold text color (text-ucsd-gold) */}
        <p className="section-tag text-ucsd-gold">Engineers Without Borders · UC San Diego</p>

        {/* TODO: large bold heading — text-4xl on mobile, text-6xl on desktop.
            Use font-bold, tight line height (leading-tight), margin below (mb-6) */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Engineering a Better World,<br />
          {/* TODO: the second line should be highlighted in ucsd-gold */}
          <span className="text-ucsd-gold">One Community at a Time</span>
        </h1>

        {/* TODO: subtitle paragraph — text-lg on mobile, text-xl on desktop.
            Use a light blue-tinted color (text-blue-100) for contrast on the
            dark background. Max width of ~2xl, centered, margin below (mb-10) */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          UC San Diego students partnering with underserved communities to design
          sustainable engineering solutions that create lasting change.
        </p>

        {/* TODO: horizontal row of buttons, centered, with gap between them.
            Use flex, flex-wrap, gap-4, justify-center */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* TODO: use the .btn-gold custom class */}
          <Link to="/get-involved" className="btn-gold">Get Involved</Link>
          {/* TODO: use the .btn-outline custom class */}
          <Link to="/projects/tijuana" className="btn-outline">View Our Projects</Link>
        </div>

      </div>
    </section>
  );
}