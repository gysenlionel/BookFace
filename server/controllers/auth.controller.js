const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

//validity of the token = 3 days
const maxAge = 3 * 24 * 60 * 60 * 1000
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
}

module.exports.signUp = async (req, res) => {
  console.log(req.body)
  const { pseudo, firstname, name, email, password } = req.body

  try {
    const user = await UserModel.create({ pseudo, firstname, name, email, password });
    res.status(201).json({ user: user._id });
  }
  catch (err) {
    const errors = signUpErrors(err)
    res.status(200).send({ errors })
  }
}

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.login(email, password)
    const token = createToken(user.id)
    //httpOnly is used for security
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge })
    res.status(200).json({ user: user._id })
  }
  catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors })
  }
}

module.exports.logout = (req, res) => {
  // we reuse the same cookie but with a blank value and a expiring time of  0,001sec
  res.cookie('jwt', '', { maxAge: 1 })
  //without the redirection the request won't go on ! 
  res.redirect('/')
}
