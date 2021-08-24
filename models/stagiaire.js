const {DataTypes} = require('sequelize')

const sequelize = require('../utils/database')

const Stagiaire = sequelize.define('stagiaire', {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nom: {
        type:DataTypes.STRING(50),
        allowNull:true
    }, 
    prenom: {
        type:DataTypes.STRING(50),
        allowNull:true
    }, 
    telephone: {
        type:DataTypes.STRING(50),
        allowNull:true
    }, 
    adresse: {
        type:DataTypes.STRING(50),
        allowNull:true
    },
    diplome: {
        type:DataTypes.STRING(50),
        allowNull:true
    }, 
    date_naiss: {
        type:DataTypes.DATE,
        allowNull:true
    }, 
    contrat: {
        type:DataTypes.BOOLEAN,
        allowNull:true
    }, 
    photo: {
        type:DataTypes.STRING(500),
        allowNull:true
    }, 
    description: {
        type:DataTypes.TEXT,
        allowNull:true
    },
})

module.exports = Stagiaire