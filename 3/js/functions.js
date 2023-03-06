//Функция для проверки длины строки
function checkStringLenght(string, charsCount) {
  return string.length <= charsCount;
}

// console.log(checkStringLenght('проверяемая строка', 20));
// console.log(checkStringLenght('проверяемая строка', 18));
// console.log(checkStringLenght('проверяемая строка', 10));

/**
 * Функция для проверки, является ли строка палиндромом.
 * Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:
 */
function isPalindrome(string) {
  string = string.toLowerCase();
  return string.split('').reverse().join('') === string;
}

// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));

/**
 * Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого
 *  положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
*/

function getNumbers(value) {
  let result = '';
  for (const letter of value.split('')){
    if(Number.isInteger(parseInt(letter, 10))) {
      result += letter;
    }
  }
  return parseInt(result, 10);
}

// console.log(getNumbers('2023 год'));
// console.log(getNumbers('ECMAScript 2022'));
// console.log(getNumbers('1 кефир, 0.5 батона'));
// console.log(getNumbers('агент 007'));
// console.log(getNumbers('а я томат'));

/**
 * Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами.
 * Возвращает исходную строку, дополненную указанными символами до заданной длины.
 * Символы добавляются в начало строки.
 * Если исходная строка превышает заданную длину, она не должна обрезаться.
 * Если «добивка» слишком длинная, она обрезается с конца.
 */
function padLine(string, minLenght, addString) {
  let probablyLenght; // возможная длина после добавления строки
  while(string.length < minLenght) { //пока длина строки меньше минимальной длины
    probablyLenght = string.length + addString.length; // вычисляем длину после добавления
    if(probablyLenght > minLenght) { //если длина после добавления будет больше, чем минимальная
      const diff = probablyLenght - minLenght; //вычисляем разницу между длиной строки после добавления и минимальной длиной
      addString = addString.slice(0, -diff); //изменяем строку для добавления на разницу между длиной строки после добавления и минимальной длиной
    }
    string = addString + string; //добавляем строку с добавочными символами
  }

  return string;
}

// Добавочный символ использован один раз
// console.log(padLine('1', 2, '0'));
// Добавочный символ использован три раза
// console.log(padLine('1', 4, '0'));
// Добавочные символы обрезаны с конца
// console.log(padLine('q', 4, 'werty'));
// Добавочные символы использованы полтора раза
// console.log(padLine('q', 4, 'we'));
// Добавочные символы не использованы, исходная строка не изменена
// console.log(padLine('qwerty', 4, '0'));
