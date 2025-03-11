import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/db-logo-header.svg";
import X from "../../assets/X.svg";
import Brentwood from "../../assets/Brentwood.svg";
import dateArt from "../../assets/date-art.svg";
import dateLogo from "../../assets/date-cover.svg";
import welcome from "../../assets/welcome.svg";
import { Button } from "../ui/button";

function Start() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate("/dietary");
    };
  return (
    <div className="bg-[#F6EAD5] absolute inset-x-0 top-0 h-36">
      {/* Header */}
      <div className="bg-[#F6EAD5] pt-12 pb-6 px-6 relative flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={headerLogo} className="w-16 mr-2" alt="Date Better logo" />
          <img src={X} className="w-4 mx-1" alt="X" />
          <img src={Brentwood} className="w-26" alt="Brentwood" />
        </div>
        <div className="header-container relative mt-4">
          <div className="w-full h-2.5 bg-[#E6D9C3] rounded-full relative">
            <div className="absolute top-1/2 left-0.5 w-2 h-2 bg-[#14316C] rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#14316C] flex flex-col items-center justify-start px-6 pt-10 pb-16 text-white">
        <img src={welcome} className="w-48 mb-8 mt-6" alt="Welcome To" />

        <img src={dateLogo} className="w-62 -mb-20" alt="Date Better" />

        <div>
          <img src={dateArt} className="w-full" alt="Date illustration" />
        </div>

        <p className="secondary-font text-2xl text-center mb-8 text-[#F6EAD5] font-bold">
          Find your
          <br />
          perfect match!
        </p>

        <Button
          variant="outline"
          className="secondary-font w-48 h-16 !rounded-2xl !border-5 !border-[#FED5F5] text-[#FED5F5] !text-2xl !font-bold !bg-transparent hover:!bg-transparent"
          onClick={ handleStartClick }
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Start;
