// Menu button
let menuBtn = document.getElementById("menu-btn");

let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("h-[304.2px]");
});

window.addEventListener("click", function (e) {
    if(e.target.id != "menu-btn" && e.target.id != "menu" && !e.target.classList.contains("links-wrapper") && !e.target.classList.contains("link")){
        menu.classList.remove("h-[304.2px]");
    }
})