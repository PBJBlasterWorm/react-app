const students = [
    { name: "철수", score: 85 },
    { name: "영희", score: 92 },
    { name: "민수", score: 76 },
    { name: "지현", score: 89 }
]

const findtopstudents = (students, minscore) => {
    const topstudents = [];
    for (const student of students) {
    if (student.score >=  minscore) {
        topstudents.push(student);
    }
}
    return topstudents;
}

const assigngrades = (students) => {
    const gradedstudents = [];
	   for (const student of students) {
        let grade;
        if (student.score >= 90) {
            grade = "A";
        }

        else if (student.score >= 80) {
            grade = "B";
        }

        else if (student.score >= 70) {
            grade = "C";
        }

        else {
            grade = "F";
        }

        gradedstudents.push({ name: student.name, grade });
    }

    return gradedstudents;
}

const topstudents = findtopstudents(students, 80);
console.log(topstudents);

const gradedstudents = assigngrades(students);
console.log(gradedstudents);