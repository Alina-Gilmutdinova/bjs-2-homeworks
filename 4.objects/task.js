function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
const student1 = new Student();
const student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
    //ваш код
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  this.mark = mark {
    if(this.marks === undefined){ 
      mark.push (5)// добавить первую оценку 
      } else {
        this.addMark.push(4);
        this.addMark.push(3);
        this.addMark.push(2);
        this.addMark.push(1);// добавить вторую и последующие оценки в массив
  }  
    }
}

Student.prototype.addMarks = function (mark1, mark2, mark3,...) {
 addMarks.push(mark1, mark2, mark3, ...); //ваш код
}

Student.prototype.getAverage = function (avg) {
  let sum = 
  return avg = sum / mark.length;
}
