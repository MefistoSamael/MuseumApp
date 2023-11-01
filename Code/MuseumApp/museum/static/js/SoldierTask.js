// созданные заранее массив, чтоб проще было
var soldiers = new Array(
    {
        "last_name": "Ivanov", "first_name": "Ivan", "patronymic": "Ivanovich", "age": 19, "height": 150
    },
    {
        "last_name": "Sidorov", "first_name": "Sidor", "patronymic": "Sidorovich", "age": 19, "height": 149
    });

// функци€ вычисл€ет есть ли два человека одного роста (вызваетс€ как обработчик сабмита формы)
function isTwoPeoplesSameHeight() {
    var m = new Map();
    // проходим по массиву солдат
    for (i in soldiers) {

        // если солдат не был добавлен словарь (его рост вернет јнƒе‘аЌеƒ)
        if (m[soldiers[i]["height"]] === undefined)
            // добавл€ем солдата в словарь
            m[soldiers[i]["height"]] = 1;
        else {
            // иначе (уже есть солдат с таким ростом) - выводим, что он есть
            // вывод осуществл€етс€ посредством установки в чек-бокс галки
            var checkBox = document.getElementById("answer");
            checkBox.setAttribute("checked", "true");
        }
    }
}

// функци€ добавл€ет объект солдата в массив солдат (вызываетс€ по нажатию на кнопку)
function AddSoldier() {
    var form = document.forms.inputForm;
    var last_name = form.elements.last_name.value;
    var first_name = form.elements.first_name.value;
    var patronymic = form.elements.patronymic.value;
    var age = +form.elements.age.value;  
    var height = +form.elements.height.value;

    soldiers.push({ "last_name": last_name, "first_name": first_name, "patronymic": patronymic, "age": age, "height": height });

}