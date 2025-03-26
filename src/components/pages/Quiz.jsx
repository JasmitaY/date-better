import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { quizData } from "../../data/questions.js";
import QuizPage from "./QuizPage";
import headerLogo from "../../assets/branding/db-logo-header.svg";
import dateArt from "../../assets/branding/final-date.svg";
import heart from "../../assets/branding/heart-progress.svg";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Extract allergies from location state or default to empty object
  const allergies = location.state?.allergies || {
    cashews: false,
    peanuts: false,
    almonds: false,
    hazelnuts: false,
  };

  const handleSelect = (questionId, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Show loading before calculating results
      setIsLoading(true);

      // Simulate a loading time
      setTimeout(() => {
        calculateResults();
        setIsCompleted(true);
        setIsLoading(false);
      }, 2000);
    }
  };

  const calculateResults = () => {
    // Tally up the scores for each love language
    const scores = {
      physicalTouch: 0,
      qualityTime: 0,
      wordsAffirmation: 0,
      actsService: 0,
      gifts: 0,
    };

    // Sum up all the values from user answers
    Object.values(userAnswers).forEach((answer) => {
      scores.physicalTouch += answer.physicalTouch;
      scores.qualityTime += answer.qualityTime;
      scores.wordsAffirmation += answer.wordsAffirmation;
      scores.actsService += answer.actsService;
      scores.gifts += answer.gifts;
    });

    // Find the dominant love language
    let dominantLanguage = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    // Hardcoded result mapping (you might want to move this to quizData)
    const resultMapping = {
      physicalTouch: "hazelnutPraline",
      qualityTime: "snickerdoodle",
      wordsAffirmation: "cashewLime",
      actsService: "peanutButter",
      gifts: "almondJava",
    };

    // Get the corresponding cookie type
    const cookieResult = resultMapping[dominantLanguage];

    // If no result found, default to first result
    const availableResults = quizData.resultCategories.filter((category) => {
      // Check if any allergic nuts are in the ingredients
      const hasAllergenicNut = category.ingredients.some(
        (ingredient) => allergies[ingredient.name.toLowerCase()] === true
      );
      return !hasAllergenicNut;
    });

    // If all results are filtered out, use the original result
    const finalResults =
      availableResults.length > 0
        ? availableResults.find((category) => category.id === cookieResult) ||
          availableResults[0]
        : quizData.resultCategories.find(
            (category) => category.id === cookieResult
          );

    if (!finalResults) {
      console.error("Could not find result category with ID:", cookieResult);
      setResults({
        title: "Result Not Found",
        description:
          "We couldn't determine your perfect match at this time. Please try again later.",
        about: "There was an issue processing your results.",
      });
      return;
    }

    setResults(finalResults);
  };

  // Loading screen component
  const LoadingScreen = () => (
    <div className="absolute inset-x-0 top-0 h-36">
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
        </div>
        <div className="header-container relative mt-4">
          <div className="w-full h-2.5 bg-[#E6D9C3] rounded-full relative">
            <div className="absolute top-1/2 right-0.5 transform -translate-y-1/2">
              <img src={heart} alt="" className="w-4 h-4 object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#14316C] flex flex-col items-center justify-start px-6 pt-10 pb-16 text-[#F6EAD5]">
        <h2 className="text-5xl mb-4 mt-36">
          We've <br /> found your <br /> perfect <br /> match...
        </h2>
        <div className="-mt-18">
          <img src={dateArt} className="w-full" alt="Date illustration" />
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (isCompleted && results) {
      // Navigate to the results page with the specific result ID
      navigate(`/results/${results.id}`);
    }
  }, [isCompleted, results, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QuizPage
      question={quizData.questions[currentQuestionIndex]}
      onNext={handleNext}
      onSelect={handleSelect}
      currentQuestionIndex={currentQuestionIndex}
    />
  );
};

export default Quiz;