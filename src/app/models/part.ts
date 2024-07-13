import { Sequelize, Model, DataTypes } from 'sequelize';

class Part extends Model {
  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        car_type_id: {
          type: DataTypes.INTEGER,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'part',
        sequelize,
      },
    );

    return this;
  }
}

export default Part;
