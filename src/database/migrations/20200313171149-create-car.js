module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'cars',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          carTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        },
        { transaction },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
      */
    return queryInterface.dropTable('car');
  },
};
