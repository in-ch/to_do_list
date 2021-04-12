const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
        email: {
            type: DataTypes.STRING(30), // STRONG, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필 수 
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필 수 
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필 수 
        },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
  }
};