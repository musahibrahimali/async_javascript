// get todos
const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (response.status !== 200) {
        // throw an error (custom error)
        throw new Error('Something went wrong!');
    }
    return await response.json();
}

// get posts
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (response.status !== 200) {
        // throw an error (custom error)
        throw new Error('Something went wrong!');
    }
    return await response.json();
}

// call both functions
const getData = async () => {
    const todos = await getTodos();
    const posts = await getPosts();
    return {
        todos,
        posts
    }
}

// get the data
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
