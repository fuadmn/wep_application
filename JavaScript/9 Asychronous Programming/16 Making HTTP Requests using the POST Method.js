async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "What is the title of the post",
        body: "body this is the body of the post",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // waxa gita

    console.log("before json response", response);

    const data = await response.json();

    console.log("after json response", data);
  } catch (error) {
    console.log(error);
  }
}

postData();
