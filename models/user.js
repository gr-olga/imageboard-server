'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {

        static associate(models) {
            // define association here
        }
    }

    user.init({
        email: {type: DataTypes.STRING, allowNull: false, unique: true},
        password: {type: DataTypes.STRING, allowNull: false},
        fullName: {type: DataTypes.STRING, allowNull: false},
    }, {
        sequelize,
        modelName: 'user',
    });
    return user;
};