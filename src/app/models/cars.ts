import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('psql');

const Cars = sequelize.define('car', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  car_types_id: {
    type: DataTypes.INTEGER,
    references: { model: 'car_types', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Cars;
