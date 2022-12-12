'use strict'
//Объявляем переменные
let randomNumber
let guesses
let newGame


//Игра
const game = function(randomNumber) {   
    //Загадываем число
    randomNumber = Math.floor(Math.random() * 100) + 1
    //Подсказка загаданного числа в консоле
    console.log(randomNumber)   
    let count = 10
    function asking() {
        guesses = +prompt('Угадай число от 1 до 100, у тебя ' + count + ' попыток')
        //Логика счетчика попыток
        count--
        if (count === 0) {
            alert ('Попытки закончились, ты проиграл')
            newGame = confirm('Сыграем еще?')
            if(newGame) {
                return game()
                } else {
                    guesses = null
                    alert('Пока')
                    return
                }
        }
        //Проверка поля ввода
        while (isNaN(guesses)) {
            alert('Введите число!')
            count++
            asking()
        }
        while (!guesses) {
            alert('Игра окончена')
            newGame = confirm('Сыграем еще?')
            if(newGame) {
                return game()
                } else {
                    guesses = null
                    alert('Пока')
                    return
                } 
        }
        //Сравнение ответа с загадкой
        while (guesses > randomNumber) {
            alert('Загаданное число меньше, осталось ' + count + ' попыток')
            asking()
        } 
        while (guesses < randomNumber) {
            alert('Загаданное число больше, осталось ' + count + ' попыток')
            asking()
        }
        if (guesses === randomNumber) {
            alert('Ты победил')
            newGame = confirm('Сыграем еще?')
            if(newGame) {
                return game()
                } else {
                    guesses = null
                    alert('Пока')
                    return
                } 
        }
        
    }
    asking()
}

game(randomNumber)


