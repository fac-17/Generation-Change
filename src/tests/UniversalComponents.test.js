import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SearchBar from "../components/Universal/Searchbar";
import Navbar from "../components/Universal/Navbar";
import Svg from "../components/Universal/Svg";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

afterEach(cleanup);

describe.only("SearchBar behaves as expected", () => {
  const history = createMemoryHistory();
  const { getByLabelText, getByTestId, getByDisplayValue } = render(
    <Router history={history}>
      <SearchBar />
    </Router>
  );
  const input = getByLabelText("Postcode Search");
  const submitButton = getByTestId("searchbar--search-button");

  test("SearchBar will not search for a postcode under 5 char", () => {
    const fourLetterPostcode = "EC25";
    fireEvent.change(input, {
      target: { value: fourLetterPostcode }
    });
    fireEvent.click(submitButton);
    expect(getByDisplayValue(fourLetterPostcode)).toBeTruthy();
  });

  test("SearchBar will search for a postcode 5 char and above", () => {
    const fullPostcode = "EC25HY";
    fireEvent.change(input, { target: { value: fullPostcode } });
    fireEvent.click(submitButton);
    setTimeout(() => {
      expect(history.location.pathname).toBe("/results");
    }, 1000);
  });
});

describe.only("NavBar behaves as expected", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  const logo = getByTestId("navbar--logo");

  test("Logo in Navbar takes you to home when clicked", () => {
    fireEvent.click(logo);
    expect(history.location.pathname).toBe("/");
  });
});

describe.only("Svg coponent behaves as expected", () => {
  test("Svg loads without and error", () => {
    render(<Svg color="--white" height="20" width="20" icon="duration" />);
  });
});
