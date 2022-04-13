// https://swapi.dev/api/

var number = 2;

var getName = function(numberTwo){

return fetch("http://swapi.dev/api/people/" + number)
    .then(response => response.json())
    .then (data => console.log(data));
    // .then (data => console.log(data.name));
};

getName();
