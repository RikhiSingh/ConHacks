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
const dropdowns = document.querySelectorAll('.nav__dropdown');

// Close the dropdown content when a click occurs outside of it
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

// Toggle the dropdown when clicked on a .nav__dropdown
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

    // Prevent the click event from propagating to the document click handler
    event.stopPropagation();
  });
});


