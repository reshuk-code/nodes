function fetchHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Login</title>
</head>
<body>
    <form id="loginForm">
        <input type="text" id="username" name="username" placeholder="Username" required /><br />
        <input type="password" id="password" name="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
    </form>

    <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
    </script>
</body>
</html>
    `;
}

module.exports = { fetchHTML };
