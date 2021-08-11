// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;//0 это начальное значение ,счетчик
  let avg = 0;

  for(let i =0; i < arr.length; i++) { //создала цикл для перебора массива, масси начинается с 0, i-это элемент массива
  if (arr[i] < min) { //Если элемент меньше предыдущего минимума, то минимум становится равен элементу
      min = arr[i];
    }
    
    if ( arr [i] > max) {//Если элемент больше предыдущего максимума, то максимум становится равен элементу
      max = arr[i];
    }
    sum += arr[i];//считаем сумму, прибавляя последовательно все элементы массива
 }
  // Ваш код
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min:min, max:max, avg: avg };
}


// Задание 2

function worker(arr) {
  let sum = 0;
  let count =0;

  // Ваш код
for (let i = 0; i < arr.length; i++) { //находим сумму элементов массива в насадке
  sum += arr[i];
}
  return sum;
}


function makeWork(arrOfArr, func) { //передаем насадку 
  let max = -Infinity;

  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {//проходим по массиву
    if (func(arrOfArr[i]) > max) { //если сумма элементов больше предыдущего максимума
      max = func(arrOfArr[i]);
    }
  }
  return max
}

// Задание 3
function worker2(arr) {// Ваш код
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
    min = arr[i];
  };

    if (arr[i] > max) {
      max = arr [i];
    };
    
};

return max - min;
}
