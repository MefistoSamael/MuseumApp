function EvaluateNumberOfPeople() {
    // в мире моей программы “анос щелкнул пальцами и количество людей уменьшилось в decrCoefficient раз
    // эта функци€ высчитывает сколько осталось людей которые посещали экскурсии 

    // получение начальных значений
    var initialNumber = document.getElementById('all_people_count').innerHTML;
    var decrCoefficient = document.getElementById('DecreasingCoefficient').value;

    // получение элемента который будет выводить значение
    //получаем спр€танный див, чтобы его отобразить
    var div = document.getElementById('answerDiv');
    // получаем спан, чтобы в него запхнуть значение
    var span = document.getElementById('answerView');

    // делаем див видимым
    div.removeAttribute('hidden');
    // выводим ответ
    span.innerHTML = Math.floor((+initialNumber) / (+decrCoefficient));

}