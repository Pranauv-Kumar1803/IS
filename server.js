const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res)=>{
    return res.sendFile('index.html', {
        root: path.join(__dirname)
    });
})

app.post('/signup', (req, res)=>{
    console.log(req.body);

    return res.send('done');
})

app.post('/login', (req, res)=>{
    console.log(req.body);

    return res.send('done');
})

app.listen(3000, ()=>{
    console.log('Server Started at port 3000');
})