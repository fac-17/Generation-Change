import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import StoriesPage from "./components/StoriesPage/StoriesPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import StyleGuide from "./styles/StyleGuide";

function App() {
  const [data, setData] = React.useState(null);
  const [geocode, setGeocode] = React.useState("dog");

  React.useEffect(() => {
    getData().then(airtableData => setData(airtableData));
  }, []);

  if (!data)
    return (
      <div>
        <h2>...loading</h2>
      </div>
    );

  console.log("geocords", geocode);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => <LandingPage setGeocode={setGeocode} />}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/results"
        render={() => <ResultsPage geocode={geocode} data={data} />}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/stories"
        setGeocode={setGeocode}
        component={StoriesPage}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/details"
        setGeocode={setGeocode}
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
