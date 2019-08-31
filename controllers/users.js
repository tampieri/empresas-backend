const HttpStatus = require("http-status");

class UsersController{
    constructor(modelsUser){
        this.Users = modelsUser;
    }

    getAll() {
        return this.Users
                .findAll({})
                .then(rs => rs)
                .catch(e => e);
    }

    getById(params) {

        return this.Users
                .findOne({where: params})
                .then(rs => rs)
                .catch(e => e);
    }

    create(data) {

        return this.Users
                .create(data)
                .then(rs => rs)
                .catch(e => e);
    }

    update(data, params) {

        return this.Users
                .update(data, {where: params})
                .then(rs => rs)
                .catch(e => e);
    }

    delete(data, params) {

        return this.Users
                .destroy({where: params})
                .then(rs => rs)
                .catch(e => e);
    }
}

module.exports = UsersController;