
// mobile menu start

const menuBtn = document.querySelector(".mobile-menu-btn");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const navBar = document.querySelector(".mobile-navbar");
    navBar.classList.toggle('active')
    menuBtn.classList.add('active');
});

const closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const navBar = document.querySelector(".mobile-navbar");
    navBar.classList.remove('active')
    menuBtn.classList.remove('active');
});


// mobile menu end