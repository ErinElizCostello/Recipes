require('dotenv').config()
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const router = require('./router.js');
const app = express();


app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors(
  {
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}
));

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'admin';
const database = process.env.DB_DATABASE || 'recipes';

db = mysql.createConnection({
  host, user, password, database,
});

require('./passport-config')(passport);

app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

db.query('USE recipes');

app.use(router);
app.use('/', router);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))




// app.use(bodyParser.json())
// const bodyParser = require('body-parser');;
// app.use(bodyParser.urlencoded({ extended: true }))