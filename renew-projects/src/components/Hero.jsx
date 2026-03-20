import { C, scrollTo } from '../App';
import { useBreakpoint } from '../hooks/useWindowSize';

function HeroBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
      <svg style={{ position: 'absolute', right: '-8%', top: '5%', width: '52%', height: '85%', opacity: 0.08 }} viewBox="0 0 400 320" fill="none">
        <polygon points="20,300 200,20 380,300" fill="none" stroke="#1e1e1e" strokeWidth="2" />
        <polygon points="60,300 200,60 340,300" fill="none" stroke="#1e1e1e" strokeWidth="2" />
        <polygon points="100,300 200,100 300,300" fill="none" stroke="#1e1e1e" strokeWidth="2" />
        <rect x="185" y="220" width="30" height="80" fill="#1e1e1e" />
      </svg>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: 'linear-gradient(to left, rgba(192,57,43,0.05), transparent)' }} />
    </div>
  );
}

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const isMob = isMobile;
  const isTab = isTablet;

  const paddingTop = isMob ? 100 : isTab ? 110 : 120;
  const paddingH = isMob ? '1.25rem' : '2rem';

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: C.bgDark }}>
      <HeroBackground />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: `${paddingTop}px ${paddingH} 100px`, width: '100%' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: isMob ? 20 : 28 }}>
          <div style={{ width: 32, height: 2, background: C.red }} />
          <span style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: C.red, fontWeight: 700 }}>
            Richards Bay, KZN · Est. 1988
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
          fontSize: isMob ? 72 : isTab ? 88 : 'clamp(60px, 9vw, 108px)',
          lineHeight: 0.88, marginBottom: 16, letterSpacing: '-1px',
        }}>
          <span style={{ color: '#1a1a1a' }}>RENEW</span><br />
          <span style={{ color: C.red }}>PROJECTS</span>
        </h1>

        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: isMob ? 13 : 16, letterSpacing: '5px', textTransform: 'uppercase', color: '#3a3a3a', marginBottom: isMob ? 24 : 36 }}>
          Industrial · Commercial · Residential
        </p>

        <p style={{ fontSize: isMob ? 15 : 17, color: '#2a2a2a', maxWidth: 500, lineHeight: 1.75, marginBottom: isMob ? 32 : 44 }}>
          KZN's leading roof maintenance and paint contracting company. Motivated by quality, driven by trust.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: isMob ? 48 : 64 }}>
          <button onClick={() => scrollTo('contact')} style={{
            background: C.red, border: 'none', cursor: 'pointer',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 13, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#fff', padding: isMob ? '14px 24px' : '16px 36px', borderRadius: 2,
            width: isMob ? '100%' : 'auto',
          }}>Get a Free Quote</button>
          <button onClick={() => scrollTo('services')} style={{
            background: 'transparent', border: '1px solid #888', cursor: 'pointer',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
            fontSize: 13, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#2a2a2a', padding: isMob ? '14px 24px' : '16px 36px', borderRadius: 2,
            width: isMob ? '100%' : 'auto',
          }}>Our Services</button>
        </div>

        {/* Stats — bigger label so they're always readable */}
        <div style={{ display: 'flex', gap: isMob ? 32 : 56, flexWrap: 'wrap', paddingBottom: 8 }}>
          {[['35+', 'Years Experience'], ['12+', 'Reference Clients'], ['4', 'Approved Paint Brands']].map(([num, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: isMob ? 40 : 52, color: '#1a1a1a', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMob ? 13 : 14, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#555' }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
