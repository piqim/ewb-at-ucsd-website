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
    <footer>
      {/* TODO: Honestly, you guys can do anything here, up to y'alls creativity! */}
    </footer>
  );
}