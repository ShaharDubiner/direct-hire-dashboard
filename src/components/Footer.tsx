const social = [
  { href: '#', src: 'https://www.figma.com/api/mcp/asset/1a932fde-7235-47b8-b0e1-55e853c85dfa', alt: 'Twitter' },
  { href: '#', src: 'https://www.figma.com/api/mcp/asset/61bdb1f9-283a-4da0-8497-ae752ef320c2', alt: 'Facebook' },
  { href: '#', src: 'https://www.figma.com/api/mcp/asset/6866268e-c14c-400a-a27e-b2d0561d812a', alt: 'Instagram' },
  { href: '#', src: 'https://www.figma.com/api/mcp/asset/93aa27c4-7d08-4210-b6e7-8a181317ddee', alt: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src="https://www.figma.com/api/mcp/asset/ba1b2d6c-a0cd-4a03-a34c-87e122c90c3b" alt="JobNova icon" width={48} height={48} />
          <img src="https://www.figma.com/api/mcp/asset/1e02fad9-7bf1-484f-9441-d36e25e57832" alt="JobNova" width={129} height={26} />
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Address</p>
          <p className="footer-col-body">1055 N Capitol Ave,<br />San Jose, CA, 95133</p>
          <p className="footer-col-title" style={{ marginTop: 24 }}>Contact</p>
          <p className="footer-col-body">support@jobnova.ai</p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Navigation</p>
          <nav className="footer-nav">
            <a href="#features">Feature</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
            <a href="#">Affiliate 30%</a>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Help</p>
          <img
            src="https://www.figma.com/api/mcp/asset/7ee700ef-42cf-46d4-a307-a12242c857a1"
            alt="QR Code — Scan to download app"
            width={146}
            height={146}
            className="footer-qr"
          />
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          {social.map((s) => (
            <a key={s.alt} href={s.href} aria-label={s.alt}>
              <img src={s.src} alt={s.alt} width={24} height={24} />
            </a>
          ))}
        </div>
        <p className="footer-copy">© 2026 JobNova. All rights reserved.</p>
      </div>
    </footer>
  )
}
