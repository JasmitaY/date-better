// import React, { useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { quizData } from "../../data/questions.js";
// // import lightDB from "../../assets/branding/light-db-logo.svg";
// import resultBG from "../../assets/branding/result-bg.svg";

// const ResultsDetailed = () => {
//   const { resultId } = useParams();
//   const [currentSection, setCurrentSection] = useState(0);
//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);

//   // Find cookie data based on resultId
//   const resultData =
//     quizData.resultCategories.find((result) => result.id === resultId) ||
//     quizData.resultCategories[0];

//   // Touch event handlers for swipe
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX.current && touchEndX.current) {
//       const diffX = touchStartX.current - touchEndX.current;

//       if (Math.abs(diffX) > 50) {
//         if (diffX > 0) {
//           handleSwipeLeft();
//         } else {
//           handleSwipeRight();
//         }
//       }

//       touchStartX.current = null;
//       touchEndX.current = null;
//     }
//   };

//   // Swipe handlers for results page
//   const handleSwipeLeft = () => {
//     if (currentSection === 0) {
//       setCurrentSection(1);
//     } else if (currentSection === 1) {
//       setCurrentSection(2);
//     }
//   };

//   const handleSwipeRight = () => {
//     if (currentSection === 2) {
//       setCurrentSection(1);
//     } else if (currentSection === 1) {
//       setCurrentSection(0);
//     }
//   };

//   // Sections configuration for results page
//   const sections = [
//     {
//       title: "About",
//       content: (
//         <div
//           className="h-full"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="p-6 text-center">
//             <p className="text-[#692800] text-4xl pt-25">About</p>
//             <p className="text-[#692800] text-center pt-3 text-xl secondary-font font-semibold space-x-20 space-y-6 whitespace-pre-line">
//               {resultData.about}
//             </p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Ingredients",
//       content: (
//         <div
//           className="h-full"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="p-6">
//             <p className="text-[#692800] text-4xl pt-5">Ingredients</p>
//             <ul className="space-y-4">
//               {resultData.ingredients.map((ingredient, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between text-lg"
//                 >
//                   <div className="flex items-center text-[#692800] secondary-font font-semibold">
//                     <img
//                       src={ingredient.icon}
//                       alt={ingredient.name}
//                       className="w-20 h-20 -mb-13"
//                     />
//                     <span className="flex-grow -mb-13 ml-3 ">
//                       {ingredient.name}
//                     </span>
//                   </div>
//                   {ingredient.organic && (
//                     <img
//                       src={resultData.organicImage}
//                       alt="organic"
//                       className="-mb-13"
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Date Idea",
//       content: (
//         <div
//           className="h-full"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="p-6">
//             <p className="text-4xl text-[#692800] pt-5">Date Idea</p>
//             <h3 className="text-lg text-center mb-6 text-[#692800] secondary-font font-semibold whitespace-pre-line pt-2">
//               {resultData.dateIdea.title}
//             </h3>
//             <div className="flex justify-center items-center w-full h-[250px]">
//               <img
//                 src={resultData.dateIdea.image}
//                 alt="Date idea"
//                 className="!w-full !h-[1000px] object-contain rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-[#F6EAD5] absolute inset-0 flex flex-col">
//       {/* Header */}
//       <div
//         className="pt-18 pb-6 px-6 flex flex-col items-center relative"
//         style={{
//           backgroundColor: resultData.primaryColor,
//         }}
//       >
//         <div className="flex items-center justify-center">
//           <img
//             src={resultData.dbLogo}
//             className="w-20 mr-2"
//             alt="Date Better logo"
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div
//         className="bg-[#692800] flex-1 flex flex-col items-center justify-center px-6 py-10 text-white overflow-hidden relative"
//         style={{
//           backgroundImage: `url(${resultBG})`,
//           backgroundSize: "110% 110%",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         <h3 className="text-3xl text-center mb-4 whitespace-pre-line">
//           {resultData.title}
//         </h3>
//         <div className="w-screen relative overflow-hidden flex space-x-5 items-center ml-30">
//           <div
//             className="flex transition-transform duration-300 ease-in-out w-3/4"
//             style={{
//               transform: `translateX(-${currentSection * 100}%)`,
//             }}
//           >
//             {sections.map((section, index) => (
//               <div key={index} className="w-full flex-shrink-0 px-2">
//                 <div className="bg-[#F5E6D3] rounded-2xl h-[500px] overflow-hidden shadow-lg">
//                   {section.content}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsDetailed;

import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { quizData } from "../../data/questions.js";
import resultBG from "../../assets/branding/result-bg.svg";

const ResultsDetailed = () => {
  const { resultId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Find cookie data based on resultId
  const resultData =
    quizData.resultCategories.find((result) => result.id === resultId) ||
    quizData.resultCategories[0];

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diffX = touchStartX.current - touchEndX.current;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          handleSwipeLeft();
        } else {
          handleSwipeRight();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  // Swipe handlers for results page
  const handleSwipeLeft = () => {
    if (currentSection === 0) {
      setCurrentSection(1);
    } else if (currentSection === 1) {
      setCurrentSection(2);
    }
  };

  const handleSwipeRight = () => {
    if (currentSection === 2) {
      setCurrentSection(1);
    } else if (currentSection === 1) {
      setCurrentSection(0);
    }
  };

  // Sections configuration for results page
  const sections = [
    {
      title: "About",
      content: (
        <div
          className="h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-6 text-center">
            <p className="text-[#692800] text-4xl pt-25">About</p>
            <p className="text-[#692800] text-center pt-3 text-xl secondary-font font-semibold space-x-20 space-y-6 whitespace-pre-line">
              {resultData.about}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Ingredients",
      content: (
        <div
          className="h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-6">
            <p className="text-[#692800] text-4xl pt-5">Ingredients</p>
            <ul className="space-y-4">
              {resultData.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-lg"
                >
                  <div className="flex items-center text-[#692800] secondary-font font-semibold">
                    <img
                      src={ingredient.icon}
                      alt={ingredient.name}
                      className="w-20 h-20 -mb-13"
                    />
                    <span className="flex-grow -mb-13 ml-3 ">
                      {ingredient.name}
                    </span>
                  </div>
                  {ingredient.organic && (
                    <img
                      src={resultData.organicImage}
                      alt="organic"
                      className="-mb-13"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Date Idea",
      content: (
        <div
          className="h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-6">
            <p className="text-4xl text-[#692800] pt-5">Date Idea</p>
            <h3 className="text-lg text-center mb-6 text-[#692800] secondary-font font-semibold whitespace-pre-line pt-2">
              {resultData.dateIdea.title}
            </h3>
            <div className="flex justify-center items-center w-full h-[250px]">
              <img
                src={resultData.dateIdea.image}
                alt="Date idea"
                className="!w-full !h-[1000px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F6EAD5] absolute inset-0 flex flex-col">
      {/* Header */}
      <div
        className="pt-18 pb-6 px-6 flex flex-col items-center relative"
        style={{
          backgroundColor: resultData.primaryColor,
        }}
      >
        <div className="flex items-center justify-center">
          <img
            src={resultData.dbLogo}
            className="w-20 mr-2"
            alt="Date Better logo"
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="bg-[#692800] flex-1 flex flex-col items-center justify-center px-2 py-10 text-white overflow-hidden relative"
        style={{
          backgroundImage: `url(${resultBG})`,
          backgroundSize: "110% 110%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-3xl text-center mb-4 whitespace-pre-line">
          {resultData.title}
        </h3>
        <div className="w-full relative overflow-hidden flex items-center justify-center">
          <div
            className="flex transition-transform duration-300 ease-in-out w-[90%] max-w-md"
            style={{
              transform: `translateX(-${currentSection * 100}%)`,
            }}
          >
            {sections.map((section, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-[#F5E6D3] rounded-2xl h-[500px] overflow-hidden shadow-lg">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDetailed;
