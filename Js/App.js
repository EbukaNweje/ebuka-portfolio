Nav = document.querySelector('.items');
HendMenu = document.querySelector('.bi-list');
Close = document.querySelector('.close');

HendMenu.onclick = ()=> {
    Nav.classList.add('show');
}

Close.onclick = ()=> {
    Nav.classList.remove('show');
}