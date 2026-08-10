import { products } from '../constants/site'
import { ProductArt } from '../components/ui/ProductArt'
import { Reveal } from '../components/ui/Reveal'

export function Products(){return <section className="section products" id="menu"><Reveal className="section-heading"><div><span className="kicker">From our bakery & market</span><h2>Everyday staples.<br/><em>Made exceptionally.</em></h2></div><p>Come for the soft injera. Stay for the aroma of warm bread, familiar spices, and the welcome of a neighborhood market that knows your table.</p></Reveal><div className="bento">{products.map((p,i)=><Reveal className={`product-card card-${i+1} tone-${p.tone}`} key={p.title} delay={i*.08}><div className="card-top"><span>{p.number}</span><span>{p.amharic}</span></div><ProductArt type={p.icon}/><div className="card-copy"><h3>{p.title}</h3><p>{p.copy}</p></div></Reveal>)}</div></section>}
