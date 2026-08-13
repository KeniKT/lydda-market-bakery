export function ProductArt({ src, alt, position = 'center' }) {
  return <div className="product-art"><img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: position }} /></div>
}
