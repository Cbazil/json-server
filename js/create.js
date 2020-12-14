// javascript for create.html
const form = document.querySelector('form');

let LOCAL_API = "http://localhost:3000";
let LIVE_API = "https://cbazil-json-api.herokuapp.com";

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch(`${LIVE_API}/posts`, {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html')
}

form.addEventListener('submit', createPost);


