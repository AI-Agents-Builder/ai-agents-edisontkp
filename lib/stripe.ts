import { loadStripe, Stripe } from '@stripe/stripe-js'
import { stripeConfig } from '@/config/content'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripeConfig.publishableKey)
  }
  return stripePromise
}

export interface CheckoutSessionParams {
  priceId: string
  packageName: string
  successUrl?: string
  cancelUrl?: string
}

export const createCheckoutSession = async ({
  priceId,
  packageName,
  successUrl,
  cancelUrl,
}: CheckoutSessionParams) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        packageName,
        successUrl: successUrl || stripeConfig.successUrl,
        cancelUrl: cancelUrl || stripeConfig.cancelUrl,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create checkout session')
    }

    const { sessionId } = await response.json()
    
    const stripe = await getStripe()
    if (!stripe) {
      throw new Error('Stripe failed to load')
    }

    const { error } = await stripe.redirectToCheckout({ sessionId })
    
    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export const getPriceIdForPackage = (packageId: string): string => {
  const priceIdMap: Record<string, string> = {
    'lite': stripeConfig.priceIds.lite,
    'pro-starter': stripeConfig.priceIds.proStarter,
    'business-auto': stripeConfig.priceIds.businessAuto,
    'sales-cs': stripeConfig.priceIds.salesCs,
    'enterprise': stripeConfig.priceIds.enterprise,
    'pilot': stripeConfig.priceIds.pilot,
  }
  
  return priceIdMap[packageId] || ''
}
