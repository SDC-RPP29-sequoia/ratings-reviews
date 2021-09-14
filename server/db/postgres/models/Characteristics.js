module.exports = (sequelize, DataTypes) => {
  const Characteristic = sequelize.define('Characteristic', {
    characteristic_id: DataTypes.INTEGER, // allowNull: false
    name: DataTypes.STRING, // allowNull: false
    rating_id: DataTypes.INTEGER,
    review_metadata_id: DataTypes.INTEGER, // allowNull: false
  }, {
    tableName: 'characteristic'
  });
  Characteristic.associate = function(models) {
    Characteristic.belongsTo(models.ReviewMetadata, {
      foreignKey: 'review_metadata_id',
      as: 'reviewMetadata'
    });
    Characteristic.belongsTo(models.Rating, {
      foreignKey: 'rating_id',
      as: 'rating'
    });

    Characteristic.belongsToMany(models.Review, { through: models.ReviewToCharacteristic });
    Characteristic.hasMany(models.ReviewToCharacteristic, {
      foreignKey: 'characteristic_id',
      as: 'reviews',
      onDelete: 'CASCADE',
    });
  };
  return Characteristic;
};