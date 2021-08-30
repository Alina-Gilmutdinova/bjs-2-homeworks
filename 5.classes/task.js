class PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }
   fix() {
      this.state *= 1.5; //увеличивает в 1,5 раза
   }
   //создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число).
   //Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state должно быть записано переданное в «сеттер» значение
   set state(n) {
      if (n < 0) {
         this.state = 0;
      } if (n > 100) {
         this.state = 100;
      } else {
         this._state = n;
      }
   }
   get state() { //«геттер», который позволит читать значение свойства state
      return this._state;
   }
}
//Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "magazine";
   }
}
//Создайте класс Book, наследующийся от класса PrintEditionItem
class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.author = author;
      this.type = "book";
   }
}
class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "novel";
   }
}
class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "fantastic";
   }
}
class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "detective";
   }
}





// 2 задача
//Создайте класс Library со следующими свойствами
class Library {
   constructor(name, books) {
      this.name = name;
      this.books = [];
   }

   //Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал). 
   //Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30.
   addBook(book) {
      if (book.state > 30) {
      this.books.push(book);   
      }
   }
//Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, по которому 
//будет производиться поиск (тип, автор, название, год выпуска и пр.) 
//и искомое значение. Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
findBookBy = function (type, value) {
   let findBook = this.books.find(item => item[type] === value)
      if (findBook)  {
         return findBook;
      } else {
         return null;
      }
}
giveBookByName = function (bookByName) {
 let findName = this.books.findIndex(item => item.name === bookByName);
   if (findName > -1) {
      return this.books.splice(findName, 1) [0];
   } else {
      return null;
   }
 }
}


//3 задача
//внесение оценки по названию предмета;
//получение средней оценки по предмету;
//получение средней оценки по всем предметам.
//при неверной оценке (не в промежутке 1-5) оценка не заносится в журнал. Выводится сообщение об ошибке.

    
class Student {
   constructor(name) {
      this.name = name;
      this.subjects = {
         algebra: [],
         geometry: []
      };
   };
   
addMark = function(mark, subject) {
   if (mark < 6 && mark > 0) {
      this.marks.push(mark);
   } else {
      console.log ("Ошибка, оценка должна быть числом от 1 до 5");
   }
}
    getAverageBySubject = this.marks.reduce ((acc, item, idx) => {
      acc += item;
      if (idx === this.marks.length - 1) {
         return acc / this.marks.length;
      } else {
         return acc;
      }
   })
}

    //getAverageBySubject = function (subject, marks) {
    //  return this.marks.reduce ((acc, item) => acc += item) / this.length;
  // }
