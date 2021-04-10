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
    if (req.body.image) {
        if (Array.isArray(req.body.image)) { 
          const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
          await post.addImages(images);
        } else { // 이미지를 하나만 올리면 image: 제로초.png
          const image = await Image.create({ src: req.body.image });
          await post.addImages(image);
        }
        res.status().send('이미지가 생성되었습니다. ');
      }
    else {
        res.status(200).send('이미지가 없습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;