import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

const SERVICES = [
  { icon: '🏠', title: 'Roof Maintenance', desc: 'Cement tiled, corrugated, flat roof sheets, asbestos and all major roof types serviced and repaired.' },
  { icon: '💧', title: 'Waterproofing', desc: 'Flat roofs, roof sheeting, cladding and tiled roofs. Full damp proofing and waterproofing systems.' },
  { icon: '🏗️', title: 'Paving & Tiling', desc: 'Supply and installation of residential and commercial paving and tiling — driveways, walkways, parking areas, bathrooms, kitchens, patios and more.' },
  { icon: '🔩', title: 'Steel Structures', desc: 'Design and erection of steel structures for industrial, commercial and residential use — carports, canopies, warehouses and custom fabrication.' },
  { icon: '🪟', title: 'Blinds', desc: 'Supply and fitting of quality blinds for residential and commercial properties — roller, venetian, vertical and blackout options available.' },
  { icon: '🔨', title: 'Building Renovations', desc: 'Structural crack repairs, spalling & plaster repairs, expansion joints, construction joints and polyurethane sealing.' },
  { icon: '🖌️', title: 'Professional Painting', desc: 'Industrial, commercial and residential painting — walls, ceilings, soffits, metal doors, timber, road markings and floor coatings.' },
  { icon: '⚠️', title: 'Asbestos Roof Removal', desc: 'Safe and fully compliant removal of asbestos roofing material by experienced professionals following all safety protocols.' },
];

export { SERVICES };

export default function Services() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <section id="services" style={{ background: C.white, padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="What We Do" title="Our Services" />
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16, marginBottom: 24 }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{
              background: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 4, padding: 'clamp(20px, 4vw, 32px) clamp(18px, 4vw, 28px)',
              borderTop: `3px solid ${C.red}`,
            }}>
              <div style={{ fontSize: 26, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: C.text, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '18px 22px', background: C.redLight, border: `1px solid #f0d5d2`, borderLeft: `4px solid ${C.red}`, borderRadius: 2 }}>
          <p style={{ fontSize: 14, color: C.redDeep, lineHeight: 1.7 }}>
            <strong>Approved Applicators</strong> for Prominent Paints, Promac Paints, Pekay, and Plascon ·
            Reg: 1988/029434/23 · VAT: 4710133176
          </p>
        </div>
      </div>
    </section>
  );
}
