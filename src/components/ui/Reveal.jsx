import { motion, useReducedMotion } from 'framer-motion'
const MotionDiv = motion.div

export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <MotionDiv className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: .75, delay, ease: [.2,.7,.2,1] }}>{children}</MotionDiv>
}
