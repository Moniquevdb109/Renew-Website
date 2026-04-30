import { useState, useRef } from 'react';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

// ─── Waterproofing ────────────────────────────────────────────────────────────
import wp_before1 from '../assets/gallery/Waterproofing/wp-before1.jpg';
import wp_before2 from '../assets/gallery/Waterproofing/wp-before2.jpg';
import wp_before3 from '../assets/gallery/Waterproofing/wp-before3.jpg';
import wp_during1 from '../assets/gallery/Waterproofing/wp-during1.jpg';
import wp_during2 from '../assets/gallery/Waterproofing/wp-during2.jpg';
import wp_during3 from '../assets/gallery/Waterproofing/wp-during3.jpg';
import wp_during4 from '../assets/gallery/Waterproofing/wp-during4.jpg';
import wp_during5 from '../assets/gallery/Waterproofing/wp-during5.jpg';
import wp_during6 from '../assets/gallery/Waterproofing/wp-during6.jpg';
import wp_after1  from '../assets/gallery/Waterproofing/wp-after1.jpg';
import wp_after2  from '../assets/gallery/Waterproofing/wp-after2.jpg';
import wp_after3  from '../assets/gallery/Waterproofing/wp-after3.jpg';
import wp_after4  from '../assets/gallery/Waterproofing/wp-after4.jpg';
import wp_after5  from '../assets/gallery/Waterproofing/wp-after5.jpg';

// ─── Renovations ─────────────────────────────────────────────────────────────
import reno_before1 from '../assets/gallery/Renovations/reno-before1.jpg';
import reno_before2 from '../assets/gallery/Renovations/reno-before2.jpg';
import reno_before3 from '../assets/gallery/Renovations/reno-before3.jpg';
import reno_before4 from '../assets/gallery/Renovations/reno-before4.jpg';
import reno_before5 from '../assets/gallery/Renovations/reno-before5.jpg';
import reno_before6 from '../assets/gallery/Renovations/reno-before6.jpg';
import reno_before7 from '../assets/gallery/Renovations/reno-before7.jpg';
import reno_during1 from '../assets/gallery/Renovations/reno-during1.jpg';
import reno_during2 from '../assets/gallery/Renovations/reno-during2.jpg';
import reno_after1  from '../assets/gallery/Renovations/reno-after1.jpg';
import reno_after2  from '../assets/gallery/Renovations/reno-after2.jpg';
import reno_after3  from '../assets/gallery/Renovations/reno-after3.jpg';
import reno_after4  from '../assets/gallery/Renovations/reno-after4.jpg';
import reno_after5  from '../assets/gallery/Renovations/reno-after5.jpg';
import reno_after6  from '../assets/gallery/Renovations/reno-after6.jpg';
import reno_after7  from '../assets/gallery/Renovations/reno-after7.jpg';
import reno_after8  from '../assets/gallery/Renovations/reno-after8.jpg';
import reno_after9  from '../assets/gallery/Renovations/reno-after9.jpg';
import reno_after10 from '../assets/gallery/Renovations/reno-after10.jpg';

// ─── Paving ───────────────────────────────────────────────────────────────────
import pav_before1 from '../assets/gallery/Paving/paving-before1.jpg';
import pav_before2 from '../assets/gallery/Paving/paving-before2.jpg';
import pav_before3 from '../assets/gallery/Paving/paving-before3.jpg';
import pav_during1 from '../assets/gallery/Paving/paving-during1.jpg';
import pav_after1  from '../assets/gallery/Paving/paving-after1.jpg';
import pav_after2  from '../assets/gallery/Paving/paving-after2.jpg';
import pav_after3  from '../assets/gallery/Paving/paving-after3.jpg';
import pav_after4  from '../assets/gallery/Paving/paving-after4.jpg';

// ─── Painting ─────────────────────────────────────────────────────────────────
import paint_before1 from '../assets/gallery/Painting/buiders-before1.jpg';
import paint_before2 from '../assets/gallery/Painting/builders-before2.jpg';
import paint_after1  from '../assets/gallery/Painting/buiders-afrer1.jpg';
import paint_after2  from '../assets/gallery/Painting/builders-after2.jpg';
import paint_after3  from '../assets/gallery/Painting/school-after.jpg';
import paint_after4  from '../assets/gallery/Painting/school-after1.jpg';
import paint_after5  from '../assets/gallery/Painting/school-after2.jpg';

// ─── Building ─────────────────────────────────────────────────────────────────
import build_before1 from '../assets/gallery/Building/warehouse-before1.jpg';
import build_during1 from '../assets/gallery/Building/warehouse-during1.jpg';
import build_after1  from '../assets/gallery/Building/warehouse-after1.jpg';
import build_after2  from '../assets/gallery/Building/warehouse-after2.jpg';
import build_after3  from '../assets/gallery/Building/warehouse-.after3jpg.jpg';
import build_after4  from '../assets/gallery/Building/warehouse-after4.jpg';

// ─── Warehouse Flooring ───────────────────────────────────────────────────────
import floor_before1 from '../assets/gallery/Warehouse Flooring/flooring-before1.jpg';
import floor_before2 from '../assets/gallery/Warehouse Flooring/flooring-before2.jpg';
import floor_during1 from '../assets/gallery/Warehouse Flooring/flooring-during1.jpg';
import floor_during2 from '../assets/gallery/Warehouse Flooring/flooring-during2.jpg';
import floor_after1  from '../assets/gallery/Warehouse Flooring/flooring-after1.jpg';
import floor_after2  from '../assets/gallery/Warehouse Flooring/flooring-after2.jpg';

// ─── Category definitions ────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'waterproofing', label: 'Waterproofing',
    images: [
      { src: wp_before1, stage: 'Before' }, { src: wp_before2, stage: 'Before' }, { src: wp_before3, stage: 'Before' },
      { src: wp_during1, stage: 'During' }, { src: wp_during2, stage: 'During' }, { src: wp_during3, stage: 'During' },
      { src: wp_during4, stage: 'During' }, { src: wp_during5, stage: 'During' }, { src: wp_during6, stage: 'During' },
      { src: wp_after1, stage: 'After' }, { src: wp_after2, stage: 'After' }, { src: wp_after3, stage: 'After' },
      { src: wp_after4, stage: 'After' }, { src: wp_after5, stage: 'After' },
    ],
  },
  {
    id: 'renovations', label: 'Renovations',
    images: [
      { src: reno_before1, stage: 'Before' }, { src: reno_before2, stage: 'Before' }, { src: reno_before3, stage: 'Before' },
      { src: reno_before4, stage: 'Before' }, { src: reno_before5, stage: 'Before' }, { src: reno_before6, stage: 'Before' },
      { src: reno_before7, stage: 'Before' },
      { src: reno_during1, stage: 'During' }, { src: reno_during2, stage: 'During' },
      { src: reno_after1, stage: 'After' }, { src: reno_after2, stage: 'After' }, { src: reno_after3, stage: 'After' },
      { src: reno_after4, stage: 'After' }, { src: reno_after5, stage: 'After' }, { src: reno_after6, stage: 'After' },
      { src: reno_after7, stage: 'After' }, { src: reno_after8, stage: 'After' }, { src: reno_after9, stage: 'After' },
      { src: reno_after10, stage: 'After' },
    ],
  },
  {
    id: 'paving', label: 'Paving',
    images: [
      { src: pav_before1, stage: 'Before' }, { src: pav_before2, stage: 'Before' }, { src: pav_before3, stage: 'Before' },
      { src: pav_during1, stage: 'During' },
      { src: pav_after1, stage: 'After' }, { src: pav_after2, stage: 'After' }, { src: pav_after3, stage: 'After' }, { src: pav_after4, stage: 'After' },
    ],
  },
  {
    id: 'painting', label: 'Painting',
    images: [
      { src: paint_before1, stage: 'Before' }, { src: paint_before2, stage: 'Before' },
      { src: paint_after1, stage: 'After' }, { src: paint_after2, stage: 'After' }, { src: paint_after3, stage: 'After' },
      { src: paint_after4, stage: 'After' }, { src: paint_after5, stage: 'After' },
    ],
  },
  {
    id: 'building', label: 'Building',
    images: [
      { src: build_before1, stage: 'Before' },
      { src: build_during1, stage: 'During' },
      { src: build_after1, stage: 'After' }, { src: build_after2, stage: 'After' },
      { src: build_after3, stage: 'After' }, { src: build_after4, stage: 'After' },
    ],
  },
  {
    id: 'flooring', label: 'Warehouse Flooring',
    images: [
      { src: floor_before1, stage: 'Before' }, { src: floor_before2, stage: 'Before' },
      { src: floor_during1, stage: 'During' }, { src: floor_during2, stage: 'During' },
      { src: floor_after1, stage: 'After' }, { src: floor_after2, stage: 'After' },
    ],
  },
];

const STAGE = {
  Before: { bg: '#2e2e2e', text: '#bbb' },
  During: { bg: '#7a3e0e', text: '#f5deb3' },
  After:  { bg: '#b0291e', text: '#fff' },
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const img = images[idx];
  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(images.length - 1, i + 1));

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={e => { e.stopPropagation(); prev(); }} disabled={idx === 0}
        style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 30, width: 50, height: 50, borderRadius: '50%', cursor: idx === 0 ? 'default' : 'pointer', opacity: idx === 0 ? 0.25 : 1 }}>‹</button>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90vw', maxHeight: '88vh' }}>
        <img src={img.src} alt={img.stage} style={{ maxWidth: '90vw', maxHeight: '82vh', objectFit: 'contain', display: 'block', borderRadius: 4 }} />
        <div style={{ position: 'absolute', top: 10, left: 10, background: STAGE[img.stage].bg, color: STAGE[img.stage].text, fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2 }}>{img.stage}</div>
        <div style={{ textAlign: 'center', color: '#777', fontSize: 12, marginTop: 8 }}>{idx + 1} / {images.length}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); next(); }} disabled={idx === images.length - 1}
        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 30, width: 50, height: 50, borderRadius: '50%', cursor: idx === images.length - 1 ? 'default' : 'pointer', opacity: idx === images.length - 1 ? 0.25 : 1 }}>›</button>
      <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 18, width: 38, height: 38, borderRadius: '50%', cursor: 'pointer' }}>✕</button>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCat, setActiveCat] = useState('waterproofing');
  const [lightbox, setLightbox] = useState(null);
  const { isMobile } = useBreakpoint();
  const scrollRef = useRef(null);

  const category = CATEGORIES.find(c => c.id === activeCat);
  const CARD_W = isMobile ? 220 : 300;
  const CARD_H = isMobile ? 160 : 210;

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * (CARD_W + 12) * 2, behavior: 'smooth' });
    }
  };

  const btnStyle = (disabled) => ({
    width: 40, height: 40, borderRadius: '50%', border: '1px solid #555',
    background: disabled ? 'transparent' : '#333',
    color: disabled ? '#555' : '#ccc',
    fontSize: 22, cursor: disabled ? 'default' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, transition: 'all 0.2s',
  });

  return (
    <section id="projects" style={{ background: C.bgDark, padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <SectionHeader label="Our Work" title="Project Gallery" dark={true} />

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => { setActiveCat(cat.id); if (scrollRef.current) scrollRef.current.scrollLeft = 0; }}
              style={{ padding: '7px 18px', borderRadius: 2, border: `1px solid ${activeCat === cat.id ? '#b0291e' : '#555'}`, background: activeCat === cat.id ? '#b0291e' : 'transparent', color: activeCat === cat.id ? '#fff' : '#aaa', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel row */}
      <div style={{ position: 'relative' }}>
        {/* Scroll buttons */}
        <div style={{ position: 'absolute', left: 'clamp(4px, 2vw, 20px)', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
          <button style={btnStyle(false)} onClick={() => scroll(-1)}>‹</button>
        </div>
        <div style={{ position: 'absolute', right: 'clamp(4px, 2vw, 20px)', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
          <button style={btnStyle(false)} onClick={() => scroll(1)}>›</button>
        </div>

        {/* Scrollable track */}
        <div ref={scrollRef} style={{
          display: 'flex', gap: 12, overflowX: 'auto', overflowY: 'hidden',
          scrollSnapType: 'x mandatory', scrollBehavior: 'smooth',
          padding: `4px clamp(52px, 6vw, 72px)`,
          scrollbarWidth: 'none', msOverflowStyle: 'none',
        }}>
          {category.images.map((img, i) => (
            <div key={`${activeCat}-${i}`}
              onClick={() => setLightbox({ images: category.images, index: i })}
              style={{ flexShrink: 0, width: CARD_W, height: CARD_H, borderRadius: 3, overflow: 'hidden', position: 'relative', cursor: 'pointer', scrollSnapAlign: 'start', border: '1px solid #2a2a2a' }}>
              <img src={img.src} alt={`${category.label} ${img.stage} ${i + 1}`} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', top: 8, left: 8, background: STAGE[img.stage].bg, color: STAGE[img.stage].text, fontSize: 9, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2 }}>
                {img.stage}
              </div>
            </div>
          ))}
        </div>

        {/* Hide scrollbar in webkit */}
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      </div>

      {/* Image count indicator */}
      <div style={{ textAlign: 'center', marginTop: 14, color: '#555', fontSize: 12, letterSpacing: '1px' }}>
        {category.images.length} photos · scroll or use arrows
      </div>

      {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
    </section>
  );
}
