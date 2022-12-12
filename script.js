'use strict'
//Объявляем переменные
let randomNumber
let guesses
let newGame


//Игра
const game = function(randomNumber) {   
    //Загадываем число
    randomNumber = Math.floor(Math.random() * 100) + 1
    let count = 10
    function asking() {
        guesses = +prompt('Угадай число от 1 до 100, у тебя ' + count + ' попыток')
        //Логика счетчика попыток
        count--
        if (count === 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                return game()
            } else {
                alert('Игра окончена')
                return
            }
        }
        //Проверка поля ввода
        while (isNaN(guesses)) {
            alert('Введите число!')
            count++
            asking()
            return
        }
        while (!guesses) {
            if (confirm('Игра закончена, хотите сыграть еще?')) {
                return game()
            } else {
                alert('Игра окончена')
                return
            }
        }
        //Сравнение ответа с загадкой
        while (guesses > randomNumber) {
            alert('Загаданное число меньше, осталось ' + count + ' попыток')
            asking()
            return
        } 
        while (guesses < randomNumber) {
            alert('Загаданное число больше, осталось ' + count + ' попыток')
            asking()
            return
        }
        while (guesses === randomNumber) {
            if (confirm('Ты победил, хотите сыграть еще?')) {
                return game()
            } else {
                alert('Игра окончена')
                return
            }
        }       
    }
    asking()
}
game(randomNumber)


