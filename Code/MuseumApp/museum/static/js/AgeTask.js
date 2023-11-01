function EvaluateInfo() {
    var form = document.forms.inputForm;
    // �������� ���� ��� ��������� � ���� �������� � �������
    var span = document.getElementById("DisplayAge");
    // �������� ������� <�> � ��������� ������, ����� ����� ��� ������� ������� 
    var displayer = document.getElementById("displayer");
    // �������� ���� �������� �� �����
    const date_of_bitrh = new Date(form.date_of_bitrh.value);

   // �������� �������� ����
    const currentDate = new Date();
    // �������� ������� ��� ����� ��� � ������ ��������
    var age = currentDate.getFullYear() - date_of_bitrh.getFullYear();

    // ������� ��� �� ���� �������� � ���� ����. ���� �� ��� - �������� ���� ��� �� ����������� ����� ��������
    if (date_of_bitrh.getMonth() >= currentDate.getMonth() && date_of_bitrh.getDate() > currentDate.getDate())
        age = age - 1;

    // ������������� ������� ��������
    span.innerHTML = age;

    // ������ ������� ������ � ��������� ��������
    displayer.removeAttribute('hidden');
    // ��������� ����� �� �������
    if (age >= 18) {
        alert("You are born in " + getDayOfWeek(date_of_bitrh.getDay()));
    }
    else {
        alert("Ask a permission of your parents to use this site");
    }
}

// ������� ��������� ������������ getDay ���� ������ � �����
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