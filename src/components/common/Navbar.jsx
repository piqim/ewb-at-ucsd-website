import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'About',        to: '/about'           },
  { label: 'Projects',     to: '/projects/tijuana' },
  { label: 'Get Involved', to: '/get-involved'    },
  { label: 'Gallery',      to: '/gallery'          },
  { label: 'Contact',      to: '/contact'          },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // TODO: fixed header that sticks to the top (fixed top-0 left-0 right-0),
    // z-50 so it sits above all content, ucsd-navy background,
    // smooth shadow transition (transition-shadow duration-200).
    // When `scrolled` is true, add shadow-lg — use a template literal.
    <header className={`fixed top-0 left-0 right-0 z-50 bg-ucsd-navy transition-shadow duration-200 ${scrolled ? 'shadow-lg' : ''}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-ucsd-gold text-ucsd-navy font-bold text-sm px-3 py-1.5 rounded">EWB-UCSD</div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm font-medium transition-colors duration-150 ${isActive ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/get-involved" className="bg-ucsd-gold text-ucsd-navy text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-150">Join Us</Link>
          </div>

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      <div className={`md:hidden bg-ucsd-navy border-t border-white/10 overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-6 py-3 text-sm font-medium transition-colors duration-150 ${isActive ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <div className="px-6 py-3">
          <Link to="/get-involved" className="block text-center bg-ucsd-gold text-ucsd-navy text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-150">Join Us</Link>
        </div>
      </div>

    </header>
  );
}