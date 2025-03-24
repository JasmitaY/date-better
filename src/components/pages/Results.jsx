// import React, { useState, useRef, useEffect } from "react";

// import snickerdoodle from "../../assets/cookie/snickerdoodle.svg";
// import hazelnutPraline from "../../assets/cookie/hazelnut-praline.svg";
// import cashewLime from "../../assets/cookie/cashew-lime.svg";
// import peanutButter from "../../assets/cookie/peanut-butter.svg";
// import almondJava from "../../assets/cookie/almond-java.svg";

// import almond from "../../assets/ingredients/almond.svg";
// import caneSugar from "../../assets/ingredients/cane-sugar.svg";
// import cashew from "../../assets/ingredients/cashew.svg";
// import cinnamon from "../../assets/ingredients/cinnamon.svg";
// import citricAcid from "../../assets/ingredients/citric-acid.svg";
// import cocoaButter from "../../assets/ingredients/cocoa-butter.svg";
// import cocoaMass from "../../assets/ingredients/cocoa-mass.svg";
// import cocoaNibs from "../../assets/ingredients/cocoa-nibs.svg";
// import coconut from "../../assets/ingredients/coconut.svg";
// import darkChocolate from "../../assets/ingredients/dark-chocolate.svg";
// import date from "../../assets/ingredients/date.svg";
// import espresso from "../../assets/ingredients/espresso-beans.svg";
// import hazelnut from "../../assets/ingredients/hazelnut.svg";
// import limeJuice from "../../assets/ingredients/lime-juice.svg";
// import limeOil from "../../assets/ingredients/lime-oil.svg";
// import peanut from "../../assets/ingredients/peanut.svg";
// import seaSalt from "../../assets/ingredients/sea-salt.svg";
// import quinoa from "../../assets/ingredients/quinoa.svg";
// import vanilla from "../../assets/ingredients/vanilla.svg";

// import letter from "../../assets/dates/letter.svg";
// import stargazing from "../../assets/dates/stargazing.svg";
// import thrifting from "../../assets/dates/thrifting.svg";
// import baking from "../../assets/dates/baking.svg";
// import roadTrip from "../../assets/road-trip.svg";

// const Results = ({ resultId }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const scrollRef = useRef(null);
//   const [resultData, setResultData] = useState(null);

//   // Find cookie data based on resultId
//   useEffect(() => {
//     if (resultId) {
//       const matchingResult = quizData.resultCategories.find(
//         (result) => result.id === resultId
//       );
//       setResultData(matchingResult || quizData.resultCategories[0]); // Default to first if not found
//     } else {
//       // If no resultId is provided, use the first result as default
//       setResultData(quizData.resultCategories[0]);
//     }
//   }, [resultId]);

//   // Scroll handler for the tabs
//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     if (scrollRef.current) {
//       const scrollAmount = index * scrollRef.current.offsetWidth;
//       scrollRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Handle scroll event to update active tab
//   const handleScroll = (e) => {
//     if (scrollRef.current) {
//       const scrollPosition = e.target.scrollLeft;
//       const tabWidth = scrollRef.current.offsetWidth;
//       const newActiveTab = Math.round(scrollPosition / tabWidth);
//       if (newActiveTab !== activeTab) {
//         setActiveTab(newActiveTab);
//       }
//     }
//   };

//   if (!resultData) {
//     return (
//       <div className="text-center p-8">
//         Loading your perfect cookie match...
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col max-w-md mx-auto bg-black h-full">
//       {/* Header with brand logo */}
//       <div className="bg-pink-200 p-4">
//         <div className="flex justify-center items-center">
//           <img
//             src="/images/date-better-logo.png"
//             alt="DATE BETTER"
//             className="h-6 mr-2"
//           />
//           <span className="text-brown-800 font-bold">X Brentwood</span>
//         </div>
//       </div>

//       {/* Cookie info */}
//       <div className="bg-pink-200 p-6">
//         <h1 className="text-brown-800 text-3xl font-bold text-center mb-6">
//           {resultData.title}
//         </h1>

//         <div className="flex justify-center mb-8">
//           <img
//             src={resultData.cookieImage || "/images/default-cookie.png"}
//             alt={resultData.title}
//             className="w-48 h-48 object-contain"
//           />
//         </div>

//         <p className="text-brown-800 text-center mb-8">
//           {resultData.description}
//         </p>

//         <div className="flex justify-center mb-8">
//           <button className="bg-brown-800 text-cream-100 px-6 py-2 rounded-full font-medium">
//             View Compatibility
//           </button>
//         </div>

//         <div className="flex justify-center space-x-6">
//           {Object.keys(resultData.socialMedia).map((platform, index) => (
//             <a
//               key={platform}
//               href={resultData.socialMedia[platform]}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-100"
//             >
//               {platform === "instagram" && "📷"}
//               {platform === "twitter" && "🐦"}
//               {platform === "facebook" && "📘"}
//               {platform === "pinterest" && "📌"}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Tab navigation */}
//       <div className="flex border-b bg-brown-800 text-cream-100">
//         <button
//           className={`flex-1 py-4 text-center font-medium ${
//             activeTab === 0 ? "border-b-2 border-cream-100" : ""
//           }`}
//           onClick={() => handleTabClick(0)}
//         >
//           About
//         </button>
//         <button
//           className={`flex-1 py-4 text-center font-medium ${
//             activeTab === 1 ? "border-b-2 border-cream-100" : ""
//           }`}
//           onClick={() => handleTabClick(1)}
//         >
//           Ingredients
//         </button>
//         <button
//           className={`flex-1 py-4 text-center font-medium ${
//             activeTab === 2 ? "border-b-2 border-cream-100" : ""
//           }`}
//           onClick={() => handleTabClick(2)}
//         >
//           Date Idea
//         </button>
//       </div>

//       {/* Scrollable content */}
//       <div
//         className="flex overflow-x-auto scrollbar-hide flex-1"
//         ref={scrollRef}
//         onScroll={handleScroll}
//         style={{ scrollSnapType: "x mandatory" }}
//       >
//         {/* About section */}
//         <div
//           className="min-w-full p-6 bg-brown-800 flex-shrink-0 h-full"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <div className="bg-cream-100 rounded-lg p-6 h-full">
//             <h2 className="text-2xl font-bold text-brown-800 text-center mb-6">
//               About
//             </h2>
//             <p className="text-brown-800 text-center">{resultData.about}</p>
//           </div>
//         </div>

//         {/* Ingredients section */}
//         <div
//           className="min-w-full p-6 bg-brown-800 flex-shrink-0 h-full"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <div className="bg-cream-100 rounded-lg p-6 h-full">
//             <h2 className="text-2xl font-bold text-brown-800 text-center mb-6">
//               Ingredients
//             </h2>
//             <ul className="space-y-3">
//               {resultData.ingredients.map((ingredient, index) => (
//                 <li key={index} className="flex items-center text-brown-800">
//                   <span className="mr-3 text-lg">{ingredient.icon}</span>
//                   <span>{ingredient.name}</span>
//                   {ingredient.organic && (
//                     <span className="ml-2 text-pink-500 text-sm">
//                       ○ Organic
//                     </span>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Date Idea section */}
//         <div
//           className="min-w-full p-6 bg-brown-800 flex-shrink-0 h-full"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <div className="bg-cream-100 rounded-lg p-6 h-full">
//             <h2 className="text-2xl font-bold text-brown-800 text-center mb-4">
//               Date Idea
//             </h2>
//             <h3 className="text-lg font-medium text-brown-800 text-center mb-6">
//               "{resultData.dateIdea.title}"
//             </h3>
//             <div className="flex justify-center">
//               <img
//                 src={
//                   resultData.dateIdea.image || "/images/default-date-idea.png"
//                 }
//                 alt="Date idea"
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Results;

// import React, { useState } from "react";
// import { quizData } from "../../data/questions.js";
// import headerLogo from "../../assets/branding/db-logo-header.svg";
// import X from "../../assets/branding/X.svg";
// import Brentwood from "../../assets/branding/Brentwood.svg";

// const Results = ({ resultId }) => {
//   const [currentScreen, setCurrentScreen] = useState(0);

//   // Find cookie data based on resultId
//   const resultData =
//     quizData.resultCategories.find((result) => result.id === resultId) ||
//     quizData.resultCategories[0];

//   // Screens array to match the design
//   const screens = [
//     {
//       title: "Home",
//       content: (
//         <div className="bg-cream-100 h-full flex flex-col items-center justify-start pt-6">
//           <img
//             src={resultData.cookieImage}
//             alt={resultData.title}
//             className="w-64 mb-6"
//           />
//           <h1 className="text-3xl font-bold mb-4">{resultData.title}</h1>
//           <p className="text-lg mb-8 text-center px-6">{resultData.description}</p>
//           <button 
//             onClick={() => setCurrentScreen(1)}
//             className="bg-brown-800 text-cream-100 px-6 py-2 rounded-full font-medium"
//           >
//             View Compatibility
//           </button>
//           <div className="flex justify-center space-x-6 mt-8">
//             {Object.entries(resultData.socialMedia).map(([platform, link]) => (
//               <a
//                 key={platform}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-100"
//               >
//                 {platform === "instagram" && "📷"}
//                 {platform === "tiktok" && "🎵"}
//                 {platform === "website" && "🌐"}
//               </a>
//             ))}
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "About",
//       content: (
//         <div className="bg-cream-100 h-full overflow-y-auto">
//           <div className="p-6">
//             <h2 className="text-2xl font-bold text-center mb-6">About</h2>
//             <p className="text-center text-lg mb-6">{resultData.about}</p>
            
//             <h3 className="text-xl font-bold text-center mb-4">Ingredients</h3>
//             <ul className="space-y-4 mb-6">
//               {resultData.ingredients.map((ingredient, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between text-lg"
//                 >
//                   <div className="flex items-center">
//                     <span className="mr-4 text-2xl">{ingredient.icon}</span>
//                     <span>{ingredient.name}</span>
//                   </div>
//                   {ingredient.organic && (
//                     <span className="text-pink-500 text-sm">Organic</span>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <h3 className="text-xl font-bold text-center mb-4">Date Idea</h3>
//             <div className="text-center mb-6">
//               <h4 className="text-lg font-medium mb-4">"{resultData.dateIdea.title}"</h4>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={resultData.dateIdea.image}
//                   alt="Date idea"
//                   className="max-w-full max-h-64 object-contain rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-[#F6EAD5] fixed inset-0 flex flex-col">
//       {/* Header */}
//       <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 flex flex-col items-center">
//         <div className="flex items-center justify-center">
//           <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
//           <img src={X} className="w-4 mx-1" alt="X" />
//           <img src={Brentwood} className="w-26" alt="Brentwood" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-[#14316C] flex flex-col items-center justify-start px-6 pt-10 pb-16 text-white overflow-hidden">
//         <div
//           className="w-full h-full"
//           style={{
//             transform: `translateX(-${currentScreen * 100}%)`,
//             display: "flex",
//             transition: "transform 0.3s ease",
//           }}
//         >
//           {screens.map((screen, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0 rounded-t-3xl overflow-y-auto"
//             >
//               {screen.content}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2 pb-4 bg-[#F6EAD5]">
//         {screens.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentScreen(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentScreen === index ? "bg-brown-800" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Results;

import React, { useState } from "react";
import { quizData } from "../../data/questions.js";
import headerLogo from "../../assets/branding/db-logo-header.svg";
import X from "../../assets/branding/X.svg";
import Brentwood from "../../assets/branding/Brentwood.svg";

const Results = ({ resultId }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Find cookie data based on resultId
  const resultData =
    quizData.resultCategories.find((result) => result.id === resultId) ||
    quizData.resultCategories[0];

  // Screens array to match the design
  const screens = [
    {
      title: "Home",
      content: (
        <div className="bg-cream-100 h-full flex flex-col items-center justify-start pt-6">
          <img
            src={resultData.cookieImage}
            alt={resultData.title}
            className="absolute inset-x-0 -bottom-1/4 w-auto h-3/4 "
          />
          <h1 className="text-3xl font-bold mb-4">{resultData.title}</h1>
          <p className="text-lg mb-8 text-center px-6">
            {resultData.description}
          </p>
          <button
            onClick={() => setCurrentScreen(1)}
            className="bg-brown-800 text-cream-100 px-6 py-2 rounded-full font-medium"
          >
            View Compatibility
          </button>
          <div className="flex justify-center space-x-6 mt-8">
            {Object.entries(resultData.socialMedia).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-100"
              >
                {platform === "instagram" && "📷"}
                {platform === "tiktok" && "🎵"}
                {platform === "website" && "🌐"}
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div className="bg-cream-100 h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">About</h2>
            <p className="text-center text-lg mb-6">{resultData.about}</p>

            <h3 className="text-xl font-bold text-center mb-4">Ingredients</h3>
            <ul className="space-y-4 mb-6">
              {resultData.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-lg"
                >
                  <div className="flex items-center">
                    <span className="mr-4 text-2xl">{ingredient.icon}</span>
                    <span>{ingredient.name}</span>
                  </div>
                  {ingredient.organic && (
                    <span className="text-pink-500 text-sm">Organic</span>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-center mb-4">Date Idea</h3>
            <div className="text-center mb-6">
              <h4 className="text-lg font-medium mb-4">
                "{resultData.dateIdea.title}"
              </h4>
              <div className="flex justify-center mb-4">
                <img
                  src={resultData.dateIdea.image}
                  alt="Date idea"
                  className="max-w-full max-h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F6EAD5] fixed inset-0 flex flex-col">
      {/* Header */}
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
          <img src={X} className="w-4 mx-1" alt="X" />
          <img src={Brentwood} className="w-26" alt="Brentwood" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#14316C] flex flex-col items-center justify-start px-6 pt-10 pb-16 text-white overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            transform: `translateX(-${currentScreen * 100}%)`,
            display: "flex",
            transition: "transform 0.3s ease",
          }}
        >
          {screens.map((screen, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 rounded-t-3xl overflow-y-auto"
            >
              {screen.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 pb-4 bg-[#F6EAD5]">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScreen(index)}
            className={`w-3 h-3 rounded-full ${
              currentScreen === index ? "bg-brown-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;