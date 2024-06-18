Pour envoyer un projet local vers votre dépôt GitHub, vous pouvez suivre ces étapes :

Initialiser un dépôt Git dans votre projet local :
Si votre projet local n'est pas déjà un dépôt Git, vous devez l'initialiser.

cd /chemin/vers/votre/projet
git init


Ajouter et valider vos fichiers :
Ajoutez les fichiers de votre projet dans l'index de Git et créez un commit.

git add .
git commit -m "Premier commit"


Créer un dépôt sur GitHub :
Allez sur GitHub et créez un nouveau dépôt vide. Ne cochez pas les cases pour ajouter un README.md, un .gitignore ou une licence, car vous avez déjà des fichiers dans votre dépôt local.

Associer votre dépôt local à votre dépôt GitHub :
Copiez l'URL de votre dépôt GitHub.

git remote add origin <URL_de_votre_dépôt_GitHub>


Pousser votre code local vers GitHub :
Poussez votre code local vers votre dépôt GitHub.

git push -u origin master


Assurez-vous de remplacer <URL_de_votre_dépôt_GitHub> par l'URL que vous avez copiée depuis GitHub.

Après avoir suivi ces étapes, votre projet local devrait être poussé vers votre dépôt GitHub avec succès.
tiloid.com
Today I Learned for programmers
