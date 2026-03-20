import RenewLogo from './shared/RenewLogo';
import { C } from '../App';
import { useBreakpoint } from '../hooks/useWindowSize';

export default function Footer() {
  const { isMobile } = useBreakpoint();
  return (
    <footer style={{ background: C.bgDark, borderTop: `1px solid ${C.borderDark}`, padding: 'clamp(28px, 5vw, 40px) clamp(1.25rem, 4vw, 2rem)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <RenewLogo width={isMobile ? 130 : 160} darkBg={false} />
      </div>
      <p style={{ fontSize: 13, color: '#333', lineHeight: 1.6 }}>
        Amelcor CC t/a Renew Projects · Reg. 1988/029434/23 · VAT: 4710133176
      </p>
      <p style={{ fontSize: 12, color: '#555', marginTop: 6 }}>
        Industrial | Commercial | Residential · Richards Bay, KZN
      </p>
    </footer>
  );
}
