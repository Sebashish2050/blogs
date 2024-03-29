const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes');

const PORT = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/v1', router);

// app.get('*', (req,res) => {
//     console.log('inside get');
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, function() {
    console.log('server listening on port ' + PORT);
});