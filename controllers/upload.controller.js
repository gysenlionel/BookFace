const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
  try {
    /* if (
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/png" &&
      req.file.detectedMimeType != "image/jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 500000) throw Error("max size"); */
    return res.status(200).json("File uploaded successfully.")
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }



  /* try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set : {picture: "./uploads/profil/" + fileName}},
      { new: true, upsert: true, setDefaultsOnInsert: true},
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: err });
  } */
};
