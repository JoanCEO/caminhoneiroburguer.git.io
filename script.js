let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('bi-x-lg');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    
    menu.classList.remove('bi-x-lg');
    navbar.classList.remove('active');
}