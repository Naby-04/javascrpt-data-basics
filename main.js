// les differents types de variables en javascript peuvent etre classer en deux groupe
// les variablesde type primitifs :

// Number : Utilisé pour les nombres, qu'ils soient entiers ou décimaux.
// Exemple : let age = 25;

// String : Utilisé pour représenter du texte. Les chaînes de caractères sont délimitées par des guillemets simples (') ou doubles (").
// Exemple : let nom = "Alice";

// Boolean : Représente une valeur vraie ou fausse (true ou false).
// Exemple : let estVrai = true;

// Undefined : Une variable déclarée mais à laquelle aucune valeur n'a été assignée.
// Exemple : let x; (sa valeur par défaut est undefined)

// Null : Représente une absence volontaire de valeur. Contrairement à undefined, null doit être assigné explicitement.
// Exemple : let vide = null;

// Symbol (introduit en ES6) : Utilisé pour créer des identifiants uniques.
// Exemple : let sym = Symbol('identifiant unique');

//  ensuite les variables de type complexe ou object(fonctions,array ou tableau)

// exercice qui consiste a declarer une variable de type int et la convertir en string puis l'afficher en string

let age = 20;
let age_string = age.toString();
console.log(typeof age_string); // affiche 20
alert("j'ai " + age_string + " ans");

// deuxieme exo :
// declarer une variable de type date puis afficher la date
// à savoir date est un objet integré qui permet de travailler avec les dates et les heures.
// Quand tu crées un objet Date sans paramètre, il stocke la date et l'heure actuelle.

// on peux déclarer une variable de type Date en utilisant le mot-clé new Date() pour obtenir la date et l'heure actuelles.

let dateActuelle = new Date();
alert("Today's date is " + dateActuelle.toLocaleDateString());
// en utilisant des méthodes comme toLocaleDateString() :on affiche seulement la date
