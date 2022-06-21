const Nav = document.querySelector('.items');
const HendMenu = document.querySelector('.bi-list');
const Close = document.querySelector('.close');

HendMenu.onclick = () => {
    Nav.classList.add('show');
};

Close.onclick = ()=> {
    Nav.classList.remove('show');
};
