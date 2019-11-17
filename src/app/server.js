
const express = require('express')
const appTest = express()

//Création d'un WS get avec l'url ws/test
appTest.get('/wsTest', function (req, res) {
  res.send('Coucou port 3000')
})

//Configure le serveur pour lui dire de démarer le serveur sur le port 3000.
appTest.listen(3000, function () {
  console.log('Project npm training has started on port 3000')
})
