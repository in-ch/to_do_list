const db = require(".");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {   //MySQL에는 users 테이블 생성
        // no은 자동으로 넣어짐
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
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장        
    });
    // User.associate = (db) => {
    //     db.User.hasMany(db.Post);
    //     db.User.hasMany(db.Comment);
    //     db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'});   // 다대다 테이블 이름 through에서 정해줄 수 있다. as는 뭐지?
    //     db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});   // foreignKey를 적어야하는 이유는 먼저 뭐를 검색해야하는 지 알아야해서
    //     db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
    // };
    return User;
};