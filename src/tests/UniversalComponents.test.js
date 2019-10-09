import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import SearchBar from "../components/Universal/Searchbar";
import Navbar from "../components/Universal/Navbar";

afterEach(cleanup);

// const mockGeocodeResponse = {
//   longitude: -2.008298,
//   latitude: 50.712412
// };
// global.convertPostcode = jest
//   .fn()
//   .mockImplementation(() =>
//     Promise.resolve({ text: () => Promise.resolve(mockGeocodeResponse) })
//   );

const mockResponse = postcode => {
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        postcode,
        longitude: -2.008298,
        latitude: 50.712412
      })
  });
};

describe.only("SearchBar behaves as expected", () => {
  const { getByText, getByLabelText, getByTestId, getByDisplayValue } = render(
    <SearchBar />
  );
  const input = getByLabelText("Postcode Search");
  const submitButton = getByTestId("searchbar--search-button");

  test("SearchBar will not search for a postcode under 5 char", async () => {
    const fourLetterPostcode = "EC25";
    global.fetch = jest
      .fn()
      .mockReturnValueOnce(mockResponse(fourLetterPostcode));
    fireEvent.change(input, { target: { value: fourLetterPostcode } });
    fireEvent.click(submitButton);
    getByDisplayValue(fourLetterPostcode);
    expect(global.fetch).toHaveBeenCalledTimes(0);
  });

  test("SearchBar will search for a postcode 5 char and above", () => {
    const fullPostcode = "EC25HY";
    global.fetch = jest.fn().mockReturnValueOnce(mockResponse(fullPostcode));
    fireEvent.change(input, { target: { value: fullPostcode } });
    fireEvent.click(submitButton);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

// test("Markdownifier component", () => {
//   const { debug, getByText, getByLabelText, getByTestId } = render(
//     <Markdownifier />
//   );

//   const input = getByLabelText("Enter markdown");
//   fireEvent.change(input, { target: { value: "# a heading" } }); // fire a change event with the right value

//   const button = getByText("Markdownify");
//   fireEvent.click(button); // fire a real browser event on the submit button

//   // check that our mock fetch has been called
//   expect(global.fetch).toHaveBeenCalledTimes(1);

//   // Jest will wait for a promise if you return it from the test:
//   // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
//   // Otherwise the test will end immediately and the async bit won't run
//   return waitForElement(() => getByTestId("output")).then(output =>
//     expect(output.innerHTML).toEqual(mockResponse)
//   );
//   // wait until our element callback finds the output DOM node
//   // then we have access to the node
//   // so we can assert against it to make sure the innerHTML is correct
// });
