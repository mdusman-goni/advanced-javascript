const student = [
    { id: 123, name: "Usman" },
    { id: 456, name: "Rohim" },
    { id: 789, name: "Ruman" },
    { id: 999, name: "Jamil" },
]

// const justName = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     let students = element.name;
//     justName.push(students)
// }

const justName = student.map(x => x.name)
const justId = student.map(x => x.id)
const biggerId = student.filter(x => x.id > 500);
const biggerOneId = student.find(x => x.id > 500);
console.log(justName);
console.log(justId)
console.log(biggerId);
console.log(biggerOneId);