import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [heroImageState, setHeroImageState] = useState('loading');

  useEffect(() => {
    const image = new Image();

    image.onload = () => setHeroImageState('loaded');
    image.onerror = () => setHeroImageState('error');
    image.src = '/cat-placeholder.jpg';

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  const showHeroImage = heroImageState === 'loaded';

  return (
    <section className="relative bg-ucsd-navy text-white py-28 px-4 overflow-hidden min-h-[72vh] flex items-center">
      <div className="absolute inset-0 bg-ucsd-navy" />

      {/* Fallback / hero background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${showHeroImage ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/cat-placeholder.jpg')" }}
        aria-hidden="true"
      />

      {/* Radial fallback while loading or if the image fails */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${showHeroImage ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'radial-gradient(circle at 70% 50%, rgba(198, 146, 20, 0.22) 0%, transparent 60%)' }}
      />

      {/* Dark overlay + vignette for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10, 16, 28, 0.62), rgba(10, 16, 28, 0.42) 42%, rgba(10, 16, 28, 0.7)), radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.44) 100%)',
        }}
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