const User = require('../models/user.js')
const bcrypt = require('bcrypt');
const passport = require('passport');


//LOGIN

//login route
module.exports.login_get = (req, res) => {
  res.render('login')
}

//login handling
module.exports.login_post = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next)
}

// _________________________________________

//REGISTER

//route
module.exports.register_get = (req, res) => {
  res.render('register')
}

//register handling
module.exports.register_post = (req, res) => {
  const { firstname, name, email, password, password2 } = req.body
  let errors = []
  console.log(
    'Firstname: ' +
      firstname +
      ' Name: ' +
      name +
      ' email:' +
      email +
      ' pass:' +
      password
  )

  if (!firstname || !name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' })
  }
  //check if match
  if (password !== password2) {
    errors.push({ msg: "The passwords don't match" })
  }

  //check if password is more than 6 characters
  if (password.length < 6) {
    errors.push({ msg: 'Your password must have at least 6 characters' })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors: errors,
      firstname: firstname,
      name: name,
      email: email,
      password: password,
      password2: password2,
    })
  } else {
    //validation passed
    User.findOne({ email: email }).exec((err, user) => {
      console.log(user)
      if (user) {
        errors.push({ msg: 'This email is already registered' })
        res.render('register', {
          errors,
          firstname,
          name,
          email,
          password,
          password2,
        })
      } else {
        const newUser = new User({
          firstname: firstname,
          name: name,
          email: email,
          password: password,
        })
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            //save pass to hash
            newUser.password = hash
            //save user
            newUser
              .save()
              .then((value) => {
                console.log(value)
                req.flash('success_msg', 'You are now registered!')
                res.redirect('/users/login')
              })
              .catch((value) => console.log(value))
          })
        )
      }
    })
  }
}

// _________________________________________

//LOGOUT

module.exports.logout_get = (req, res) => {
  req.logout()
  req.flash('success_msg', 'Your are now logged out')
  res.redirect('/users/login')
}
