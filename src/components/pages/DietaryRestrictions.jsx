import { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/branding/db-logo-header.svg";
import { Button } from "../ui/button";

// Import nut images
import cashewsImg from "../../assets/branding/cashews.svg";
import peanutsImg from "../../assets/branding/peanuts.svg";
import almondsImg from "../../assets/branding/almonds.svg";
import hazelnutsImg from "../../assets/branding/hazelnuts.svg";

function DietaryRestrictions() {
  const navigate = useNavigate();
  const [allergies, setAllergies] = useState({
    cashews: false,
    peanuts: false,
    almonds: false,
    hazelnuts: false,
  });

  const handleAllergiesChange = (allergyName) => {
    setAllergies((prev) => ({
      ...prev,
      [allergyName]: !prev[allergyName],
    }));
  };

  const handleNext = () => {
    // Get selected allergies
    const selectedAllergies = Object.entries(allergies)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);

    navigate("/quiz", {
      state: {
        allergies: {
          cashews: allergies.cashews,
          peanuts: allergies.peanuts,
          almonds: allergies.almonds,
          hazelnuts: allergies.hazelnuts,
        },
      },
    });

    console.log("Selected allergies:", selectedAllergies);

  };

  return (
    <div className="bg-[#F6EAD5] absolute inset-x-0 top-0 h-36">
      {/* Header */}
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
        </div>
        <div className="header-container relative mt-4">
          <div className="w-full h-2.5 bg-[#E6D9C3] rounded-full relative">
            <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[#14316C] rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#14316C] flex flex-col items-center px-6 pt-8 pb-16 text-white">
        <p className="!text-4xl mb-5 text-center font-normal text-[#FED5F5]">
          Dietary <br />
          Restrictions
        </p>

        <p className="secondary-font !text-xl w-80 text-center font-bold text-[#F6EAD5]">
          Are you allergic to any these?
        </p>

        <p className="secondary-font !text-m mb-5 w-80 text-center text-[#F6EAD5]">
          (Select all that apply)
        </p>

        <div className="w-full flex flex-col items-center gap-1 mb-10">
          {/* Cashews Option - Keeping styling but fixing overlap */}
          <div
            className="relative flex items-center justify-center cursor-pointer w-full max-w-md"
            onClick={() => handleAllergiesChange("cashews")}
          >
            <div className="flex items-center">
              {/* Circle part */}
              <div
                className={`w-22 h-22 rounded-full z-10 flex-shrink-0 overflow-hidden border-2 ${
                  allergies.cashews ? "border-[#C4B8A3]" : "border-[#F6EAD5]"
                }`}
              >
                <img
                  src={cashewsImg}
                  alt="Cashews"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rectangle part - adjusted to overlap more with circle */}
              <div
                className={`h-16 w-60 flex items-center text-center rounded-2xl pl-8 pr-6 transition-colors duration-200 ${
                  allergies.cashews ? "bg-[#C4B8A3]" : "bg-[#F6EAD5]"
                }`}
                style={{ marginLeft: "-40px" }}
              >
                <span className="text-3xl font-extrabold text-[#14316C] ml-6">
                  Cashews
                </span>
              </div>
            </div>
          </div>

          {/* Peanuts Option */}
          <div
            className="relative flex items-center justify-center cursor-pointer w-full max-w-md"
            onClick={() => handleAllergiesChange("peanuts")}
          >
            <div className="flex items-center">
              {/* Circle part */}
              <div
                className={`w-22 h-22 rounded-full z-10 flex-shrink-0 overflow-hidden border-2 ${
                  allergies.peanuts ? "border-[#C4B8A3]" : "border-[#F6EAD5]"
                }`}
              >
                <img
                  src={peanutsImg}
                  alt="Peanuts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rectangle part - adjusted to overlap more with circle */}
              <div
                className={`h-16 w-60 flex items-center text-center rounded-2xl pl-8 pr-6 transition-colors duration-200 ${
                  allergies.peanuts ? "bg-[#C4B8A3]" : "bg-[#F6EAD5]"
                }`}
                style={{ marginLeft: "-40px" }}
              >
                <span className="text-3xl font-extrabold text-[#14316C] ml-6">
                  Peanuts
                </span>
              </div>
            </div>
          </div>

          {/* Almonds Option */}
          <div
            className="relative flex items-center justify-center cursor-pointer w-full max-w-md"
            onClick={() => handleAllergiesChange("almonds")}
          >
            <div className="flex items-center">
              {/* Circle part */}
              <div
                className={`w-22 h-22 rounded-full z-10 flex-shrink-0 overflow-hidden border-2 ${
                  allergies.almonds ? "border-[#C4B8A3]" : "border-[#F6EAD5]"
                }`}
              >
                <img
                  src={almondsImg}
                  alt="Almonds"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rectangle part - adjusted to overlap more with circle */}
              <div
                className={`h-16 w-60 flex items-center text-center rounded-2xl pl-8 pr-6 transition-colors duration-200 ${
                  allergies.almonds ? "bg-[#C4B8A3]" : "bg-[#F6EAD5]"
                }`}
                style={{ marginLeft: "-40px" }}
              >
                <span className="text-3xl font-extrabold text-[#14316C] ml-6">
                  Almonds
                </span>
              </div>
            </div>
          </div>

          {/* Hazelnuts Option */}
          <div
            className="relative flex items-center justify-center cursor-pointer w-full max-w-md"
            onClick={() => handleAllergiesChange("hazelnuts")}
          >
            <div className="flex items-center">
              {/* Circle part */}
              <div
                className={`w-22 h-22 rounded-full z-10 flex-shrink-0 overflow-hidden border-2 ${
                  allergies.hazelnuts ? "border-[#C4B8A3]" : "border-[#F6EAD5]"
                }`}
              >
                <img
                  src={hazelnutsImg}
                  alt="Hazelnuts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rectangle part - adjusted to overlap more with circle */}
              <div
                className={`h-16 w-60 flex items-center text-center rounded-2xl pl-8 pr-6 transition-colors duration-200 ${
                  allergies.hazelnuts ? "bg-[#C4B8A3]" : "bg-[#F6EAD5]"
                }`}
                style={{ marginLeft: "-40px" }}
              >
                <span className="text-3xl font-extrabold text-[#14316C] ml-6">
                  Hazelnuts
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="secondary-font w-48 h-16 !rounded-2xl !border-5 !border-[#FED5F5] text-[#FED5F5] hover:text-[#FEB7EE] !text-2xl !font-extrabold !bg-[#14316C] !hover:bg-[#14316C]"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DietaryRestrictions;
