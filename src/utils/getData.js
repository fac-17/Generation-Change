// need to import some component that calls the fetch;

const getData = setData => {
  return fetch(`/.netlify/functions/getdata`)
    .then(result => result.json())
    .then(result => {
      setData(result.records);
    })
    .catch(err => console.error(err));
};

export { getData };
