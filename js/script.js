const navBtn = document.querySelector('.nav__hamburger')
const closeNavBtn = document.querySelector('.nav__close')
const nav = document.querySelector('.nav__box')
const inputFooter = document.querySelector('#footer-input')
const footerBtn = document.querySelector('.footer-btn')
const pError = document.querySelector('.footer__input-error')
const navItems = document.querySelectorAll('.nav__box-item')

const emailRe = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

const showMenu = () =>{
    nav.classList.add('active')
    navBtn.classList.add('hide')
    closeNavBtn.classList.add('show')
    navItems.forEach(item =>{
        item.classList.add('animate-nav-item')
    })
}

const hideMenu = () =>{
    nav.classList.remove('active')
    closeNavBtn.classList.remove('show')
    navBtn.classList.remove('hide')
    navItems.forEach(item =>{
        item.classList.remove('animate-nav-item')
    })
}

const checkEmail = () =>{
    if(inputFooter.value == ''){
        pError.textContent = 'Insert email'
    }else if(!emailRe.test(inputFooter.value)){
        pError.textContent = 'Please insert a valid email'
    }else{
        pError.textContent = "Thanks, we'll be in touch"
    }
    pError.style.visibility = 'visible'
}

navBtn.addEventListener('click',showMenu)
closeNavBtn.addEventListener('click',hideMenu)
footerBtn.addEventListener('click',checkEmail)

