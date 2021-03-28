const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', async (req, res, next) => {  // 템플릿 
    try {
        res.status(200).send('Hello world');
    } catch (error) {
      console.error(error);
   next(error);
  }
});


router.post('/register', isNotLoggedIn, async (req, res, next) => {  // 회원가입
  try {
     const exUser = await User.findOne({
        where: {
            email:req.body.id, 
        }
     });
     console.log(exUser);
     if(exUser){
        res.status(501).send('이미 존재하는 유저 아이디입니다.');
     } else {
        const hashedPassword = await bcrypt.hash(req.body.ps,10);

        await User.create({
          email: req.body.id,
          password: hashedPassword,
          nickname : req.body.nickname,
        });

        const user = await User.findOne({
          where: {
              email:req.body.id,
              password: hashedPassword,
              nickname : req.body.nickname, 
          }
       });
       res.status(201).json(user);
     }
  } catch (error) {
    console.error(error);
 next(error);
}
});

router.post('/login', (req, res, next) => {
   passport.authenticate('local', (err, user, info) => {
      if (err) {
         console.error(err);
         return next(err);
      }
      if (info) {
         return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
         if (loginErr) {
           console.error(loginErr);
           return next(loginErr);
         } 
         const fullUserWithoutPassword = await User.findOne({
           where: { id: user.id },
           attributes: {
             exclude: ['password']
           },
         })
         return res.status(200).json(fullUserWithoutPassword);
       });
   })(req, res, next);
 });



module.exports = router;