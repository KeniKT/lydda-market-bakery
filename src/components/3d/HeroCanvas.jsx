import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext('2d', { alpha: true })
    let raf, pointer = { x: 0, y: 0 }, active = true
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => { const dpr = Math.min(devicePixelRatio, 1.6); canvas.width = canvas.clientWidth*dpr; canvas.height = canvas.clientHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0) }
    const move = e => { const r=canvas.getBoundingClientRect(); pointer={x:(e.clientX-r.left)/r.width-.5,y:(e.clientY-r.top)/r.height-.5} }
    const drawInjera = (x,y,r,t) => {
      ctx.save(); ctx.translate(x+pointer.x*16,y+pointer.y*10); ctx.rotate(-.18 + Math.sin(t*.0004)*.025)
      const g=ctx.createRadialGradient(-r*.3,-r*.35,r*.1,0,0,r); g.addColorStop(0,'#faedcd'); g.addColorStop(.58,'#d8aa75'); g.addColorStop(1,'#8e4f36')
      ctx.shadowColor='rgba(20,8,0,.38)'; ctx.shadowBlur=45; ctx.shadowOffsetY=24; ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(0,0,r,r*.72,0,0,Math.PI*2); ctx.fill(); ctx.shadowColor='transparent'
      for(let i=0;i<95;i++){const a=i*2.399, rr=Math.sqrt(i/95)*r*.82; ctx.fillStyle=`rgba(88,48,29,${.12+(i%4)*.02})`;ctx.beginPath();ctx.arc(Math.cos(a)*rr,Math.sin(a)*rr*.7,1.2+(i%3)*.5,0,7);ctx.fill()}
      ctx.restore()
    }
    const draw = t => {
      const w=canvas.clientWidth,h=canvas.clientHeight; ctx.clearRect(0,0,w,h)
      const glow=ctx.createRadialGradient(w*.5,h*.45,20,w*.5,h*.45,w*.43);glow.addColorStop(0,'rgba(212,163,115,.25)');glow.addColorStop(1,'rgba(212,163,115,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h)
      drawInjera(w*.5,h*.49,Math.min(w*.34,h*.36),t)
      raf = active && !reduced ? requestAnimationFrame(draw) : 0
    }
    resize(); addEventListener('resize',resize); canvas.addEventListener('pointermove',move); draw(0)
    return () => { active=false; cancelAnimationFrame(raf); removeEventListener('resize',resize); canvas.removeEventListener('pointermove',move) }
  }, [])
  return <canvas ref={ref} className="hero-canvas" role="img" aria-label="Artistic three-dimensional rendering of freshly made Ethiopian injera" />
}
