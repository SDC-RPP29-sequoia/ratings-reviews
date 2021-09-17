const { Sequelize } = require('sequelize');
const controller = require('./controllers');
// const seedDatabase = require('./seeders/index.js');

const database = 'ratings_reviews';
const user = 'root';
const password = '';

const sequelize = null;

const connectDatabase = () => {
  return new Promise ((resolve, reject) => {
    try {
      sequelize = new Sequelize(
        database,
        user,
        password,
        // process.env.DATABASE_USER,
        // process.env.DATABASE_PASSWORD,
        {
          dialect: 'postgres',
          define: {
            freezeTableName: true
          },
          logging: console.log,                  // Default, displays the first parameter of the log function call
          // logging: (...msg) => console.log(msg), // Displays all log function call parameters
          // logging: false,                        // Disables logging
        },
      );
      resolve(sequelize);
    } catch (error) {
      console.error('Unable to connect to the Postgres database:', error);
      reject(error);
    }
  });
};

const resetDatabase = (callback) => {
  console.log('Erasing Postgres database data');
  // creates tables if they don't exist, drops them first if force = true
  // Should only be used in dev. For production options, see: https://sequelize.org/master/manual/model-basics.html
  sequelize.sync({ force: true })
  // .then (() => seedDatabase(model))
  .then (() => callback())
  .catch ( error => console.log('Unable to reset Postgres database', error));
}

const initializeDatabase = (eraseDatabaseOnSync, callback) => {
  connectDatabase()
  .then( () => sequelize.authenticate() )
  .then ( () => {
    console.log('Connection to Postgres has been established successfully.');
    if (eraseDatabaseOnSync) {
      // resetDatabase(callback);
    }
    else {
      sequelize.sync()
      .then (() => callback());
    }
  })
  .catch(error => {
    console.error('Unable to initialize the Postgres database:', error);
  });
};

module.exports.postgres = {
  initializeDatabase: initializeDatabase,
  methods: controller
};