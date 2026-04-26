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

  // TODO: add a useEffect that:
  // - defines an onScroll handler that sets `scrolled` to true
  //   when window.scrollY > 10, false otherwise
  // - attaches it to the window scroll event on mount
  // - cleans up by removing the event listener on unmount

  return (
    // TODO: fixed header that sticks to the top (fixed top-0 left-0 right-0),
    // z-50 so it sits above all content, ucsd-navy background,
    // smooth shadow transition (transition-shadow duration-200).
    // When `scrolled` is true, add shadow-lg — use a template literal.
    <header className="">

      {/* TODO: constrain inner content — max-w-7xl, mx-auto,
          horizontal padding px-4 sm:px-6 lg:px-8 */}
      <div className="">

        {/* TODO: flex row, vertically centered (items-center),
            space-between (justify-between), fixed height h-16 */}
        <div className="">

          {/* Logo */}
          {/* TODO: flex row, items-center, gap-2, flex-shrink-0
              so it never gets squeezed on small screens */}
          <Link to="/" className="">
            {/* TODO: gold badge — bg-ucsd-gold, text-ucsd-navy,
                font-bold, text-sm, px-3 py-1.5, rounded */}
            <div className="">EWB-UCSD</div>
          </Link>

          {/* Desktop nav links — hidden on mobile (hidden md:flex) */}
          {/* TODO: hidden on mobile, flex row on desktop (hidden md:flex),
              items-center, gap-1 */}
          <nav className="">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                // TODO: NavLink receives an `isActive` boolean in its className function.
                // Base styles: px-3 py-2, rounded, text-sm, font-medium,
                // transition-colors duration-150.
                // Active: text-ucsd-gold
                // Inactive: text-white/80 hover:text-white
                className={({ isActive }) => ``}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          {/* TODO: hidden md:block */}
          <div className="">
            {/* TODO: gold pill button — bg-ucsd-gold, text-ucsd-navy,
                text-sm, font-semibold, px-4 py-2, rounded-full,
                hover:bg-yellow-500, transition-colors duration-150 */}
            <Link to="/get-involved" className="">Join Us</Link>
          </div>

          {/* Mobile hamburger button — hidden on desktop */}
          {/* TODO: md:hidden, text-white, p-2, rounded, focus:outline-none */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className=""
            aria-label="Toggle menu"
          >
            {/* Hamburger icon — three lines that animate into an X when open */}
            {/* TODO: w-5, flex flex-col, gap-1 between the three lines */}
            <div className="">
              {/* Line 1 — TODO: block, h-0.5, bg-white, transition-all duration-200.
                  When menuOpen: rotate-45 translate-y-1.5 to form top of X */}
              <span className={`${menuOpen ? '' : ''}`} />
              {/* Line 2 — TODO: same base styles.
                  When menuOpen: opacity-0 to hide the middle line */}
              <span className={`${menuOpen ? '' : ''}`} />
              {/* Line 3 — TODO: same base styles.
                  When menuOpen: -rotate-45 -translate-y-1.5 to form bottom of X */}
              <span className={`${menuOpen ? '' : ''}`} />
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
      <div className={`${menuOpen ? '' : ''}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            // TODO: block, px-6 py-3, text-sm, font-medium, transition-colors duration-150.
            // Active: text-ucsd-gold
            // Inactive: text-white/80 hover:text-white
            className={({ isActive }) => ``}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Mobile CTA */}
        {/* TODO: px-6 py-3 wrapper */}
        <div className="">
          {/* TODO: block, text-center, bg-ucsd-gold, text-ucsd-navy,
              text-sm, font-semibold, px-4 py-2, rounded-full,
              hover:bg-yellow-500, transition-colors duration-150 */}
          <Link to="/get-involved" className="">Join Us</Link>
        </div>
      </div>

    </header>
  );
}