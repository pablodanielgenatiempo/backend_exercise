const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set('port', 3000);
app.set('json spaces', 2)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/favorite', require('./routes/favorite'));
app.use('/launches', require('./routes/launches'));

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
});