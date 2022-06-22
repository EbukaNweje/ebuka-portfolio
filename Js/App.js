const Nav = document.querySelector('.items');
const HendMenu = document.querySelector('.bi-list');
const Close = document.querySelector('.close'); 
const link = document.querySelector('.link'); 
const link2 = document.querySelector('.link2'); 
const link3 = document.querySelector('.link3'); 

HendMenu.onclick = () => {
  Nav.classList.add('show');
  HendMenu.style.display = "none"
};

Close.onclick = ()=> {
  Nav.classList.remove('show');
  HendMenu.style.display = "block"
};

link.onclick = ()=> {
  Nav.classList.remove('show');
  HendMenu.style.display = "block"
};

link2.onclick = ()=> {
  Nav.classList.remove('show');
  HendMenu.style.display = "block"
};

link3.onclick = ()=> {
  Nav.classList.remove('show');
  HendMenu.style.display = "block"
};
