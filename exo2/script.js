'use strict'; // Mode strict conseillé pour éviter les erreurs de portée et d'oubli de déclaration (slide 46).

// f1: Affiche un tableau de noms d’étudiants
// Concept: Déclaration de tableau (slide 37)
function f1() {
  let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  console.log(etudiants); // Affichage dans la console (slide 33)
}

// f2: Affiche un objet étudiant
// Concept: Déclaration d'objet (slide 39)
function f2() {
  let etudiant = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
  };
  console.log(etudiant); // Affichage dans la console (slide 33)
}

// f3: Affiche un tableau d'objets étudiants, formaté
// Concepts: Tableau d'objets (slide 40), boucle forEach (slide 44)
function f3() {
  let etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  
  // Boucle forEach pour parcourir le tableau (slide 44)
  // Affichage formaté en utilisant template literals (slide 36) + affiche dans la console (slide 33)
  etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
  });
}
