import { useEffect, useState } from 'react'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { Hero } from './sections/Hero'
import { Pledge } from './sections/Pledge'
import { Products } from './sections/Products'
import { Catering } from './sections/Catering'
import { Story } from './sections/Story'
import { OrderForm } from './sections/OrderForm'
import { Reviews } from './sections/Reviews'
import { Visit } from './sections/Visit'
import { useLenis } from './hooks/useLenis'
import { localBusinessSchema } from './utils/schema'

function App(){useLenis();const [loaded,setLoaded]=useState(false);useEffect(()=>{const t=setTimeout(()=>setLoaded(true),650);return()=>clearTimeout(t)},[]);useEffect(()=>{const onScroll=()=>document.documentElement.style.setProperty('--progress',`${scrollY/(document.documentElement.scrollHeight-innerHeight)*100}%`);addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[]);return <><div className={`loader ${loaded?'loaded':''}`}><span>ልዳ</span><i/></div><div className="scroll-progress"/><Header/><main><Hero/><Pledge/><Products/><Catering/><Story/><OrderForm/><Reviews/><Visit/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessSchema)}}/></>}
export default App
