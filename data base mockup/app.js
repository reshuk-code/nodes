const express = require('express');
const fs = require('fs');
const path = require('path');
const { fetchHTML } = require('./data');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(fetchHTML());
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const filePath = path.join(__dirname, 'names.json');
    let users = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        users = JSON.parse(data);
    }

    users.push({ username, password });

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.json({ message: 'Login successful!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
