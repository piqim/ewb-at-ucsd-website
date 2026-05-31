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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-ucsd-navy transition-shadow duration-200
        ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-ucsd-gold text-ucsd-navy font-bold text-sm px-3 py-1.5 rounded">EWB-UCSD</div>
          </Link>

          {/* Desktop nav links — hidden on mobile (hidden md:flex) */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                // TODO: NavLink receives an `isActive` boolean in its className function.
                // Base styles: px-3 py-2, rounded, text-sm, font-medium,
                // transition-colors duration-150.
                // Active: text-ucsd-gold
                // Inactive: text-white/80 hover:text-white
                className={({ isActive }) => 
                  `px-3 py-2 rounded text-sm font-medium transition-colors duration-150
                  ${isActive ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'
                }`
              }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          <div className="hidden md:block">
            {/* TODO: gold pill button — bg-ucsd-gold, text-ucsd-navy,
                text-sm, font-semibold, px-4 py-2, rounded-full,
                hover:bg-yellow-500, transition-colors duration-150 */}
            <Link 
              to="/get-involved"
              className="bg-ucsd-gold text-ucsd-navy text-sm font-semibold
              px-4 py-2 rounded-full hover:bg-yellow-500
              transition-colors duration-150"
              >
                Join Us
            </Link>
          </div>

          {/* Mobile hamburger button — hidden on desktop */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon — three lines that animate into an X when open */}
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-white transition-all duration-200
                ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200
                ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200
                ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden bg-ucsd-navy border-t border-white/10
        transition-all duration-200 overflow-hidden
        ${menuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-6 py-3 text-sm font-medium transition-colors duration-150
                ${isActive
                  ? 'text-ucsd-gold' 
                  : 'text-white/80 hover:text-white'
                }`
              }
          >
            {link.label}
          </NavLink>
        ))}

        {/* Mobile CTA */}
        <div className="px-6 py-3">
          <Link 
            to="/get-involved"
            className="block text-center bg-ucsd-gold text-ucsd-navy
              text-sm font-semibold px-4 py-2 rounded-full
              hover:bg-yellow-500 transition-colors duration-150"
              >
                Join Us
            </Link>
        </div>
      </div>
    </header>
  );
}