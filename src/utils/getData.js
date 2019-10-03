// need to import some component that calls the fetch;

const getData = setData => {
  return fetch(`functions/getData`)
    .then(result => result.json())
    .then(result => setData(result.records))
    .catch(err => console.error(err));
};

export default getData;
