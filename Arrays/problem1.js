let students = ["Anu", "Radha", "Shikha", "Raj", "Anuradha"];

// using for
let findStudent = (allStudents, studentName) => {
    let length = allStudents.length;
    for(let z = 0; z < length; z++){
        if(allStudents[z].toLowerCase() === studentName.toLowerCase()){
            return `${studentName} Found!`;
        }
    }
    return "No Student Found!"
}

// using filter
let findStudentMap = (allStudents, studentName) => {
    let student = allStudents.filter(s => s === studentName);
    return `${student} Found !`
}

// using find()
let studentFind = (allStudents, studentName) => {
    let student = allStudents.find(s => s === studentName);
    return `${student} Found !`
}

let student1 = findStudent(students, "AnuRadha");
console.log(student1);
let student2 = findStudent(students, "Ram");
console.log(student2);
let student3 = findStudentMap(students, "Radha");
console.log(student3);
let student4 = studentFind(students, "Radha");
console.log(student4);
