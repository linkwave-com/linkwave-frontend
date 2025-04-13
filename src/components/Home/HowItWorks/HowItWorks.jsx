import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: '',
    x: 0,
    y: 0
  });

  const steps = [
    {
      title: 'Add our widget to your site',
      description: 'Just copy & paste a snippet of code. No backend needed.',
      tooltip: 'It’s like embedding a YouTube video. You don’t need to touch your backend at all.'
    },
    {
      title: 'Customers subscribe with crypto',
      description: 'They can pay in stablecoins using wallets like Phantom or MetaMask.',
      tooltip: 'Supports Solana and TrustWallet. Your users pick what they trust.'
    },
    {
      title: 'Receive payments automatically',
      description: 'Funds arrive in your wallet with no middlemen or delays.',
      tooltip: 'No banks, no approval queues, no 3-day settlements. Just instant finality.'
    }
  ];

  const showTooltip = (e, content) => {
    const offset = 12;
    setTooltip({
      visible: true,
      content,
      x: e.clientX + offset,
      y: e.clientY + offset
    });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="how-it-works-subtitle">
        A 3-step flow to enable Web3 subscriptions with zero backend hassle.
      </p>
      <div className="steps">
        {steps.map((step, i) => (
          <div
            className="step-card"
            key={i}
            onMouseEnter={(e) => showTooltip(e, step.tooltip)}
            onMouseMove={(e) => showTooltip(e, step.tooltip)}
            onMouseLeave={hideTooltip}
          >
            <div className="step-badge">{i + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      {tooltip.visible && (
        <div
          className="tooltip visible"
          style={{ top: tooltip.y + 'px', left: tooltip.x + 'px' }}
        >
          <div className="tooltip-content">{tooltip.content}</div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
