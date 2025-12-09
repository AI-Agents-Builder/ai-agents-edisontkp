# Stripe and Calendly Configuration Guide

This guide covers the complete setup for Stripe payment processing and Calendly scheduling integration.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables Setup](#environment-variables-setup)
- [Stripe Configuration](#stripe-configuration)
- [Calendly Configuration](#calendly-configuration)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Prerequisites

Before starting, ensure you have:
- A Stripe account ([Sign up here](https://dashboard.stripe.com/register))
- A Calendly account ([Sign up here](https://calendly.com/signup))
- Node.js 18+ installed
- Access to your project's environment variables

---

## Environment Variables Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in the required values** in `.env.local` (see sections below)

3. **For production**, set these environment variables in your hosting platform (Vercel, Netlify, etc.)

---

## Stripe Configuration

### Step 1: Get Your API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API keys**
3. Copy your keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   ```

### Step 2: Create Products and Prices

1. In Stripe Dashboard, go to **Products** → **Add product**
2. Create a product for each package:
   - **AI Agent Lite** - $750
   - **AI Agent Pro Starter** - $1,700
   - **Business Automation Agent Pack** - $2,600
   - **Sales & Customer Service Bundle** - $3,900
   - **Enterprise Agent Suite** - $7,500
   - **AI Agent Pilot** - $1,500

3. For each product:
   - Set the name and description
   - Add a one-time price (not recurring)
   - Save and copy the **Price ID** (starts with `price_`)

4. Add Price IDs to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PRICE_LITE=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_PRO_STARTER=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_BUSINESS_AUTO=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_SALES_CS=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_PILOT=price_xxxxxxxxxxxxx
   ```

### Step 3: Set Up Webhooks

Webhooks allow Stripe to notify your application about payment events.

#### For Local Development:

1. Install Stripe CLI:
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Linux
   wget https://github.com/stripe/stripe-cli/releases/download/v1.19.0/stripe_1.19.0_linux_x86_64.tar.gz
   tar -xvf stripe_1.19.0_linux_x86_64.tar.gz
   sudo mv stripe /usr/local/bin
   ```

2. Login to Stripe CLI:
   ```bash
   stripe login
   ```

3. Forward events to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook/stripe
   ```

4. Copy the webhook signing secret (starts with `whsec_`) and add to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
   ```

#### For Production:

1. In Stripe Dashboard, go to **Developers** → **Webhooks** → **Add endpoint**
2. Set endpoint URL: `https://yourdomain.com/api/webhook/stripe`
3. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Copy the **Signing secret** and add to your production environment variables

### Step 4: Configure Success/Cancel URLs

Update these in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Calendly Configuration

### Step 1: Get Your Scheduling Link

1. Log in to [Calendly](https://calendly.com)
2. Create or select your event type (e.g., "Discovery Call")
3. Copy your scheduling link (e.g., `https://calendly.com/yourusername/discovery-call`)

### Step 2: Update Environment Variables

Add to `.env.local`:
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourusername/discovery-call
```

### Step 3: Customize Event Settings

In Calendly, configure your event:
- **Duration**: 30 minutes (recommended for discovery calls)
- **Location**: Zoom, Google Meet, or Phone
- **Questions**: Ask relevant questions to prepare for the call
- **Confirmation**: Set up email confirmations
- **Reminders**: Enable email/SMS reminders

---

## Testing

### Test Stripe Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Start Stripe webhook forwarding:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook/stripe
   ```

3. **Use test card numbers:**
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC

4. **Test the flow:**
   - Click "Get Started" on a package
   - Accept terms and conditions
   - Click "Pay Now"
   - You should be redirected to Stripe Checkout
   - Complete payment with test card
   - Verify redirect to success page
   - Check webhook events in Stripe CLI

### Test Calendly Integration

1. Click any "Book a Discovery Call" button
2. Verify Calendly opens in a new tab
3. Test booking a time slot (you can cancel it later)

---

## Deployment

### Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel:**
   - Go to your project in Vercel Dashboard
   - Settings → Environment Variables
   - Add all variables from `.env.local`
   - Remember to use production keys/values

4. **Update Stripe webhook:**
   - Add production webhook endpoint: `https://yourdomain.com/api/webhook/stripe`
   - Update `STRIPE_WEBHOOK_SECRET` with production signing secret

### Other Platforms

For Netlify, Railway, or other platforms:
1. Add environment variables through their dashboard
2. Ensure `NEXT_PUBLIC_*` variables are set at build time
3. Configure the webhook URL with your production domain

---

## File Structure

```
/workspaces/ai-agents-edisontkp/
├── .env.local                          # Local environment variables (gitignored)
├── .env.example                        # Template for environment variables
├── app/
│   ├── api/
│   │   ├── create-checkout-session/
│   │   │   └── route.ts               # Stripe checkout session API
│   │   └── webhook/
│   │       └── stripe/
│   │           └── route.ts           # Stripe webhook handler
│   └── success/
│       └── page.tsx                   # Post-payment success page
├── components/
│   ├── CalendlyButton.tsx             # Calendly integration button
│   └── PaymentModal.tsx               # Stripe payment modal
├── config/
│   └── content.ts                     # Configuration including Stripe & Calendly
└── lib/
    └── stripe.ts                      # Stripe utility functions
```

---

## Troubleshooting

### Stripe Issues

**Issue: "Price ID not configured for this package"**
- Verify all `NEXT_PUBLIC_STRIPE_PRICE_*` variables are set
- Check that Price IDs match those in Stripe Dashboard
- Restart your dev server after adding environment variables

**Issue: Webhook signature verification failed**
- Ensure `STRIPE_WEBHOOK_SECRET` is correct
- Verify webhook endpoint URL matches your configuration
- Check that raw body is being parsed correctly

**Issue: Redirect not working**
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Check browser console for errors
- Ensure Stripe.js is loading correctly

### Calendly Issues

**Issue: Link not opening**
- Verify `NEXT_PUBLIC_CALENDLY_URL` is set correctly
- Check for browser popup blockers
- Ensure URL format is correct (https://calendly.com/username/event)

---

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use test keys** for development
3. **Rotate keys** periodically
4. **Validate webhook signatures** (already implemented)
5. **Use HTTPS** in production
6. **Restrict API key permissions** in Stripe Dashboard
7. **Monitor webhook failures** in Stripe Dashboard

---

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Calendly API Documentation](https://developer.calendly.com/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## Support

For issues or questions:
- Email: hello@edisontkp.com
- Check Stripe Dashboard logs
- Review webhook event details
- Check browser console for client-side errors
