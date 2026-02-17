// Methods in Objects // lasocodo function

let person2 = {
  name: "Kalid",
  age: 20,
  city: "Bosaaso",
  greet: function () {
    console.log("Hi Hwo are you doing", this.city);
    //this. waa properti noo ogalaanaayo mesha aan ku dhaxjirno in awoodno inaa istimaalno
  },
};

console.log(person2);

person2.name = "khalid";

person2.birthDate = "1996-02-20";

console.log(person2);

console.log(person2.greet()); //greet() function ka markoo lasodo baraket waxa sooda wacdaa function dhaxdiisa waxa ku jira
