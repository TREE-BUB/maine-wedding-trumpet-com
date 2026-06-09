import { useNavigate } from 'react-router-dom'

const PAGES = [
  { path: '/', label: 'Home' },
  { path: '/lessons', label: 'Lessons' },
  { path: '/policies', label: 'Policies' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
]

export default function Footer() {
  const navigate = useNavigate()

  const go = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div
              style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.015em', textTransform: 'uppercase', color: 'var(--paper)', cursor: 'pointer' }}
              onClick={() => go('/')}
            >
              Maine Trumpet Lessons
            </div>
            <p style={{ color: 'color-mix(in srgb, var(--paper) 70%, transparent)', marginTop: 18, maxWidth: 320, lineHeight: 1.6, fontSize: '0.95rem' }}>
              Private, in-person trumpet lessons for comeback players, beginners, intermediate, and advanced students of all ages, taught with patience in Deering Center.
            </p>
            <button
              className="btn btn-accent"
              style={{ marginTop: 22 }}
              onClick={() => go('/contact')}
            >
              Get more info or schedule your first lesson
            </button>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {PAGES.map((p) => (
              <a key={p.path} onClick={() => go(p.path)}>{p.label}</a>
            ))}
            <a onClick={() => go('/contact')}>Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="made-love">Made with <b>♥</b> in Deering Center, Portland</span>
          <span>© {new Date().getFullYear()} Maine Trumpet Lessons</span>
        </div>
      </div>
    </footer>
  )
}
