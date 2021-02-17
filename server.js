const express = require('express');
const mongoose = require ('mongoose');
const Contacts = require('./routes/api/Contacts');
const Users = require('./routes/api/Users');
const Auth = require('./routes/api/Auth');
const path = require('path');
const config = require('config');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const db = config.get('mongoURI');

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/contacts', Contacts);
app.use('/api/users', Users);
app.use('/api/auth', Auth);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));