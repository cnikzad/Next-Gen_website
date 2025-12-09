const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

practice using git reset which delets a commit from the memory

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
