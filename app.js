const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

console.log(innerWidth);

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000)
        mobile_menu.classList.remove("is-active");
        menu_btn.classList.remove("is-active")
})