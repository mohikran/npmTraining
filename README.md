### Mini projet training npm et mocha Project

#### Télécharger node js :
https://nodejs.org/en/download/
Peut être comparé à Maven en Java, sert à gérer les repo/dependances, créer des commandes ect.

### Créer un projet npm
Créer un dossier pour le projet, aller dedans et tapper la commande npm init , cela va créer le package.json (équivalent du pom)

### Rajouter une dépendance dans le package.json
rajouter le champs "Dependencies" avec le format "package": "^version du package"
exemple :
"dependencies": {
"express": "^4.17.1"
}
(Express est une librairie de serveur http)
Equivalent du mavenrepo pour trouver les versions des dépendances : https://www.npmjs.com/

### Rajouter des commandes
De base après un npm ini voici la partie script :
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
Vous pouvez lancer un "npm test" mais une erreur se produira car la commande est mal configurée.
Pour rajouter une commande il faut rajouter une ligne dans cette partie script.
Exemple de commande rajoutée pour lancer le serveur :
"start" : "node ./src/app/server.js"
Attention pour indiquer le dossier local il faut mettre './' un '/' tout cours ramène soit à la racine du disque, soit au $home sur linux

### Exécuter une fois le Project
Lancer une première fois "npm install" cette commande télécharge les packages en local et va les insérer dans un dossier "node_modules" à la racine du projet. Ce dossier doit être placé dans le gitignore pour éviter tout craquage et conserver sa santé mentale.
Puis se placer dans le dossier du package.json et lancer "npm start" (qui appelle la commande créée).
---Voici ce que j'ai sous windows :
D:\Projets\npmTraning>npm start

> npmtraning@1.0.0 start D:\Projets\npmTraning
> node ./src/app/server.js

Project npm training has started on port 3000

-> Dans mon navigateur je tappe http://localhost:3000/wsTest et hop j'ai appelé mon WS.

### Lancer des TUs
Premiers frameworks de test à installer, mocha, puis chai.
Mocha est une librairie de TU qui sert de squelette aux tests.
Chai est une librairie d'assertions pour avoir plus de choix dans les tests.
Modifier la commande de test dans le package.json
    "test": "mocha ./src/test/unit/serverTest.js"
Lancer un npm install, puis npm test -> les TU sont lancés.

