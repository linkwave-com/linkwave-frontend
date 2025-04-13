import React, { useEffect, useRef, useState } from 'react';
import './Roadmap.css';

const milestones = [
    {
      label: 'Foundation',
      title: 'Q4 2025: Foundation (Let’s make it work)',
      description: [
        'Launch simple, reliable crypto subscriptions',
        'Remove setup friction: plug-and-play tools',
        'Focus on stability, speed, and real use cases'
      ],
      index: 0
    },
    {
      label: 'Growth',
      title: 'Q1 2026: Growth (Make it useful for more people)',
      description: [
        'Add business dashboards & white-label features',
        'Enable more stablecoins and wallet types',
        'Translate and adapt the product'
      ],
      index: 0.33
    },
    {
      label: 'Power Tools',
      title: 'Q3 2026: Power Tools (Let’s get smart)',
      description: [
        'Introduce flexible billing logic',
        'Explore DeFi rewards, staking, and ecosystem add-ons'
      ],
      index: 0.66
    },
    {
      label: 'Vision Realized',
      title: '2027 and beyond: Vision Realized (Make it feel like magic)',
      description: [
        'Wallet-only access, no email needed',
        'Token-gated content & NFTs',
        'Invisible crypto – so smooth, it feels like magic'
      ],
      index: 0.95
    }
  ];  

export default function Roadmap() {
  const pathRef = useRef();
  const [points, setPoints] = useState([]);
  const [activePoint, setActivePoint] = useState(null);

  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const newPoints = milestones.map(m => {
      const point = path.getPointAtLength(totalLength * m.index);
      return { ...m, x: point.x, y: point.y };
    });

    setPoints(newPoints);
  }, []);

  useEffect(() => {
    document.title = 'LinkWave — Project Roadmap';
  }, []);

  return (
    <div className="roadmap-container">
      <h2>Project Roadmap</h2>
      <p className="how-it-works-subtitle">
      Click on any point in the roadmap to explore what’s coming next.
      Each milestone unlocks powerful new features and possibilities.
      </p>
      <svg width="100%" height="300" viewBox="0 0 1400 300" className="wave-svg">
        <path
          ref={pathRef}
          d="M50,150 C250,100 550,200 750,150 S1150,100 1350,150"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
        />
        {points.map((p, i) => (
          <g key={i} className="milestone" onClick={() => setActivePoint(p)}>
            <circle cx={p.x} cy={p.y} r="12" className="milestone-dot" />
            <text x={p.x} y={p.y - 20} className="milestone-label">{p.label}</text>
          </g>
        ))}
      </svg>

      {activePoint && (
        <div className="milestone-details">
        <h3>{activePoint.title}</h3>
            <ul>
                {activePoint.description.map((line, i) => (<li key={i}>{line}</li>))}
            </ul>
        </div>
    )}
    </div>
  );
}
