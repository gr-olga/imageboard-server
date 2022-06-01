'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class image extends Model {
        static associate(models) {
            // define association here
        }
    }

    image.init({
        title: {type: DataTypes.STRING, allowNull: false},
        url: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'image',
    });
    return image;
};