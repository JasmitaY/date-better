import { useState } from "react";
import { quizData } from "../../data/questions.js";
import QuizPage from "./QuizPage";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);

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
      // Calculate results
      calculateResults();
      setIsCompleted(true);
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

    // Get the corresponding cookie type
    const cookieResult = quizData.resultMapping[dominantLanguage].primary;
    const cookieDetails = quizData.resultCategories.find(
      (category) => category.id === cookieResult
    );

    setResults(cookieDetails);
  };

  if (isCompleted && results) {
    return (
      <div className="results-container text-white">
        <h1>Your Results</h1>
        <h2>{results.title}</h2>
        <p>{results.description}</p>
        <div className="about-section">
          <h3>About You</h3>
          <p>{results.about}</p>
        </div>
        {/* Display other result information as needed */}
      </div>
    );
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
