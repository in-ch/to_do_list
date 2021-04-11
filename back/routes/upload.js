const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('path');
const path = require('fs');
const router = express.Router();

try {
    path.fstat.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    path.fstat.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads');
      },
      filename(req, file, done) { // 제로초.png
        const ext = path.extname(file.originalname); // 확장자 추출(.png)
        const basename = path.basename(file.originalname, ext); // 제로초
        done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
      },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  });


router.get('/upload/imgUpload', async (req, res, next) => { 
  try {
    router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
      console.log(req.files);
      res.json(req.files.map((v) => v.filename));
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;