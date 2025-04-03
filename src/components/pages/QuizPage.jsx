import { useState, useEffect } from "react";
import headerLogo from "../../assets/branding/db-logo-header.svg";
import quizBG from "../../assets/branding/quiz-bg.svg";
import { Button } from "../ui/button";

const QuizPage = ({ question, onNext, onSelect, currentQuestionIndex }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [question.id]); // This will trigger whenever the question.id changes

  // Get position class based on currentQuestionIndex
  const getDotPositionClass = () => {
    // Map question index to specific Tailwind position classes
    const positions = [
      "left-3/10", // First question (index 0)
      "left-4/10", // Second question (index 1)
      "left-5/10", // Third question (index 2)
      "left-6/10", // Fourth question (index 3)
      "left-7/10", // Fifth question (index 4)
      "left-8/10", // Sixth question (index 5)
      "left-9/10", // Seventh question (index 6)
      "left-10/10", // Eighth question (index 7)
    ];

    // Return the appropriate position class or default to left-3/10
    return positions[currentQuestionIndex] || "left-3/10";
  };

  const handleOptionClick = (optionId, value) => {
    setSelectedOption(optionId);
    onSelect(question.id, value);
  };

  console.log(getDotPositionClass());
  return (
    <div className="bg-[#F6EAD5] absolute inset-x-0 top-0 h-36">
      {/* Header */}
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
        </div>
        <div className="header-container relative mt-4">
          <div className="w-full h-2.5 bg-[#E6D9C3] rounded-full relative">
            {/* Dynamic dot position with hardcoded classes */}
            <div
              className={`absolute top-1/2 ${getDotPositionClass()} w-2 h-2 bg-[#14316C] rounded-full transform -translate-y-1/2`}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 bg-[#14316C] flex flex-col items-center px-6 pt-8 pb-16 text-white relative min-h-screen"
        style={{
          backgroundImage: `url(${quizBG})`,
          backgroundSize: "125% 125%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: 0,
        }}
      >
        <p className="!text-3xl mb-4 text-center font-normal text-[#FED5F5]">
          Question {question.id}
        </p>

        <p className="secondary-font !text-l mb-5 w-80 text-center font-semibold">
          {question.text}
        </p>

        <div className="w-full flex flex-col items-center gap-2 mb-10">
          {question.options.map((option, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center cursor-pointer w-full max-w-md"
              onClick={() => handleOptionClick(index + 1, option.value)}
            >
              <div className="flex items-center">
                {/* Circle part */}
                <div
                  className={`w-16 h-16 rounded-full z-10 flex-shrink-0 overflow-hidden border-4 bg-[#14316C] flex items-center justify-center text-3xl font-extrabold text-[#FED5F5] ${
                    selectedOption === index + 1
                      ? "border-[#C4B8A3]"
                      : "border-[#F6EAD5]"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Rectangle part - adjusted to overlap with circle */}
                <div
                  className={`h-14 w-80 flex items-center text-center rounded-2xl pl-8 pr-6 transition-colors duration-200 ${
                    selectedOption === index + 1
                      ? "bg-[#C4B8A3]"
                      : "bg-[#F6EAD5]"
                  }`}
                  style={{ marginLeft: "-40px" }}
                >
                  <span className="secondary-font !text-s font-semibold text-[#14316C] ml-4">
                    {option.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="secondary-font w-48 h-16 !rounded-2xl !border-5 !border-[#FED5F5] text-[#FED5F5] hover:text-[#FEB7EE]  !text-2xl !font-extrabold !bg-[#14316C] !hover:bg-[#14316C]"
          onClick={onNext}
          disabled={selectedOption === null}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
