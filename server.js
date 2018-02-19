const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// initializing packages
const app = express();
mongoose.connect('mongodb://localhost/youtube-angular')
    .then(db => console.log('db connected'))
    .catch(err => console.error(err));
    
// importing routes
const RoutesApi = require('./server/routes/api');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// routes
app.use('/api', RoutesApi);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});