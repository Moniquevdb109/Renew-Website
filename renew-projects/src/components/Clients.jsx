import { useState } from 'react';
import { C, scrollTo } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

const CLIENTS = [
  'Smith Select Properties',
  'Motus Corp – Renault Pinetown',
  'Property Diagnostic Consulting',
  'Bell Equipment SA (BECSA)',
  'Richards Bay Medical Centre',
  'The BON Hotel Waterfront',
  'Toyota Richards Bay',
  'Boardwalk Mall Richards Bay',
  'Premier Hotel The Richards',
  'Splendid Hotel Bayshore Inn',
  "Ocean's Rest",
  'Meerensee Mews',
];

const PREVIEW = 6;

export default function Clients() {
  const [expanded, setExpanded] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const shown = expanded ? CLIENTS : CLIENTS.slice(0, PREVIEW);

  return (
    <section id="clients" style={{ background: C.white, padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="References" title="Trusted By" />
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 12 }}>
          {shown.map((company) => (
            <div key={company} style={{
              background: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 3, padding: 20,
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: C.text, lineHeight: 1.3, marginBottom: 12 }}>{company}</div>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  marginTop: 'auto',
                  background: 'transparent',
                  border: `1px solid ${C.red}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: C.red,
                  padding: '8px 12px',
                  width: '100%',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = C.red; e.target.style.color = '#fff'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = C.red; }}
              >
                Request Contact Details
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button onClick={() => setExpanded(e => !e)} style={{
            background: 'transparent', border: `1px solid ${C.borderDark}`, cursor: 'pointer',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase',
            color: C.textMid, padding: '12px 28px', borderRadius: 2,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            {expanded ? 'Show Less ↑' : `View All ${CLIENTS.length} References ↓`}
          </button>
        </div>
      </div>
    </section>
  );
}
