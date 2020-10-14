let videoGames = require('../models/games.js')

module.exports = {
    getAllGames: (req, res) => {
        res.status(200).json({ confirmation: 'success', videoGames })
    },

    getSingleGame: (req, res) => {
        let foundGame = videoGames.filter((game) => game.id == req.params.id)
        if (!foundGame.length) {
            res.status(404).json({ confirmation: "false", message: 'No game found' })
        } else {
            res.status(200).json({ confirmation: 'success', foundGame })
        }
    },

    createGame: (req, res) => {
        //  check if all inputs are filled
        if (!req.body.name
            || !req.body.description
            || !req.body.yearRelease
            || !req.body.playtime) {
            return res.status(404).json({ confirmation: 'false', message: "All input must be filled" })
        }

        // Check if game exists
        let foundGame = videoGames.filter((existGame) => existGame.name === req.body.name)
        if (foundGame.length) {
            return res.status(200).json({ confirmation: "false", message: "game exists" })
        }

        // Create new Game
        let newGame = {}
        newGame.id = videoGames.length + 1;
        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearRelease = req.body.yearRelease;
        newGame.playtime = req.body.playtime;
        videoGames.push(newGame)
        return res.status(200).json({ confirmation: "Success", newGame, videoGames })
    },

    updateGame: (req, res) => {
        let inputGame = req.body

        // loop through array to find the game that has the same id
        videoGames.map((foundGame) => {
            if (foundGame.id === req.params.id) {
                foundGame.name = inputGame.name
                return res.status(200).json({ confirmation: 'success', videoGames })
            }
            return res.status(404).json({ confirmation: 'false', message: 'No game has that id', videoGames })
        })
    },

    deleteGame: (req, res) => {
        // return an array that does not has the input id
        let deleteGame = videoGames.filter((game) => game.id !== req.params.id)
        videoGames = deleteGame
        return res.status(200).json({ confirmation: 'success', message: "game with that id was deleted", videoGames })
    }

}