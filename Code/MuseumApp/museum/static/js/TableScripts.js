
// ������� ��� �������� ��������� �������
function generateTable() {
    //�������� ������� �������
    const tableSize = parseInt(document.getElementById('tableSize').value);
    const mainTable = document.getElementById('mainTable');
    mainTable.innerHTML = '';

    for (let i = 0; i < tableSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < tableSize; j++) {
            // ������� ������
            const cell = document.createElement('td');
            // ���������� � ��� ��������� �����
            cell.textContent = Math.floor(Math.random() * 100) + 1;
            // ������������� �������, ������� ��������� �������� ������
            cell.setAttribute('clickable', 'true');
            cell.style.backgroundColor = "white";
            cell.onclick = function () {
                toggleCellColor(this);
            };
            row.appendChild(cell);
        }
        
        mainTable.appendChild(row);
    }
}

// ������� ��� ������������ ����� ������
function toggleCellColor(cell) {
    // �������� ������������ ���������� ����� ������� ����� ���� ��������
    var cellsNumber = document.getElementById('cellsNuber').value;
    // �������� ���������� ���������� ����� �� ������ ������ (�������� ��� ������ � ������� ����� ������� clicked)
    var selectedcellsNumber = cell.parentElement.querySelectorAll('[clicked="true"]').length;
    // ���� ������ ����� ���� ������ � �������� ���������� ���������� �����
    if (cell.hasAttribute('clickable') && selectedcellsNumber < cellsNumber) {
        // �������� ����� ��� ����������
        cell.setAttribute('clicked', 'true');
        // ������� �������, ���������� �� ����������� ���������
        cell.removeAttribute('clickable')
        // ��������� ������� �������(�� �������)
        const cellValue = parseInt(cell.textContent);
        if (cellValue % 2 === 0) {
            cell.style.backgroundColor = 'lightblue';
        } else {
            cell.style.backgroundColor = 'lightpink';
        }

        // ������ ��������������� �������� ������
        if (cell.nextElementSibling !== null && cell.nextElementSibling.hasAttribute('clickable')) {
            cell.nextElementSibling.removeAttribute('clickable');
        }

        if ( cell.previousElementSibling !== null && cell.previousElementSibling.hasAttribute('clickable')) {
            cell.previousElementSibling.removeAttribute('clickable');
        }
    }
}

// ������� ��� ���������������� �������
function transposeTable() {
    const table = document.getElementById('mainTable');
    const rows = Array.from(table.getElementsByTagName('tr'));
    const columns = rows[0].getElementsByTagName('td').length;

    if (rows.length !== columns) {
        alert('�� ������ ��������������� ������ ���������� �������.');
        return;
    }

    const newTable = new Array(columns).fill(null).map(() => new Array(columns).fill(null));

    // ������������� ������� - ������� ����� ������, ������� ����� ��������� ����������������� �������(������ �����)
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            newTable[i][j] = rows[j].getElementsByTagName('td')[i].textContent;
        }
    }

    // �� ������ ������� ��������� ������� � ����������������� �������� � ���������
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            // �������� ������ �� ������ �������
            var cell = rows[i].getElementsByTagName('td')[j];
            // ������� � ��� �������� �� ����� �������
            cell.textContent = newTable[i][j];
            // ������� �������, ���������� �� ������������ ������
            if (cell.hasAttribute('clicked'))
                cell.removeAttribute('clicked');
            // ������������� �������, ���������� �� ����������� ������� �� ������
            cell.setAttribute('clickable', 'true');
            cell.style.backgroundColor = 'white';
        }
    }
}

// ������� ��� ���������� ������ ���� � �������
function addRow() {
    const table = document.getElementById('mainTable');
    const newRow = document.createElement('tr');
    const columns = table.rows[0].cells.length;

    for (let i = 0; i < columns; i++) {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100) + 1;
        cell.setAttribute('clickable', 'true');
        cell.style.backgroundColor = "white";
        cell.onclick = function () {
            toggleCellColor(this);
        };
        newRow.appendChild(cell);
    }

    table.appendChild(newRow);
}

// ������� ��� ���������� ����� ������� � �������
function addColumn() {
    const table = document.getElementById('mainTable');
    const rows = Array.from(table.getElementsByTagName('tr'));


    rows.forEach((row) => {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100) + 1;
        cell.setAttribute('clickable', 'true');
        cell.style.backgroundColor = "white";
        cell.onclick = function () {
            toggleCellColor(this);
        };
        row.appendChild(cell);
    });
}

