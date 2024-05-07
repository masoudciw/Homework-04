const title = document.querySelector('#blogTitle');
const content = document.querySelector('#titleContent');
const productor = document.querySelector('#producer');
const backLink = document.querySelector('#back');
const usersBody = document.querySelector('#bodyBlog');


backLink.addEventListener('click', function () {
    history.back();
});

const userInformation = JSON.parse(localStorage.getItem('userInformation'));
console.log(userInformation);


function renderUsers() {
    if (userInformation) {
        userInformation.forEach(userData => {
            const div = document.createElement('div');
            div.setAttribute('style', 'width: 100%;  border: 5px solid black; padding: 0px 50px 10px 50px; margin-bottom: 20px; border-radius: 10px; background-color: rgb(173, 173, 173);');
            const title = document.createElement('h2');
            title.textContent = userData.titles;
            title.setAttribute('style', 'border-bottom: 1px solid black;');
            const content = document.createElement('p');
            content.textContent = userData.contents;
            content.setAttribute('style', 'margin-left: 30px; font-size: 16px; margin-bottom: 50px;');
            const spanTag = document.createElement('span');
            spanTag.textContent = 'Posted by:';
            spanTag.setAttribute('style', 'font-weight: bold; margin-left: -30px; margin-right: 5px;');
            const productor = document.createElement('p');
            productor.textContent = userData.userName;
            productor.setAttribute('style', 'display: inline-block;');
            div.appendChild(title);
            div.appendChild(content);
            div.appendChild(spanTag);
            div.appendChild(productor);
            usersBody.appendChild(div);
        });
    };
};
renderUsers();