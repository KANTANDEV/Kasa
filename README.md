# Kasa

Formation Projet N°11 Formation openclassrooms Développeur d'application - JavaScript React

![Capture_d_écran_2023-01-14_191346-removebg-preview](https://user-images.githubusercontent.com/94462048/212488823-c319c0af-c05f-43a6-bd2b-7c874630940f.png)


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
