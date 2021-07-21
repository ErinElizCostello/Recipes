require('dotenv').config()
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')


router.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send({ loggedIn: true, user: req.user })
    next()
  } else {
    res.send({ loggedIn: false, user: 'noBODY' })
  }
});


router.post('/login', (req, res, next) => {
  passport.authenticate('passport-local', { session: false, failureFlash: true},
    function (err, user, info) {
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.send({
          "success": false,
          "user": "Wrong Username or Password!"
        })
      }

      const payload = {
        id: user[0].id,
        user: user[0].username,
        iat: Date.now(),
      };

      req.logIn({
        id: user[0].id,
        user: user[0].username,
        iat: Math.floor(Date.now() / 1000),
      },
        { session: false }, function (err) {
          if (err) {
            res.status(400).send({ error });
          }

          const token = jwt.sign({
            id: user[0].id,
            user: user[0].username,
            iat: Math.floor(Date.now() / 1000),
          }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }
          );
          
          return res.json({ payload, token });
        })
    })(req, res, next);
})


router.post('/signup', passport.authenticate('local-signup', {
}), (req, res) => {
  res.json({ message: 'user is successfully signed in' })
});

router.delete('/deleteUserAccount/:id', (req, res) => {
  let sqlDeleteFromUsers = "DELETE FROM users WHERE id = ?;"
  let sqlDeleteFromSavedRecipes = "DELETE FROM saved_recipes WHERE user_id = ?;"
  let id = req.body.user_id

  db.query(sqlDeleteFromUsers, id, (err, results, fields) => {
    if (err) throw (err);
  })
  db.query(sqlDeleteFromSavedRecipes, id, (err, results, fields) => {
    if (err) throw (err);
    res.json({
      status: 200,
      message: "User Account Deleted",
      user: results
    })
  })
})


router.get('/admin', (req, res) => {
  let sql = "SELECT id, username FROM users";
  db.query(sql, (err, results, fields) => {
    if (err) throw (err);
    res.json({
      status: 200,
      results,
      message: "current users"
    })
  })
})


router.get('/favorites', (req, res) => {
  let sql = "SELECT * FROM saved_recipes";
  db.query(sql, (err, results, fields) => {
    if (err) throw (err);
    res.json({
      status: 200,
      results,
      message: "Saved Recipes retrieved successfully"
    })
  })
})


router.get('/checkUser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json('working')
});


router.post('/getFavorites', (req, res) => {
  let sql = "SELECT * FROM saved_recipes WHERE user_id = ?";
  let theID = req.body.id

  db.query(sql, [theID], (err, results, fields) => {
    if (err) return res.send(err);

    res.json({
      status: 200,
      results,
      message: "getting those favs"
    })
  })
})


router.post('/favorites', (req, res) => {
  let sql = 'INSERT INTO saved_recipes(user_id, recipe_id_api) VALUES(?)'
  let values = [req.body.user_id, req.body.recipe_id_api]
  db.query(sql, [values], (err, results, fields) => {
    if (err) throw (err);
    res.json({
      status: 200,
      message: "Recipe saved successfully"
    })
  })
})


router.delete('/favorites/:id', (req, res) => {
  let sql = "DELETE FROM saved_recipes WHERE recipe_id_api = ?";
  let values = req.body.recipe_id_api
  db.query(sql, values, (err, results, fields) => {
    if (err) throw (err);
    res.json({
      status: 200,
      message: "Recipe deleted from favorites"
    })
  })
})


module.exports = router




// const passportJWT = require("passport-jwt");
// const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;