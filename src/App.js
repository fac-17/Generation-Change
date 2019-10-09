import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import StoriesPage from "./components/StoriesPage/StoriesPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
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
      <Route
        exact
        path="/results"
        component={ResultsPage}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/stories"
        component={StoriesPage}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/details"
        component={DetailsPage}
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
