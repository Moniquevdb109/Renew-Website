import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { useBreakpoint } from '../hooks/useWindowSize';

const VISION = [
  'To be the first name proposed when clients need a contractor for new projects, redecoration, or repair work.',
  'To be synonymous with quality work and fair prices.',
  'For clients to have a pleasurable experience from first phone call until completion.',
  'To have suppliers recommend our service, knowing we do justice to their products.',
  'To be the benchmark our competitors use when improving their own business.',
];

export default function About() {
  const { isMobile, isTablet } = useBreakpoint();
  const isCompact = isMobile || isTablet;

  return (
    <section id="about" style={{ background: C.bg, padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
        gap: isCompact ? 48 : 80,
        alignItems: 'start',
      }}>
        <div>
          <SectionHeader label="Who We Are" title="About Renew Projects" />
          <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85, marginBottom: 24 }}>
            Renew Projects is a roof maintenance and paint contracting company based in Richards Bay, KZN. We are a passionate team motivated by the desire to be the leading, preferred contractor of Zululand.
          </p>
          <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85, marginBottom: 36 }}>
            With decades of experience and a commitment to using the right products for every job, we guarantee long-term savings in both time and money.
          </p>
          <div style={{ borderLeft: `3px solid ${C.red}`, paddingLeft: 20 }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 19 : 22, fontStyle: 'italic', color: C.text, lineHeight: 1.4, marginBottom: 8 }}>
              "Assuring you of our best attention at all times!"
            </p>
            <p style={{ fontSize: 14, color: C.textMuted }}>— Charl van den Berg</p>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '3px', textTransform: 'uppercase', color: C.red, marginBottom: 24 }}>
            Our Vision
          </h4>
          {VISION.map((v, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 6, height: 6, minWidth: 6, borderRadius: '50%', background: C.red, marginTop: 8 }} />
              <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
