var feedback = Number(prompt('оцените от 1 до 10'))
if (feedback < 5 && feedback >= 1) {
    console.log('Мы работает над улучшением сервиса!');
}

else if (feedback >= 5 && feedback <= 10) {
    console.log('Спасибо за высокую оценку!');
}

else {
    console.log('Оцените заново');
}


//2 part 


var days = prompt("Выберите язык дней недели")

if (days === "RUS") {
    alert("Пн, Вт, Ср, Чт, Пт, Сб, Вс")
} else if (days === "ENG") {
    alert("Mon, Tue, Wen, Thr, Fri, Sat, Sun")
} else {
    alert("Error")
}




