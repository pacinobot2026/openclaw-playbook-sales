export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white text-gray-900 p-12 rounded-2xl shadow-2xl">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the OpenClaw Automation Playbook!
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Your purchase was successful. Check your email for access details and next steps.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6 text-left">
            <h2 className="font-bold text-xl mb-3">What Happens Next:</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ You'll receive a welcome email within 5 minutes</li>
              <li>✅ Your login credentials for the course platform</li>
              <li>✅ Access to the private community</li>
              <li>✅ Details about your first weekly group call</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg text-left">
            <h2 className="font-bold text-xl mb-3">🚀 Get Started Now:</h2>
            <p className="text-gray-700 mb-3">
              Don't wait for the email! You can start Module 1 right now:
            </p>
            <a 
              href="https://app.coursesprout.com/login" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Access Your Course →
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Questions? Email support@nicelysupport.com
          </p>
        </div>
      </div>
    </div>
  );
}
