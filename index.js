const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const nav = document.querySelector('.nav')
const menuToggle = document.querySelector('.menuToggle')
const navLinks = document.querySelectorAll('.nav-link')



menuToggle.addEventListener('click', ()=>{
    if(openMenu.classList.contains('active')){
        openMenu.classList.remove('active')
        closeMenu.classList.add('active')
        nav.classList.add('active')
    } else{
        openMenu.classList.add('active')
        closeMenu.classList.remove('active')
        nav.classList.remove('active')
    }
})


function active() {
    navLinks.forEach((navlink) => {
      navlink.classList.remove("active");
      this.classList.add("active");
    });
  }
  
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", active);
  });