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
    const posts = await getPosts();
    return {
        posts
    }
}

// a function to log the genrators
const logging = () => {
    // genetors
    function* gen() {
        const a = yield '🤩';
        const b = yield '💖';
        const c = yield '😊';
        // return a lovely object
        return a + b + c;
    }

    // log all until done is true
    const genIterator = gen();
    // log the values and pass a value to the next yield
    console.log(genIterator.next());
    console.log(genIterator.next(10));
    console.log(genIterator.next(20));
    console.log(genIterator.next(30));
}

// get the data
getData().then((data) => {
    console.log(data);
    // using a generator
    logging(data);
}).catch((error) => {
    console.log(error);
});

