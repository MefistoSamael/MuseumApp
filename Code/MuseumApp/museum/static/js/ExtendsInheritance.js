// Базовый класс Exhibit
class Exhibit {
    #name
    #description;
    #year;
    constructor(name, description, year) {
        this.#name = name;
        this.#description = description;
        this.#year = year;
    }

    // Геттеры и сеттеры
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

    get year() {
        return this.#year;
    }

    set year(year) {
        this.#year = year;
    }

    displayInfo() {
        return `Name: ${this.name}, Description: ${this.description}, Year: ${this.year}`;
    }


}

// Класс-наследник ArtPiece
class ArtPiece extends Exhibit {
    #artist;
    #style;
    constructor(name, description, year, artist, style) {
        super(name, description, year);
        this.artist = artist;
        this.style = style;
    }

    get artist() {
        return this.#artist;
    }

    set artist(artist) {
        this.#artist = artist;
    }

    get style() {
        return this.#style;
    }

    set style(style) {
        this.#style = style;
    }

}

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

