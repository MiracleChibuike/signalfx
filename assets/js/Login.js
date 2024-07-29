

var courses_mentor = document.getElementById("mentor_courses");
const load_mentorship_Plans = () => {
  courses_mentor.style.color = "var(--clr-fx-red);";
  window.location.href = "Mentorship_Courses.html";
  console.log(courses_mentor);
};



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

// Toggle password visibility

var password_login = document.getElementById("Passcode");
const password_show = document.getElementById("show_default");
const hide_password = document.getElementById("hide_default")
const show_Password_Retype = () => {
    if (password_login.type === "password") {
        password_login.type = "text";
        password_show.style.display = "block";
        hide_password.style.display = "none"
    }
};

hide_password.addEventListener("click", (e) => {
    show_Password_Retype();
})

const hide_password_retype = (e) => {
    if (password_login.type === "text") {
        password_login.type = "password";
         password_show.style.display = "none";
         hide_password.style.display = "block";
    }
};

password_show.addEventListener("click", (e) => {
    hide_password_retype();
});

// For form validation;

var user_Name, user_Password
user_Name = document.getElementById("user-name");
user_Password = document.getElementById("Passcode");

const handle_User_Inputs = (input, user_messageVal) => {
    const messageIVal = document.getElementById(user_messageVal);
    if (input.value === "") {
        messageIVal.style.display = "block";
        return false
    }else{
        messageIVal.style.display = "none";
        return true;
    }
};

const check_User_data = () => {
    const isUserNameValid = handle_User_Inputs(user_Name, "username_val");
    const isUserPasswordValid = handle_User_Inputs(
      user_Password,
      "passcode_val"
    );
    return isUserNameValid && isUserPasswordValid;
};

user_Name.addEventListener("keyup", (e) => {
    e.preventDefault();
    handle_User_Inputs(user_Name, "username_val");
});

user_Password.addEventListener("keyup", (e) => {
    e.preventDefault();
    handle_User_Inputs(user_Password, "passcode_val");
});

const check_User_val = (e) => {
     setTimeout(function () {
       alert("Sorry, we couldn't find your account now \n Sign up instead");
     }, 1000);
}
var sign_in = document.getElementById("signup_btn");
const go_To_SignUP = (e) => {
    window.location.href = "Signup.html"
}

sign_in.addEventListener("click", (e) => {
    go_To_SignUP();
})
const login_form = document.getElementById("logIn_Form");

login_form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (check_User_data()) {
        localStorage.setItem("user_Name", user_Name.value);
        localStorage.setItem("user_Password", user_Password.value);
         alert("Sorry, we couldn't find your account now \n Sign up instead");
       window.location.href = "Signup.html";
    }
});

if (user_Name && user_Password) {
    user_Name.value = localStorage.getItem("user_Name") || "";
    user_Password.value = localStorage.getItem("user_Password") || ""
};

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
