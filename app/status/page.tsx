'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Status() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header id="main-header">
        <div className="nav-left">
          <a href="/" className="logo-container">
            <Image src="/LOGO.png" alt="Hellware" className="logo-image" width={40} height={40} />
          </a>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#products">Products</a></li>
              <li><a href="/status">Status</a></li>
              <li><a href="/#faq">FAQ</a></li>
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
            <a href="/" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
            <a href="/#products" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-box"></i>
              <span>Products</span>
            </a>
            <a href="/status" className="mobile-menu-item" onClick={closeMobileMenu}>
              <i className="fas fa-signal"></i>
              <span>Status</span>
            </a>
            <a href="/#faq" className="mobile-menu-item" onClick={closeMobileMenu}>
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

      <section className="hero status-hero" id="status">
        <div className="hero-left-content">
          <h1>Product <span style={{ color: 'var(--primary-red)' }}>Status</span></h1>
          <p className="hero-subheading">Real-time monitoring of all our products</p>
          
          <div className="status-legend">
            <div className="status-legend-item">
              <div className="status-legend-dot available"></div>
              <span>Undetected & Up to Date</span>
            </div>
            <div className="status-legend-item">
              <div className="status-legend-dot development"></div>
              <span>Updating</span>
            </div>
            <div className="status-legend-item">
              <div className="status-legend-dot unavailable"></div>
              <span>Unavailable</span>
            </div>
          </div>

          <div className="status-products-list">
            <div className="status-product-item">
              <div className="status-product-info">
                <div className="status-product-name">Rainbow Six Siege Full</div>
                <div className="status-product-description">Last Updated: 2025-08-26</div>
              </div>
              <div className="status-product-status">
                <div className="status-legend-dot development"></div>
                <span className="status-text development"></span>
              </div>
            </div>

            <div className="status-product-item">
              <div className="status-product-info">
                <div className="status-product-name">Rainbow Six Siege Lite</div>
                <div className="status-product-description">Last Updated: 2025-08-26</div>
              </div>
              <div className="status-product-status">
                <div className="status-legend-dot development"></div>
                <span className="status-text development"></span>
              </div>
            </div>

            <div className="status-product-item">
              <div className="status-product-info">
                <div className="status-product-name">Zenith</div>
                <div className="status-product-description">Last Updated: 2025-08-29</div>
              </div>
              <div className="status-product-status">
                <div className="status-legend-dot available"></div>
                <span className="status-text available"></span>
              </div>
            </div>

            <div className="status-product-item">
              <div className="status-product-info">
                <div className="status-product-name">Full Access Accounts</div>
                <div className="status-product-description">Last Updated: N/A</div>
              </div>
              <div className="status-product-status">
                <div className="status-legend-dot available"></div>
                <span className="status-text available"></span>
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
              <li><a href="/product-zenith">Zenith</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="https://discord.gg/hellware" target="_blank">Discord Server</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/#products">Products</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#products">Products</a></li>
              <li><a href="/status">Status</a></li>
              <li><a href="/#faq">FAQ</a></li>
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