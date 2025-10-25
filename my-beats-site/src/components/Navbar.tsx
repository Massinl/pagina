import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#111', color: '#fff' }}>
      <Link to="/">Home</Link>
      <Link to="/beats">Beats</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
