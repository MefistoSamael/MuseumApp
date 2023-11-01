function EvaluateInfo() {
    var form = document.forms.inputForm;
    // получаем спан для занесения в него возраста в будущем
    var span = document.getElementById("DisplayAge");
    // получаем элемент <р> с атрибутом хидден, чтобы потом его сделать видимым 
    var displayer = document.getElementById("displayer");
    // получаем дату рождения из формы
    const date_of_bitrh = new Date(form.date_of_bitrh.value);

   // получаем нынешнюю дату
    const currentDate = new Date();
    // получаем возраст без учета дня и месяца рождения
    var age = currentDate.getFullYear() - date_of_bitrh.getFullYear();

    // смотрим был ли день рождения в этом году. Если не был - вычитаем один год из полученного ранее возраста
    if (date_of_bitrh.getMonth() >= currentDate.getMonth() && date_of_bitrh.getDate() > currentDate.getDate())
        age = age - 1;

    // устанавливаем возраст человека
    span.innerHTML = age;

    // делаем видимой строку с возрастом человека
    displayer.removeAttribute('hidden');
    // выполняем штуку по условию
    if (age >= 18) {
        alert("You are born in " + getDayOfWeek(date_of_bitrh.getDay()));
    }
    else {
        alert("Ask a permission of your parents to use this site");
    }
}

// функция переводит возвращаемый getDay день недели в текст
function getDayOfWeek(number) {
    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid Day";
    }
}