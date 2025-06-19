import { useNavigate } from "react-router";

const OnboardingWizard = () => {
  const navigate = useNavigate();
  const handleStartJourney = () => {
    console.log("Start Your Journey clicked");
    navigate("/onboarding-wizard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 py-3 md:px-20 md:py-5">
      {/* Orange Container with responsive sizing */}
      <div
        className="flex-1 bg-orange-50  rounded-3xl shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#F5F1E8" }}
      >
        {/* Content Container */}
        <div className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 md:p-8">
          {/* Logo Section - Left aligned */}
          <div className="flex items-center mb-6 sm:mb-8">
            <div
              className="bg-purple-900 p-2 rounded-lg mr-2"
              style={{ backgroundColor: "#5D1A1F" }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div
              className="text-purple-900 font-bold text-xs"
              style={{ color: "#5D1A1F" }}
            >
              <div>MOMPRENEURS</div>
              <div>MATCH</div>
            </div>
          </div>

          {/* Chat Bubble - Positioned at left side below logo */}
          <div className="mb-6 sm:mb-[-30px]  z-50 relative">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Chat Bubble */}
              <div className="bg-white rounded-2xl rounded-tl-sm p-3 sm:p-4 shadow-lg max-w-xs lg:max-w-sm border">
                <p className="text-xs sm:text-sm" style={{ color: "#5D1A1F" }}>
                  &quot;Welcome! I&apos;m here to help you take the first step .
                  Ready to unlock{" "}
                  <span className="font-semibold">Mompreneur journey</span>{" "}
                  towards your personalized recommendations?&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative flex flex-col items-center">
            {/* Image - Centered and smaller */}
            <div className="relative mb-8 sm:mb-12">
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mompreneur working at home"
                  className="w-80 h-64 sm:w-96 sm:h-80 lg:w-[450px] lg:h-[300px] object-cover rounded-2xl shadow-lg"
                />
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-8 w-8 h-8 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-2 -right-8 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-80"></div>
              </div>
            </div>

            {/* Main Heading and Content - Centered below image */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                style={{ color: "#5D1A1F" }}
              >
                Your Journey to Mompreneur Success Starts Here
              </h1>
              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
                style={{ color: "#5D1A1F" }}
              >
                Our AI-powered wizard helps you connect with the perfect
                partners and mentors. Share your vision, skills, and
                availability to unlock tailored recommendations.
              </p>

              {/* Start Journey Button */}
              <button
                onClick={handleStartJourney}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "#C8A8C8",
                  color: "#5D1A1F",
                  border: "none",
                }}
              >
                <span>Start Your Journey</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 sm:mt-16 text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Your Mompreneur Match Journey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
