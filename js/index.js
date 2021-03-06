
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

let LOCAL_API = "http://localhost:3000";
let LIVE_API = "https://cbazil-json-api.herokuapp.com";

const renderPosts = async (term) => {
    let url = `${LIVE_API}/posts?_sort=likes&_order=desc`;

    if (term) {
        url += `&q=${term}`;
    }

    const res = await fetch(url);
    const posts = await res.json();
    
    let template = '';

    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="/details.html?id=${post.id}">read more...</a>
            </div>  
        `
    })
    container.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts())