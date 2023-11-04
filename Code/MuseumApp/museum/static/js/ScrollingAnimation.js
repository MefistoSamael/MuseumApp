// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const doorLeft = document.querySelector('#door_left');
const doorRight = document.querySelector('#door_right');

window.addEventListener('scroll', () => {
    let value = scrollY;
    doorLeft.style.left = `-${value / 0.7}px`
    doorRight.style.left = `${value / 0.7}px`
})