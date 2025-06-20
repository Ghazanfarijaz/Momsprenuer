import { useState } from "react";
import { useNavigate } from "react-router";

const SkillsNeededPage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const handleSkillToggle = (skillId) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleBack = () => {
    console.log("Back button clicked");
    navigate("/skills-selection");
  };

  const handleNext = () => {
    console.log("Selected needed skills:", selectedSkills);
  };

  const skills = [
    {
      id: "business-planning",
      title: "Business Planning",
      icon: "📢",
      description: "Crafting comprehensive business strategies.",
    },
    {
      id: "market-research",
      title: "Market Research",
      icon: "💰",
      description: "Identifying market trends and customer needs.",
    },
    {
      id: "product-development",
      title: "Product Development",
      icon: "</> ",
      description: "Bringing new offerings to life.",
    },
    {
      id: "growth-hacking",
      title: "Growth Hacking",
      icon: "🎨",
      description: "Rapidly scaling user acquisition and retention.",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: "📊",
      description: "Online promotion and campaign management.",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      icon: "👥",
      description: "Developing engaging written and visual content.",
    },
    {
      id: "social-media-mgmt",
      title: "Social Media Mgmt.",
      icon: "📚",
      description: "Building community and brand presence online.",
    },
    {
      id: "sales-optimization",
      title: "Sales Optimization",
      icon: "⚙️",
      description: "Improving conversion and revenue generation.",
    },
    {
      id: "brand-building",
      title: "Brand Building",
      icon: "📈",
      description: "Establishing a strong and recognizable brand identity.",
    },
    {
      id: "financial-mgmt",
      title: "Financial Mgmt.",
      icon: "💻",
      description: "Budgeting, forecasting, and financial health.",
    },
    {
      id: "legal-compliance",
      title: "Legal & Compliance",
      icon: "💡",
      description: "Navigating regulations and legal aspects.",
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: "☁️",
      description: "Organizing and executing projects efficiently.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 py-3 md:px-20 md:py-5">
      {/* Orange Container with responsive sizing */}
      <div
        className="flex-1 bg-orange-50 rounded-3xl shadow-lg transition-all duration-300"
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

          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12">
            <div className="flex justify-center mb-2">
              <span
                className="text-sm font-medium"
                style={{ color: "#5D1A1F" }}
              >
                Step 3 of 5
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
              <div
                className="h-2 rounded-full"
                style={{
                  backgroundColor: "#5D1A1F",
                  width: "60%",
                }}
              ></div>
            </div>
          </div>

          {/* Chat Bot Avatar */}
          <div className="flex justify-start mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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

          {/* Main Content */}
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: "#5D1A1F" }}
            >
              What Skills Do You Need?
            </h1>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#5D1A1F" }}
            >
              Let us know what kind of support or expertise you&apos;re looking
              for within the community.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {skills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => handleSkillToggle(skill.id)}
                className={`cursor-pointer border-2 rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-lg ${
                  selectedSkills.includes(skill.id)
                    ? "border-purple-900 bg-white shadow-lg"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                style={{
                  borderColor: selectedSkills.includes(skill.id)
                    ? "#5D1A1F"
                    : undefined,
                }}
              >
                {/* Icon */}
                <div className="text-2xl sm:text-3xl mb-3">{skill.icon}</div>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base font-semibold mb-2 sm:mb-3"
                  style={{ color: "#5D1A1F" }}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#5D1A1F" }}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8 sm:mb-12">
            <button
              onClick={handleBack}
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:opacity-90 border-2"
              style={{
                backgroundColor: "transparent",
                color: "#5D1A1F",
                borderColor: "#C8A8C8",
              }}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#C8A8C8",
                color: "#5D1A1F",
                border: "none",
              }}
            >
              Next
            </button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Your Mompreneur Match Journey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsNeededPage;
