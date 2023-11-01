function changeTextSize() {
    var form = document.forms.appearanceForm;
    var textSize = form.text_size.value;

    var font_size;
    switch (textSize) {
        case 'small':
            font_size = "10px";
            break;
        case 'medium':
            font_size = "20px";
            break;
        case 'big':
            font_size = "30px";
            break;
    }

    document.documentElement.style.fontSize = font_size;
}

function changeTextColor() {
    var form = document.forms.appearanceForm;
    var text_color = form.text_color.value;

    document.documentElement.style.color = text_color;
}

function changePageColor() {
    var form = document.forms.appearanceForm;
    var bg_color = form.background_color.value;

    document.documentElement.style.backgroundColor = bg_color;
}