import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StyleGuide from "./styles/StyleGuide";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData(setData);
  }, []);

  return (
    <Router>
      <Route
        exact
        path="/"
        component={LandingPage}
        className="dark-bg-gradient"
      />
    </Router>
    // <div>
    //   {/* <LandingPage className="dark-bg-gradient" /> */}
    //   <StyleGuide />
    // </div>
  );
}

export default App;
