import { useState } from 'react';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

// ─── Waterproofing ───────────────────────────────────────────────────────────
import wp_before1 from '../assets/gallery/waterproofing/before1.jpg';
import wp_before2 from '../assets/gallery/waterproofing/before2.jpg';
import wp_before3 from '../assets/gallery/waterproofing/before3.jpg';
import wp_during1 from '../assets/gallery/waterproofing/during1.jpg';
import wp_during2 from '../assets/gallery/waterproofing/during2.jpg';
import wp_during3 from '../assets/gallery/waterproofing/during3.jpg';
import wp_during4 from '../assets/gallery/waterproofing/during4.jpg';
import wp_during5 from '../assets/gallery/waterproofing/during5.jpg';
import wp_during6 from '../assets/gallery/waterproofing/during6.jpg';
import wp_after1  from '../assets/gallery/waterproofing/after1.jpg';
import wp_after2  from '../assets/gallery/waterproofing/after2.jpg';
import wp_after3  from '../assets/gallery/waterproofing/after3.jpg';
import wp_after4  from '../assets/gallery/waterproofing/after4.jpg';
import wp_after5  from '../assets/gallery/waterproofing/after5.jpg';

// ─── Warehouse Flooring ──────────────────────────────────────────────────────
import wf_before1 from '../assets/gallery/warehouse-flooring/before1.jpg';
import wf_before2 from '../assets/gallery/warehouse-flooring/before2.jpg';
import wf_during1 from '../assets/gallery/warehouse-flooring/during1.jpg';
import wf_during2 from '../assets/gallery/warehouse-flooring/during2.jpg';
import wf_after1  from '../assets/gallery/warehouse-flooring/after1.jpg';
import wf_after2  from '../assets/gallery/warehouse-flooring/after2.jpg';

// ─── Building Projects ───────────────────────────────────────────────────────
import bp_before1 from '../assets/gallery/building-projects/before1.jpg';
import bp_during1 from '../assets/gallery/building-projects/during1.jpg';
import bp_after1  from '../assets/gallery/building-projects/after1.jpg';
import bp_after2  from '../assets/gallery/building-projects/after2.jpg';
import bp_after3  from '../assets/gallery/building-projects/after3.jpg';

// ─── Tiling ──────────────────────────────────────────────────────────────────
import tiling_before1 from '../assets/gallery/tiling/before1.jpg';

const CATEGORIES = [
  {
    id: 'waterproofing',
    label: 'Waterproofing',
    images: [
      { src: wp_before1, stage: 'Before' },
      { src: wp_before2, stage: 'Before' },
      { src: wp_before3, stage: 'Before' },
      { src: wp_during1, stage: 'During' },
      { src: wp_during2, stage: 'During' },
      { src: wp_during3, stage: 'During' },
      { src: wp_during4, stage: 'During' },
      { src: wp_during5, stage: 'During' },
      { src: wp_during6, stage: 'During' },
      { src: wp_after1,  stage: 'After' },
      { src: wp_after2,  stage: 'After' },
      { src: wp_after3,  stage: 'After' },
      { src: wp_after4,  stage: 'After' },
      { src: wp_after5,  stage: 'After' },
    ],
  },
  {
    id: 'warehouse-flooring',
    label: 'Warehouse Flooring',
    images: [
      { src: wf_before1, stage: 'Before' },
      { src: wf_before2, stage: 'Before' },
      { src: wf_during1, stage: 'During' },
      { src: wf_during2, stage: 'During' },
      { src: wf_after1,  stage: 'After' },
      { src: wf_after2,  stage: 'After' },
    ],
  },
  {
    id: 'building-projects',
    label: 'Building Projects',
    images: [
      { src: bp_before1, stage: 'Before' },
      { src: bp_during1, stage: 'During' },
      { src: bp_after1,  stage: 'After' },
      { src: bp_after2,  stage: 'After' },
      { src: bp_after3,  stage: 'After' },
    ],
  },
  {
    id: 'tiling',
    label: 'Tiling',
    images: [
      { src: tiling_before1, stage: 'Before' },
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
            <button key={cat.id} onClick={() => { setActiveCat(cat.id); }}
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
