import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";
import StoriesPage from "./components/StoriesPage";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);
  const [searchLongLat, setSearchLongLat] = React.useState("51.49075,-0.25263");
  const [detailsData, setDetailsData] = React.useState({});

  React.useEffect(() => {
    getData().then(airtableData => setData(airtableData));
  }, []);

  if (!data)
    return (
      <div>
        <h2>...loading</h2>
      </div>
    );

  // console.log("geocords", searchLongLat);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => <LandingPage setSearchLongLat={setSearchLongLat} />}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/results"
        render={() => (
          <ResultsPage
            detailsData={detailsData}
            setDetailsData={setDetailsData}
            searchLongLat={searchLongLat}
            setSearchLongLat={setSearchLongLat}
            data={data}
          />
        )}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/stories"
        setsearchLongLat={setSearchLongLat}
        render={() => <StoriesPage data={data} />}
        className="dark-bg-gradient"
      />
      <Route
        exact
        path="/details"
        setSearchLongLat={setSearchLongLat}
        render={() => (
          <DetailsPage
            setSearchLongLat={setSearchLongLat}
            detailsData={detailsData}
            setDetailsData={setDetailsData}
          />
        )}
        className="dark-bg-gradient"
      />
    </Router>
  );
}

export default App;
