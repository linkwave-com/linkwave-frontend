import React from 'react';
import './PricingSection.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Up to 100 subscribers',
      '1.5% fee per transaction',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$99/mo',
    features: [
      'Up to 1,500 subscribers',
      '1.2% fee per transaction',
      'Retry logic, dashboard, API'
    ],
    badge: 'Most popular'
  },
  {
    name: 'Enterprise',
    price: '$299/mo',
    features: [
      'Unlimited subscribers',
      '0.9% fee per transaction',
      'Priority support, SLA'
    ]
  }
];

const PricingSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (planName) => {
    navigate(`/pricing?highlight=${encodeURIComponent(planName)}`);
  };

  return (
    <section className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div className="pricing-card" key={i}>
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button className="learn-more" onClick={() => handleLearnMore(plan.name)}>
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;