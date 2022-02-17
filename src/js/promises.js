// using the fetch api to get the data from the api

const fetchData = () => {    // use promises
    return new Promise((resolve, reject) => {
        // create a fetch request
        fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
            // convert the data to json
            const data = response.json();
            resolve(data);
        }).catch((error) => {
            // reject the promise
            reject(error);
        });
    });
}

// fetch the data
fetchData().then((response) => {
    console.log(response);
    // chain another promise
    fetchData().then((response) => {
        console.log(response);
    });
}).catch((error) => {
    console.log("Rejected with error: ", error);
});
