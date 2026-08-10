import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 30); onScroll(); addEventListener('scroll', onScroll); return () => removeEventListener('scroll', onScroll) }, [])
  useEffect(() => { if (!open) return; const close = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', close); return () => removeEventListener('keydown', close) }, [open])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <nav className="nav-shell" aria-label="Main navigation">
      <Logo />
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        <a href="#menu" onClick={() => setOpen(false)}>Our food</a><a href="#catering" onClick={() => setOpen(false)}>Catering</a><a href="#story" onClick={() => setOpen(false)}>Our story</a><a href="#visit" onClick={() => setOpen(false)}>Visit</a>
        <a className="mobile-call" href="tel:7038204800"><Phone size={17}/> Call now</a>
      </div>
      <a className="header-cta" href="#order"><span>Start an order</span><span aria-hidden="true">↗</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    </nav>
  </header>
}
