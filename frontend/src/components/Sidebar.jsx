export default function Sidebar() {
  return (
    <nav style={{ height: '100vh', padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.5rem' }}>BuyShap</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/" style={linkStyle}>Home</a></li>
        <li><a href="/compare" style={linkStyle}>Compare</a></li>
        <li><a href="/login" style={linkStyle}>Login</a></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  display: 'block',
  padding: '0.5rem 0',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
};
