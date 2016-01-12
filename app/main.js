var socket = io.connect('http://localhost:8080', {forceNew: true});

var userId = localStorage.getItem('userId') || randomUserId();
localStorage.setItem('userId', userId);
console.log('user #', userId);

function randomUserId() {
    return Math.floor(Math.random() * 1e11);
}

socket.on('messages', function(data) {
    console.info(data);

    var html = data.map(function(data) {
        return (`
            <div class="name">
                ${data.userName}
            </div>
            <a href=${data.content.link} class="message" target="_blank">${data.content.text}</a>
            <input type="submit" class="likes-count" value="${data.likedBy.length} Likes" />
        `);
    }).join('');

    document.getElementById('messages').innerHTML = html;
});

function addMessage(event) {
    // console.log(event);
    var payLoad = {
        userName: document.getElementById('username').value,
        content: {
            text: document.getElementById('message').value,
            link: document.getElementById('linkAddress').value
        },
        likedBy: [],
        ts: Date.now()
    };

    socket.emit('new-message', payLoad);
    return false;
}
