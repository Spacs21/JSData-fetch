
const homeLink = document.getElementById('home-link');
const albumsLink = document.getElementById('albums-link');
const usersLink = document.getElementById('users-link');
const contentDiv = document.getElementById('content');

function renderPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let output = '<h2>Posts</h2>';
            posts.slice(0, 10).forEach(post => {
                output += `
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            });
            contentDiv.innerHTML = output;
        });
}


function renderAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => {
            let output = '<h2>Albums</h2>';
            albums.slice(0, 10).forEach(album => {
                output += `
                    <div>
                        <h3>${album.title}</h3>
                    </div>
                `;
            });
            contentDiv.innerHTML = output;
        });
}


function renderUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let output = '<h2>Users</h2>';
            users.forEach(user => {
                output += `
                    <div>
                        <h3>${user.name}</h3>
                        <p>Email: ${user.email}</p>
                        <p>Website: ${user.website}</p>
                    </div>
                `;
            });
            contentDiv.innerHTML = output;
        });
}


homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderPosts();
});

albumsLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderAlbums();
});

usersLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderUsers();
});


window.onload = () => {
    renderPosts();
};
