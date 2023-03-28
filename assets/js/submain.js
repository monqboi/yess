/*============== MENU SHOW Y HIDDEN ==============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'), 
        navClose = document.getElementById('nav-close')


/*=== menu show ===*/
/*validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=== menu hidden ===*/
/*validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MENU MOBILE ==============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*============== ACCORDION ABOUT ==============*/
const aboutContent = document.getElementsByClassName('about__content')
    aboutHeader = document.querySelectorAll('.about__header')

function toggleAbout(){
    let itemClass = this.parentNode.className

    for(i=0; i < aboutContent.length; i++){
        aboutContent[i].className = 'about__content about__close'
    }
    if(itemClass === 'about__content about__close'){
        this.parentNode.className = 'about__content about__open'
    }
}

aboutHeader.forEach((el)=>{
    el.addEventListener('click', toggleAbout)
})

/*============== SCROLL SECTION ACTIVE LINK ==============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{ 
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============== CHANGE BACKGROUND HEADER ==============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*============== SHOW SCROLL UP ==============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when th escroll is higher than 560viewport height, add the show-scroll class to the a tag with the sroll
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*============== DARK LIGHT THEME ==============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previousdly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//We validate if the user previously chose a topic
if (selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(darkTheme)
  //We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})