const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', async (req, res, next) => { // GET /user
    try {
        console.log(req);
        res.status(200).send('Hello world');
    } catch (error) {
      console.error(error);
   next(error);
  }
});

module.exports = router;