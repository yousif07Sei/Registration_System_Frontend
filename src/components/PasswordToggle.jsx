import React, { useState } from 'react';

const PasswordToggle = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  minLength,
  autoComplete,
  className = "",
  disabled = false,
  onFocus,
  onBlur,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          minLength={minLength}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed ${
            error
              ? 'border-red-300 focus:ring-red-200 focus:border-red-500'
              : 'border-gray-300'
          } ${className}`}
        />
        
        <div 
          className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 cursor-pointer"
          onClick={togglePasswordVisibility}
          style={{ 
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '12px',
            cursor: 'pointer',
            zIndex: '10'
          }}
        >
          <span style={{ fontSize: '18px', color: '#6b7280' }}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>
      
      {error && (
        <div className="mt-1 sm:mt-2">
          <p className="text-xs sm:text-sm text-red-600 flex items-start">
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 mt-0.5 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="leading-relaxed">{error}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PasswordToggle;