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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <div className="bg-ucsd-gold text-ucsd-navy font-bold text-sm px-3 py-1.5 rounded inline-block mb-4">EWB-UCSD</div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Engineers Without Borders at UC San Diego — partnering with communities to build sustainable infrastructure.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/ewb.at.ucsd/" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-instagram transition-colors duration-150">
                Instagram
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-discord transition-colors duration-150">
                Discord
              </a>
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors duration-150">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Projects</p>
            <ul className="space-y-2">
              {projectLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors duration-150">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs">© {year} Engineers Without Borders at UC San Diego. All rights reserved.</p>
          <p className="text-white/40 text-xs">ewb@ucsd.edu</p>
        </div>
      </div>
    </footer>
  );
}