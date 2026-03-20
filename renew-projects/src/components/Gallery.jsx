import { useState } from 'react';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

// ─── ADD YOUR PHOTOS HERE ───────────────────────────────────────────────────
// To add a real photo: import it at the top, e.g:
//   import toyota from '../assets/toyota.jpg';
// Then replace null with the imported variable:
//   { src: toyota, label: 'Toyota Richards Bay' }
const GALLERY = [
  { src: null, label: 'Toyota Richards Bay' },
  { src: null, label: 'KZN TV' },
  { src: null, label: 'Lazuli Estate Ballito' },
  { src: null, label: "Pick 'n Pay Centre" },
  { src: null, label: 'Virgin Active' },
  { src: null, label: 'Boardwalk Mall' },
  { src: null, label: 'Richards Bay Medical Centre' },
  { src: null, label: 'Residential Project' },
  { src: null, label: 'Body Corporate' },
];
// ────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  { name: 'Toyota Richards Bay', cat: 'Commercial' },
  { name: 'KZN TV', cat: 'Commercial' },
  { name: 'Lazuli Estate Ballito', cat: 'Residential' },
  { name: "Pick 'n Pay Centre Matubatuba", cat: 'Commercial' },
  { name: 'Virgin Active Richards Bay', cat: 'Commercial' },
  { name: 'Boardwalk Mall Richards Bay', cat: 'Commercial' },
  { name: 'Richards Bay Medical Centre', cat: 'Industrial' },
  { name: 'Residential Properties', cat: 'Residential' },
  { name: 'Body Corporates', cat: 'Body Corporate' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const { isMobile, isTablet, width } = useBreakpoint();

  // Adapt card width and visible count per breakpoint
  const CARD_W = isMobile ? Math.min(width - 48, 320) : isTablet ? 340 : 380;
  const GAP = 16;
  const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;
  const max = GALLERY.length - VISIBLE;
  const offset = isMobile ? 24 : 40;

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(max, i + 1));

  return (
    <section id="projects" style={{ background: C.bgDark, padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <SectionHeader label="Our Work" title="Project Gallery" dark={true} />
      </div>

      {/* Carousel */}
      <div style={{ overflow: 'hidden', width: '100%', padding: '4px 0 8px' }}>
        <div style={{
          display: 'flex', gap: GAP,
          transform: `translateX(${offset - index * (CARD_W + GAP)}px)`,
          transition: 'transform 0.45s cubic-bezier(.4,0,.2,1)',
          width: 'max-content',
        }}>
          {GALLERY.map((item, i) => (
            <div key={i} style={{
              width: CARD_W, minWidth: CARD_W, height: isMobile ? 220 : 260,
              background: '#d8d5d0', borderRadius: 4, overflow: 'hidden',
              position: 'relative', border: '1px solid #c4c0bb', flexShrink: 0,
              opacity: i >= index && i < index + VISIBLE ? 1 : 0.3,
              transition: 'opacity 0.3s',
            }}>
              {item.src ? (
                <img src={item.src} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <div style={{ fontSize: 28, opacity: 0.25 }}>🏗️</div>
                  <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888', textAlign: 'center', padding: '0 20px' }}>Photo coming soon</div>
                  <div style={{ fontSize: 13, color: '#555', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>{item.label}</div>
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.65))', padding: '24px 16px 14px' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: '0.5px' }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 22 }}>
        <button onClick={prev} disabled={index === 0} style={{
          width: 40, height: 40, borderRadius: '50%', border: '1px solid #bbb',
          background: index === 0 ? '#e8e4e0' : '#ccc',
          color: index === 0 ? '#aaa' : '#333',
          fontSize: 20, cursor: index === 0 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>

        {Array.from({ length: max + 1 }).map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} style={{
            width: i === index ? 24 : 8, minWidth: i === index ? 24 : 8,
            height: 8, borderRadius: 4, border: 'none',
            background: i === index ? C.red : '#bbb',
            cursor: 'pointer', transition: 'all 0.3s', padding: 0,
          }} />
        ))}

        <button onClick={next} disabled={index === max} style={{
          width: 40, height: 40, borderRadius: '50%', border: '1px solid #bbb',
          background: index === max ? '#e8e4e0' : '#ccc',
          color: index === max ? '#aaa' : '#333',
          fontSize: 20, cursor: index === max ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>
      </div>

      {/* Project name cards */}
      <div style={{ maxWidth: 1200, margin: '40px auto 0', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: 10 }}>
          {PROJECTS.map((p) => (
            <div key={p.name} style={{ background: '#e0ddd9', border: '1px solid #ccc', borderRadius: 3, padding: 16, borderLeft: `3px solid ${C.red}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#888', marginBottom: 6 }}>{p.cat}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, color: '#1e1e1e', lineHeight: 1.3 }}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
