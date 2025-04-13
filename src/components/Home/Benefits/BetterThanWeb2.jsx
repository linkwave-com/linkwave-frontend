import React, { useState } from 'react';
import './BetterThanWeb2.css';

const BetterThanWeb2 = () => {
  const [copied, setCopied] = useState(false);

  const codeText = `<div id="linkwave-subscribe"></div>\n<script src="https://cdn.linkwave.app/widget.js"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="better-web2">
      <div className="content">
        <div className="text-block">
          <h2>Better than Web2 payments</h2>
          <ul>
            <li><span className="icon">✔</span> Say goodbye to high transaction fees</li>
            <li><span className="icon">✔</span> No more dealing with chargebacks</li>
            <li><span className="icon">✔</span> No bank or card needed</li>
          </ul>
        </div>
        <div className="code-block">
          <div className="window-bar">
            <span></span><span></span><span></span>
          </div>
          <pre>
            <code>
              <span className="token-tag">&lt;div</span>{' '}
              <span className="token-attr-name">id=</span>
              <span className="token-attr-value">"linkwave-subscribe"</span>
              <span className="token-tag">&gt;&lt;/div&gt;</span>{'\n'}
              <span className="token-tag">&lt;script</span>{' '}
              <span className="token-attr-name">src=</span>
              <span className="token-attr-value">"https://cdn.linkwave.app/widget.js"</span>
              <span className="token-tag">&gt;&lt;/script&gt;</span>
            </code>
          </pre>
          <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </section>
  );
};

export default BetterThanWeb2;
