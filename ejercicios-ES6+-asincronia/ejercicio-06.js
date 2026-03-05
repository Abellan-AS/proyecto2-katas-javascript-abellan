const totalScore = exams.reduce((accumulator, exam) => {
    return accumulator + exam.score;
}, 0); 

console.log('Suma total de notas:', totalScore); 



const passingTotalScore = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
        return accumulator + exam.score;
    }
    return accumulator;
}, 0);

console.log('Suma de notas de aprobados:', passingTotalScore);


const averageScore = exams.reduce((accumulator, exam, index, array) => {
    // sumamos la nota actual
    const sum = accumulator + exam.score;
    
    // si estamos en el último elemento, dividimos por el total
    if (index === array.length - 1) {
        return sum / array.length;
    }
    
    return sum;
}, 0);

console.log('Media de las notas:', averageScore);