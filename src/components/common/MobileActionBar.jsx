import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { mapUrl, phonePrimary } from '../../constants/site'

const MotionNav = motion.nav

export function MobileActionBar() {
  const [visible, setVisible] = useState(false)
  const lastScroll = useRef(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const updateVisibility = () => {
      const currentScroll = window.scrollY
      const delta = currentScroll - lastScroll.current

      if (currentScroll < 180) setVisible(false)
      else if (delta < -5) setVisible(true)
      else if (delta > 7) setVisible(false)

      lastScroll.current = currentScroll
    }

    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return <MotionNav
    className="mobile-action-bar"
    aria-label="Quick contact and directions"
    initial={false}
    animate={{ y: visible ? 0 : 'calc(100% + 24px)', opacity: visible ? 1 : 0 }}
    transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 34 }}
    aria-hidden={!visible}
  >
    <div className="mobile-action-shell">
      <a href={`tel:${phonePrimary}`} tabIndex={visible ? 0 : -1}>
        <span className="mobile-action-icon"><Phone aria-hidden="true" /></span>
        <span><small>Speak with us</small><strong>Call now</strong></span>
      </a>
      <i aria-hidden="true" />
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1}>
        <span className="mobile-action-icon"><MapPin aria-hidden="true" /></span>
        <span><small>Falls Church</small><strong>Directions</strong></span>
      </a>
    </div>
  </MotionNav>
}
