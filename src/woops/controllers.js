// const db = require('./models/recipes')

// exports.getFavorites = async (req, res) => {
//   try {
//     let qu = "SELECT * FROM saved_recipes";
//     db.query(qu, (err, results, fields) => {
//       if (err) throw (err);
//       res.json({
//         status: 200,
//         results,
//         message: "Saved REcipes retrieved successfully"
//       })
//     })
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(400);
//   }
// }

// exports.saveFavorites = async (req, res) => {
//   try {
//     console.log('saving that fav')
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(400);
//   }
// }

// exports.deleteFavorites = async (req, res) => {
//   try {
//     console.log('bye bye')
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(400);
//   }
// }