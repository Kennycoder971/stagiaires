const express = require('express')

const router = express.Router()

const stagiaireController = require('../controllers/stagiaires')

router.get('/',stagiaireController.getStagiaires)

router.get('/stagiaire/:id',stagiaireController.getStagiaire)

router.get('/a-propos',stagiaireController.getApropos)

router.get('/contact',stagiaireController.getContact)

router.get('/ajouter',stagiaireController.getAjouterStagiaire)
router.post('/ajouter',stagiaireController.postAjouterStagiaire)

router.post('/modifier-stagiaire/:id',stagiaireController.postModifierStagiaire)
router.get('/modifier-stagiaire/:id',stagiaireController.getModifierStagiaire)

router.post('/supprimer/:id',stagiaireController.postSupprimerStagiaire)


module.exports = router