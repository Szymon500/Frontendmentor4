const navBtn = document.querySelector('.nav__hamburger')
const closeNavBtn = document.querySelector('.nav__close')
const nav = document.querySelector('.nav__box')

const showMenu = () =>{
    nav.classList.add('active')
    navBtn.classList.add('hide')
    closeNavBtn.classList.add('show')
}

const hideMenu = () =>{
    nav.classList.remove('active')
    closeNavBtn.classList.remove('show')
    navBtn.classList.remove('hide')
}

navBtn.addEventListener('click',showMenu)
closeNavBtn.addEventListener('click',hideMenu)