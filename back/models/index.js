const Sequelize = require('sequelize');
const user = require('./user');
const post = require('./post');
const image = require('./image');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

Object.keys(db).forEach(modelName => {  // 반복문 돌면서 db 만들고 연결시켜주는 거임.
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.User = user;
db.Post = post;
db.Image = image;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;