document.getElementById('encryptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var text = document.getElementById('text').value;
    fetch('/encrypt', {
        method: 'POST',
        body: new URLSearchParams({text: text}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('encryptedText').innerText = data;
    });
});
