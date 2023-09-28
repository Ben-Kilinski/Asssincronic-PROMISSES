// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//             console.log(response); 
//             return response.json();
//         }
//     )
//     .then(data => {
//         console.log(data);

//         const container = document.getElementById("container");

//         // container.innerHTML += `<p>
//         //     ${data[0].title}
//         //     </p>`

//         container.innerHTML += data.map(item =>
//             `<div>
//             <h3>${item.title}</h3>
//             <p>${item.body}</p>
//             </div>`
//         ).join("");
//     })
//     .catch(error => {
//         console.log(error)
//     });

//-----------------------------------------------------------------------------

// function getJoke(){fetch("https://api.chucknorris.io/jokes/random")
//     .then(response => {
//             console.log(response); 
//             return response.json();
//         }
//     )
//     .then(data => {
    
//         const container = document.getElementById("container");

//         container.innerHTML = `<p>
//             ${data.value}
//             </p>`
//     })}

// const jokeButton = document.getElementById("jokesBtn")
// jokeButton.addEventListener("click", getJoke)

//--------------------------------------------------------------------------------   


const fetchWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=7daaf87b350b92f5266dbd06b61ab82e
    `
    fetch(url)
    .then(res => res.json())
    .then(data =>{ console.log(data)
        document.body.innerHTML = `<p>${data.main.temp}</p>`
    })
    .catch(error => console.log(error))
}
const confirmBtn = document.getElementById("confirm")
confirmBtn.addEventListener("click", fetchWeather)
    


