export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br
 from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
      {/* Background Image with 25% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/images/bg-image.jpg')"
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000" />
      </div>

      {/* Login/Signup Card */}
      <div className="relative z-10 w-full max-w-sm mx-4 animate-fadeIn">
        <div className="">---
          {/* Logo Circle */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-gray-800 font-bold text-sm">App logo</div>
                <div className="text-gray-600 text-xs">and</div>
                <div className="text-gray-800 font-bold text-sm">tagline</div>
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Welcome User!
          </h1>

          {/* Children (Form) */}
          {children}
        </div>
      </div>
    </div>
  );
}