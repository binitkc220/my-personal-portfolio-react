'use client';

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog',      href: 'https://blog.binitkc.com.np' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      {/* scroll progress bar */}
      <div className="nav-progress" style={{ width: `${progress}%` }} />

      <div className="container nav-inner">
        <a href="#home" className="nav-brand">
          <img src="/img/mylogo.webp" alt="Binit KC" className="nav-logo" />
        </a>

        {/* desktop links */}
        <ul className="nav-links-list">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
