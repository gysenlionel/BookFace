const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const multer = require('multer')
let uploaded = false

module.exports.uploadProfil = async (req, res) => {

  try {
    if (
      req.file.mimetype != "image/jpg" &&
      req.file.mimetype != "image/png" &&
      req.file.mimetype != "image/jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 500000) throw Error("max size");
    
    uploaded = true ;
    /* return res.status(200).json("File uploaded successfully.")  */
    
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
  finally{
    if (uploaded === true){
      await UserModel.findByIdAndUpdate(
        req.body.userId,
        {
          $set : {picture: './' + req.file.path },
          
        },
        { new: true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(500).send('the image has not been added to the database');
        }
      )
    }
  }
}
