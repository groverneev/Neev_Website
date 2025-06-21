export default function Footer() {
  return (
    <footer style={{
      marginTop: 48,
      padding: 24,
      background: '#f1f5f9',
      textAlign: 'center',
      color: '#64748b',
      fontSize: 14,
    }}>
      &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.
      <br />
    </footer>
  );
}
