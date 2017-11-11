const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://z_man@localhost:5432/sequalize_db');

let express = require('express')
let bodyParser = require('body-parser')

let app = express();


const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

app.get('/users', (request, response) => {
  User.findAll().then(users => {
    response.send(users);
  })
});
