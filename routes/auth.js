const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const restify = require('restify');
const errors = require('restify-errors');
//const server = require('../config/server');
const knex = require('../config/knex');

//const UsersController = require('../controllers/users');

const config = require('../config/index');
const user = require('../models/user');

router.post('/sign_in', (req, res, next) => {
    const{ email, password } = req.body;
    const dados = [];
   
    if (email === undefined || password === undefined) {
        res.status(401).json({
           success: false,
           code: 'ERROR_001',
           message: "E-mail e/ou password inválido."
        });
    }else{        
        knex('user')
            .where('email', email)
            .first()
            .then((dados) => {
                if(!dados) return res.send(new errors.BadRequestError('Usuario não cadastrado!'))
            //res.send(dados);
            let tokenData = {
                id:101
            }
            let generatedToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn: 3600000});
            res.json({
                success: true,
                access_token : generatedToken,
                client:dados.client,
                uid:dados.id
            })
        }, next)
    }
});

module.exports = router;