import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Info columns */}
        <div className="footer-info">
          <div className="footer-info-item">
            <i className="fa-solid fa-location-dot" />
            <div>
              <h6>Address</h6>
              <p>Kohalpur-11, Banke, Nepal</p>
            </div>
          </div>
          <div className="footer-info-item">
            <i className="fa-solid fa-phone" />
            <div>
              <h6>Call Me</h6>
              <p>+977 98XXXXXXXX</p>
            </div>
          </div>
          <div className="footer-info-item">
            <i className="fa-solid fa-envelope" />
            <div>
              <h6>Enquiries</h6>
              <p>binitkc220@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Binit KC — Built with Next.js
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/binit.kc.500/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/binit-kc-2bb363163/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://github.com/binitkc220" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
