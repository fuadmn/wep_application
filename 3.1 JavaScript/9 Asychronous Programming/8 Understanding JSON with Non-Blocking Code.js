const user = {
  id: 1,
  name: "Alice",
  city: "Wonderland",
};

//object to json
//json to object

console.log(user);

const jsonString = JSON.stringify(user); //stringify waxa u badalaa object waxa una ubadalaa json

console.log(jsonString);

const parseData = JSON.parse(jsonString); // parse waxa u badalaa json waxan u badalaa object

console.log(parseData);
