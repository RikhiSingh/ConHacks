/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const dropdowns = document.querySelectorAll('.nav__dropdown');
document.addEventListener('click', function (event) {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
      const icon = dropdown.querySelector('.nav__dropdown-icon');
      if (icon) {
        icon.style.transform = 'rotate(0deg)';
      }
    }
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', function (event) {
    const isActive = dropdown.classList.contains('active');
    dropdowns.forEach((otherDropdown) => {
      otherDropdown.classList.remove('active');
      const otherIcon = otherDropdown.querySelector('.nav__dropdown-icon');
      if (otherIcon) {
        otherIcon.style.transform = 'rotate(0deg)';
      }
    });

    dropdown.classList.toggle('active');
    const icon = dropdown.querySelector('.nav__dropdown-icon');
    if (icon) {
      icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
    }
    event.stopPropagation();
  });
});