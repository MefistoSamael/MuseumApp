function EvaluateNumberOfPeople() {
    // � ���� ���� ��������� ����� ������� �������� � ���������� ����� ����������� � decrCoefficient ���
    // ��� ������� ����������� ������� �������� ����� ������� �������� ��������� 

    // ��������� ��������� ��������
    var initialNumber = document.getElementById('all_people_count').innerHTML;
    var decrCoefficient = document.getElementById('DecreasingCoefficient').value;

    // ��������� �������� ������� ����� �������� ��������
    //�������� ���������� ���, ����� ��� ����������
    var div = document.getElementById('answerDiv');
    // �������� ����, ����� � ���� �������� ��������
    var span = document.getElementById('answerView');

    // ������ ��� �������
    div.removeAttribute('hidden');
    // ������� �����
    span.innerHTML = Math.floor((+initialNumber) / (+decrCoefficient));

}