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

const host = process.env.DB_HOST 
const user = process.env.DB_USER 
const password = process.env.DB_PASS 
const database = process.env.DB_DATABASE 



db = mysql.createConnection({
  host, user, password, database,
});

require('./passport-config')(passport);

app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

db.query('USE recipes');

app.use(router);
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))