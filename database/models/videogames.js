'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VideoGames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VideoGames.init({
    titulo: DataTypes.STRING,
    año: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    empresa: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'VideoGames',
  });
  return VideoGames;
};