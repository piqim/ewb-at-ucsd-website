import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'About',        to: '/about'        },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact',      to: '/contact'     },
];

const projectLinks = [
  { label: 'Project Tijuana',  to: '/projects/tijuana'  },
  { label: 'Project Kachieng', to: '/projects/kachieng' },
  { label: 'Project K-12',    to: '/projects/k12'      },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isProjectsRoute = location.pathname.startsWith('/projects');

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setProjectMenuOpen(false);
  }, [location]);

  // Add shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-ucsd-navy transition-shadow duration-200
        ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/ewb_logo_nobg.png"
              alt="Engineers Without Borders @ UCSD"
              className="block h-9 w-auto max-w-[180px] object-contain sm:h-10 md:h-11"
              loading="eager"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
          
            <div
              className="relative"
              onMouseEnter={() => setProjectMenuOpen(true)}
              onMouseLeave={() => setProjectMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProjectMenuOpen(prev => !prev)}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-150 inline-flex items-center gap-1 ${isProjectsRoute ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`}
                aria-haspopup="menu"
                aria-expanded={projectMenuOpen}
              >
                Projects
                <span className={`text-xs transition-transform duration-150 ${projectMenuOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-ucsd-navy/95 p-2 shadow-2xl backdrop-blur transition-all duration-150 ${projectMenuOpen ? 'visible opacity-100 translate-y-0' : 'pointer-events-none invisible opacity-0 -translate-y-1'}`}
                role="menu"
              >
                {projectLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${isActive ? 'bg-white/10 text-ucsd-gold' : 'text-white/80 hover:bg-white/10 hover:text-white'}`
                    }
                    role="menuitem"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? 'text-ucsd-gold'
                    : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/get-involved"
              className="bg-ucsd-gold text-ucsd-navy text-sm font-semibold
                         px-4 py-2 rounded-full hover:bg-yellow-500
                         transition-colors duration-150"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
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

      {/* Mobile menu */}
      <div className={`md:hidden bg-ucsd-navy border-t border-white/10
        transition-all duration-200 overflow-hidden
        ${menuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block px-6 py-3 text-sm font-medium transition-colors duration-150
            ${isActive
              ? 'text-ucsd-gold'
              : 'text-white/80 hover:text-white'
            }`
          }
        >
          About
        </NavLink>

        <button
          type="button"
          onClick={() => setProjectMenuOpen(prev => !prev)}
          className={`flex w-full items-center justify-between px-6 py-3 text-sm font-medium transition-colors duration-150 ${isProjectsRoute ? 'text-ucsd-gold' : 'text-white/80 hover:text-white'}`}
          aria-expanded={projectMenuOpen}
          aria-controls="mobile-project-links"
        >
          <span>Projects</span>
          <span className={`text-xs transition-transform duration-150 ${projectMenuOpen ? 'rotate-180' : ''}`}>
            ▾
          </span>
        </button>

        <div
          id="mobile-project-links"
          className={`overflow-hidden transition-all duration-200 ${projectMenuOpen ? 'max-h-40' : 'max-h-0'}`}
        >
          {projectLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block pl-10 pr-6 py-3 text-sm font-medium transition-colors duration-150 ${isActive ? 'text-ucsd-gold' : 'text-white/70 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/get-involved"
          className={({ isActive }) =>
            `block px-6 py-3 text-sm font-medium transition-colors duration-150
            ${isActive
              ? 'text-ucsd-gold'
              : 'text-white/80 hover:text-white'
            }`
          }
        >
          Get Involved
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block px-6 py-3 text-sm font-medium transition-colors duration-150
            ${isActive
              ? 'text-ucsd-gold'
              : 'text-white/80 hover:text-white'
            }`
          }
        >
          Contact
        </NavLink>

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