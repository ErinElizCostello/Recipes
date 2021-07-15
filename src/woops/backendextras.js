// index

// secret needs to be a better than this one VVV
// app.use(cookieParser(
  
//   ))
// app.use(flash());
// const flash = require('connect-flash')
// const cookieParser = require('cookie-parser');
// app.use(passport.session())


// var sessionStore = new MySQLStore({
//   checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds.
//   expiration: 86400000,// The maximum age of a valid session; milliseconds.
//   createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
//   schema: {
//       tableName: 'sessions',
//       columnNames: {
//           session_id: 'session_id',
//           expires: 'expires',
//           data: 'data'
//       }
//   }
// }, db);

// app.use(session({
//   key: "buddy",
//   secret: "hello",
//   resave: false,
//   saveUninitialized: false,
//   store: sessionStore,
//   // cookie: { secure: false }
//   cookie: {
//     secure: false,
//     maxAge: 3600000 //1 hour
// }
  // cookie: {
    // path: '/login',
    // maxAge: 60000
    // expires: 60*60*24
  // }
// }))







// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     console.log('OH HEY ITS WERKINNN')
//     return next();
//   } else {
//     return res.redirect('/')
//   }
// }

// app.use(isLoggedIn)





// passport.use('passport-local',
//     new LocalStrategy(
//       {
//         usernameField: 'username',
//         passwordField: 'password',
//         // passReqToCallback: true
//       }, 
//       function(username, password, done) {
//         db.query("SELECT * FROM users WHERE username = ?;", username, (err, user) => {
//       //     console.log(user);
// 			// console.log("above row object");
//           if (err) throw (err)
          
//           if (!user.length) {
//             return done(null, false,  { message: 'Incorrect username.' });
//           }
//           console.log("the username is " + username)
//           console.log("the password submitted in login is " + password)
//           console.log("the password in the database is " + user[0].pass)
//           // if (!(user[0].pass == password))
//           //   return done(null, false, { message: 'Incorrect password.' });
//           if (user.length > 0) {
//             bcrypt.compare(password, user[0].pass, function(err, result) {
//               if (err) throw (err)
//               if (result) {
//                 return done(null, user)
//               } else {
//                 return done(null, false, { message: "Wrong username/password combination" })
//               }
//             })
//           }
//         })
//       })
      
//   )

  

//   passport.serializeUser((user, cb) => {
//     console.log("maybe its working for..." + user[0].username);
//     cb(null, user)
    
//   })

//   // passport.deserializeUser((id, cb) => {
//   //   db.query("SELECT * FROM users WHERE id = ?;", id, (err, user) => {
//   //     cb(err, user)
//   //   })
//   // })


  // app.get('/login', isLoggedIn, function(req, res){
  //   req.user?
  //   console.log(req.user)
  //   :
  //   consolelog('nope')
  // })



  // router

  // return router
// }

///sign up

// router.post('/signUp', (req, res) => {

//   const username = req.body.username
//   const password = req.body.password


//   bcrypt.hash(password, 10, (err, hash) => {

//     if (err) { console.log(err) }

//     db.query("INSERT INTO users (username, pass) VALUES (?,?)", [username, hash], function (err, result) {
//       res.send({ err: err })
//     })
//   })
// })



// router.get('/logout', function (req, res) {
//   req.logout();
//   req.session.destroy(function (err) {
//     if (err) return err
//     // res.clearCookie();
//     res.send('Logged out');
//   });
// req.isAuthenticated() ?
// req.session.destroy(function(err) {
//  if(err) throw(err)
//   req.logout();
//   res.send({message: 'logout successsss'})
//   // res.redirect('/');
// });
// req.logout()
// next();
// :
// res.send({message: 'uhhh'});
// });



// router.get('/logged', function (req, res, next) {
//   req.user ?
//     res.send(req.user) :
//     res.send('nerpp')
// });

// router.get('/logged', function(req, res) {
//   console.log('the session: ')
// console.log(req.session.user)
//   if(req.session.username)
//       res.send('Hurray!');
//   else
//       res.send('User not logged in.');
// });

// login

// router.post('/login', passport.authenticate('passport-local'),

// function(req, res) {
//   res.send({user: 'log ge d i n'});
// }
// )

// const posts = [
//   {
//     username: 'erin',
//     title: 'post 1'
//   },
//   {
//     username: 'elizabeth',
//     title: 'post 2'
//   }
// ]

// router.get('/test', 
// authenticateToken, 
// (req, res) => {
//   res.json(posts.filter(post => post.username === req.user.name))
// })

// router.post('/test', (req, res) => {
//   //authenticate user

//   const username = req.body.username
//   const user = { name: username }

//   const accessToken = generateAccessToken(user)
//   // jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   refreshTokens.push(refreshToken)
//   res.json({ accessToken: accessToken, refreshToken: refreshToken })
// })

// const refreshTokens = []

// router.post('/token', (req, res) => {
//   const refreshToken = req.body.token
//   if (refreshToken == null) return res.sendStatus(401)
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateAccessToken({ name: user.name })
//     res.json({ accessToken: accessToken })
//   })
// })

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
// }

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)

//     req.user = user
//     next()
//   })
// }

// app.get('/goToFavs', passport.authenticate('jwt',{session: false}),(req,res,next)=>{

//   res.json()
// })



////////

// router.get('/login', function(req, res, next) {
//   if(req.user) {
//   res.send(req.user)
//   console.log(req.sessionID)
//   next()
//   } else {
//   console.log('lalala: ' + req.session)
//   console.log('session.id: ' + req.sessionID)
// }
// })

  // if (req.user) {
  //   console.log({ loggedIn: true, user: req.session.user })
  //   res.send({ loggedIn: true, user: req.session.user })

  // } else {
  //   res.send({ loggedIn: false })
  //   console.log({ loggedIn: false, user: "poooooop" })
  // }



// router.get('/login', (req, res) => {
//   res.send(req.user)
//  })


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

//login
// router.post('/login', (req, res) => {
//   const username = req.body.username
//   const password = req.body.password

//   db.query("SELECT * FROM users WHERE username = ?;", username, (err, result) => {
//     if (err) {
//       res.send({ err: err })
//     }
//     //  console.log(result)
//     if (result.length > 0) {
//       bcrypt.compare(password, result[0].pass, (err, response) => {
//         if (response) {
//           req.session.user = result
//           console.log(req.session)

//           res.send(result)
//           // res.redirect('/');
//           // res.redirect('/')
//         } else {
//           res.send({ message: "Wrong username/password" })
//         }
//       })
//     } else {
//       res.send({ message: "User does not exist" })
//     }
//   })
// })

// const saltRounds = 10

// let sess;
////signUp
// function authUser (req, res, next) {
//   if (!req.isAuthenticated()) {
//     res.send({ loggedIn: true, user: req.session.user })
//       // res.redirect('/')
//   } else {
//       next();
//   }
// }



//passport 

// passport.deserializeUser((id, cb) => {
  //   db.query("SELECT * FROM users WHERE id = ?;", id, (err, user) => {
  //     cb(err, user)
  //   })
  // })

/////

//   done(null, false, {message: 'login has expired'});
  // }

  // console.log('jwtPAYYYYLODDD')
  // console.log(jwtPayload)
  // done(null, jwtPayload);

  // if(err) return cb(err);
  // console.log('rows:')
  // console.log(rows)
  // // if(rows.length) {
  //   return cb(null, rows);
  // })
  //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
  //   return UserModel.findOneById(jwtPayload.id)
  //       .then(user => {
  //           return cb(null, user);
  //       })
  //       .catch(err => {
  //           return cb(err);

/////

// if there is no user with that email
          // create the user
          // var newUserMysql = new Object();

          // newUserMysql.username = username;
          // newUserMysql.pass = password; // use the generateHash function in our user model

          // var insertQuery = `INSERT INTO users ( username, pass ) values ( ${username}, ${password})`;
          // console.log(insertQuery);
          // connection.query(insertQuery, function (err, rows) {
          //   newUserMysql.id = rows.insertId;


          // });

///////////

// if (user.length > 0) {
  //   bcrypt.compare(password, user[0].pass, function (err, user) {
  //     if (err) throw (err)
  //     if (user) {
  //       console.log('config:')
  //       console.log(user)
  //       // req.session.user = user
  //       return done(null, user)
  //     } else {
  //       return done(null, false, { message: "Wrong username/password combination" })
  //     }
  //   })
  // }
//////////////////////////




// passport.use('passport-local',
  //   new LocalStrategy(
  //     {
  //       usernameField: 'username',
  //       passwordField: 'password',
  //       passReqToCallback: true
  //     }, 
  //     function(req, username, password, done) {
  //       db.query("SELECT * FROM users WHERE username = ?;", username, (err, user) => {
  //         console.log(user);
	// 		console.log("above row object");
  //         if (err) throw (err)

  //         if (!user.length) {
  //           return done(null, false, { message: 'Incorrect username' });
  //         }

  //         // if (!(user[0].pass == password))
  //         //   return done(null, false, { message: 'Incorrect password.' });
  //         if (user.length > 0) {
  //           bcrypt.compare(password, user.pass, (err, result) => {
  //             if (err) throw (err)
  //             if (result) {
  //               return done(null, user)
  //             } else {
  //               return done(null, false, { message: "Wrong username/password combination" })
  //             }
  //           })
  //         }
  //       })
  //     })
  // )

  // passport.serializeUser((user, cb) => {
  //   cb(null, user.id)
  // })

  // passport.deserializeUser((id, cb) => {
  //   db.query("SELECT * FROM users WHERE id = ?;", id, (err, user) => {
  //     cb(err, user)
  //   })
  // })




/////////////////////////////////////!!!!
// const bcrypt = require('bcrypt');

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email)
//     if (user == null) {
//       return done(null, false, { message: 'No user with that email' })
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user)
//       } else {
//         return done(null, false, { message: 'Password incorrect' })
//       }
//     } catch (e) {
//       return done(e)
//     }
//   }

// passport.use(
//   new LocalStrategy((username, password, done) => {

//   })
// )

//   passport.serializeUser((user, done) => done(null, user.id))
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id))
//   })
// }

// module.exports = initialize



// // config/passport.js

// // load all the things we need
// var LocalStrategy   = require('passport-local').Strategy;

// var mysql = require('mysql');

// var connection = mysql.createConnection({
// 				  host     : 'localhost',
// 				  user     : 'root',
// 				  password : ''
// 				});

// connection.query('USE vidyawxx_build2');	

// // expose this function to our app using module.exports
// module.exports = function(passport) {

// 	// =========================================================================
//     // passport session setup ==================================================
//     // =========================================================================
//     // required for persistent login sessions
//     // passport needs ability to serialize and unserialize users out of session

//     // used to serialize the user for the session
//     passport.serializeUser(function(user, done) {
// 		done(null, user.id);
//     });

//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
// 		connection.query("select * from users where id = "+id,function(err,rows){	
// 			done(err, rows[0]);
// 		});
//     });


//  	// =========================================================================
//     // LOCAL SIGNUP ============================================================
//     // =========================================================================
//     // we are using named strategies since we have one for login and one for signup
// 	// by default, if there was no name, it would just be called 'local'

//     passport.use('local-signup', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
//     function(req, email, password, done) {

// 		// find a user whose email is the same as the forms email
// 		// we are checking to see if the user trying to login already exists
//         connection.query("select * from users where email = '"+email+"'",function(err,rows){
// 			console.log(rows);
// 			console.log("above row object");
// 			if (err)
//                 return done(err);
// 			 if (rows.length) {
//                 return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//             } else {

// 				// if there is no user with that email
//                 // create the user
//                 var newUserMysql = new Object();

// 				newUserMysql.email    = email;
//                 newUserMysql.password = password; // use the generateHash function in our user model

// 				var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
// 					console.log(insertQuery);
// 				connection.query(insertQuery,function(err,rows){
// 				newUserMysql.id = rows.insertId;

// 				return done(null, newUserMysql);
// 				});	
//             }	
// 		});
//     }));

//     // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================
//     // we are using named strategies since we have one for login and one for signup
//     // by default, if there was no name, it would just be called 'local'

//     passport.use('local-login', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
//     function(req, email, password, done) { // callback with email and password from our form

//          connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
// 			if (err)
//                 return done(err);
// 			 if (!rows.length) {
//                 return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//             } 

// 			// if the user is found but the password is wrong
//             if (!( rows[0].password == password))
//                 return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

//             // all is well, return successful user
//             return done(null, rows[0]);			

// 		});



//     }));

// };