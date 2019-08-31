module.exports = (sequelize, DataType) => {
    
    const User = sequelize.define('users', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email:{
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
                notEmpty: true
            }
        },
        senha:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        permissao:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    });
    
    return User;
};