// Tabs
const tabs = document.querySelector('.tabs__top');

tabs.addEventListener('click', event => {
    const button = event.target;
    if (!button.classList.contains('active-tab')) {
        const activeTab = document.querySelector('.active-tab');
        activeTab.classList.remove('active-tab');
        activeTab.classList.add('content');
        button.classList.remove('content');
        button.classList.add('active-tab');
    }
})

// burget button open menu
const burgerButton = document.querySelector('.burger-button');
const layer = document.querySelector('.layer');
const menu = document.querySelector('.side-menu');

burgerButton.addEventListener('click', openSideMenu)

// close side-menu
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', closeSideMenu);

const sideMenuItems = document.querySelectorAll('.side-menu-item');
sideMenuItems.forEach(element => {
    element.addEventListener('click', closeSideMenu);
});

function openSideMenu() {
    menu.classList.add('active');
    layer.classList.add('active');
    document.body.classList.add('active');
}

function closeSideMenu() {
    menu.classList.remove('active');
    layer.classList.remove('active');
    document.body.classList.remove('active');
}

// dropdown
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('opened');
})

// side-menu dropdown list
const sideMenuButton = document.querySelector('.side-menu__dropBtn');

sideMenuButton.addEventListener('click', () => {
    sideMenuButton.classList.toggle('active');
})
