import { useState, useEffect } from 'react';
import RenewLogo from './shared/RenewLogo';
import { C, NAV_LINKS, scrollTo, useScrollSpy } from '../App';
import { useBreakpoint } from '../hooks/useWindowSize';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();
  const { isMobile, isTablet } = useBreakpoint();
  const isCompact = isMobile || isTablet;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 1.5rem',
        background: scrolled || menuOpen ? 'rgba(244,242,239,0.97)' : 'transparent',
        borderBottom: scrolled || menuOpen ? `1px solid ${C.border}` : 'none',
        backdropFilter: scrolled || menuOpen ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: isCompact ? 64 : 76,
        }}>
          <div style={{ cursor: 'pointer' }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>
            <RenewLogo width={isCompact ? 130 : 170} darkBg={false} />
          </div>

          {/* Desktop links */}
          {!isCompact && (
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {NAV_LINKS.map(link => (
                <button key={link} onClick={() => handleNavClick(link.toLowerCase())} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  color: active === link ? C.red : C.textMid,
                  padding: '8px 14px',
                  borderBottom: active === link ? `2px solid ${C.red}` : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}>{link}</button>
              ))}
              <button onClick={() => handleNavClick('contact')} style={{
                marginLeft: 12, background: C.red, border: 'none', cursor: 'pointer',
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase',
                color: '#fff', padding: '10px 22px', borderRadius: 2,
              }}>Get a Quote</button>
            </div>
          )}

          {/* Hamburger button */}
          {isCompact && (
            <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, display: 'flex', flexDirection: 'column', gap: 5,
            }}>
              <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.red : C.text, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.red : C.text, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.red : C.text, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {isCompact && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(244,242,239,0.98)',
          borderBottom: menuOpen ? `1px solid ${C.border}` : 'none',
          backdropFilter: 'blur(8px)',
          maxHeight: menuOpen ? 420 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}>
          <div style={{ padding: '12px 1.5rem 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => handleNavClick(link.toLowerCase())} style={{
                background: 'none', border: 'none', borderBottom: `1px solid ${C.border}`,
                cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
                fontSize: 14, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
                color: active === link ? C.red : C.textMid,
                padding: '14px 0', textAlign: 'left',
              }}>{link}</button>
            ))}
            <button onClick={() => handleNavClick('contact')} style={{
              marginTop: 16, background: C.red, border: 'none', cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: 14, letterSpacing: '2px', textTransform: 'uppercase',
              color: '#fff', padding: '14px', borderRadius: 2,
            }}>Get a Quote</button>
          </div>
        </div>
      )}
    </>
  );
}
