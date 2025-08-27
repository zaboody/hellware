'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }





  const toggleFaqItem = (index: number) => {
    setOpenFaqItem(openFaqItem === index ? null : index)
  }

  return (
    <>
      <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-left">
          <a href="#" className="logo-container">
            <Image src="/LOGO.png" alt="Hellware" className="logo-image" width={40} height={40} />
          </a>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="/status">Status</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
        <div className="nav-right-actions">
          <a href="https://discord.gg/hellware" target="_blank" className="btn-navbar-discord">
            <i className="fab fa-discord"></i> <span>Discord Server</span>
          </a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="mobile-menu-items">
            <a href="#home" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
            <a href="#products" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-box"></i>
              <span>Products</span>
            </a>
            <a href="/status" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-signal"></i>
              <span>Status</span>
            </a>
            <a href="#faq" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-question-circle"></i>
              <span>FAQ</span>
            </a>
            <a href="https://discord.gg/hellware" target="_blank" className="mobile-menu-item mobile-discord-btn">
              <i className="fab fa-discord"></i>
              <span>Discord Server</span>
            </a>
          </div>
        </div>
      </div>

      <section className="hero" id="home">
        <div className="hero-left-content">
          <h1>Ruin The Game<br />With <span style={{ color: 'var(--primary-red)' }}>Hellware</span>'s Products.</h1>
          <p className="hero-subheading">Never Lose Again</p>
          <div className="hero-features-grid">
            <div className="hero-feature-item">
              <i className="fas fa-user-shield"></i>
              <h4>100% Undetected</h4>
              <p>Anti-cheat bypassing</p>
            </div>
            <div className="hero-feature-item">
              <i className="fas fa-bolt"></i>
              <h4>Instant Delivery</h4>
              <p>Access in minutes</p>
            </div>
            <div className="hero-feature-item">
              <i className="fas fa-headset"></i>
              <h4>24/7 Support</h4>
              <p>Human assistance</p>
            </div>
          </div>

          <div className="hero-rating">
            <span className="stars">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </span>
            <strong>5.0/5.0</strong> from 70+ reviews
          </div>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="container">
          <h2 className="section-title-purple">Products</h2>
          <p className="products-subtitle">Premium tools for competitive gaming</p>

          <div className="products-grid-new">
            <div className="product-card-new" data-category="cheats">
              <Link href="/product-r6-full" className="product-link">
                <div className="product-image-new">
                  <Image src="/r6_full.png" alt="R6 Full" fill sizes="100%" style={{ objectFit: 'contain' }} loading="lazy" />
                </div>
                <div className="product-content-new">
                  <h3 className="product-name-new">Rainbow Six Siege Full</h3>
                  <div className="product-footer-new">
                    <div className="price-info-new">
                      <span className="price-label-new">Starting at</span>
                      <span className="price-new">$4.99</span>
                    </div>
                  </div>
                </div>
                <div className="status-indicator updating">
                  <span className="status-dot"></span>
                  Updating
                </div>
              </Link>
            </div>

            <div className="product-card-new" data-category="cheats">
              <Link href="/product-r6-lite" className="product-link">
                <div className="product-image-new">
                  <Image src="/r6_lite.png" alt="R6 Lite" fill sizes="100%" style={{ objectFit: 'contain' }} loading="lazy" />
                </div>
                <div className="product-content-new">
                  <h3 className="product-name-new">Rainbow Six Siege Lite</h3>
                  <div className="product-footer-new">
                    <div className="price-info-new">
                      <span className="price-label-new">Starting at</span>
                      <span className="price-new">$3.99</span>
                    </div>
                  </div>
                </div>
                <div className="status-indicator updating">
                  <span className="status-dot"></span>
                  Updating
                </div>
              </Link>
            </div>

            <div className="product-card-new" data-category="cheats">
              <a href="https://discord.gg/hellware" target="_blank" className="product-link" style={{ textDecoration: 'none' }}>
                <div className="product-image-new">
                  <Image src="/fa_accounts_banenr_things.png" alt="Accounts" fill sizes="100%" style={{ objectFit: 'contain' }} loading="lazy" />
                </div>
                <div className="product-content-new">
                  <h3 className="product-name-new">Accounts</h3>
                  <div className="product-footer-new">
                    <div className="price-info-new">
                      <span className="price-label-new">Starting at</span>
                      <span className="price-new">N/A</span>
                    </div>
                  </div>
                </div>
                <div className="status-indicator undetected">
                  <span className="status-dot"></span>
                  Available
                </div>
              </a>
            </div>
            

            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
        <h2 className="section-title-purple">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className={`faq-item ${openFaqItem === 0 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(0)}>
                <h3>Are your cheats safe and undetected?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Yes, all our cheats are regularly updated and tested to ensure they remain undetected by anti-cheat systems. We use advanced bypass techniques and have a dedicated team monitoring detection status 24/7.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 1 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(1)}>
                <h3>How do I download and install the cheats?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>After purchase, you'll receive download links and detailed installation instructions. Each cheat comes with step-by-step guides and our support team is available to help with setup through Discord.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 2 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(2)}>
                <h3>What payment methods do you accept?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>For payment options and methods, please make a ticket in our Discord server. Our support team will provide you with available payment methods and guide you through the purchase process.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 3 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(3)}>
                <h3>Do you offer refunds?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Hellware offers no refunds unless there is a problem with the product itself. We do not provide refunds for user error, bans, or other issues not related to product functionality.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 4 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(4)}>
                <h3>How often are the cheats updated?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Our cheats are updated regularly, typically within hours of game updates. We monitor all supported games and push updates immediately when needed to maintain functionality and security.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 5 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(5)}>
                <h3>Can I use the cheats on multiple computers?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>No, we do not offer multi-PC licenses. Each license is for one device only to prevent sharing. If you need to use cheats on a different computer, you'll need to purchase a separate license.</p>
              </div>
            </div>
            
            <div className={`faq-item ${openFaqItem === 6 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(6)}>
                <h3>What if I get banned while using your cheats?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>While we work hard to keep our cheats undetected, we cannot guarantee 100% ban protection. We recommend using cheats responsibly and following our safety guidelines. We do not provide compensation for bans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="new-footer-style">
        <div className="footer-main-content">
          <div className="footer-column">
            <span className="footer-logo-text">Hellware</span>
            <p className="footer-description">
              Premium gaming tools and cheats for competitive players. Stay undetected and dominate every match.
            </p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="https://discord.gg/hellware" target="_blank">Accounts</a></li>
              <li><a href="/product-r6-full">Rainbow Six Siege Full</a></li>
              <li><a href="/product-r6-lite">Rainbow Six Siege Lite</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="https://discord.gg/hellware" target="_blank">Discord Server</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="/status">Status</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <div>© 2025 Hellware. All rights reserved.</div>
          <div
               className="made-by-rook-footer"
               style={{ cursor: "pointer" }}
               onClick={() => window.open("https://rook.website", "_blank")}>
               <i className="fas fa-code rook-icon"></i>
               <span className="made-by-text">Made By</span><span>Rook</span>
          </div>
        </div>
      </footer>
    </>
  )
}