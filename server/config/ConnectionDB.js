const mongoose = require('mongoose')

//access to .env
require('dotenv').config()

mongoose.connect(
    process.env.DB_CONNECTION, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then ((result) => console.log('CONNECTED TO THE DB'))
  .catch ((err) => console.log(err))