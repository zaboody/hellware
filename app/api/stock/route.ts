import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const variantId = searchParams.get('productId') // This is actually a variant ID
  
  if (!variantId) {
    return NextResponse.json({ error: 'Variant ID is required' }, { status: 400 })
  }

  try {
    const shopId = process.env.SELLAUTH_SHOP_ID || '176124'
    
    // Map variant IDs to their main product IDs
    const variantToProductMap: { [key: string]: string } = {
      // R6 Lite variants
      '647539': '443620', // Day -> R6 Lite
      '647540': '443620', // Week -> R6 Lite  
      '647541': '443620', // Month -> R6 Lite
      // R6 Full variants
      '647543': '443622', // Day -> R6 Full
      '647544': '443622', // Week -> R6 Full
      '647545': '443622'  // Month -> R6 Full
    }
    
    const productId = variantToProductMap[variantId]
    if (!productId) {
      return NextResponse.json({ error: 'Invalid variant ID' }, { status: 400 })
    }
    
    console.log(`Variant ${variantId} maps to product ${productId}`)
    
    // Get the main product to access variant stock
    const apiUrl = `https://api.sellauth.com/v1/shops/${shopId}/products/${productId}`
    console.log(`Fetching product: ${apiUrl}`)
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.SELLAUTH_API_KEY || '5204582|gbmyV4MU5LNsNGrCQbCgvtnxBUNJkHzaxFQrVr1da9862827'}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log(`Product ${productId} response:`, data)
      
      // Find the specific variant stock
      let variantStock = 0
      if (data.variants && data.variants.length > 0) {
        const variant = data.variants.find((v: any) => v.id.toString() === variantId)
        if (variant) {
          variantStock = variant.stock || 0
          console.log(`Found variant ${variantId} with stock: ${variantStock}`)
        } else {
          console.log(`Variant ${variantId} not found in product ${productId}`)
        }
      }
      
      return NextResponse.json({ 
        success: true, 
        data: { stock: variantStock },
        variantId,
        productId,
        method: 'product_variants'
      })
    } else {
      const errorText = await response.text()
      console.error(`Product API error: ${response.status}`, errorText)
      
      // Fallback: try to get all products from shop
      console.log(`Trying to get all products from shop ${shopId}`)
      const fallbackUrl = `https://api.sellauth.com/v1/shops/${shopId}/products`
      
      const fallbackResponse = await fetch(fallbackUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.SELLAUTH_API_KEY || '5204582|gbmyV4MU5LNsNGrCQbCgvtnxBUNJkHzaxFQrVr1da9862827'}`
        }
      })
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json()
        console.log(`Shop products response:`, fallbackData)
        
        // Find the product and variant
        const product = fallbackData.data?.find((p: any) => p.id.toString() === productId)
        if (product && product.variants) {
          const variant = product.variants.find((v: any) => v.id.toString() === variantId)
          if (variant) {
            const stock = variant.stock || 0
            console.log(`Fallback: Found variant ${variantId} with stock: ${stock}`)
            return NextResponse.json({ 
              success: true, 
              data: { stock },
              variantId,
              productId,
              method: 'shop_products_fallback'
            })
          }
        }
      }
      
      return NextResponse.json({ 
        success: false, 
        error: `Product API Error: ${response.status}`,
        details: errorText,
        variantId,
        productId
      }, { status: response.status })
    }
  } catch (error) {
    console.error('Error fetching stock:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
