fetch('json_demo.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
