const btn = document.querySelector('.btn');
const username = document.querySelector('.username');
const apiUrl = 'https://api.github.com/users/';
const resultData = document.querySelector('.container');

btn.addEventListener('click', (e) => {
    let user = username.value;
    let dataurl = apiUrl + user;
    console.log(dataurl);
    fetchData(dataurl);
})

function fetchData(dataurl) {
    fetch(dataurl)
    .then(response => {
        return response.json();
    })
    .then((data) => {
        resultData.innerHTML = `
            <div>
                <a href="https://github.com/${data.login}" target="_blank"><img src="${data.avatar_url}" alt="${data.name}" class="user-image"></a>
            </div>
            <div class="user-info">
                <h1>${data.name}</h1>
                <p class="user-bio">${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong class="spn">Followers</strong></li>
                    <li>${data.following}<strong class="spn">Following</strong></li>
                    <li>${data.public_repos}<strong class="spn">Repos</strong></li>
                </ul>
            </div>
        `;
    })
}