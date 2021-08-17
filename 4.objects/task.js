function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
const student1 = new Student();
const student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  console.log("предмет:" + " " + this.subject);
    //ваш код
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    student1.addMark(5);// добавить первую оценку 
    } else {
      student1.addMark(4);
      student1.addMark(3);
      student1.addMark(2);
      student1.addMark(1);// добавить вторую и последующие оценки в массив
    }
    console.log ("оценка:" + " " + this.mark);
}

Student.prototype.addMarks = function (mark1, mark2, mark3...) {
 console.log(marks); //ваш код
}

Student.prototype.getAverage = function (avg) {
  
}