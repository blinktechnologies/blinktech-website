import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '16px' }}>404</h1>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#64748b' }}>Page Not Found</h2>
      <p style={{ color: '#94a3b8', marginBottom: '32px' }}>The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        style={{ 
          padding: '12px 28px', 
          backgroundColor: '#0a0a0c', 
          color: '#ffffff', 
          borderRadius: '999px', 
          textDecoration: 'none', 
          fontWeight: 600,
          fontSize: '14px' 
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
