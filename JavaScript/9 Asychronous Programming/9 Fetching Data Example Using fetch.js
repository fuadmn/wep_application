
// async function fetchData() {

// console.log("Start fetching data");

// const response = await fetch('./7 Fetching Data Example Using fetch.json')

//const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await response.json();

// console.log("response: kkk", data)

// }

// fetchData();

async function fetchData() {
  console.log("Start fetching data");

  const response = await fetch("./9 Fetching Data Example Using fetch.json");

  const data = await response.json();

  console.log("response:", data);
}

fetchData();
