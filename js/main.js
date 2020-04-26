const hamburgerMenu = document.getElementById('hamburger-menu');
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body');

function showMenu(params) {
    menu.classList.add('showMenu');
    overlay.classList.add('showOverlay');
    iconMenu.setAttribute('src', 'images/icon-close.svg')

    menu.classList.remove('hideMenu');
    overlay.classList.remove('hideOverlay');

    body.style.overflow = 'hidden';
}

function hideMenu(params) {
    menu.classList.add('hideMenu');
    overlay.classList.add('hideOverlay');
    iconMenu.setAttribute('src', 'images/icon-hamburger.svg')
    
    menu.classList.remove('showMenu');
    overlay.classList.remove('showOverlay');
    
    body.style.overflow = '';
}

hamburgerMenu.addEventListener('click', ()=>{
    if(menu.classList.contains('showMenu')){
       hideMenu()
    }
    else{
        showMenu()
    }
})

menu.addEventListener('animationend', (event)=>{
    console.log(event)
    if(event.animationName == "hideMenu"){
        menu.classList.remove('hideMenu');
        overlay.classList.remove('hideOverlay');
    }
});


overlay.addEventListener('click', ()=>{
  hideMenu()
});

