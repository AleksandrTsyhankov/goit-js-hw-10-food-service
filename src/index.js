import './sass/main.scss';
import menu from '../menu.json'
import menuTemplate from './templates/menu.hbs'

const menuList = document.querySelector('.menu')
const checkBox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let currentTheme = localStorage.getItem('theme')

checkBox.addEventListener('change', onCheckBoxChange)

if (!currentTheme) {
    checkBox.checked = false
    localStorage.setItem('theme', Theme.LIGHT)
} else
    if (currentTheme === Theme.DARK) {
        checkBox.checked = true
        body.classList.add(Theme.DARK)

    }


function onCheckBoxChange(e) {
    if (checkBox.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
    }
    else if (!checkBox.checked) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

const menuToInsert = menuTemplate(menu)
menuList.insertAdjacentHTML('beforeend', menuToInsert)


console.log(menuList)
console.log(menuTemplate(menu))













