
document.querySelector("#search-form").addEventListener("submit", async function (event) {

    event.preventDefault()

    const query = document.querySelector("#search-input").value;

    const url = `https://youtube-v3-alternative.p.rapidapi.com/channel?id=${query}`;

    const optons = {
        methed: "GET",
        headers: {
            "x-rapidapi-key": '10eb62b8cfmsh32dadd408fb1dd2p11d405jsnc763e87fb13c',
            "x-rapidapi-host": 'youtube-v3-alternative.p.rapidapi.com',
        }
    }

    try {

        const response = await fetch(url, optons);
        const result = await response.json();

    } catch (error) {
        console.error("error fetching search results", error)
    }

})