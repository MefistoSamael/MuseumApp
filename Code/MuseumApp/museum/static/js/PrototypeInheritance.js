function Exhibit(name, description, year) {
    this.name = name;
    this.description = description;
    this.year = year;
}

Exhibit.prototype = {
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    },

    // Геттеры и сеттеры для свойства "description"
    get description() {
        return this._description;
    },
    set description(newDescription) {
        this._description = newDescription;
    },

    // Геттеры и сеттеры для свойства "year"
    get year() {
        return this._year;
    },
    set year(newYear) {
        this._year = newYear;
    },

    displayInfo: function () {
        return `Name: ${this.name}, Description: ${this.description}, Year: ${this.year}`;
    },
}

function ArtPiece(name, description, year, artist, style) {
    Exhibit.call(this, name, description, year);
    this.artist = artist;
    this.style = style;
}

// Установливаем свойства экземпляра
Object.setPrototypeOf(ArtPiece.prototype, Exhibit.prototype);
// Подключаем статические свойства
Object.setPrototypeOf(ArtPiece, Exhibit);

// Геттеры и сеттеры для свойств класса-наследника
Object.defineProperties(ArtPiece.prototype, {
    artist: {
        get: function () {
            return this._artist;
        },
        set: function (newArtist) {
            this._artist = newArtist;
        },
    },
    style: {
        get: function () {
            return this._style;
        },
        set: function (newStyle) {
            this._style = newStyle;
        },
    },
});

// Декоратор для вывода информации об экспонате
function logExhibitInfo(classObj, f) {
    return function () {
        alert(`function called with decorator`);
        alert(f.call(classObj));
    }
}

var ex = new Exhibit("ex1", "desc1", 2004);
alert(ex.name + " " + ex.description + " " + ex.year);

ex.name = 'ex.2';
ex.description = 'desc2';
ex.year = 2005;

var displayInfo = logExhibitInfo(ex, ex.displayInfo);
displayInfo();

var ap = new ArtPiece("ap1", "desc1", 2000, "art1", "style1");
alert(ap.name + " " + ap.description + " " + ap.year + " " + ap.artist + " " + ap.style);

ap.name = 'ap2';
ap.description = 'desc2';
ap.year = 2001;
ap.artist = "art2";
ap.style = "style2";

var displayInfo = logExhibitInfo(ap, ap.displayInfo);
displayInfo();
