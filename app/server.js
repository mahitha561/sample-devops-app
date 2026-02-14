const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from DevOps Sample App deployed via Jenkins to EKS & ECS!');
});

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});