function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPost();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.body}</h3>
        <p>New side</p>`;
        postContainer.appendChild(div);
        console.log(post)
    }
}