import { C } from '../../App';

export default function SectionHeader({ label, title, dark = false }) {
  return (
    <div style={{ marginBottom: 'clamp(36px, 5vw, 52px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 2, background: C.red }} />
        <span style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: C.red, fontWeight: 600 }}>
          {label}
        </span>
      </div>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(30px, 5vw, 54px)',
        letterSpacing: '-0.5px',
        lineHeight: 1,
        color: dark ? '#f0ece4' : C.text,
      }}>
        {title}
      </h2>
    </div>
  );
}
