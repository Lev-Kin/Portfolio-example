document.querySelector(".open-window").addEventListener("click", function() {
    document.querySelector(".window").classList.remove("none");
});

document.querySelector(".close-window").addEventListener("click", function () {
    document.querySelector(".window").classList.add("none");
});

document.querySelector(".sidebar-toggle").addEventListener("click", function () {
    document.querySelector("#hamburger-menu").classList.remove("none");
});

document.querySelector(".sidebar-close").addEventListener("click", function () {
    document.querySelector("#hamburger-menu").classList.add("none");
});
