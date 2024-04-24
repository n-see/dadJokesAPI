let displayArea = document.getElementById("displayArea");
let myBtn = document.getElementById("myBtn").addEventListener("click", function(){
    getJokes();
});

async function getJokes(){
    let apiResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    }).then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.joke;
}