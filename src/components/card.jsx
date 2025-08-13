import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-8 max-w-md w-full mx-auto ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;
