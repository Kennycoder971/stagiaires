const Stagiaire = require('../models/stagiaire')

exports.getStagiaires = async (req,res) => {
    try {
     const stagiaires = await Stagiaire.findAll()

     res.render('home',{
         stagiaires
     })
    } catch (error) {
        console.log(error);
    }
}


exports.getApropos = (req,res) => {
    res.render('a-propos')
}
exports.getContact = (req,res) => {
    res.render('contact')
}

exports.getAjouterStagiaire = (req,res) => {
    res.render('ajouter-stagiaire')
}
exports.postAjouterStagiaire = async (req,res) => {
    const {nom,prenom,telephone,adresse,diplome,date_naiss,contrat,photo,description} = req.body

    try {
        await Stagiaire.create({
            nom,
            prenom,
            telephone,
            adresse,
            diplome,
            date_naiss,
            contrat: contrat === 'on' ? 1 : 0,
            photo,
            description
        })
    } catch (error) {
        console.log(error);
    }
    res.render('ajouter-stagiaire')
}

exports.postSupprimerStagiaire = async (req, res) => {
    try {
        const stagiaireId = req.params.id
        const stagiaire = await Stagiaire.findByPk(stagiaireId)
        await stagiaire.destroy()
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

exports.getStagiaire = async (req, res) => {
    try {
        const stagiaireId = req.params.id
        const stagiaire = await Stagiaire.findByPk(stagiaireId)
        res.render('stagiaire', {
            stagiaire
        })
    } catch (error) {
        console.log(error);
    }
}


exports.postModifierStagiaire = async (req,res) => {
    const {nom,prenom,telephone,adresse,diplome,date_naiss,contrat,photo,description} = req.body
    console.log(req.body);
    console.log('Modifié');
    try {
        const stagiaireId = req.params.id
        await Stagiaire.update({
            nom,
            prenom,
            telephone,
            adresse,
            diplome,
            date_naiss,
            contrat: contrat === 'on' ? 1 : 0,
            photo,
            description
        },{where:{id:stagiaireId}})
        res.redirect(`/stagiaire/${stagiaireId}`)
    } catch (error) {
        console.log(error);
    }
}
exports.getModifierStagiaire = async (req,res) => {
    try {
        const stagiaireId = req.params.id
        const stagiaire = await Stagiaire.findByPk(stagiaireId)
        res.render('modifier-stagiaire', {stagiaire})
    } catch (error) {
        console.log(error);
    }
}
