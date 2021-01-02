// const express = require('express');
// // const { db } = require('./index');
// const router = express.Router();
// // const control = require('./controllers')

// router.get('/favorites', (req, res) => {
//   let sql = "SELECT * FROM saved_recipes";
//   db.query(sql, (err, results, fields) => {
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       results,
//       message: "Saved Recipes retrieved successfully"
//     })
//   })
// })

// router.post('/favorites', (req, res) => {
//   let sql = 'INSERT INTO saved_recipes(id, user_id, recipe_id_api) VALUES(?)'
//   let values = [
//     req.body.id,
//     req.body.user_id,
//     req.body.recipe_id_api
//   ]
//   db.query(sql, [values], (err, results, fields) => {
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       message: "Recipe saved successfully"
//     })
//   })
// })


// router.delete('/favorites', (req, res) => {
//   let sql = "DELETE FROM saved_recipes WHERE recipe_id_api = ?";
//   let values = req.body.recipe_id_api
//   db.query(sql, values, (err, results, fields) => {
//     console.log(req.body.recipe_id_api)
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       message: "Recipe deleted from favorites"
//     })
//   })
// })


// router.get('/login', (req, res) => {
//   let sql = "SELECT * FROM users";
//   db.query(sql, (err, results, fields) => {
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       results,
//       message: "Saved users retrieved successfully"
//     })
//   })
// })

// router.post('/login', (req, res) => {
//   let sql = 'INSERT INTO users(id, username) VALUES(?)'
//   let values = [
//     req.body.id,
//     req.body.username
//   ]
//   db.query(sql, [values], (err, results, fields) => {
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       message: "User saved successfully"
//     })
//   })
// })

// router.delete('/login', (req, res) => {
//   let sql = "DELETE FROM users WHERE username = ?";
//   let values = req.body.username
//   db.query(sql, values, (err, results, fields) => {
//     if (err) throw (err);
//     res.json({
//       status: 200,
//       message: "User deleted from database"
//     })
//   })
// })

// module.exports = router