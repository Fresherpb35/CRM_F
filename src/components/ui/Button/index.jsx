export default function Button({ 
  children, 
  type = 'button', 
  onClick, 
  variant = 'primary', 
  isLoading = false,
  disabled,
  className = ''
}) {
  const variants = {
    primary: 'bg-[#BFA7FF] hover:bg-[#A98CFF] text-white font-semibold',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-[#BFA7FF] text-[#BFA7FF] hover:bg-[#BFA7FF]/10'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={` 
        py-4 px-6 text-lg rounded-[35px] transition-all duration-200
        shadow-lg hover:shadow-2xl transform hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:scale-100 disabled:hover:shadow-lg
        ${variants[variant]}
        ${className}
      `}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" cy="12" r="10" 
              stroke="currentColor" strokeWidth="4" fill="none"
            />
            <path 
              className="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}
