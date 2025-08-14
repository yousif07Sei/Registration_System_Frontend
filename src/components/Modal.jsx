import React, { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'success',
  autoClose = true,
  autoCloseTime = 3000, // 3 seconds default
  position = 'top-right' // top-right, top-left, bottom-right, bottom-left
}) => {
  // Auto-close functionality
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, autoCloseTime, onClose]);

  if (!isOpen) return null;

  // Position classes
  const positions = {
    'top-right': 'top-20 right-4',
    'top-left': 'top-20 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  // Color schemes based on type
  const colorSchemes = {
    success: {
      bgGradient: 'bg-gradient-to-r from-green-400 to-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-white',
      messageColor: 'text-green-50',
      progressBg: 'bg-green-200',
      icon: '✅'
    },
    error: {
      bgGradient: 'bg-gradient-to-r from-red-400 to-red-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      titleColor: 'text-white',
      messageColor: 'text-red-50',
      progressBg: 'bg-red-200',
      icon: '❌'
    },
    warning: {
      bgGradient: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      titleColor: 'text-white',
      messageColor: 'text-yellow-50',
      progressBg: 'bg-yellow-200',
      icon: '⚠️'
    },
    info: {
      bgGradient: 'bg-gradient-to-r from-blue-400 to-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-white',
      messageColor: 'text-blue-50',
      progressBg: 'bg-blue-200',
      icon: 'ℹ️'
    }
  };

  const scheme = colorSchemes[type] || colorSchemes.success;

  // Animation styles
  const animationStyles = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    transition: 'all 0.3s ease-out'
  };

  return (
    <>
      {/* Toast Notification - NO backdrop, positioned in corner */}
      <div 
        className={`fixed ${positions[position]} z-50 max-w-sm w-full mx-4`}
        style={animationStyles}
      >
        <div className={`${scheme.bgGradient} rounded-xl shadow-lg border border-white border-opacity-20`}>
          {/* Header */}
          <div className="flex items-start p-4 gap-3">
            {/* Icon */}
            <div className={`${scheme.iconBg} rounded-full p-2 flex-shrink-0`}>
              <span className={`text-lg ${scheme.iconColor}`}>
                {scheme.icon}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className={`text-sm font-semibold ${scheme.titleColor} mb-1`}>
                {title}
              </h3>
              <p className={`text-xs ${scheme.messageColor} leading-relaxed`}>
                {message}
              </p>
            </div>
          </div>

          {/* Auto-close progress bar */}
          {autoClose && (
            <div className="px-4 pb-2">
              <div className={`w-full ${scheme.progressBg} rounded-full h-1 opacity-50`}>
                <div 
                  className="bg-white h-1 rounded-full"
                  style={{
                    width: '100%',
                    animation: `shrink-${Date.now()} ${autoCloseTime}ms linear forwards`
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inject CSS for progress bar animation */}
      {autoClose && (
        <style>
          {`
            @keyframes shrink-${Date.now()} {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}
        </style>
      )}
    </>
  );
};

export default Modal;