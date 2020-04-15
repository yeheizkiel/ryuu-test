fetch('https://yeheizkiel.github.io/ryuu-test/js/template.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
