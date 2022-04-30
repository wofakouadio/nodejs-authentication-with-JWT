const express = require('express');

const jwt = require('jsonwebtoken');

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/jwt/api/v1/', (req, res) => {

    res.json({
        message: 'Welcome to JWT API Service'
    })

});

app.post('/jwt/api/v1/posts',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: 'Post created',
                authData
            })
        }
    });
})

app.post('/jwt/api/v1/login', (req, res) => {
    const user = {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
    }

    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            message: 'Login Successful',
            token: token
        });
    });

});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})