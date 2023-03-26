import React from 'react';
import './syncro.css';

function SyncroCard() {
  return (
    <div className="syncro-card">
      <div className="syncro-card-body">
        <p className="syncro-card-title"></p>
        <div className="syncro-progress-stepped">
          <div
            className="syncro-progress-stepped-item"
            data-id="progress-stepped-item-0-0"
            style={{ width: '85.4167%', backgroundColor: 'rgb(24, 29, 98)' }}
          >
            82
          </div>
          <div
            className="syncro-progress-stepped-item"
            data-id="progress-stepped-item-0-1"
            style={{ width: '14.5833%', backgroundColor: 'rgba(24, 29, 98, 0.7)'}}
          >
            14
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyncroCard;
