export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      example: DataTypes.STRING
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};