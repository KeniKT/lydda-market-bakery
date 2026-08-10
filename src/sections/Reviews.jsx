import { Star } from 'lucide-react'
import { reviews } from '../constants/site'
import { Reveal } from '../components/ui/Reveal'
export function Reviews(){return <section className="section reviews"><Reveal className="review-heading"><span className="kicker">Loved locally</span><h2>Feels like home.<br/><em>Tastes like it, too.</em></h2><div className="stars" aria-label="Five star customer reviews">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor"/>)}</div></Reveal><div className="review-grid">{reviews.map(([quote,by],i)=><Reveal className="review-card" key={by} delay={i*.08}><span className="quote-mark">“</span><blockquote>{quote}</blockquote><p>{by}</p></Reveal>)}</div></section>}
