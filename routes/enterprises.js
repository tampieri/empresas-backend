const express = require('express');
const router = express.Router();
const restify = require('restify');
const errors = require('restify-errors');
//const server = require('../config/server');
const knex = require('../config/knex');

/* GET enterprise show. */
router.get('/', (req, res, next) => {

    //const{ access_token, client, uid} = req.body;
    const dados = [];
    
    //if (access_token === undefined || client === undefined || uid === undefined) {
    /*if (id === undefined) {
        res.status(401).json({
            success: false,
            code: 'ERROR_001',
            message: "Dados do usuário são inválido."
        });
    }else{*/        
        knex('enterprise')
            .then((dados) => {
                if(!dados) return res.send(new errors.BadRequestError('Empresas não cadastrada!'))
            res.send(dados);
        }, next)
    //}
});

/* GET enterprise index. */
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    
    //const{ access_token, client, uid} = req.body;
    const dados = [];
    
    //if (access_token === undefined || client === undefined || uid === undefined) {
    if (id === undefined) {
        res.status(401).json({
            success: false,
            code: 'ERROR_001',
            message: "Dados do usuário são inválido."
        });
    }else{        
        knex('enterprise')
            .where('user_id', id)
            .first()
            .then((dados) => {
                if(!dados) return res.send(new errors.BadRequestError('Empresa não cadastrada!'))
            res.send(dados);
        }, next)
    }
});

/* GET enterprise filter. */
router.get('$enterprise_types=:"enterprise_types"&$name=:"name"', (req, res, next) => {
    const { enterprise_types } = req.params.enterprise_types;
    const { name } = req.params.name;
    
    //const{ access_token, client, uid} = req.body;
    const dados = [];
    
    //if (access_token === undefined || client === undefined || uid === undefined) {
    if (id === undefined) {
        res.status(401).json({
            success: false,
            code: 'ERROR_001',
            message: "Dados do usuário são inválido."
        });
    }else{        
        knex('enterprise')
            .where('enterprise_types', enterprise_types)
            .andWhere('name', name)
            .first()
            .then((dados) => {
                if(!dados) return res.send(new errors.BadRequestError('Empresa não cadastrada!'))
            res.send(dados);
        }, next)
    }
});

module.exports = router;