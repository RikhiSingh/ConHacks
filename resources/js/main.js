/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
document.addEventListener("DOMContentLoaded", function () {
    const mainMenus = document.querySelectorAll('.main-menu');
    const submenus = document.querySelectorAll('.nav__submenu');

    mainMenus.forEach((mainMenu, index) => {
        mainMenu.addEventListener("click", function (event) {
            event.preventDefault();
            submenus[index].classList.toggle("show-submenu");
        });
    });
});