'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Variant {
  id: string
  name: string
  price: number
  stock: number
  sellauthId: string
}

export default function R6LiteProduct() {
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [variants, setVariants] = useState<Variant[]>([
    { id: 'day', name: 'Day Key', price: 3.99, stock: 0, sellauthId: '647539' },
    { id: 'week', name: 'Week Key', price: 9.99, stock: 0, sellauthId: '647540' },
    { id: 'month', name: 'Month Key', price: 24.99, stock: 0, sellauthId: '647541' }
  ])
  const [isLoading, setIsLoading] = useState(true)


  // Fetch real-time stock from Sellauth
  useEffect(() => {
    const fetchStock = async () => {
      try {
        console.log('Fetching stock for variants:', variants)
        
        const stockPromises = variants.map(async (variant) => {
          const apiUrl = `/api/stock?productId=${variant.sellauthId}`
          console.log(`Fetching stock from: ${apiUrl}`)
          
          const response = await fetch(apiUrl)
          
          console.log(`Response for ${variant.name}:`, response.status, response.ok)
          
          if (response.ok) {
            const result = await response.json()
            console.log(`Stock data for ${variant.name}:`, result)
            if (result.success) {
              return { ...variant, stock: result.data.stock || 0 }
            } else {
              console.error(`API error for ${variant.name}:`, result.error)
              return variant
            }
          } else {
            console.error(`HTTP error for ${variant.name}:`, response.status, response.statusText)
            return variant
          }
        })

        const updatedVariants = await Promise.all(stockPromises)
        console.log('Updated variants with stock:', updatedVariants)
        setVariants(updatedVariants)
      } catch (error) {
        console.error('Error fetching stock:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStock()
    // Refresh stock every 30 seconds
    const interval = setInterval(fetchStock, 30000)
    return () => clearInterval(interval)
  }, [])

  const selectedVariantData = variants.find(v => v.id === selectedVariant)
  const totalPrice = selectedVariantData ? selectedVariantData.price * quantity : 0

  const increaseQuantity = () => {
    if (selectedVariantData && quantity < selectedVariantData.stock) {
      setQuantity(prev => prev + 1)
    }
  }
  
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const handlePurchase = () => {
    if (!selectedVariantData) return;
    
    // Use Sellauth's native embed modal
    if (typeof window !== 'undefined' && (window as any).sellAuthEmbed) {
      (window as any).sellAuthEmbed.checkout(document.body, { 
        cart: [{ 
          productId: parseInt(process.env.R6_LITE_PRODUCT_ID || '443620'), 
          variantId: parseInt(selectedVariantData.sellauthId), 
          quantity: quantity 
        }],
        shopId: parseInt(process.env.NEXT_PUBLIC_SELLAUTH_SHOP_ID || '176124'),
        modal: true
      });
    } else {
      console.error('Sellauth embed script not loaded');
    }
  };

  if (isLoading) {
    return (
      <div className="product-page-container">
        <div className="product-page-content" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ color: 'var(--text-primary-white)', fontSize: '1.2rem' }}>
            Loading product information...
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header id="main-header">
        <div className="nav-left">
          <Link href="/" className="logo-container">
            <Image src="/LOGO.png" alt="Hellware" className="logo-image" width={40} height={40} />
          </Link>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/status">Status</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </nav>
        </div>
        <div className="nav-right-actions">
          <a href="https://discord.gg/hellware" target="_blank" className="btn-navbar-discord">
            <i className="fab fa-discord"></i> <span>Discord Server</span>
          </a>
        </div>
      </header>

      <div className="product-page-container">
        <div className="product-page-content">
          <div className="product-left-section">
            <div className="product-image-container">
              <Image 
                src="/r6_lite.png" 
                alt="Rainbow Six Siege Lite" 
                width={400} 
                height={300} 
                className="product-main-image"
              />
              <div className="status-indicator updating">
                <span className="status-dot"></span>
                Updating
              </div>
            </div>
            
            <div className="product-description-panel">
              <h3>Product Details</h3>
              <div className="product-features">
                <p style={{ color: 'var(--text-secondary-gray)', textAlign: 'center', fontSize: '1rem' }}>
                  No features yet
                </p>
              </div>
            </div>
          </div>

          <div className="product-right-section">
            <h1 className="product-title">Rainbow Six Siege Lite</h1>
            
            <div className="variant-selection" style={{ opacity: 0.5, pointerEvents: 'none' }}>
              <h3>Select Variant</h3>
              {variants.map((variant) => (
                <div 
                  key={variant.id}
                  className="variant-option disabled"
                  style={{ cursor: 'not-allowed' }}
                >
                  <div className="variant-info">
                    <span className="variant-name">{variant.name}</span>
                    <span className="variant-stock" style={{ fontSize: '0.9rem', color: 'var(--text-secondary-gray)' }}>
                      Currently Unavailable
                    </span>
                  </div>
                  <div className="variant-price">${variant.price.toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="quantity-section" style={{ opacity: 0.5, pointerEvents: 'none' }}>
              <label>Quantity</label>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  disabled={true}
                  style={{ 
                    opacity: 0.5,
                    cursor: 'not-allowed'
                  }}
                >
                  -
                </button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn" disabled={true} style={{ opacity: 0.5, cursor: 'not-allowed' }}>+</button>
              </div>
            </div>

            <div className="total-section" style={{ opacity: 0.5 }}>
              <span>Total:</span>
              <span className="total-price">$0.00</span>
            </div>

            <button 
              className={`purchase-button ${!selectedVariant ? 'disabled' : ''}`}
              disabled={!selectedVariant}
              onClick={handlePurchase}
              style={{
                background: !selectedVariant ? 'rgba(25, 25, 25, 0.8)' : 'var(--primary-red)',
                color: !selectedVariant ? 'var(--text-secondary-gray)' : 'var(--text-primary-white)',
                cursor: !selectedVariant ? 'not-allowed' : 'pointer'
              }}
            >
              <i className="fas fa-clock"></i>
              Currently Updating | Check Back Later
            </button>
          </div>
        </div>
      </div>



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
              <li><Link href="https://discord.gg/hellware" target="_blank">Accounts</Link></li>
              <li><Link href="/product-r6-full">Rainbow Six Siege Full</Link></li>
              <li><Link href="/product-r6-lite">Rainbow Six Siege Lite</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="https://discord.gg/hellware" target="_blank">Discord Server</a></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#products">Products</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/status">Status</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
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
