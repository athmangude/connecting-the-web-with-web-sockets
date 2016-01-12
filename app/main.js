var socket = io.connect('http://localhost:8080', {forceNew: true});

socket.on('messages', function(data) {
    console.info(data);

    var html = data.map(function(data) {
        return (`
            <div class="name">
                ${data.userName}
            </div>
            <a href=${data.content.link} class="message" target="_blank">${data.content.text}</a>
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
        ts: Date.now()
    };

    socket.emit('new-message', payLoad);
    return false;
}
