/* Menu Burger activating and desactivating */
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navbar = document.querySelector(".navbarburger");

    burgerMenu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});

/* Links in TownHall page. To navigate to inside anchor élément */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 75, // for the Fixed nav bar to NOT hide elements
          behavior: 'smooth'
        });
      }
    });
});