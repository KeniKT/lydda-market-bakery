export function Logo({ compact = false }) {
  return <a className="logo" href="#top" aria-label="Lydda Market and Bakery home">
    <svg viewBox="0 0 52 52" aria-hidden="true">
      <path d="M26 3C17 9 10 15 10 27c0 10 7 18 16 22 9-4 16-12 16-22C42 15 35 9 26 3Z" />
      <path d="M18 28c6-2 10-7 8-17M34 28c-6-2-10-7-8-17M17 35c6-3 12-3 18 0" />
    </svg>
    <span><b>LYDDA</b>{!compact && <small>ልዳ ገበያ እና ዳቦ ቤት</small>}</span>
  </a>
}
