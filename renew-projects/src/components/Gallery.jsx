import { useState } from 'react';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

// ─── Waterproofing ───────────────────────────────────────────────────────────
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
import pt_after3  from '../assets/gallery/Painting/school-after.jpg';
import pt_after4  from '../assets/gallery/Painting/school-after1.jpg';
import pt_after5  from '../assets/gallery/Painting/school-after2.jpg';

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
      { src: rn_before1, stage: 'Before' }, { src: rn_before2, stage: 'Before' }, { src: rn_before3, stage: 'Before' },
      { src: rn_before4, stage: 'Before' }, { src: rn_before5, stage: 'Before' }, { src: rn_before6, stage: 'Before' },
      { src: rn_before7, stage: 'Before' },
      { src: rn_during1, stage: 'During' }, { src: rn_during2, stage: 'During' },
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
      { src: pt_after1, stage: 'After' }, { src: pt_after2, stage: 'After' }, { src: pt_after3, stage: 'After' },
      { src: pt_after4, stage: 'After' }, { src: pt_after5, stage: 'After' },
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
      { src: bld_before1, stage: 'Before' },
      { src: bld_during1, stage: 'During' },
      { src: bld_after1, stage: 'After' }, { src: bld_after2, stage: 'After' },
      { src: bld_after3, stage: 'After' }, { src: bld_after4, stage: 'After' },
    ],
  },
];

const STAGE_COLOURS = {
  Before: { bg: '#3a3a3a', text: '#ccc' },
  During: { bg: '#7a4010', text: '#f5deb3' },
  After:  { bg: '#b0291e', text: '#fff' },
};

function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const img = images[idx];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={e => { e.stopPropagation(); setIdx(i => Math.max(0, i - 1)); }} disabled={idx === 0}
        style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: idx === 0 ? 'default' : 'pointer', opacity: idx === 0 ? 0.3 : 1 }}>‹</button>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}>
        <img src={img.src} alt={img.stage} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: 4 }} />
        <div style={{ position: 'absolute', top: 12, left: 12, background: STAGE_COLOURS[img.stage].bg, color: STAGE_COLOURS[img.stage].text, fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2 }}>{img.stage}</div>
        <div style={{ textAlign: 'center', color: '#aaa', fontSize: 12, marginTop: 8 }}>{idx + 1} / {images.length}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); setIdx(i => Math.min(images.length - 1, i + 1)); }} disabled={idx === images.length - 1}
        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: idx === images.length - 1 ? 'default' : 'pointer', opacity: idx === images.length - 1 ? 0.3 : 1 }}>›</button>
      <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 20, width: 40, height: 40, borderRadius: '50%', cursor: 'pointer' }}>✕</button>
    </div>
  );
}

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('waterproofing');
  const [lightbox, setLightbox] = useState(null);
  const { isMobile } = useBreakpoint();
  const category = CATEGORIES.find(c => c.id === activeCat);

  return (
    <section id="projects" style={{ background: C.bgDark, padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <SectionHeader label="Our Work" title="Project Gallery" dark={true} />

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveCat(cat.id)}
              style={{ padding: '8px 20px', borderRadius: 2, border: `1px solid ${activeCat === cat.id ? '#b0291e' : '#555'}`, background: activeCat === cat.id ? '#b0291e' : 'transparent', color: activeCat === cat.id ? '#fff' : '#aaa', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {category.images.map((img, i) => (
            <div key={i} onClick={() => setLightbox({ images: category.images, index: i })}
              style={{ position: 'relative', borderRadius: 3, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', border: '1px solid #333' }}>
              <img src={img.src} alt={`${category.label} ${img.stage} ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', top: 8, left: 8, background: STAGE_COLOURS[img.stage].bg, color: STAGE_COLOURS[img.stage].text, fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2 }}>
                {img.stage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
    </section>
  );
}
