const express = require('express')
const router = express.Router()
const {getAllGames, getSingleGame, createGame, updateGame, deleteGame} = require('../controller/gameController.js')


router.get('/allGames', getAllGames)

router.get('/getSingleGame/:id', getSingleGame)

router.post('/createGame', createGame)

router.put('/updateGame/:id', updateGame)

router.delete('/deleteGame/:id', deleteGame)




module.exports = router