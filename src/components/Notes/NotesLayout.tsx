'use client';

import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Notes.css';

interface Chapter {
  title: string;
  chapter: number;
  slug: string;
  content: string;
}

interface NotesLayoutProps {
  chapters: Chapter[];
  classLabel: string;
}

export default function NotesLayout({ chapters, classLabel }: NotesLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectChapter = (i: number) => {
    setActiveIndex(i);
    setSidebarOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const activeChapter = chapters[activeIndex];

  return (
    <div className="notes-root">
      {/* ── Sticky header ── */}
      <header className="notes-header">
        <button
          className="notes-menu-btn"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Toggle chapter list"
        >
          <i className={`fa-solid ${sidebarOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>

        <div className="notes-header-center">
          <a href="/" className="notes-back-link">
            <i className="fa-solid fa-arrow-left" /> Home
          </a>
          <span className="notes-header-title">{classLabel} Notes</span>
        </div>

        {activeChapter && (
          <span className="notes-header-chapter">{activeChapter.title}</span>
        )}
      </header>

      <div className="notes-body">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="notes-overlay"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ── Sidebar ── */}
        <aside className={`notes-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="notes-sidebar-heading">{classLabel} — Chapters</div>
          <nav>
            {chapters.map((ch, i) => (
              <button
                key={ch.slug}
                className={`notes-chapter-btn${i === activeIndex ? ' active' : ''}`}
                onClick={() => selectChapter(i)}
              >
                <span className="notes-ch-num">Ch {ch.chapter}</span>
                <span className="notes-ch-title">{ch.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Content ── */}
        <main
          ref={contentRef}
          className="notes-content"
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          <article className="notes-article">
            {activeChapter ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {activeChapter.content}
              </ReactMarkdown>
            ) : (
              <p>No content available.</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
