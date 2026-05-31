import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About',          to: '/about'            },
  { label: 'Projects',       to: '/projects/tijuana' },
  { label: 'Get Involved',   to: '/get-involved'     },
  { label: 'Gallery',        to: '/gallery'          },
  { label: 'Contact',        to: '/contact'          },
];

const projectLinks = [
  { label: 'Project Tijuana',  to: '/projects/tijuana'  },
  { label: 'Project Kachieng', to: '/projects/kachieng' },
  { label: 'Project K-12',     to: '/projects/k12'      },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ucsd-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1+2 — Brand */}
          <div className="md:col-span-2">
            <div className="bg-ucsd-gold text-ucsd-navy font-bold text-sm px-3 py-1.5 rounded inline-block mb-4">
              EWB-UCSD
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Engineers Without Borders — UC San Diego Chapter.
              A chapter of EWB-USA, designed and built by Triton Web Developers at UCSD.
            </p>
            <p className="text-white/40 text-xs mt-4">
              Open to all UCSD students — engineers and non-engineers alike.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/ewb-ucsd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-instagram text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-150"
              >
                Instagram
              </a>
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-discord text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-150"
              >
                Discord
              </a>
            </div>
          </div>

          {/* Col 3 — Navigate */}
          <div>
            <h3 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Projects */}
          <div>
            <h3 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">
              Projects
            </h3>
            <ul className="space-y-2">
              {projectLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">
                EWB-USA
              </h3>
              <a
                href="https://ewb-usa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-sm transition-colors duration-150"
              >
                ewb-usa.org ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs">
            © {year} EWB-UCSD · Built by Triton Web Developers at UCSD
          </p>
          <Link
            to="/contact"
            className="text-white/40 hover:text-white/70 text-xs transition-colors duration-150"
          >
            Contact us
          </Link>
        </div>

      </div>
    </footer>
  );
}