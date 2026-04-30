import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { C } from '../App';
import SectionHeader from './shared/SectionHeader';
import { SERVICES } from './Services';
import { useBreakpoint } from '../hooks/useWindowSize';

const EMAILJS_SERVICE_ID  = 'service_w51miqv';
const EMAILJS_TEMPLATE_ID = 'template_tvtxxin';
const EMAILJS_PUBLIC_KEY  = 'nlE_THktJQsE5Tit1';

const CONTACT_ITEMS = [
  { label: 'Email', value: 'charl@renewprojects.co.za', icon: '✉' },
  { label: 'Phone', value: '082 572 5485', icon: '☎' },
  { label: 'Address', value: '52 Marlynhoek Street, Meerensee, Richards Bay, 3901', icon: '📍' },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const inputStyle = {
    width: '100%', background: C.white, border: `1px solid ${C.border}`,
    borderRadius: 2, padding: '12px 14px', fontSize: 14, color: C.text,
    fontFamily: "'Barlow', sans-serif", outline: 'none', boxSizing: 'border-box',
    marginBottom: 12, display: 'block',
  };

  const errorStyle = { fontSize: 12, color: C.red, marginTop: -8, marginBottom: 10, display: 'block' };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please tell us about your project.';
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus('submitting');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return (
    <div style={{ background: C.redLight, border: `1px solid #f0d5d2`, borderLeft: `4px solid ${C.red}`, borderRadius: 2, padding: 40, textAlign: 'center' }}>
      <div style={{ fontSize: 36, marginBottom: 14, color: C.red }}>✓</div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: C.redDeep, marginBottom: 8 }}>Message Sent!</div>
      <div style={{ fontSize: 14, color: C.redDeep }}>We'll be in touch shortly.</div>
    </div>
  );

  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: 'clamp(20px, 4vw, 32px)' }}>

      <input style={{ ...inputStyle, borderColor: errors.name ? C.red : C.border }} placeholder="Your Name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
      {errors.name && <span style={errorStyle}>{errors.name}</span>}

      <input style={{ ...inputStyle, borderColor: errors.email ? C.red : C.border }} placeholder="Email Address *" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      {errors.email && <span style={errorStyle}>{errors.email}</span>}

      <input style={inputStyle} placeholder="Phone Number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />

      <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
        <option value="">Select a Service</option>
        {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
      </select>

      <textarea style={{ ...inputStyle, minHeight: 96, resize: 'vertical', borderColor: errors.message ? C.red : C.border }} placeholder="Tell us about your project... *" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
      {errors.message && <span style={errorStyle}>{errors.message}</span>}

      {status === 'error' && (
        <div style={{ background: '#fff3f3', border: `1px solid #f5c6c6`, borderRadius: 2, padding: '10px 14px', fontSize: 13, color: '#c0392b', marginBottom: 12 }}>
          Something went wrong. Please try again or email us directly at <strong>charl@renewprojects.co.za</strong>.
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        style={{
          width: '100%', background: status === 'submitting' ? '#aaa' : C.red, border: 'none',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: 15, letterSpacing: '2.5px', textTransform: 'uppercase',
          color: '#fff', padding: 15, borderRadius: 2, transition: 'background 0.2s',
        }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </div>
  );
}

export default function Contact() {
  const { isMobile, isTablet } = useBreakpoint();
  const isCompact = isMobile || isTablet;

  return (
    <section id="contact" style={{ background: C.bg, padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="Get In Touch" title="Request a Quote" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
          gap: isCompact ? 40 : 60,
          alignItems: 'start',
        }}>
          <div>
            <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85, marginBottom: 36 }}>
              Ready to start your project? Reach out directly — we'll get back to you promptly with a competitive quote.
            </p>
            {CONTACT_ITEMS.map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 20, marginBottom: 24, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: C.redLight, border: `1px solid #f0d5d2`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: C.textMuted, fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 15, color: C.text }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
