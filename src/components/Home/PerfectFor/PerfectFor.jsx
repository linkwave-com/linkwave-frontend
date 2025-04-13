import React from 'react';
import './PerfectFor.css';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    emoji: '🌍',
    title: 'Global Services',
    description: 'Banking blocked or unreliable? Crypto subscriptions work wherever the internet works.',
    plan: 'Enterprise'
  },
  {
    emoji: '🛠️',
    title: 'Solo Devs & Indie Projects',
    description: 'Offer premium features or paywalled content without backend pain.',
    plan: 'Basic'
  },
  {
    emoji: '🚀',
    title: 'Startups & SaaS Tools',
    description: 'Let users subscribe in USDC — no banks, no chargebacks, global reach.',
    plan: 'Pro'
  },
  {
    emoji: '📰',
    title: 'Creators & Communities',
    description: 'Newsletters, groups, digital goods? Accept crypto from anyone, anywhere.',
    plan: 'Pro'
  },
  {
    emoji: '🕶️',
    title: 'Privacy Tools',
    description: 'No more billing data leaks. Great for VPNs, browsers & more.',
    plan: 'Pro'
  },
  {
    emoji: '🧠',
    title: 'AI Tools & Bots',
    description: 'Offer crypto-based subscriptions for access to models, automation tools, or AI agents.',
    plan: 'Enterprise'
  }
];

const PerfectFor = () => {
  const navigate = useNavigate();

  const handleClick = (plan) => {
    navigate(`/pricing?highlight=${encodeURIComponent(plan)}`);
  };

  return (
    <section className="perfect-for">
      <h2>Where we can be useful</h2>
      <p className="how-it-works-subtitle">
        Whether you're building, creating, or scaling — LinkWave makes subscriptions easier, smarter, and borderless.
      </p>
      <div className="card-grid">
        {cards.map((card, i) => (
          <div className="card" key={i} onClick={() => handleClick(card.plan)}>
            <h3><span className="emoji">{card.emoji}</span> {card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfectFor;
