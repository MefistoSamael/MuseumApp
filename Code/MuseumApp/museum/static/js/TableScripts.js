
// ‘ункци€ дл€ создани€ начальной таблицы
function generateTable() {
    //получаем разммер таблицы
    const tableSize = parseInt(document.getElementById('tableSize').value);
    const mainTable = document.getElementById('mainTable');
    mainTable.innerHTML = '';

    for (let i = 0; i < tableSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < tableSize; j++) {
            // создаем €чейку
            const cell = document.createElement('td');
            // запихиваем в нее случайное число
            cell.textContent = Math.floor(Math.random() * 100) + 1;
            // устанавливаем атрибут, который повзол€ет выдел€ть €чейку
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

// ‘ункци€ дл€ переключени€ цвета €чейки
function toggleCellColor(cell) {
    // получаем максимальное количество €чеек которое может быть выделено
    var cellsNumber = document.getElementById('cellsNuber').value;
    // получаем количество выделенных €чеек на данный момент (получаем все €чейки у которых стоит атрибут clicked)
    var selectedcellsNumber = cell.parentElement.querySelectorAll('[clicked="true"]').length;
    // если €чейка может быть нажата и выделено допустимое количество €чеек
    if (cell.hasAttribute('clickable') && selectedcellsNumber < cellsNumber) {
        // помечаем €чеку как выделенную
        cell.setAttribute('clicked', 'true');
        // убираем атрибут, отвечающий за возможность выделени€
        cell.removeAttribute('clickable')
        // выделение разными цветами(по условию)
        const cellValue = parseInt(cell.textContent);
        if (cellValue % 2 === 0) {
            cell.style.backgroundColor = 'lightblue';
        } else {
            cell.style.backgroundColor = 'lightpink';
        }

        // делаем некликабельными соседнии €чейки
        if (cell.nextElementSibling !== null && cell.nextElementSibling.hasAttribute('clickable')) {
            cell.nextElementSibling.removeAttribute('clickable');
        }

        if ( cell.previousElementSibling !== null && cell.previousElementSibling.hasAttribute('clickable')) {
            cell.previousElementSibling.removeAttribute('clickable');
        }
    }
}

// ‘ункци€ дл€ транспонировани€ таблицы
function transposeTable() {
    const table = document.getElementById('mainTable');
    const rows = Array.from(table.getElementsByTagName('tr'));
    const columns = rows[0].getElementsByTagName('td').length;

    if (rows.length !== columns) {
        alert('¬ы можете транспонировать только квадратную таблицу.');
        return;
    }

    const newTable = new Array(columns).fill(null).map(() => new Array(columns).fill(null));

    // транспонируем таблицу - создаем новый массив, который будет содержать транспоинрованную таблицу(только числа)
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            newTable[i][j] = rows[j].getElementsByTagName('td')[i].textContent;
        }
    }

    // из старой таблицы формируем таблицу с транспонированным строками и столбцами
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            // получаем €чейку из старой таблицы
            var cell = rows[i].getElementsByTagName('td')[j];
            // заносим в нее значение из новой таблицы
            cell.textContent = newTable[i][j];
            // убираем атрибут, отвечающий за выделенность €чейки
            if (cell.hasAttribute('clicked'))
                cell.removeAttribute('clicked');
            // устанавливаем атрибут, отвечающий за возможность нажати€ на €чейку
            cell.setAttribute('clickable', 'true');
            cell.style.backgroundColor = 'white';
        }
    }
}

// ‘ункци€ дл€ добавлени€ нового р€да в таблицу
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

// ‘ункци€ дл€ добавлени€ новой колонки в таблицу
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

