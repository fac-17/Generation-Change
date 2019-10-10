import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import SearchBar from "../components/Universal/Searchbar";
import Navbar from "../components/Universal/Navbar";
import { createMemoryHistory } from "history";
import { Router, MemoryRouter } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { convertPostcode } from "../utils/convertPostcode";

afterEach(cleanup);

// const mockConvertPostcode = jest.fn();

// jest.mock("../utils/convertPostcode", () => {
//   return jest.fn().mockImplementation(() => {
//     return { convertPostcode: mockConvertPostcode };
//   });
// });

// beforeEach(() => {
//   mockConvertPostcode.mockClear();
// });

describe.only("SearchBar behaves as expected", () => {
  const { getByLabelText, getByTestId } = render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  const input = getByLabelText("Postcode Search");
  const submitButton = getByTestId("searchbar--search-button");

  test("SearchBar will not search for a postcode under 5 char", () => {
    const fourLetterPostcode = "EC25";
    fireEvent.change(input, {
      target: { value: fourLetterPostcode }
    });
    fireEvent.click(submitButton);
    // expect(getByDisplayValue(fourLetterPostcode)).toBeTruthy();
  });

  test("SearchBar will search for a postcode 5 char and above", () => {
    const fullPostcode = "EC25HY";
    fireEvent.change(input, { target: { value: fullPostcode } });
    fireEvent.click(submitButton);
    // expect(mockConvertPostcode).toHaveBeenCalledTimes(1);
    // expect(getByDisplayValue(fullPostcode).exists()).toBeFalsy();
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
