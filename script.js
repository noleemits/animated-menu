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
//The function is added to the list elements
listItems.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle('change');
        slideEl(modal);
        listItems.forEach(item => {
            slideEl(item);
        });
    });
});
//The same function is added to the menu icon
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    slideEl(modal);
    listItems.forEach(item => {
        slideEl(item);
    });
});

