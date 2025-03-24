// import { useState, useEffect } from "react";
// import { quizData } from "../../data/questions.js";
// import QuizPage from "./QuizPage";
// import headerLogo from "../../assets/branding/db-logo-header.svg";
// import X from "../../assets/branding/X.svg";
// import Brentwood from "../../assets/branding/Brentwood.svg";
// import dateArt from "../../assets/branding/final-date.svg";
// import heart from "../../assets/branding/heart-progress.svg";

// const Quiz = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [results, setResults] = useState(null);

//   const handleSelect = (questionId, value) => {
//     setUserAnswers((prev) => ({
//       ...prev,
//       [questionId]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < quizData.questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       // Show loading before calculating results
//       setIsLoading(true);

//       // Simulate a loading time (you can adjust this)
//       setTimeout(() => {
//         calculateResults();
//         setIsCompleted(true);
//         setIsLoading(false);
//       }, 2000); // 2 seconds loading time
//     }
//   };

//   const calculateResults = () => {
//     // Tally up the scores for each love language
//     const scores = {
//       physicalTouch: 0,
//       qualityTime: 0,
//       wordsAffirmation: 0,
//       actsService: 0,
//       gifts: 0,
//     };

//     // Sum up all the values from user answers
//     Object.values(userAnswers).forEach((answer) => {
//       scores.physicalTouch += answer.physicalTouch;
//       scores.qualityTime += answer.qualityTime;
//       scores.wordsAffirmation += answer.wordsAffirmation;
//       scores.actsService += answer.actsService;
//       scores.gifts += answer.gifts;
//     });

//     // Find the dominant love language
//     let dominantLanguage = Object.keys(scores).reduce((a, b) =>
//       scores[a] > scores[b] ? a : b
//     );

//     // Get the corresponding cookie type
//     const cookieResult = quizData.resultMapping[dominantLanguage]?.primary;
    
//     // Add error handling in case the result mapping doesn't exist
//     if (!cookieResult) {
//       console.error("Could not find result mapping for", dominantLanguage);
//       // Set a default result or handle the error appropriately
//       setResults({
//         title: "Result Not Found",
//         description: "We couldn't determine your match at this time. Please try again later.",
//         about: "There was an issue processing your results."
//       });
//       return;
//     }
    
//     const cookieDetails = quizData.resultCategories?.find(
//       (category) => category.id === cookieResult
//     );
    
//     // Add error handling in case the result category isn't found
//     if (!cookieDetails) {
//       console.error("Could not find result category with ID:", cookieResult);
//       // Set a default result or handle the error appropriately
//       setResults({
//         title: "Result Not Found",
//         description: "We couldn't determine your perfect match at this time. Please try again later.",
//         about: "There was an issue processing your results."
//       });
//       return;
//     }

//     setResults(cookieDetails);
//   };

//   // Loading screen component
//   const LoadingScreen = () => (
//     <div className="absolute inset-x-0 top-0 h-36">
//       <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
//         <div className="flex items-center justify-center">
//           <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
//           <img src={X} className="w-4 mx-1" alt="X" />
//           <img src={Brentwood} className="w-26" alt="Brentwood" />
//         </div>
//         <div className="header-container relative mt-4">
//           <div className="w-full h-2.5 bg-[#E6D9C3] rounded-full relative">
//             <div className="absolute top-1/2 right-0.5 transform -translate-y-1/2">
//               <img
//                 src={heart}
//                 alt=""
//                 className="w-4 h-4 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 bg-[#14316C] flex flex-col items-center justify-start px-6 pt-10 pb-16 text-[#F6EAD5]">
//         <h2 className="text-5xl mb-4 mt-36">
//           We've <br /> found your <br /> perfect <br /> match...
//         </h2>
//         <div className="-mt-18">
//           <img src={dateArt} className="w-full" alt="Date illustration" />
//         </div>
//       </div>
//     </div>
//   );

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   if (isCompleted && results) {
//     return (
//       <div className="results-container text-white">
//         <h1>Your Results</h1>
//         <h2>{results.title}</h2>
//         <p>{results.description}</p>
//         <div className="about-section">
//           <h3>About You</h3>
//           <p>{results.about}</p>
//         </div>
//         {/* Display other result information as needed */}
//       </div>
//     );
//   }

//   return (
//     <QuizPage
//       question={quizData.questions[currentQuestionIndex]}
//       onNext={handleNext}
//       onSelect={handleSelect}
//       currentQuestionIndex={currentQuestionIndex}
//     />
//   );
// };

// export default Quiz;

import { useState, useEffect } from "react";
import { quizData } from "../../data/questions.js";
import QuizPage from "./QuizPage";
import headerLogo from "../../assets/branding/db-logo-header.svg";
import X from "../../assets/branding/X.svg";
import Brentwood from "../../assets/branding/Brentwood.svg";
import dateArt from "../../assets/branding/final-date.svg";
import heart from "../../assets/branding/heart-progress.svg";
import Results from "./Results";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      // Show loading before calculating results
      setIsLoading(true);

      // Simulate a loading time (you can adjust this)
      setTimeout(() => {
        calculateResults();
        setIsCompleted(true);
        setIsLoading(false);
      }, 2000); // 2 seconds loading time
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
    const cookieResult = quizData.resultMapping[dominantLanguage]?.primary;

    // Add error handling in case the result mapping doesn't exist
    if (!cookieResult) {
      console.error("Could not find result mapping for", dominantLanguage);
      // Set a default result or handle the error appropriately
      setResults({
        title: "Result Not Found",
        description:
          "We couldn't determine your match at this time. Please try again later.",
        about: "There was an issue processing your results.",
      });
      return;
    }

    const cookieDetails = quizData.resultCategories?.find(
      (category) => category.id === cookieResult
    );

    // Add error handling in case the result category isn't found
    if (!cookieDetails) {
      console.error("Could not find result category with ID:", cookieResult);
      // Set a default result or handle the error appropriately
      setResults({
        title: "Result Not Found",
        description:
          "We couldn't determine your perfect match at this time. Please try again later.",
        about: "There was an issue processing your results.",
      });
      return;
    }

    setResults(cookieDetails);
  };

  // Loading screen component
  const LoadingScreen = () => (
    <div className="absolute inset-x-0 top-0 h-36">
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
          <img src={X} className="w-4 mx-1" alt="X" />
          <img src={Brentwood} className="w-26" alt="Brentwood" />
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

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isCompleted && results) {
    return (
      // <div className="results-container text-white">
      //   <h1>Your Results</h1>
      //   <h2>{results.title}</h2>
      //   <p>{results.description}</p>
      //   <div className="about-section">
      //     <h3>About You</h3>
      //     <p>{results.about}</p>
      //   </div>
      //   {/* Display other result information as needed */}
      // </div>
      <Results/>
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