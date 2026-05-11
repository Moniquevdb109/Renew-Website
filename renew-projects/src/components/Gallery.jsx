import { useState, useRef } from 'react';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

// ─── Waterproofing ───────────────────────────────────────────────────────────
import wp_before1 from '../assets/gallery/Waterproofing/wp-before1.jpeg';
import wp_before2 from '../assets/gallery/Waterproofing/wp-before2.jpeg';
import wp_during1 from '../assets/gallery/Waterproofing/wp-during1.jpeg';
import wp_during2 from '../assets/gallery/Waterproofing/wp-during2.jpeg';
import wp_during3 from '../assets/gallery/Waterproofing/wp-during3.jpeg';
import wp_during4 from '../assets/gallery/Waterproofing/wp-during4.jpeg';
import wp_during5 from '../assets/gallery/Waterproofing/wp-during5.jpeg';
import wp_during6 from '../assets/gallery/Waterproofing/wp-during6.jpeg';
import wp_after1  from '../assets/gallery/Waterproofing/wp-after1.jpeg';
import wp_after2  from '../assets/gallery/Waterproofing/wp-after2.jpeg';
import wp_after3  from '../assets/gallery/Waterproofing/wp-after3.jpeg';
import wp_after4  from '../assets/gallery/Waterproofing/wp-after4.jpeg';
import wp_after5  from '../assets/gallery/Waterproofing/wp-after5.jpeg';
import wp_after6  from '../assets/gallery/Waterproofing/wp-after6.jpeg';
import wp_after7  from '../assets/gallery/Waterproofing/wp-after7.jpeg';
import wp_after8  from '../assets/gallery/Waterproofing/wp-after8.jpeg';

// ─── Complex Projects ────────────────────────────────────────────────────────
import cp_after  from '../assets/gallery/Complex Projects/complex-after.jpeg';
import cp_after1 from '../assets/gallery/Complex Projects/complex-after1.jpeg';
import cp_after2 from '../assets/gallery/Complex Projects/complex-after2.jpeg';
import cp_after3 from '../assets/gallery/Complex Projects/complex-after3.jpeg';
import cp_after4 from '../assets/gallery/Complex Projects/complex-after4.jpeg';
import cp_after5 from '../assets/gallery/Complex Projects/complex-after5.jpeg';

// ─── Warehouse Flooring ──────────────────────────────────────────────────────
import wf_before1 from '../assets/gallery/Warehouse Flooring/flooring-before1.jpg';
import wf_before2 from '../assets/gallery/Warehouse Flooring/flooring-before2.jpg';
import wf_during1 from '../assets/gallery/Warehouse Flooring/flooring-during1.jpg';
import wf_during2 from '../assets/gallery/Warehouse Flooring/flooring-during2.jpg';
import wf_after1  from '../assets/gallery/Warehouse Flooring/flooring-after1.jpg';
import wf_after2  from '../assets/gallery/Warehouse Flooring/flooring-after2.jpg';

// ─── Building ────────────────────────────────────────────────────────────────
import bld_before1 from '../assets/gallery/Building/warehouse-before1.jpg';
import bld_during1 from '../assets/gallery/Building/warehouse-during1.jpg';
import bld_after1  from '../assets/gallery/Building/warehouse-after1.jpg';
import bld_after2  from '../assets/gallery/Building/warehouse-after2.jpg';
import bld_after3  from '../assets/gallery/Building/warehouse-.after3jpg.jpg';
import bld_after4  from '../assets/gallery/Building/warehouse-after4.jpg';

// ─── Painting ────────────────────────────────────────────────────────────────
import pt_before1 from '../assets/gallery/Painting/buiders-before1.jpg';
import pt_before2 from '../assets/gallery/Painting/builders-before2.jpg';
import pt_after1  from '../assets/gallery/Painting/buiders-afrer1.jpg';
import pt_after2  from '../assets/gallery/Painting/builders-after2.jpg';


// ─── Paving ──────────────────────────────────────────────────────────────────
import pv_before1 from '../assets/gallery/Paving/paving-before1.jpg';
import pv_before2 from '../assets/gallery/Paving/paving-before2.jpg';
import pv_before3 from '../assets/gallery/Paving/paving-before3.jpg';
import pv_during1 from '../assets/gallery/Paving/paving-during1.jpg';
import pv_after1  from '../assets/gallery/Paving/paving-after1.jpg';
import pv_after2  from '../assets/gallery/Paving/paving-after2.jpg';
import pv_after3  from '../assets/gallery/Paving/paving-after3.jpg';
import pv_after4  from '../assets/gallery/Paving/paving-after4.jpg';

// ─── Renovations ─────────────────────────────────────────────────────────────
import rn_before1 from '../assets/gallery/Renovations/reno-before1.jpg';
import rn_before2 from '../assets/gallery/Renovations/reno-before2.jpg';
import rn_before3 from '../assets/gallery/Renovations/reno-before3.jpg';
import rn_before4 from '../assets/gallery/Renovations/reno-before4.jpg';
import rn_before5 from '../assets/gallery/Renovations/reno-before5.jpg';
import rn_before6 from '../assets/gallery/Renovations/reno-before6.jpg';
import rn_before7 from '../assets/gallery/Renovations/reno-before7.jpg';
import rn_during1 from '../assets/gallery/Renovations/reno-during1.jpg';
import rn_during2 from '../assets/gallery/Renovations/reno-during2.jpg';
import rn_after1  from '../assets/gallery/Renovations/reno-after1.jpg';
import rn_after2  from '../assets/gallery/Renovations/reno-after2.jpg';
import rn_after3  from '../assets/gallery/Renovations/reno-after3.jpg';
import rn_after4  from '../assets/gallery/Renovations/reno-after4.jpg';
import rn_after5  from '../assets/gallery/Renovations/reno-after5.jpg';
import rn_after6  from '../assets/gallery/Renovations/reno-after6.jpg';
import rn_after7  from '../assets/gallery/Renovations/reno-after7.jpg';
import rn_after8  from '../assets/gallery/Renovations/reno-after8.jpg';
import rn_after9  from '../assets/gallery/Renovations/reno-after9.jpg';
import rn_after10 from '../assets/gallery/Renovations/reno-after10.jpg';

const CATEGORIES = [
  {
    id: 'waterproofing', label: 'Waterproofing',
    images: [
      { src: wp_before1, stage: 'Before' }, { src: wp_before2, stage: 'Before' },
      { src: wp_during1, stage: 'During' }, { src: wp_during2, stage: 'During' }, { src: wp_during3, stage: 'During' },
      { src: wp_during4, stage: 'During' }, { src: wp_during5, stage: 'During' }, { src: wp_during6, stage: 'During' },
      { src: wp_after1, stage: 'After' }, { src: wp_after2, stage: 'After' }, { src: wp_after3, stage: 'After' },
      { src: wp_after4, stage: 'After' }, { src: wp_after5, stage: 'After' }, { src: wp_after6, stage: 'After' },
      { src: wp_after7, stage: 'After' }, { src: wp_after8, stage: 'After' },
    ],
  },
  {
    id: 'complex-projects', label: 'Complex Projects',
    images: [
      { src: cp_after, stage: 'After' }, { src: cp_after1, stage: 'After' }, { src: cp_after2, stage: 'After' },
      { src: cp_after3, stage: 'After' }, { src: cp_after4, stage: 'After' }, { src: cp_after5, stage: 'After' },
    ],
  },
  {
    id: 'renovations', label: 'Renovations',
    images: [
      { src: rn_before1, stage: 'Before' }, { src: rn_before2, stage: 'Before' }, { src: rn_before3, stage: 'Before' },
      { src: rn_before4, stage: 'Before' }, { src: rn_before5, stage: 'Before' }, { src: rn_before6, stage: 'Before' },
      { src: rn_before7, stage: 'Before' }, { src: rn_during1, stage: 'During' }, { src: rn_during2, stage: 'During' },
      { src: rn_after1, stage: 'After' }, { src: rn_after2, stage: 'After' }, { src: rn_after3, stage: 'After' },
      { src: rn_after4, stage: 'After' }, { src: rn_after5, stage: 'After' }, { src: rn_after6, stage: 'After' },
      { src: rn_after7, stage: 'After' }, { src: rn_after8, stage: 'After' }, { src: rn_after9, stage: 'After' },
      { src: rn_after10, stage: 'After' },
    ],
  },
  {
    id: 'paving', label: 'Paving',
    images: [
      { src: pv_before1, stage: 'Before' }, { src: pv_before2, stage: 'Before' }, { src: pv_before3, stage: 'Before' },
      { src: pv_during1, stage: 'During' },
      { src: pv_after1, stage: 'After' }, { src: pv_after2, stage: 'After' }, { src: pv_after3, stage: 'After' }, { src: pv_after4, stage: 'After' },
    ],
  },
  {
    id: 'painting', label: 'Painting',
    images: [
      { src: pt_before1, stage: 'Before' }, { src: pt_before2, stage: 'Before' },
      { src: pt_after1, stage: 'After' }, { src: pt_after2, stage: 'After' },
    ],
  },
  {
    id: 'warehouse-flooring', label: 'Warehouse Flooring',
    images: [
      { src: wf_before1, stage: 'Before' }, { src: wf_before2, stage: 'Before' },
      { src: wf_during1, stage: 'During' }, { src: wf_during2, stage: 'During' },
      { src: wf_after1, stage: 'After' }, { src: wf_after2, stage: 'After' },
    ],
  },
  {
    id: 'building', label: 'Building',
    images: [
      { src: bld_before1, stage: 'Before' }, { src: bld_during1, stage: 'During' },
      { src: bld_after1, stage: 'After' }, { src: bld_after2, stage: 'After' },
      { src: bld_after3, stage: 'After' }, { src: bld_after4, stage: 'After' },
    ],
  },
];

const STAGE_COLOURS = {
  Before: { bg: '#2a2a2a', text: '#bbb' },
  During: { bg: '#7a4010', text: '#f5deb3' },
  After:  { bg: '#b0291e', text: '#fff' },
};

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const img = images[idx];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={e => { e.stopPropagation(); setIdx(i => Math.max(0, i - 1)); }} disabled={idx === 0}
        style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: idx === 0 ? 'default' : 'pointer', opacity: idx === 0 ? 0.2 : 1 }}>‹</button>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}>
        <img src={img.src} alt={img.stage} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: 3 }} />
        <div style={{ position: 'absolute', top: 12, left: 12, background: STAGE_COLOURS[img.stage].bg, color: STAGE_COLOURS[img.stage].text, fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2 }}>{img.stage}</div>
        <div style={{ textAlign: 'center', color: '#777', fontSize: 12, marginTop: 8 }}>{idx + 1} / {images.length}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); setIdx(i => Math.min(images.length - 1, i + 1)); }} disabled={idx === images.length - 1}
        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: idx === images.length - 1 ? 'default' : 'pointer', opacity: idx === images.length - 1 ? 0.2 : 1 }}>›</button>
      <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: 20, width: 40, height: 40, borderRadius: '50%', cursor: 'pointer' }}>✕</button>
    </div>
  );
}

// ─── Carousel ────────────────────────────────────────────────────────────────
function Carousel({ images, onOpen }) {
  const [index, setIndex] = useState(0);
  const { isMobile, isTablet, width } = useBreakpoint();

  const CARD_W = isMobile ? Math.min(width - 48, 300) : isTablet ? 320 : 360;
  const GAP = 16;
  const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;
  const max = Math.max(0, images.length - VISIBLE);
  const offset = isMobile ? 24 : 40;

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(max, i + 1));

  return (
    <div>
      {/* Sliding track */}
      <div style={{ overflow: 'hidden', width: '100%', padding: '4px 0 8px' }}>
        <div style={{
          display: 'flex', gap: GAP,
          transform: `translateX(${offset - index * (CARD_W + GAP)}px)`,
          transition: 'transform 0.45s cubic-bezier(.4,0,.2,1)',
          width: 'max-content',
        }}>
          {images.map((item, i) => (
            <div
              key={i}
              onClick={() => onOpen(i)}
              style={{
                width: CARD_W, minWidth: CARD_W,
                height: isMobile ? 220 : 260,
                borderRadius: 4, overflow: 'hidden',
                position: 'relative', flexShrink: 0,
                cursor: 'pointer', border: '1px solid #2a2a2a',
                opacity: i >= index && i < index + VISIBLE ? 1 : 0.3,
                transition: 'opacity 0.3s',
              }}
            >
              <img
                src={item.src}
                alt={item.stage}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: 10, left: 10, background: STAGE_COLOURS[item.stage].bg, color: STAGE_COLOURS[item.stage].text, fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 2 }}>
                {item.stage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 20 }}>
        <button onClick={prev} disabled={index === 0} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #555', background: index === 0 ? 'transparent' : '#333', color: index === 0 ? '#555' : '#ddd', fontSize: 20, cursor: index === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>

        {isMobile ? (
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: '#888', letterSpacing: '1px' }}>
            {index + 1} / {max + 1}
          </span>
        ) : (
          Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{ width: i === index ? 24 : 8, minWidth: i === index ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === index ? '#b0291e' : '#555', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))
        )}

        <button onClick={next} disabled={index === max} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #555', background: index === max ? 'transparent' : '#333', color: index === max ? '#555' : '#ddd', fontSize: 20, cursor: index === max ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCat, setActiveCat] = useState('waterproofing');
  const [lightbox, setLightbox] = useState(null);
  const category = CATEGORIES.find(c => c.id === activeCat);

  const handleCatChange = (id) => {
    setActiveCat(id);
  };

  return (
    <section id="projects" style={{ background: C.bgDark, padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <SectionHeader label="Our Work" title="Project Gallery" dark={true} />

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => handleCatChange(cat.id)}
              style={{ padding: '8px 20px', borderRadius: 2, border: `1px solid ${activeCat === cat.id ? '#b0291e' : '#444'}`, background: activeCat === cat.id ? '#b0291e' : 'transparent', color: activeCat === cat.id ? '#fff' : '#999', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel — full width so cards can peek at edges */}
      <Carousel
        key={activeCat}
        images={category.images}
        onOpen={(i) => setLightbox({ images: category.images, index: i })}
      />

      {lightbox && (
        <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
