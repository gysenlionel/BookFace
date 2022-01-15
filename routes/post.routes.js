const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");


router.get('/', postController.readPost);

//Create a Post with an image
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './app/public/postImages')
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
        console.log(file.originalname)
    }
  })
  
const upload = multer({storage: storage});

router.post('/', upload.single("file"), postController.createPost);

router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);

module.exports = router;