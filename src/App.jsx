import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import headerLogo from "./assets/db-logo-header.svg";
import X from "./assets/X.svg";
import Brentwood from "./assets/Brentwood.svg";
import dateArt from "./assets/date-screen.svg";
import dateLogo from "./assets/db-start.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F6EAD5] absolute inset-x-0 top-0 h-36">
        <img
          src={headerLogo}
          className="absolute top-16 inset-y-0 left-28 w-16"
          alt="Date Better logo"
        />
        <img
          src={X}
          className="absolute top-17 inset-y-0 left-45 w-4"
          alt="Date Better logo"
        />
        <img
          src={Brentwood}
          className="absolute top-17 inset-y-0 left-51 w-26"
          alt="Date Better logo"
        />
        <div className="absolute inset-x-0 bottom-5 w-62 left-23 h-4 bg-[#E6D9C3] rounded-full">
          <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-navy rounded-full transform -translate-y-1/2"></div>
        </div>
      </div>

      {/* <h1>Vite + React</h1> */}

      <img
        src={dateLogo}
        className="absolute left-22 top-64"
        alt="Date Better logo"
      />

      <img
        src={dateArt}
        className="absolute left-22 top-84"
        alt="Date Better logo"
      />

      {/* <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
