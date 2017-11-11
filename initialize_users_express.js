const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://z_man@localhost:5432/sequalize_db');

let express = require('express')
let bodyParser = require('body-parser')

let app = express();
app.use(bodyParser.json())

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
})


app.post('/users/create', (request, response) => {
  // creating a new user
  let newUser = request.body
  User.create(
    newUser
  ).then((results) => {
    response.json(results)
  });
});





app.listen(3000, () => {
    console.log('Initialize_users-express app listening on port 3000!')
})
