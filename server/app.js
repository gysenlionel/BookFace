// adding Express Framework
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
// const postRoutes = require('./routes/post.routes')

//connection to DB
require('./config/ConnectionDB')

const { checkUser, requireAuth } = require('./middleware/auth.middleware')

// CORS
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}

app.use(cors({corsOptions}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//allow to read the cookie
app.use(cookieParser())

// jwt Middelware - Eachtime there's a request ('*') there will be a check if the user possess the right token
app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
})

//Routes
app.use('/api/user', userRoutes)
// app.use('/api/post', postRoutes)


//connection to the server
app.listen(3001, () => {
  console.log('SERVER RUNS')
})