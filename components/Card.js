import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
        <button type="button" href="/" className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}
