const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'temperament', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name : {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    }, { timestamps: false });
};
