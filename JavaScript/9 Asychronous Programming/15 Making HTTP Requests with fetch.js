async function fetchData() {
  try {
    console.log("Srating fetching data");

    //GET METHOD
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Fetching data failed`); //throw waxa lagu talagay in cilad markeey jirto soo turto
    }

    //Shaqada kale ee xigta

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
