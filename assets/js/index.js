

const nav_show = document.getElementById("show_nav");
const nav_hide = document.getElementById("hide_navs");
var menu_Contents = document.querySelector(".Contents_controls");
var Log_Ins = document.querySelector(".logIns");

const show_nav_Elements = () => {
    if (menu_Contents.style.display = "none") {
        menu_Contents.style.display = "block"
    }
    nav_hide.style.display = "block";
    nav_show.style.display = "none"
}

const hide_nav_Elements = () => {
    if (menu_Contents.style.display = "block") {
        menu_Contents.style.display = "none"
    }
     nav_hide.style.display = "none";
     nav_show.style.display = "block";
}


nav_show.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(nav_Contents)
    show_nav_Elements();
})

nav_hide.addEventListener("click", (e) => {
    e.preventDefault();
    hide_nav_Elements();
})