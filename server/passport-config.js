const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


module.exports = function (passport) {

  passport.use('passport-local',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      function (username, password, done) {
        db.query("SELECT * FROM users WHERE username = ?;", username, (err, user) => {

          if (err) {
            res.sendStatus(500);
            return
          }

          if (!user.length) {
            return done(null, false, { message: 'Incorrect username.' });
          }

          bcrypt.compare(password, user[0].pass, function (err, res) {
            if (err) {
              res.sendStatus(500);
              return
            }

            if (!res) {
              return done(null, false, { message: 'Incorrect password' })
            }

            return done(null, user)
          })

        })
      })
  )

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
    function (username, password, done) {
      db.query("SELECT * FROM users WHERE username = ?", [username], function (err, rows) {
        if (err)
          return done(err);
        if (rows.length) {
          return done(null, false);
        } else {

          let newUser = new Object();

          newUser.username = username;
          let newPass = password.toString()

          bcrypt.hash(newPass, 10, (err, hash) => {

            if (err) { console.log(err) }
            newUser.password = password;
            db.query("INSERT INTO users (username, pass) VALUES (?,?)", [username, hash], function (err, user) {
              if (err) console.log(err)

              newUser.id = user.insertId;

              return done(null, newUser)
            })
          })
        }
      });
    }));

  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken("bearer"),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET
  },
    (jwtPayload, done) => {
      db.query("SELECT * FROM users WHERE id = ?", [jwtPayload.id], function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    connection.connect();
    connection.query("SELECT * FROM users WHERE id = ? ", [id], function (err, rows) {
      done(err, rows[0]);
    });
    connection.end();
  });
}