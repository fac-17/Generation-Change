import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
// import LandingPage from "./components/LandingPage/LandingPage";
import StyleGuide from "./styles/StyleGuide";

function App() {
  return (
    <div>
      {/* <LandingPage className="dark-bg-gradient" /> */}
      <StyleGuide />
    </div>
  );
}

export default App;
