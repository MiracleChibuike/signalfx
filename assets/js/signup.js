

const nav_show = document.getElementById("show_nav");
const nav_hide = document.getElementById("hide_navs");
var menu_Contents = document.querySelector(".Contents_controls");
var Log_Ins = document.querySelector(".logIns");
var home_Contents = document.querySelector(".Inner_contents");

const show_nav_Elements = () => {
    if (menu_Contents.style.display = "none") {
        menu_Contents.style.display = "block";
        home_Contents.classList.add("RunAdd");
    }
    nav_hide.style.display = "block";
    nav_show.style.display = "none"
}

const hide_nav_Elements = () => {
    if (menu_Contents.style.display = "block") {
        menu_Contents.style.display = "none";
            home_Contents.classList.remove("RunAdd");
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

const checkNav_Elements = () => {
    if (menu_Contents) {
          menu_Contents.style.display = "none";
          home_Contents.classList.remove("RunAdd");
    }
}

const home_logo = document.getElementById("logo_home");

const moveToHome = () => {
    window.location.href = "index.html"
}

home_logo.addEventListener("click", (e) => {
    e.preventDefault();
    moveToHome();
});

// Handle forms
const form = document.getElementById("singUp_Form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})