const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const db = require('./models');
const hpp = require('hpp');
const path = require('path');
const helmet = require('helmet');

// const postRouter = require('./routes/post');
// const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
// const hashtagRouter = require('./routes/hashtag');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}
app.use(morgan('dev'));
app.use(cors({
  origin: ['http://localhost:3000','incheolisbest.com'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('hello express');
});

app.listen('3065', () =>{
  console.log('Hello');
});
