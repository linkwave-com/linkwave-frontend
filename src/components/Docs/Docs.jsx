import React, { useEffect } from 'react';
import './DocsPage.css';

const DocsPage = () => {
  useEffect(() => {
    document.title = 'LinkWave — Documentation';
  }, []);

  return (
    <div className="docs-container">
      <h1>📚 Documentation Coming Soon</h1>
      <p>
        We're currently building an open, developer-friendly API to empower seamless crypto subscriptions.
        Our full documentation will be available very soon.
      </p>
      <p>
        Stay tuned — and if you're building something with LinkWave already, we'd love to hear from you at{' '}
        <a href="mailto:info@link-wave.com">info@link-wave.com</a>.
      </p>
    </div>
  );
};

export default DocsPage;
