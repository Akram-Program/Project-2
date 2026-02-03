
const vakken = ["JavaScript", "HTML", "CSS"];

console.log("--- Opdracht 2 ---");
console.log("Eerste vak:", vakken[0]); 
console.log("Laatste vak:", vakken[vakken.length - 1]); 


vakken.push("PHP");

console.log("\n--- Opdracht 3 ---");
console.log("Array na push:", vakken);


console.log("\n--- Opdracht 4 (For Loop) ---");
for (let i = 0; i < vakken.length; i++) {
    console.log("Vak via for-loop:", vakken[i]);
}


console.log("\n--- Opdracht 5 (forEach) ---");
vakken.forEach(function(vak) {
    console.log("Vak via forEach:", vak);
});


console.log("\n--- EINDOPDRACHT ---");

const studenten = ["Anis", "Emma", "Lars", "Sarah"];

console.log("Studentenlijst (for-loop):");
for (let i = 0; i < studenten.length; i++) {
    console.log("- " + studenten[i]);
}

console.log("Studentenlijst (forEach):");
studenten.forEach(function(student) {
    console.log("- " + student);
});

console.log("Totaal aantal studenten:", studenten.length);