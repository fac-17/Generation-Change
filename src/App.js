import React, { useState } from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import { getData } from "../src/utils/getData";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";
import StoriesPage from "./components/StoriesPage";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Universal/Loading.js";
import notFound from "./components/Universal/404";

function App() {
  const [data, setData] = useState(null);
  const [searchLongLat, setSearchLongLat] = useState("");
  const [detailsData, setDetailsData] = useState({});

  // below postcode to latlng transition
  React.useEffect(() => {
    getData().then(airtableData => setData(airtableData));
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage setSearchLongLat={setSearchLongLat} data={data} />
          )}
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
          render={() => (
            <StoriesPage data={data} setSearchLongLat={setSearchLongLat} />
          )}
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
        <Route path="*" component={notFound} />
      </Switch>
    </Router>
  );
}

export default App;
