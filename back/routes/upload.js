const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { Post, Image } = require('../models');

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});


const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'inchisbest',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});


router.post('/imgUpload', upload.array('image'), (req, res, next) => {
  console.log(req.files);
  res.status(200).json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')));
});

router.post('/contentUpload', upload.none(), async (req, res, next) => { 
  try {
    const post = await Post.create({
      content: req.body.content,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else { // 이미지를 하나만 올리면 image: 제로초.png
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    res.status(200).send('Good');
  } catch (error) {
    console.error(error);
    next(error);
  }
}); 


module.exports = router;