const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gabriel'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Server on port: ${ port }`);
});