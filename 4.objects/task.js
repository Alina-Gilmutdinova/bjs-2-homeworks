function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
    //ваш код
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {   
    if(this.marks === undefined) { // проверяем, получал ли наш студент оценки ранее
      this.marks = [mark];// добавить первую оценку // если нет, создаём новый массив для их хранения
      } else {
        this.marks.push(mark); //добавить вторую и последующие оценки в массив
  };
    };


Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(...mark);
  } else {
  this.marks.push(...mark);
  };
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item) => acc += item) / this.marks.length;
};

Student.prototype.exclude = function (reason) {

delete this.subject; //удаляем объект 
delete this.marks;

this.excluded = reason; //присваиваем новое значение
}