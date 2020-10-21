// créer un tableau avec des noms d'étudiant
const names = ["Jimmy", "Laura", "Bastien"];

// pour le tableau, afficher chaque nom
// avec une boucle for classique

for (let i = 0; i < names.length; i++) {
  const value = names[i];
  //console.log(value);
}

// avec for of
for (const value of names) {
  //console.log(value);
}

// avec un forEach
names.forEach((name) => {
  //console.log(name);
});

// créer un tableau avec des objets représentant des étudiants, avec pour chacun leur nom et le langage étudié
const students = [
  {
    name: "Jimmy",
    language: "JS",
  },
  {
    name: "Laura",
    language: "JS",
  },
  {
    name: "Bastien",
    language: "Java",
  }
];
//console.log(students);

// créer un tableau ne contenant que les élèves faisant du JavaScript
// avec filter

const jsStudents = students.filter((student) => {
  // appliquer un filtre : si son language est égal à JS
  if (student.language === "JS") {
    return true;
  } else {
    return false;
  }
  // return student.language === "JS";
});
//student.filter(student => student.language === "JS");
console.log(jsStudents);

// créer un tableau ne contenant que les noms de chaque élève
// avec map

// créer une variable comptant le nombre d'élève faisant Java
// avec une boucle for

// avec reduce