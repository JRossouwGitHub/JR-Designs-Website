const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const Contacts = require('./routes/api/Contacts');
const path = require('path');
const indexFile = require('./dist/index.html')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/contacts', Contacts);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('dist'));

    app.get('*', (req, res) => {
        res.sendFile(indexFile)
    });
}

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));