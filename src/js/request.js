// make a request with xmlhttprequest
const request = new XMLHttpRequest();

const getTodos = (callback) => {
    // add event listener
    request.addEventListener('readystatechange', async () => {
        // check if the request is successful
        if (request.status === 200) {
            // convert the data to json
            const data = await JSON.parse(request.responseText);
            // call the callback function
            callback(undefined, data);
        } else {
            callback("There was an error fetching data", undefined);
        }
    });

    // open the request
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

    // send the request
    request.send();
}

// get the todos
getTodos((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data)
    }
});
