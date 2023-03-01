//Get singular element
const getEl = el => document.querySelector(el);
//Get multiple elements
const getEls = els => document.querySelectorAll(els);

const modal = getEl('#modal');
let listItems = getEls('.list-item');
const menuIcon = getEl('#menu-bar');

//slide right function
const slideEl = (el) => {    
    if(el.classList.contains('slide-left')) {
    el.classList.replace('slide-left', 'slide-right');    
    } else {
        el.classList.replace('slide-right', 'slide-left');
    }
};

listItems.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle('change');
        console.log(item);
        slideEl(modal);
        listItems.forEach(item => {
            slideEl(item);
        });
    });
});


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    slideEl(modal);
    listItems.forEach(item => {
        slideEl(item);
    });
});

