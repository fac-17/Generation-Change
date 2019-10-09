// need to import some component that calls the fetch;

const getData = () => {
  return fetch(`/.netlify/functions/getdata`)
    .then(result => result.json())
    .then(result => {
      return result.records;
    })
    .catch(err => console.error(err));
};

export { getData };
