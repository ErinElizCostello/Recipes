// var mysql = require('mysql')

// const host = process.env.DB_HOST || 'localhost';
// const user = process.env.DB_USER || 'root';
// const password = process.env.DB_PASS || 'admin';
// const database = process.env.DB_DATABASE || 'recipes';

// exports.db = mysql.createConnection({
//   host, user, password, database,
// });

// exports.getFavorites = async () => {
//   const res = await connection.query('select * from saved_recipes');
//   return res.rows;
// }


// const query = "SELECT * FROM saved_recipes";


// connection.connect(err => {
//   if (err) throw err;

//   connection.query(query, (err, results, fields) => {
//     if (err) throw err
  
//     results.forEach(result => {
//       console.log(result);
//   });
// });

// connection.end()

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: '',
//   password: '',
//   database: 'recipe_search'
// })