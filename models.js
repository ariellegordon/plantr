const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging:false})

const Gardner = db.define("gardner", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

Plot.belongsTo(Gardner);
Gardner.hasOne(Plot);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plots'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plots'});
Gardner.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = {db, Gardner, Plot, Vegetable}
