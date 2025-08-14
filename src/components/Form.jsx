import React from 'react';

const Form = ({
  title,
  fields,
  onSubmit,
  error,
  isLoading,
  submitText = 'Submit',
  footerContent,
  buttonClass = 'bg-blue-600 hover:bg-blue-700 text-white'
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800">
          {title}
        </h2>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
          <p className="text-red-600 text-sm sm:text-base text-center">{error}</p>
        </div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            {field.label && (
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                {field.label}
              </label>
            )}
            {field.customInput ? (
              field.customInput
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onInvalid={field.onInvalid}
                onInput={field.onInput}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition-colors ${field.className || ''}`}
                disabled={field.disabled}
              />
            )}
          </div>
        ))}
        
        <button
          type="submit"
          className={`w-full py-2 sm:py-3 px-4 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] ${buttonClass}`}
          disabled={isLoading}
        >
          {isLoading ? `${submitText}...` : submitText}
        </button>
        
        {footerContent && (
          <div className="text-xs sm:text-sm text-center text-gray-500 pt-2">
            {footerContent}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;