const userNameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const formButton = document.getElementById('button');

const userInformation = JSON.parse(localStorage.getItem('userInformation')) || [];

const saveToLocalStorage = function () {
    localStorage.setItem('userInformation', JSON.stringify(userInformation));
};

function getInfo(event) {
    event.preventDefault();

    const userN = userNameInput.value.trim();
    const title = titleInput.value.trim();
    const contentC = contentInput.value.trim();
    if (userN && title && contentC) {
        const user = {
            userName: userN,
            titles: title,
            contents: contentC
        };
        userInformation.push(user);
        saveToLocalStorage();
        displayBlog();
    } else {
        alert('abc')
    }

};

function displayBlog() {

    const userInformation = JSON.parse(localStorage.getItem('userInformation'));
    if (userInformation !== null) {
        location.href = 'index2.html';
    } else {
        alert('Please Insert All The Informations!');
    }
};

formButton.addEventListener('click', getInfo);
