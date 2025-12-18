document.querySelector("#search-form").addEventListener("submit", async function (event) {

    event.preventDefault();

    const query = document.querySelector("#search-input").value;


    const url = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}';

    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': '10eb62b8cfmsh32dadd408fb1dd2p11d405jsnc763e87fb13c',
            'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    }

    try {

        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result)

    } catch (error) {
        console.error("error fetching search result", error)
    }
})