var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/users');

module.exports = (app) => {

  const usersController = new UsersController('app.datasource.models.user');

  app.route('/sign_in')
    .get((req, res) =>{
      
      usersController
        .getAll()
        .then(data => {
          res.json(data);
        })
        .catch(error => {
          console.log(error);
          res.status(400);
        });
    })
    .post((req, res) => {
      usersController
        .create(req.body)
        .then(rs => {
          res.json(rs);
          res.status(201);
        })
        .catch(error => {
          console.log(error);
          res.status(422);
        });

    })
}

