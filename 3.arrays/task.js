//Комментарий: 1 задание сделала ка на разборном занятии 


const compareArrays = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);  //сравнить 2 массива
  
  //true && true && false && a = 10 + 5
  //if(a > 0) a * a +10;
  //a >0 && (a - a + 10)
  //let result;

  // Ваш код
//if(arr1.lenght !== arr2.lenght) return false;//если длины массивов не равны, то сразуfalse
  //arr1.every((item, idx) => {
  // return item === arr2[idx] //cравниваем равен ли индекс одного массива с другим
 // })
  //return result; // boolean

//Задание 2
function advancedFilter(arr) {
  let resultArr = arr.filter((item) => (item > 3)).filter(item => (item % 3 === 0)).map(item => item * 10)
  
  return resultArr; // array
}
