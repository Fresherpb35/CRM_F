export const validateLogin = (values) => {
  const errors = {};

  // UserID validation
  if (!values.userId) {
    errors.userId = 'User ID is required';
  } else if (values.userId.length < 3) {
    errors.userId = 'User ID must be at least 3 characters';
  } else if (!/^[a-zA-Z0-9_]+$/.test(values.userId)) {
    errors.userId = 'User ID can only contain letters, numbers, and underscores';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

export const validateSignup = (values) => {
  const errors = {};

  // First name validation
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  // Last name validation
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  // Age validation
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (values.age < 18) {
    errors.age = 'You must be at least 18 years old';
  } else if (values.age > 100) {
    errors.age = 'Please enter a valid age';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
    errors.password = 'Password must contain uppercase, lowercase, and number';
  }

  // Confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Employee ID validation
  if (!values.employeeId) {
    errors.employeeId = 'Employee ID is required';
  } else if (values.employeeId.length < 3) {
    errors.employeeId = 'Employee ID must be at least 3 characters';
  }

  // Department validation
  if (!values.department) {
    errors.department = 'Department is required';
  }

  // Date of joining validation
  if (!values.dateOfJoining) {
    errors.dateOfJoining = 'Date of joining is required';
  }

  return errors;
};





export default function SignUpForm({ onSubmit, isLoading }) {
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      employeeId: '',
      department: '',
      dateOfJoining: ''
    },
    validateSignup,
    onSubmit
  );

  const handlePasswordConfirmChange = (e) => {
    handleChange(e);
    setShowPasswordCheck(
      e.target.value === values.password && e.target.value !== ''
    );
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {/* First Name */}
          <div className="w-full">
            <input
              type="text"
              name="firstName"
              placeholder="Enter First name"
              value={values.firstName}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.firstName && (
              <span className="text-red-400 text-sm mt-1 block">{errors.firstName}</span>
            )}
          </div>
          
          {/* Last Name */}
          <div className="w-full">
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last name"
              value={values.lastName}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.lastName && (
              <span className="text-red-400 text-sm mt-1 block">{errors.lastName}</span>
            )}
          </div>

          {/* Age */}
          <div className="w-full">
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={values.age}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.age && (
              <span className="text-red-400 text-sm mt-1 block">{errors.age}</span>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-1 block">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.password && (
              <span className="text-red-400 text-sm mt-1 block">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handlePasswordConfirmChange}
              disabled={isLoading}
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {showPasswordCheck && !errors.confirmPassword && (
              <div className="absolute right-3 top-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-fadeIn">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
            {errors.confirmPassword && (
              <span className="text-red-400 text-sm mt-1 block">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Employee ID */}
          <div className="w-full">
            <input
              type="text"
              name="employeeId"
              placeholder="Enter Employee ID"
              value={values.employeeId}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.employeeId && (
              <span className="text-red-400 text-sm mt-1 block">{errors.employeeId}</span>
            )}
          </div>

          {/* Department */}
          <div className="w-full">
            <input
              type="text"
              name="department"
              placeholder="Enter Department"
              value={values.department}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.department && (
              <span className="text-red-400 text-sm mt-1 block">{errors.department}</span>
            )}
          </div>

          {/* Date of Joining */}
          <div className="w-full">
            <input
              type="text"
              name="dateOfJoining"
              placeholder="Enter Date of joining"
              value={values.dateOfJoining}
              onChange={handleChange}
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = 'text';
              }}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {errors.dateOfJoining && (
              <span className="text-red-400 text-sm mt-1 block">{errors.dateOfJoining}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 mt-6 bg-purple-400 hover:bg-purple-500 text-indigo-900 font-bold text-lg rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Loading...
            </span>
          ) : 'SIGN UP'}
        </button>
      </form>

      <p className="text-white text-center text-sm">
        Already have an account?{' '}
        <Link 
          href="/login" 
          className="font-semibold hover:underline cursor-pointer"
        >
          Login here!
        </Link>
      </p>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a855f7;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9333ea;
        }
      `}</style>
    </div>
  );
}