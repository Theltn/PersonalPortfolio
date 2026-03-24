import React, { useState, useEffect } from 'react';

const QuoteWidget = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError('Failed to fetch quote. ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="card callout" style={{ marginTop: '20px' }}>
      <h3 className="section-title">Motivational Quote</h3>
      
      {loading && <p>Loading quote...</p>}
      
      {error && (
        <p style={{ color: '#ff6f1a' }}>{error}</p>
      )}
      
      {!loading && !error && quote && (
        <blockquote>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{quote.quote}"</p>
          <footer className="muted" style={{ marginTop: '10px' }}>— {quote.author}</footer>
          {lastUpdated && (
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '8px', opacity: 0.8 }}>
              Last updated: {lastUpdated}
            </div>
          )}
        </blockquote>
      )}

      <div className="callout__actions">
        <button className="btn btn--primary" onClick={fetchQuote} disabled={loading}>
          Inspire Me
        </button>
      </div>
    </div>
  );
};

export default QuoteWidget;
