import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MapPin, Menu, Phone, ShoppingBag, X } from 'lucide-react'
import { mapUrl, phonePrimary } from '../../constants/site'
import { Logo } from './Logo'

const links = [
  ['Our food', '#menu'],
  ['Catering', '#catering'],
  ['Our story', '#story'],
  ['Visit', '#visit'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerRef.current?.querySelector('a')?.focus()

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.key !== 'Tab') return
      const focusable = drawerRef.current?.querySelectorAll('a, button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    const handleResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  const closeDrawer = () => setOpen(false)

  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
    <nav className="nav-shell" aria-label="Main navigation">
      <Logo />

      <div className="desktop-nav">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>

      <div className="nav-actions">
        <a className="nav-quick nav-call" href={`tel:${phonePrimary}`} aria-label="Call Lydda Market and Bakery">
          <Phone aria-hidden="true" /><span>Call</span>
        </a>
        <a className="nav-quick nav-directions" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Lydda Market and Bakery">
          <MapPin aria-hidden="true" /><span>Directions</span>
        </a>
        <a className="nav-order" href="#order"><ShoppingBag aria-hidden="true"/><span>Start an order</span><ArrowUpRight aria-hidden="true"/></a>
      </div>

      <button ref={menuButtonRef} className="menu-button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    </nav>

    <div className={`mobile-drawer ${open ? 'is-open' : ''}`} id="mobile-menu" ref={drawerRef} aria-hidden={!open}>
      <div className="drawer-links">
        <span className="drawer-kicker">Explore Lydda</span>
        {links.map(([label, href], index) => <a key={href} href={href} onClick={closeDrawer} tabIndex={open ? 0 : -1}><small>0{index + 1}</small>{label}<ArrowUpRight aria-hidden="true"/></a>)}
      </div>
      <div className="drawer-actions">
        <a href={`tel:${phonePrimary}`} onClick={closeDrawer} tabIndex={open ? 0 : -1}><Phone aria-hidden="true"/><span><small>Call the bakery</small>(703) 820-4800</span></a>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" onClick={closeDrawer} tabIndex={open ? 0 : -1}><MapPin aria-hidden="true"/><span><small>Visit us</small>Falls Church, VA</span></a>
        <a className="drawer-order" href="#order" onClick={closeDrawer} tabIndex={open ? 0 : -1}><ShoppingBag aria-hidden="true"/> Start an order</a>
      </div>
    </div>
  </header>
}
