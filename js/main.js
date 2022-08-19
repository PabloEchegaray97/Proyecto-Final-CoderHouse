const nav = window.addEventListener("scroll", function() {
    const nav = document.querySelector(".bg-menu");
    nav.classList.toggle("sticky", window.scrollY>0);
})
