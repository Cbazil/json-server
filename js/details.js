// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');

const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

let LOCAL_API = "http://localhost:3000";
let LIVE_API = "https://cbazil-json-api.herokuapp.com";

const renderDetails = async () => {
    const res = await fetch(`${LIVE_API}/posts/${id}`);
    const post = await res.json();
    
    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `

    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch(`${LIVE_API}/posts/${id}`, {
        method: 'DELETE'
    })
    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', () => renderDetails());

