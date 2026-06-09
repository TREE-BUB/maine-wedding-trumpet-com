import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const PAGES = [
  { path: '/', label: 'Home' },
  { path: '/lessons', label: 'Lessons' },
  { path: '/policies', label: 'Policies' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
]

export default function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const go = (path) => {
    navigate(path)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="wordmark" onClick={() => go('/')}>
          Maine Trumpet Lessons
          <small>Deering Center, Portland</small>
        </div>

        <div className="nav-links">
          {PAGES.map((p) => (
            <a
              key={p.path}
              className={'nav-link' + (pathname === p.path ? ' active' : '')}
              onClick={() => go(p.path)}
            >
              {p.label}
            </a>
          ))}
          <button
            className="btn btn-accent nav-cta nav-cta-desktop"
            onClick={() => go('/contact')}
          >
            CONTACT
          </button>
        </div>

        <button
          className={'nav-hamburger' + (open ? ' open' : '')}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {PAGES.map((p) => (
            <a
              key={p.path}
              className={'mobile-link' + (pathname === p.path ? ' active' : '')}
              onClick={() => go(p.path)}
            >
              {p.label}
            </a>
          ))}
          <button className="btn btn-accent" style={{ margin: '6px 22px 10px', width: 'calc(100% - 44px)' }} onClick={() => go('/contact')}>CONTACT</button>
        </div>
      )}
    </nav>
  )
}
