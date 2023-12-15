let openBtn = document.querySelector('#openBtn i');
let siteNav = document.getElementById('site-nav');

openBtn.addEventListener('click', () => {
    siteNav.classList.toggle('show');
    if(openBtn.classList == 'bx bx-menu'){
        openBtn.setAttribute('class', 'bx bx-x')
    }else{
        openBtn.setAttribute('class', 'bx bx-menu')
    }
});