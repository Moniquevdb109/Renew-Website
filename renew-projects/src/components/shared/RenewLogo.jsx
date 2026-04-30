import logo from '../../assets/logo.png';

export default function RenewLogo({ width = 200 }) {
  return (
    <img src={logo} alt="Renew Projects" width={width} style={{ display: 'block' }} />
  );
}
