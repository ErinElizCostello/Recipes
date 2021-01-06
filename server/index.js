const express = require('express');
const app = express();

const cors = require('cors');
const router = require('./router.js');
var mysql = require('mysql')
const bodyParser = require('body-parser');
const recipesRouter = require('./router')

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'admin';
const database = process.env.DB_DATABASE || 'recipes';

db = mysql.createConnection({
  host, user, password, database,
});

// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200,
// }

app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(router);
app.use('/', recipesRouter);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))