const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://z_man@localhost:5432/sequalize_db');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

app.get('/', )
/*// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
}).then(() => {
  // Table created
  return User.create({
    firstName: 'James',
    lastName: 'Madison'
  })
}).then(() => {
  // Table created
  return User.create({
    firstName: 'George',
    lastName: 'Washington'
  })
}).then(() => {
  // Table created
  return User.create({
    firstName: 'Ben',
    lastName: 'Franklin'
  })
}).then(() => {
  // Table created
  return User.create({
    firstName: 'Paul',
    lastName: 'Reveere'
  })
}).then(() => {
  User.findAll().then(users => {
    console.log(users)
  })
})*/
