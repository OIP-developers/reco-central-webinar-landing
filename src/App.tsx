import '../page-1.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo">
            <a href="#"><img src="/Image-box/Main-Logo-2.png" alt="Logo" /></a>
          </div>
          <div className="navbar-cta">
            <a href="#register" className="btn-gold">Register Now — It's Free</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">Free Webinar — Limited Seats</div>
              <h1 className="hero-title">
                Unlock Your Wealth:<br />
                <span>From Bank Paper<br />To Real Property Assets</span>
              </h1>
              <p className="hero-subtitle">
                Discover how to use your existing Retirement Funds — RRSP, TFSA, Pension &amp; more —
                through a Self-Directed Account to invest in <strong>real, income-generating properties</strong>.
              </p>
              <ul className="hero-points">
                <li><i className="fa-solid fa-circle-check"></i> How Global Retirement Funds actually work</li>
                <li><i className="fa-solid fa-circle-check"></i> How to open a Self-Directed Account at your bank</li>
                <li><i className="fa-solid fa-circle-check"></i> How Reco Central uses Assets to maximize returns with zero tax strategy</li>
              </ul>
              <div className="hero-btns">
                <a href="#register" className="btn-gold">Claim Your Free Spot</a>
                <a href="#secrets" className="btn-outline">See What You'll Learn</a>
              </div>
            </div>
            <div className="hero-side">
              <div className="hero-reward">
                <div className="reward-icon"><i className="fa-solid fa-gift"></i></div>
                <h3>Exclusive Investor Reward</h3>
                <p>Every registered participant gets a chance to win:</p>
                <div className="reward-options">
                  <div className="reward-option">
                    <i className="fa-solid fa-earth-africa"></i>
                    African Safari
                  </div>
                  <div className="reward-option">
                    <i className="fa-solid fa-plane-departure"></i>
                    Dream Vacation
                  </div>
                </div>
                <br />
                <a href="#register" className="btn-gold" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Register &amp; Win</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><h3>$150/mo</h3><p>Bank Transfer Fee</p></div>
            <div className="stat-item"><h3>3</h3><p>Investment Secrets Revealed</p></div>
            <div className="stat-item"><h3>0</h3><p>Tax on Returns</p></div>
            <div className="stat-item"><h3>100%</h3><p>Secured by Real Property</p></div>
          </div>
        </div>
      </div>

      {/* FEATURED PROPERTIES */}
      <section className="properties">
        <div className="container">
          <p className="section-title gold-text">Featured Commercial Properties</p>
          <div className="gold-divider"></div>
          <p className="section-subtitle">Proven Assets — Strategic Locations</p>
          <div className="properties-grid">
            <div className="property-card">
              <div className="property-img">
                <i className="fa-solid fa-warehouse"></i>
                <span className="property-tag">Warehouse</span>
              </div>
              <div className="property-info">
                <h3>Comox Valley Warehouse Project</h3>
                <p>British Columbia (BC) — Industrial Commercial Property</p>
                <div className="property-meta">
                  <span><i className="fa-solid fa-check"></i> Registered Fund Eligible</span>
                  <span><i className="fa-solid fa-check"></i> Income Generating</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property-img">
                <i className="fa-solid fa-city"></i>
                <span className="property-tag">Mixed-Use</span>
              </div>
              <div className="property-info">
                <h3>Mixed-Use Multifamily / Retail Hub</h3>
                <p>Morinville, Alberta (AB) — Mixed Commercial &amp; Residential</p>
                <div className="property-meta">
                  <span><i className="fa-solid fa-check"></i> High-Growth Area</span>
                  <span><i className="fa-solid fa-check"></i> Dual Income Stream</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 SECRETS */}
      <section className="secrets" id="secrets">
        <div className="container">
          <div className="secrets-header">
            <p className="eyebrow">Free Webinar</p>
            <h2 className="section-title">3 <span className="gold-text">Wealth Secrets</span> We're Revealing</h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">Everything your bank never told you about using retirement money to build real wealth</p>
          </div>
          <div className="secrets-grid">
            <div className="secret-card">
              <div className="secret-number">1</div>
              <p className="secret-label">Secret #1</p>
              <h3>How Global Retirement Funds Work</h3>
              <p>Understand the full structure — from how funds are pooled to how they flow through a Global Trust into physical assets that generate returns for you.</p>
            </div>
            <div className="secret-card">
              <div className="secret-number">2</div>
              <p className="secret-label">Secret #2</p>
              <h3>How to Open a Self-Directed Account</h3>
              <p>Step-by-step guide to opening a Self-Directed Account at your bank, so you can take full control of where your RRSP, TFSA, or Pension money goes.</p>
            </div>
            <div className="secret-card">
              <div className="secret-number">3</div>
              <p className="secret-label">Secret #3</p>
              <h3>Reco Central's No-Tax Asset Strategy</h3>
              <p>Learn exactly how Reco Central uses Warehouses &amp; Equipment to generate maximized investment returns — completely legally with zero tax burden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How The <span className="gold-text">Process Works</span></h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">From your existing retirement account to real property returns — in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-building-columns"></i></div>
              <h4>Open Self-Directed Account</h4>
              <p>Investor opens a Self-Directed Account at their bank to gain control of retirement funds</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-file-contract"></i></div>
              <h4>Lawyer Drafts Agreement</h4>
              <p>Legal documentation is prepared — all terms negotiated and agreed upon securely</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-building"></i></div>
              <h4>Funds Flow Into Properties</h4>
              <p>Your funds are invested via Global Trust directly into physical income-generating assets</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-coins"></i></div>
              <h4>Earn Returns</h4>
              <p>Bank transfers returns at just $150/month — your money works harder than any savings account</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNDS TABLE */}
      <section className="funds-section">
        <div className="container">
          <h2 className="section-title">Which <span className="gold-text">Funds Are Eligible?</span></h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">Use what you already have — registered funds, transition capital, or liquid assets</p>
          <div className="funds-table-wrap">
            <table className="funds-table">
              <thead>
                <tr>
                  <th>Registered Funds</th>
                  <th>Transition Capital</th>
                  <th>Liquid Assets</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>RRSP &amp; TFSA</td><td>Pension Transfers</td><td>Cash Holdings</td></tr>
                <tr><td>LIRA &amp; RIF</td><td>Severance Packages</td><td>Corporate Retained Earnings</td></tr>
                <tr><td>LIF (Life Income Fund)</td><td>Deferred Profit Sharing</td><td>Private Equity</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REAL PROPERTY ADVANTAGE */}
      <section className="advantage">
        <div className="container">
          <div className="advantage-content">
            <div className="advantage-text">
              <h2>The Real Property <span className="gold-text">Advantage</span></h2>
              <p>Unlike bank paper — GICs, bonds, and mutual funds — your investments through Reco Central are backed by something you can see, touch, and watch grow.</p>
              <blockquote>
                "Watch us build it. Watch us grow it.<br />
                Get in touch — we can help you."
              </blockquote>
              <p>Your money is secured by physical land and infrastructure. No market crashes wiping out your retirement. No invisible ledger entries. Real property. Real returns.</p>
              <a href="#register" className="btn-gold">Start Your Journey Today</a>
            </div>
            <div className="advantage-cards">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa-solid fa-landmark"></i></div>
                <h4>Secured by Land</h4>
                <p>Physical infrastructure backs every dollar</p>
              </div>
              <div className="adv-card">
                <div className="adv-icon"><i className="fa-solid fa-chart-line"></i></div>
                <h4>Consistent Returns</h4>
                <p>Real assets grow — regardless of stock market</p>
              </div>
              <div className="adv-card">
                <div className="adv-icon"><i className="fa-solid fa-shield-halved"></i></div>
                <h4>Zero Tax Strategy</h4>
                <p>Legal framework with optimized tax treatment</p>
              </div>
              <div className="adv-card">
                <div className="adv-icon"><i className="fa-solid fa-key"></i></div>
                <h4>You Stay in Control</h4>
                <p>Self-directed means your choices, your terms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REWARDS SECTION */}
      <section className="reward-section">
        <div className="container">
          <h2 className="section-title">Exclusive <span className="gold-text">Investor Rewards</span></h2>
          <div className="gold-divider"></div>
          <p className="subtitle">Join our webinar and unlock rewards — because your financial freedom deserves a celebration</p>
          <div className="reward-cards">
            <div className="reward-card">
              <div className="icon"><i className="fa-solid fa-earth-africa"></i></div>
              <h3>Win an African Safari</h3>
              <p>Register and qualify for an exclusive African Safari experience. A once-in-a-lifetime adventure — our gift to you for taking control of your wealth.</p>
            </div>
            <div className="reward-card">
              <div className="icon"><i className="fa-solid fa-plane-departure"></i></div>
              <h3>Dream Vacation</h3>
              <p>Can't decide? Win a Dream Vacation to your destination of choice. Your investment journey starts — and so does your reward.</p>
            </div>
            <div className="reward-card">
              <div className="icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3>Free Training: Be Your Own Boss</h3>
              <p>Every attendee gets access to our Free Training course — practical steps to build financial independence and take charge of your future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTER / GHL FORM */}
      <section className="form-section" id="register">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-info">
              <h2>Register <span className="gold-text">For Free</span></h2>
              <p>Seats are limited. Secure your spot now and get instant access to the webinar details — plus your chance to win an exclusive investor reward.</p>
              <ul className="form-benefits">
                <li><i className="fa-solid fa-arrow-right"></i> 100% free — no credit card required</li>
                <li><i className="fa-solid fa-arrow-right"></i> Live webinar with Q&amp;A session</li>
                <li><i className="fa-solid fa-arrow-right"></i> Recorded replay sent to all registrants</li>
                <li><i className="fa-solid fa-arrow-right"></i> Chance to win African Safari or Dream Vacation</li>
                <li><i className="fa-solid fa-arrow-right"></i> Free "Be Your Own Boss" training included</li>
              </ul>
            </div>
            <div className="ghl-form-box">
              <h3>Claim Your <span className="gold-text">Free Spot</span></h3>
              <p className="form-tagline">Fill in your details — takes less than 60 seconds</p>
              <div className="ghl-placeholder">
                <input type="text" className="fake-input" placeholder="First Name" />
                <input type="text" className="fake-input" placeholder="Last Name" />
                <input type="email" className="fake-input" placeholder="Email Address" />
                <input type="tel" className="fake-input" placeholder="Phone Number" />
                <button className="btn-gold">Reserve My Free Seat &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <p className="form-note"><i className="fa-solid fa-lock"></i> Your information is 100% secure. We never share or sell your details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/Image-box/Main-Logo-2.png" alt="Logo" />
            </div>
            <div className="footer-links">
              <a href="#secrets">What You'll Learn</a>
              <a href="#register">Register Free</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Reco Central. All rights reserved. | This webinar is for educational purposes only. Investment involves risk. Please consult a licensed financial advisor.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
