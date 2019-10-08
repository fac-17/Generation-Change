import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
// import LandingPage from "./components/LandingPage/LandingPage";
import StyleGuide from "./styles/StyleGuide";

import convertPostcode from "./utils/convertPostcode";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData(setData);
  }, []);

  // console.log("data outside", data);

  convertPostcode("SY83DD");

  return (
    <div>
      {/* <LandingPage className="dark-bg-gradient" /> */}
      <StyleGuide />
    </div>
  );
}

export default App;
