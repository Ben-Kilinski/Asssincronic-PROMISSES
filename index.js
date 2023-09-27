fetch("https://jsonplaceholder.typicoe.com/todos")
    .then(response => {
            console.log(response); 
            return response.json();
        }
    )
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });

