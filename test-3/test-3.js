const School = {
    name: "Bakzhan education",
    phoneNumber: "+77057262760",
    students: [
      { studentName: "Али", top: "247", progress: 85, lessons: 5 },
      { studentName: "Айша", top: "246", progress: 90, lessons: 6 },
      { studentName: "Бек", top: "255", progress: 78, lessons: 4 },
      { studentName: "Гүлнар", top: "245", progress: 88, lessons: 5 },
      { studentName: "Данияр", top: "258", progress: 92, lessons: 7 }
    ]
};

console.log(School);

function changeSchoolName(){
    let newName = prompt("Жаңа оқу орталығының атын енгізіңіз:");
    School.name = newName;
};
changeSchoolName()
console.log("Оқу орталығының жаңа атауы: :", School.name);

function changePhoneNumber() {
    let newNumber = +prompt("Жаңа телефон номер енгізіңіз:");
    School.phoneNumber = newNumber;
}
changePhoneNumber()
console.log(School.phoneNumber);

function listStudentNames() {
    let studentNames = School.students.map(student => student.studentName);
    alert("Студенттер тізімі: " + studentNames.join(", "));
}
listStudentNames()

function addStudent() {
    let studentName = prompt("Студенттің атауын енгізіңіз:");
    let progress = +prompt("Студенттің орташа үлгерімін енгізіңіз (0-100):");
    let lessons = +prompt("Студенттің оқитын сабақ санын енгізіңіз:");
    let top = prompt("Студенттің тобын енгізіңіз:");
  
let newStudent = {
      studentName: studentName,
      progress: progress,
      lessons: lessons,
      top: top
    };
  
    School.students.push(newStudent);
}
addStudent()
console.log(School);

function applyDecreaseToTop() {
    let group = prompt("Орташа үлгерімін өзгертуге арналған топты енгізіңіз:");
    let prosent = +prompt("Қанша пайызға төмендету керектігін енгізіңіз:");
  
    School.students.forEach(student => {
      if (student.top == group) {
        student.progress -= (student.progress * prosent) / 100;
    }
    });
}

  applyDecreaseToTop()

  function menu() {
    while (true) {
        let choice = prompt(`
            1. Оқу орталығының атауын өзгерту
            2. Телефон нөмірін өзгерту
            3. Студенттер атауын шығару
            4. Жаңа студент қосу
            5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету
            6. Тоқтат
            Таңдауыңызды енгізіңіз:
      `);
  
      switch (choice) {
        case "1":
          changeSchoolName();
          break;
        case "2":
          changePhoneNumber();
          break;
        case "3":
          listStudentNames();
          break;
        case "4":
          addStudent();
          break;
        case "5":
          applyDecreaseToTop();
          break;
        case "6":
          alert("Сау болыңыз!");
          break;
        
          alert("Қате таңдау. Қайталап көріңіз.");
          
      }
    }
}
menu()  
  