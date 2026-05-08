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

  // TODO: add a useEffect that watches `location` and closes the
  // mobile menu whenever the route changes (set menuOpen to false)

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // TODO: add a useEffect that:
  // - defines an onScroll handler that sets `scrolled` to true
  //   when window.scrollY > 10, false otherwise
  // - attaches it to the window scroll event on mount
  // - cleans up by removing the event listener on unmount

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    // TODO: fixed header that sticks to the top (fixed top-0 left-0 right-0),
    // z-50 so it sits above all content, ucsd-navy background,
    // smooth shadow transition (transition-shadow duration-200).
    // When `scrolled` is true, add shadow-lg — use a template literal.
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-ucsd-navy transition-shadow duration-200 ${
        scrolled ? 'shadow-lg' : ''
      }`}
>

      {/* TODO: constrain inner content — max-w-7xl, mx-auto,
          horizontal padding px-4 sm:px-6 lg:px-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TODO: flex row, vertically centered (items-center),
            space-between (justify-between), fixed height h-16 */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          {/* TODO: flex row, items-center, gap-2, flex-shrink-0
              so it never gets squeezed on small screens */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            {/* TODO: gold badge — bg-ucsd-gold, text-ucsd-navy,
                font-bold, text-sm, px-3 py-1.5, rounded */}
            <div className="bg-ucsd-gold text-ucsd-navy font-bold text-sm px-3 py-1.5 rounded">EWB-UCSD</div>
          </Link>

          {/* Desktop nav links — hidden on mobile (hidden md:flex) */}
          {/* TODO: hidden on mobile, flex row on desktop (hidden md:flex),
              items-center, gap-1 */}
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
                className={({ isActive }) => `px-3 py-2 rounded text-sm font-medium transition-colors duration-150 ${isActive ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          {/* TODO: hidden md:block */}
          <div className="hidden md:block">
            {/* TODO: gold pill button — bg-ucsd-gold, text-ucsd-navy,
                text-sm, font-semibold, px-4 py-2, rounded-full,
                hover:bg-yellow-500, transition-colors duration-150 */}
            <Link to="/get-involved" className="bg-ucsd-gold text-ucsd-navy text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-150">Join Us</Link>
          </div>

          {/* Mobile hamburger button — hidden on desktop */}
          {/* TODO: md:hidden, text-white, p-2, rounded, focus:outline-none */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon — three lines that animate into an X when open */}
            {/* TODO: w-5, flex flex-col, gap-1 between the three lines */}
            <div className="w-5 flex flex-col gap-1">
              {/* Line 1 — TODO: block, h-0.5, bg-white, transition-all duration-200.
                  When menuOpen: rotate-45 translate-y-1.5 to form top of X */}
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              {/* Line 2 — TODO: same base styles.
                  When menuOpen: opacity-0 to hide the middle line */}
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              {/* Line 3 — TODO: same base styles.
                  When menuOpen: -rotate-45 -translate-y-1.5 to form bottom of X */}
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {/* TODO: md:hidden so it never shows on desktop.
          ucsd-navy background, top border (border-t border-white/10).
          Animate open/close using max-height:
          - Open: max-h-screen py-2
          - Closed: max-h-0
          Add transition-all duration-200 overflow-hidden.
          Use a template literal with menuOpen to toggle classes. */}
      <div className={`md:hidden bg-ucsd-navy border-t border-white/10 transition-all duration-200 overflow-hidden ${menuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            // TODO: block, px-6 py-3, text-sm, font-medium, transition-colors duration-150.
            // Active: text-ucsd-gold
            // Inactive: text-white/80 hover:text-white
            className={({ isActive }) => `block px-6 py-3 text-sm font-medium transition-colors duration-150 ${isActive ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Mobile CTA */}
        {/* TODO: px-6 py-3 wrapper */}
        <div className="px-6 py-3">
          {/* TODO: block, text-center, bg-ucsd-gold, text-ucsd-navy,
              text-sm, font-semibold, px-4 py-2, rounded-full,
              hover:bg-yellow-500, transition-colors duration-150 */}
          <Link to="/get-involved" className="block text-center bg-ucsd-gold text-ucsd-navy text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-150">Join Us</Link>
        </div>
      </div>

    </header>
  );
}