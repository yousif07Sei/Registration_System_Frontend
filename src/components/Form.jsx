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
    <div className="space-y-6">
      {title && <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>}
      
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            {field.label && (
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none ${field.className || ''}`}
                disabled={field.disabled}
              />
            )}
          </div>
        ))}
        
        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${buttonClass}`}
          disabled={isLoading}
        >
          {isLoading ? `${submitText}...` : submitText}
        </button>
        
        {footerContent && (
          <div className="text-sm text-center text-gray-500">
            {footerContent}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;