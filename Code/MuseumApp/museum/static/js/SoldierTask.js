// ��������� ������� ������, ���� ����� ����
var soldiers = new Array(
    {
        "last_name": "Ivanov", "first_name": "Ivan", "patronymic": "Ivanovich", "age": 19, "height": 150
    },
    {
        "last_name": "Sidorov", "first_name": "Sidor", "patronymic": "Sidorovich", "age": 19, "height": 149
    });

// ������� ��������� ���� �� ��� �������� ������ ����� (��������� ��� ���������� ������� �����)
function isTwoPeoplesSameHeight() {
    var m = new Map();
    // �������� �� ������� ������
    for (i in soldiers) {

        // ���� ������ �� ��� �������� ������� (��� ���� ������ ���������)
        if (m[soldiers[i]["height"]] === undefined)
            // ��������� ������� � �������
            m[soldiers[i]["height"]] = 1;
        else {
            // ����� (��� ���� ������ � ����� ������) - �������, ��� �� ����
            // ����� �������������� ����������� ��������� � ���-���� �����
            var checkBox = document.getElementById("answer");
            checkBox.setAttribute("checked", "true");
        }
    }
}

// ������� ��������� ������ ������� � ������ ������ (���������� �� ������� �� ������)
function AddSoldier() {
    var form = document.forms.inputForm;
    var last_name = form.elements.last_name.value;
    var first_name = form.elements.first_name.value;
    var patronymic = form.elements.patronymic.value;
    var age = +form.elements.age.value;  
    var height = +form.elements.height.value;

    soldiers.push({ "last_name": last_name, "first_name": first_name, "patronymic": patronymic, "age": age, "height": height });

}