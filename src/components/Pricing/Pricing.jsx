import React, { useEffect } from 'react';
import PricingTable from './PricingTable/PricingTable';
import { useLocation } from 'react-router-dom';

const PricingPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const highlightPlan = params.get('highlight');

  useEffect(() => {
    document.title = 'LinkWave — Pricing';
  }, []);

  return (
    <div style={{ padding: '0 20px' }}>
      <PricingTable highlightPlan={highlightPlan} />
    </div>
  );
};

export default PricingPage;


