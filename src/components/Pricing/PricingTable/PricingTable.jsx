import React, { useEffect, useState, useRef } from 'react';
import './PricingTable.css';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    audience: 'Individuals, indie hackers',
    features: [
      'Basic subscription link',
      'QR code support',
      'Solana payments',
      'Up to 3k$ monthly turnover',
    ],
    fee: '1.5%',
  },
  {
    name: 'Pro',
    price: '$199/month',
    audience: 'Growing startups & SaaS teams',
    features: [
      'Everything in Starter',
      'Dashboard & analytics',
      'API access',
      '50k$ monthly turnover',
    ],
    fee: '0.8%',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    audience: 'Scale-ups & large platforms',
    features: [
      'Everything in Pro',
      'Individual branding & onboarding',
      'Priority support, SLA',
      'Unlimited subscribers',
      'Custom features'
    ],
    fee: 'Custom',
  },
];

export default function PricingTable({ highlightPlan }) {
  const [highlighted, setHighlighted] = useState(null);
  const tableRef = useRef();
  const rowRefs = useRef({});

  useEffect(() => {
    if (highlightPlan) {
      setHighlighted(highlightPlan);

      const isMobile = window.innerWidth < 768;

      const scrollTarget = isMobile
        ? rowRefs.current[highlightPlan]
        : tableRef.current;

      if (scrollTarget) {
        const offsetTop = scrollTarget.getBoundingClientRect().top + window.scrollY;
        const adjustedTop = offsetTop - 100;

        window.scrollTo({
          top: adjustedTop,
          behavior: 'smooth',
        });
      }

      const timer = setTimeout(() => setHighlighted(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightPlan]);

  return (
    <div className="pricing-table-wrapper" ref={tableRef}>
      <h2>Choose the plan that fits your growth</h2>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Who it's for</th>
            <th>Monthly Fee</th>
            <th>Features Included</th>
            <th>Fee per Transaction</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((plan, i) => (
            <tr
              key={i}
              ref={(el) => (rowRefs.current[plan.name] = el)}
              className={highlighted === plan.name ? 'highlight-glow' : ''}
            >
              <td className="plan-name">
                {plan.name}
                {plan.badge && (
                  <span className="plan-badge">{plan.badge}</span>
                )}
              </td>
              <td data-label="Who it's for">{plan.audience}</td>
              <td data-label="Monthly Fee">{plan.price}</td>
              <td data-label="Features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </td>
              <td data-label="Fee per Transaction">
                <strong>{plan.fee}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
