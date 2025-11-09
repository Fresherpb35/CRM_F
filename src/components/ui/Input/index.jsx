export default function Input({ 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange, 
  error, 
  disabled,
  className = ''
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-3 rounded-xl bg-white text-gray-800 
          placeholder-gray-500 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-400
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-2 border-red-500 focus:ring-red-400' : ''}
          ${className}
        `}
      />
      {error && (
        <span className="text-red-400 text-sm mt-1 block animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
}