import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-ucsd-navy text-white py-28 px-4 overflow-hidden">
      {/* Subtle gold radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 50%, #C69214 0%, transparent 60%)' }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="section-tag text-ucsd-gold">Engineers Without Borders · UC San Diego</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Engineering a Better World,<br />
          <span className="text-ucsd-gold">One Community at a Time</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          UC San Diego students partnering with underserved communities to design
          sustainable engineering solutions that create lasting change.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/get-involved" className="btn-gold">Get Involved</Link>
          <Link to="/projects/tijuana" className="btn-outline">View Our Projects</Link>
        </div>
      </div>
    </section>
  );
}