import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto ${className}`}>
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;