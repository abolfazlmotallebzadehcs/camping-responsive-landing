const navBtn = document.querySelector('.nab__btn');
let navOpen = false;
navBtn.addEventListener('click', () => {
    if(navOpen){
        navBtn.classList.remove('nav__btn--open');
        navOpen=false;
    }else{
        navBtn.classList.add('nav__btn--open');
        navOpen=true;
    }
});