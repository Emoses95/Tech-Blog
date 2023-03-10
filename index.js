const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');
require('dotenv').config();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

const { User, Comment } = require('./models');

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(allRoutes);
app.get("/sessions", (req, res) => {
    res.json(req.session)
})
sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});