# Kasa

Formation Projet N°11 Formation openclassrooms Développeur d'application - JavaScript React

![Capture_d_écran_2023-01-14_191346-removebg-preview](https://user-images.githubusercontent.com/94462048/212488823-c319c0af-c05f-43a6-bd2b-7c874630940f.png)

## Maquettes

#### Desktop
![home](https://user-images.githubusercontent.com/94462048/214882406-5181de2b-7200-438c-8cc0-b583b1d9bc8f.png)
![card](https://user-images.githubusercontent.com/94462048/214882446-96d7da5e-cc84-46f6-9e0d-47d2d7a11804.png)
![404](https://user-images.githubusercontent.com/94462048/214882486-4c45a773-be6e-4a65-8a66-401ebd7ca7d4.png)
![About](https://user-images.githubusercontent.com/94462048/214882510-76089491-9aa6-492d-b1ca-6df42118834f.png)
![About2](https://user-images.githubusercontent.com/94462048/214882536-852b0e39-d563-4db3-8e1c-dda2e993af23.png)

#### Responsive
![HomeR](https://user-images.githubusercontent.com/94462048/214882637-22511a84-bd27-4f39-877a-a6a74c783d17.png)
![CardR](https://user-images.githubusercontent.com/94462048/214882653-590427ef-898b-4dd7-b582-89d42d8eac51.png)
![404R](https://user-images.githubusercontent.com/94462048/214882666-920f7f52-8cb0-4f3d-bb09-3adc7a37d262.png)
![aboutR](https://user-images.githubusercontent.com/94462048/214882685-8f4c5408-206f-4f69-b910-d0be3252c813.png)


## Scénario 

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 
Le Back-end n'étant pas terminé il va falloir l'émuler grâce à un fichier JSON.

## Contraintes techniques

#### General : 

- Le code ne doit pas produire d'erreur ou de warning dans la console.

#### REACT :

- Découpage en composants modulaires et réutilisables 
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation des props entre les composants
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements
- Listes React

#### React Router :

- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées. 
- La logique du routeur est réunie dans un seul fichier

## Contraintes fonctionnelles

#### Pour le défilement des photos dans la galerie (composant Gallery) : 

- Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

#### Collapse : 

- Par défaut, les Collapse sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.


## Stacks utilisées

- React
- React-Router
- Vite
- Typescript
- Sass

## Justification du choix des stacks : 

#### Vite :

- Vite améliore le temps de démarrage du serveur de développement en divisant d'abord les modules d'une application en deux catégories : les dépendances et le code source.

#### TypeScript  :

- Éviter les erreurs cachées 
- Plus facile de remanier le code sans le casser de manière significative.
- S’orienter plus facilement dans des systèmes complexes et à grande échelle
- Code plus facile à maintenir contrairement au Javascript ou sa complexité à croître de manière exponentielle à chaque nouvelle ligne de code.

#### Sass :

- Permet de gérer des feuilles de styles de manière dynamique, à l'aide de variables, de conditions, de fonctions, de boucles et d'expressions.
- Permet d'écrire plus rapidement du CSS.
- Créer des vendors automatiquement ce qui permet donc d’avoir un rendu identique sur chaque navigateur.
