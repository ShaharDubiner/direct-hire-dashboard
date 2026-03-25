'use client'

import { useState } from 'react'

type Billing = 'monthly' | 'quarterly'

interface Plan {
  name: string
  desc: string
  badge?: string
  popular?: boolean
  price: Record<Billing, string>
  original: Record<Billing, string>
  billing: Record<Billing, string>
  cta: 'primary' | 'dark'
  features: string[]
}

const plans: Plan[] = [
  {
    name: 'Basic',
    desc: 'For basic features to kickstart your job search efficiency',
    badge: 'Save 38%',
    price:    { monthly: '$6.99',  quarterly: '$4.33' },
    original: { monthly: '$10.00/monthly', quarterly: '$6.99/monthly' },
    billing:  { monthly: '', quarterly: 'BILLED QUARTERLY, $12.99' },
    cta: 'dark',
    features: ['50 Auto Apply per month', '10 Resume Credits'],
  },
  {
    name: 'Pro',
    desc: 'Unlock advanced AI capacities, maximize your job hunting success',
    popular: true,
    price:    { monthly: '$15.99', quarterly: '$9.99' },
    original: { monthly: '$25.99/monthly', quarterly: '$15.99/monthly' },
    billing:  { monthly: '', quarterly: 'BILLED QUARTERLY, $29.99' },
    cta: 'primary',
    features: ['150 Auto Apply per month', '50 Resume Credits'],
  },
  {
    name: 'Pro+',
    desc: 'Unlock advanced AI capacities, maximize your job hunting success',
    badge: 'Save 50%',
    price:    { monthly: '$29.99', quarterly: '$14.99' },
    original: { monthly: '$59.99/monthly', quarterly: '$29.99/monthly' },
    billing:  { monthly: '', quarterly: 'BILLED QUARTERLY, $44.99' },
    cta: 'dark',
    features: ['300 Auto Apply per month', '150 Resume Credits'],
  },
]

const checkSrc = 'https://www.figma.com/api/mcp/asset/f035ec8e-2e24-43d2-8d2f-bf8d1d0f9b00'

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section className="pricing" id="pricing">
      <div className="container">

        <div className="section-header section-header--center">
          <p className="section-label">✦ Pricing</p>
          <h2 className="section-title">
            We've got a plan that's{' '}
            <span className="text-accent-underline">Perfect</span>{' '}
            for you
          </h2>
        </div>

        <div className="pricing-toggle">
          <button
            className={`toggle-btn${billing === 'monthly' ? ' toggle-btn--active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn${billing === 'quarterly' ? ' toggle-btn--active' : ''}`}
            onClick={() => setBilling('quarterly')}
          >
            Quarterly <span className="toggle-save">Save up to 50%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card scroll-fade${plan.popular ? ' plan-card--featured' : ''}`}
            >
              {plan.popular && <div className="plan-popular">⚡ Most Popular (Save 38%)</div>}
              {plan.badge   && <span className="plan-badge">{plan.badge}</span>}

              <p className="plan-name">{plan.name}</p>
              <p className="plan-desc">{plan.desc}</p>

              <div className="plan-price">
                <span className="plan-amount">{plan.price[billing]}</span>
                <div>
                  <span className="plan-original">{plan.original[billing]}</span>
                  {plan.billing[billing] && (
                    <span className="plan-billing">{plan.billing[billing]}</span>
                  )}
                </div>
              </div>

              <button className={`btn btn-${plan.cta} plan-cta`}>Get started</button>

              <div className="plan-features">
                <p className="plan-features-label">Features</p>
                <p className="plan-features-note">Everything in our free plan plus...</p>
                <ul className="plan-list">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className="plan-check">
                        <img src={checkSrc} alt="" width="12" height="12" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
