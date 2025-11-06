'use strict';

// Student data
// Concept: Array of objects (slide 40)

const students = [
  { id: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { id: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

// Function B: Takes a float parameter (average) and returns a boolean slid 45
function B(moyenne) {
  return moyenne >= 10;
}

// Function A: Calls function B for each student
// Concept: Looping through array of objects (slide 44)
function A() {
  students.forEach(student => {
    // Calculate the average: (Note1 + Note2)/2 + 5
    let moyenne = (student.note1 + student.note2) / 2 + 5;
    
    // Call function B to check if student passes
    let isAdmis = B(moyenne);
    
    // Display result
    // Concept: Ternary operator (slide 46)
    let resultat = isAdmis ? "ADMIS" : "AJOURNÉ";
    console.log(`${student.id}: ${resultat}`);
  });
}
