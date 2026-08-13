import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
const MotionDiv = motion.div

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-copy">
      <MotionDiv className="eyebrow" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.2}}><Sparkles size={14}/> Baked fresh in Falls Church, Virginia</MotionDiv>
      <h1><span>Tradition,</span><em>made fresh.</em></h1>
      <p className="hero-amharic">ባህል፣ በየቀኑ ትኩስ።</p>
      <p className="hero-lede">Authentic Ethiopian injera, handmade breads, and generous celebration catering—made from family recipes, never shortcuts.</p>
      <div className="hero-actions"><a href="#order" className="button button-primary">Plan your order <ArrowUpRight size={18}/></a><a href="#menu" className="text-link">Explore today’s staples <ArrowDown size={16}/></a></div>
      <div className="hero-meta"><span><b>8am—9pm</b> Every day</span><span><b>100%</b> Homemade</span><span><b>22041</b> Falls Church</span></div>
    </div>
    <div className="hero-visual"><img src="/assets/hero-benchmark-clean.png" alt="Traditional Ethiopian Dabo bread" className="w-full h-auto max-h-[420px] object-contain mx-auto drop-shadow-xl transition-transform duration-500 hover:scale-105"/><div className="visual-label"><span>FERMENTED</span><b>with time, not shortcuts</b></div><div className="orbit-tag">እንጀራ • INJERA • ትኩስ • FRESH •</div></div>
    <div className="hero-index">EST. IN COMMUNITY <span>38°50′N / 77°11′W</span></div>
  </section>
}
