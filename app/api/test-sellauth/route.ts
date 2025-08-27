import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const shopId = process.env.SELLAUTH_SHOP_ID || '176124'
    const productId = process.env.R6_FULL_DAY_ID || '647543'
    
    // Test the correct Sellauth API endpoint
    const apiUrl = `https://api.sellauth.com/v1/shops/${shopId}/products/${productId}`
    console.log(`Testing Sellauth API: ${apiUrl}`)
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.SELLAUTH_API_KEY || '5204582|gbmyV4MU5LNsNGrCQbCgvtnxBUNJkHzaxFQrVr1da9862827'}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log('Sellauth API test successful:', data)
      
      // Extract stock information
      let stock = 0
      if (data.variants && data.variants.length > 0) {
        stock = data.variants.reduce((total: number, variant: any) => {
          return total + (variant.stock || 0)
        }, 0)
      } else if (data.stock !== undefined) {
        stock = data.stock
      }
      
      return NextResponse.json({ 
        success: true, 
        data: { stock },
        productData: data,
        message: 'Sellauth API connection successful',
        apiUrl,
        shopId,
        productId
      })
    } else {
      const errorText = await response.text()
      console.error(`Sellauth API test failed: ${response.status}`, errorText)
      return NextResponse.json({ 
        success: false, 
        error: `API Error: ${response.status}`,
        details: errorText,
        apiUrl,
        shopId,
        productId
      }, { status: response.status })
    }
  } catch (error) {
    console.error('Error testing Sellauth API:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
