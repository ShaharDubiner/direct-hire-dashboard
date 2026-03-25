export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-card">

        {/* Left Content */}
        <div className="hero-left fade-up">
          <div className="hero-text-group">
            <div className="hero-pill">
              <img src="https://www.figma.com/api/mcp/asset/7de1ad40-1a95-4ac1-bc1d-a6b7a558f6b8" alt="" width={20} height={20} />
              <span>Next-Gen Career Intelligence</span>
            </div>

            <h1 className="hero-heading">
              The New Way Talent Meets{' '}
              <span className="hero-heading-accent">Opportunity</span>{' '}
              in the AI Era.🚀
            </h1>

            <p className="hero-subtext">
              Navigate the complexity of your career rise with effortless intelligence.
            </p>
          </div>

          <a href="#" className="cta-btn">Start Explore for Free</a>
        </div>

        {/* Right Visual */}
        <div className="hero-right">
          <div className="hero-glow" />

          <img
            className="hero-img"
            src="https://www.figma.com/api/mcp/asset/f9f18c4b-6554-4538-abc8-b3c26d84bf84"
            alt="Professional with AI job matching interface"
          />

          {/* Trend icons */}
          <div className="hero-deco hero-trend t1">
            <img src="https://www.figma.com/api/mcp/asset/400fee76-ed75-4a65-a901-fb24c6651616" alt="" width={58} height={58} />
          </div>
          <div className="hero-deco hero-trend t2">
            <img src="https://www.figma.com/api/mcp/asset/6718eaa2-833e-46bf-b62d-029c5e936a2b" alt="" width={72} height={72} />
          </div>

          {/* Feature chips */}
          <div className="hero-chip chip-notification">
            <img src="https://www.figma.com/api/mcp/asset/146cf590-9926-40ca-96ba-929b17851d07" alt="" width={20} height={20} />
            Instant Notification
          </div>
          <div className="hero-chip chip-ai-actions">
            <img src="https://www.figma.com/api/mcp/asset/24c5c94a-721d-4a3e-904b-64ea75d89954" alt="" width={20} height={20} />
            AI Actions
          </div>
          <div className="hero-chip chip-auto-apply">
            <img src="https://www.figma.com/api/mcp/asset/2183fc64-b586-4a03-b427-7e83ecd019f1" alt="" width={20} height={20} />
            Auto Apply
          </div>

          {/* Star decorations */}
          <div className="hero-deco hero-star s1"><img src="https://www.figma.com/api/mcp/asset/6d25bbfe-7aec-475b-a09a-253b1072e563" alt="" width={45} height={45} /></div>
          <div className="hero-deco hero-star s2"><img src="https://www.figma.com/api/mcp/asset/e8770095-cf59-4707-805a-37648257da08" alt="" width={25} height={25} /></div>
          <div className="hero-deco hero-star s3"><img src="https://www.figma.com/api/mcp/asset/e8770095-cf59-4707-805a-37648257da08" alt="" width={25} height={25} /></div>

          {/* Dot decorations */}
          <div className="hero-deco hero-dot d1"><img src="https://www.figma.com/api/mcp/asset/4e0d0b56-e8ba-4055-8bda-b201fd7e7866" alt="" width={23} height={23} /></div>
          <div className="hero-deco hero-dot d2"><img src="https://www.figma.com/api/mcp/asset/4e0d0b56-e8ba-4055-8bda-b201fd7e7866" alt="" width={23} height={23} /></div>
        </div>

      </div>
    </section>
  )
}
