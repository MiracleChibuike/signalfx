


var header = document.querySelector(".header_Animate");
var Grand_Container = document.querySelector(".containerMain");



const showLoader = () => {
    Grand_Container.style.display = "none";
    header.style.display = "block";
    setTimeout(function () {
        Grand_Container.style.display = "block";
        header.style.display = "none"
    }, 7000)
};

showLoader()


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

// Scrolling Animation
 // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to add the 'visible' class to containers in the viewport
    function addVisibleClass() {
      var containers = document.querySelectorAll(".animates");
      containers.forEach(container => {
        if (isInViewport(container)) {
          container.classList.add('visible');
        }
      });
    }

    // Add event listeners for scroll and load
    window.addEventListener('scroll', addVisibleClass);
    window.addEventListener('load', addVisibleClass);



// HomeTab
    const homeImg = document.querySelector(".homeImg");
    const forexLordImg = document.getElementById("forex_lord_img");

    homeImg.addEventListener("mouseenter", () => {
      homeImg.classList.add("hover");
      forexLordImg.classList.add("hovered");
    });

    homeImg.addEventListener("mouseleave", () => {
      homeImg.classList.remove("hover");
      forexLordImg.classList.remove("hovered");
    });

    // Login/SignUp Activations

    const btn_Sign_Up = document.getElementById("signup_btn");
    const login_btn = document.getElementById("login_btn");


    const load_SignUp_Page = () => {
             window.location.href = "signup.html";

    }
    btn_Sign_Up.addEventListener("click", (e) => {
      e.preventDefault();
      load_SignUp_Page();
      
    })

    // Prevent Image dragging

    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mousedown", function (event) {
        event.preventDefault();
      });
      img.addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });
    });








    
 