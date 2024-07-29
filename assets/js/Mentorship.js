

 // Login/SignUp Activations

    const btn_Sign_Up = document.getElementById("signup_btn");
    const login_btn = document.getElementById("login_btn");


    const load_SignUp_Page = () => {
             window.location.href = "Signup.html";
    }
    btn_Sign_Up.addEventListener("click", (e) => {
      e.preventDefault();
      load_SignUp_Page();
      
    });

    const login_page = () => {
      window.location.href = "Login.html"
    };

    login_btn.addEventListener("click", (e) => {
      login_page()
    });

    const nav_show = document.getElementById("show_nav");
    const nav_hide = document.getElementById("hide_navs");
    var menu_Contents = document.querySelector(".Contents_controls");
    var Log_Ins = document.querySelector(".logIns");
    var home_Contents = document.querySelector(".Inner_contents");

    const show_nav_Elements = () => {
      if ((menu_Contents.style.display = "none")) {
        menu_Contents.style.display = "block";
        home_Contents.classList.add("RunAdd");
      }
      nav_hide.style.display = "block";
      nav_show.style.display = "none";
    };

    const hide_nav_Elements = () => {
      if ((menu_Contents.style.display = "block")) {
        menu_Contents.style.display = "none";
        home_Contents.classList.remove("RunAdd");
      }
      nav_hide.style.display = "none";
      nav_show.style.display = "block";
    };

    nav_show.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(nav_Contents)
      show_nav_Elements();
    });

    nav_hide.addEventListener("click", (e) => {
      e.preventDefault();
      hide_nav_Elements();
    });

    const checkNav_Elements = () => {
      if (menu_Contents) {
        menu_Contents.style.display = "none";
        home_Contents.classList.remove("RunAdd");
      }
    };

    const home_logo = document.getElementById("logo_home");

    const moveToHome = () => {
      window.location.href = "Index.html";
    };

    home_logo.addEventListener("click", (e) => {
      e.preventDefault();
      moveToHome();
    });


    var footer = document.getElementById("Footer");
    var nav_main = document.querySelector(".nav");
    var modal = document.querySelector(".modal");
    const default_icon = document.getElementById("white_default");
    const button_changer = document.getElementById("dark-changer");
    const modal_remove = document.getElementById("remove_modal");

    // For Modal
    const showModal = () => {
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
      }, 7000);
      modal.scrollIntoView({ behavior: "smooth" });
      // Modal disappears after 3 seconds
    };
    modal_remove.addEventListener("click", (e) => {
      modal.style.display = "none";
    });

    const background_Changer = (e) => {
      showModal();
      home_Contents.classList.add("changer");
      footer.classList.add("footer_changer");
      default_icon.style.display = "none";
      button_changer.style.display = "block";
      console.log(footer);
    };

    default_icon.addEventListener("click", () => {
      background_Changer();
    });

    const background_remover = (event) => {
      home_Contents.classList.remove("changer");
      footer.classList.remove("footer_changer");
      default_icon.style.display = "block";
      button_changer.style.display = "none";
    };

    button_changer.addEventListener("click", (e) => {
      background_remover();
    });

    var mentorship_El = document.getElementById("list_mentorship");
    mentorship_El.style.color = "var(--clr-fx-red)";