import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../../data/questions.js";
import lightDB from "../../assets/branding/light-db-logo.svg";

const ResultsLanding = () => {
  const { resultId } = useParams();
  const navigate = useNavigate();

  // Find cookie data based on resultId
  const resultData =
    quizData.resultCategories.find((result) => result.id === resultId) ||
    quizData.resultCategories[0];

  return (
    <div className="bg-[#F6EAD5] fixed inset-0 flex flex-col">
      {/* Header */}
      <div className="pt-25 pb-6 px-6 flex flex-col items-center relative bg-[#692800]">
        <div className="flex items-center justify-center">
          <img src={lightDB} className="w-20 mr-2" alt="Date Better logo" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 text-center relative">
        <h1 className="text-[#692800] !text-4xl font-bold mt-10 mb-10 whitespace-pre-line">
          {resultData.title}
        </h1>

        <img
          src={resultData.cookieImage}
          alt={resultData.title}
          className="max-w-[210%] max-h-[210%] object-contain"
        />

        <div className="absolute top-150 left-0 right-0 transform -translate-y-1/2 px-6">
          <div
            className="mb-6 max-w-md mx-auto whitespace-pre-line"
            style={{
              color: resultData.textColor,
            }}
          >
            <p className="text-2xl secondary-font font-semibold">
              {resultData.description}
            </p>
          </div>

          <button
            onClick={() => navigate(`/results/${resultId}/detailed`)}
            className="relative secondary-font mb-6 w-64 h-16 !rounded-2xl !border-5 !text-xl !font-bold !bg-transparent hover:!bg-transparent"
            style={{
              border: `5px solid ${resultData.textColor}`,
              color: resultData.textColor,
              position: "relative",
              zIndex: 10,
            }}
          >
            View Compatibility
          </button>

          <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-4">
            <a
              href={resultData.socialMedia.instagramLink}
              className="text-[#692800 pt-1"
            >
              <img
                src={resultData.socialMedia.instagramLogo}
                className="pt-20"
              />
            </a>
            <a
              href={resultData.socialMedia.tiktokLink}
              className="text-[#692800] pt-1"
            >
              <img src={resultData.socialMedia.tiktokLogo} className="pt-20" />
            </a>
            <a
              href={resultData.socialMedia.websiteLink}
              className="text-[#692800]"
            >
              <img src={resultData.socialMedia.websiteLogo} className="pt-20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsLanding;
