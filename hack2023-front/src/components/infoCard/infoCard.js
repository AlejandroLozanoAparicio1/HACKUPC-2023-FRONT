import React from 'react';

const InfoCard = ({ roomType, features, score, caption }) => {
  return (
    <div className="info-card">
      <h2>{roomType}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div>
        Score: {score}
      </div>
      <div>
        Caption: {caption}
      </div>
    </div>
  );
};

export default InfoCard;
