// show and hide search 
let seacrhForm = document.querySelector('.header-search-form');
document.querySelector('#search-btn').onclick = () => {
    seacrhForm.classList.toggle('active');
    cartList.classList.remove('active');
}
// show and hide cart list
let cartList = document.querySelector('.header-cart');
document.querySelector('#cart-btn').onclick = () => {
    cartList.classList.toggle('active');
    seacrhForm.classList.remove('active');
}
// show navbar in tablet and mobile
let navbarList = document.querySelector('.mobile-navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbarList.classList.toggle('active');
    seacrhForm.classList.remove('active');
    cartList.classList.remove('active');
}
window.onscroll = () =>{
    navbarList.classList.remove('active');
    seacrhForm.classList.remove('active');
    cartList.classList.remove('active');
}