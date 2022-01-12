const UserModel = require('../models/user.model')
const fs = require('fs')
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)
const { uploadErrors } = require('../utils/errors.utils')

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      //control of the type of images. Only jpg, png and jpeg are allowed
      req.file.detectedMimeType != 'image/jpg' &&
      req.file.detectedMimeType != 'image/png' &&
      req.file.detectedMimeType != 'image/jpeg'
    )
      throw Error('invalid file')

    //control the size of each image uploaded. It has to be less than 500000ko
    if (req.file.size > 500000) throw Error('max size')
  } catch (err) {
    const errors = uploadErrors(err)
    return res.status(201).json({ errors })
  }

  // Using the file upload

  // Each picture will be unique and when the picture change it will erase the precedent one
  const fileName = req.body.name + '.jpg'

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/profil/${fileName}`
    )
  )
}
