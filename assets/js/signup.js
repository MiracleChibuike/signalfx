


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
    window.location.href = "Index.html"
}

home_logo.addEventListener("click", (e) => {
    e.preventDefault();
    moveToHome();
});

var f_name, l_name, user_Name, Email_Add, _whatsApp_Num, Tg_ID, Passcode_create, Passcode_Confirm

f_name = document.getElementById("f-name");
l_name = document.getElementById("L-name");
user_Name = document.getElementById("user-name");
Email_Add = document.getElementById("email_add");
_whatsApp_Num = document.getElementById("whatsApp_No");
Tg_ID = document.getElementById("TG_ID");
Passcode_create = document.getElementById("Passcode");
Passcode_Confirm = document.getElementById("passcode_Confirm");

const handleValInputs = (inputs, valMesageId) => {
    const valMesage = document.getElementById(valMesageId);
    if (inputs.value.trim()=== "") {
        valMesage.style.display = "block";
        return false;
    }else{
        valMesage.style.display= "none";
        return true;
    }
};

const checkInputForms = () => {
    const isFirstNameValid = handleValInputs(f_name, "f-name_Val");
    const isLastNameValid = handleValInputs(l_name, "L-name_val");
    const isUserNameValid = handleValInputs(user_Name, "username_val");
    const isEmailValid = handleValInputs(Email_Add, "email_val");
    const isWhatsAppNoValid = handleValInputs(_whatsApp_Num, "whatsApp_No_val");
    const isTelegramIdValid = handleValInputs(Tg_ID, "TG_ID_val");
    const isPasswordValid = handleValInputs(Passcode_create, "passcode_val");

    return isFirstNameValid && isLastNameValid && isUserNameValid && isEmailValid && isWhatsAppNoValid
    && isTelegramIdValid && isPasswordValid 
};

f_name.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(f_name, "f-name_Val");
});
l_name.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(l_name, "L-name_val");
});

user_Name.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(user_Name, "username_val");
});
Email_Add.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(Email_Add, "email_val");
});
_whatsApp_Num.addEventListener("keyup", (e) => {
    e.preventDefault();
     handleValInputs(_whatsApp_Num, "whatsApp_No_val");
});

Tg_ID.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(Tg_ID, "TG_ID_val");
})

Passcode_create.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleValInputs(Passcode_create, "passcode_val");
})

const show_passcode_default = document.getElementById("show_default");
const hide_passcode_default = document.getElementById("hide_default");

const check_DefaultPasscode = () => {
    if (Passcode_create.type === "password") {
        Passcode_create.type = "text";
        hide_passcode_default.style.display = "none";
        show_passcode_default.style.display = "block"
    }
};

hide_passcode_default.addEventListener("click", (e) => {
    e.preventDefault();
    check_DefaultPasscode();
});

const hidePasswords = () => {
    if (Passcode_create.type === "text") {
      Passcode_create.type = "password";
      hide_passcode_default.style.display = "block";
      show_passcode_default.style.display = "none";
    }
};

show_passcode_default.addEventListener("click", (e) => {
    e.preventDefault();
    hidePasswords();
})

validate_Password_Confirm = document.getElementById("passcode_Confirm_val");
validate_Password_Confirm.style.display = "none"
// validate_Password_Confirm = false;
const check_passwords = (event) => {
     if (Passcode_Confirm.value === Passcode_create.value) {
       console.log("Passwords match");
    //    validate_Password_Confirm = true;
        alert("success");
    //    return true;
     } else {
        // Passcode_Confirm.classList.add("val")
       console.error("Passwords does not match");
        validate_Password_Confirm.style.display = "block";
        event.preventDefault();
     }
     console.log(validate_Password_Confirm);
             
}

Passcode_Confirm.addEventListener("keyup", (e) => {
    if (Passcode_Confirm.value === Passcode_create.value) {
        validate_Password_Confirm.style.display = "none";
    }else{
         validate_Password_Confirm.style.display = "block";
    }
})

// Toggle password visibility
const password_show = document.getElementById("show_password");
const hide_password = document.getElementById("hide_password")
const show_Password_Retype = () => {
    if (Passcode_Confirm.type === "password") {
        Passcode_Confirm.type = "text";
        password_show.style.display = "block";
        hide_password.style.display = "none"
    }
};

hide_password.addEventListener("click", (e) => {
    show_Password_Retype();
})

const hide_password_retype = (e) => {
    if (Passcode_Confirm.type === "text") {
        Passcode_Confirm.type = "password";
         password_show.style.display = "none";
         hide_password.style.display = "block";
    }
};

password_show.addEventListener("click", (e) => {
    hide_password_retype();
})


    const login_btn = document.getElementById("login_btn");
const go_To_Login = () => {
    window.location.href = "Login.html"
};

login_btn.addEventListener("click", (e) => {
    go_To_Login();
})

// Handle forms
const form = document.getElementById("singUp_Form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputForms()) {
        localStorage.setItem("f_name", f_name.value);
        localStorage.setItem("l_name", l_name.value);
        localStorage.setItem("user_Name", user_Name.value);
        localStorage.setItem("Email_Add", Email_Add.value);
        localStorage.setItem("_whatsApp_Num", _whatsApp_Num.value);
        localStorage.setItem("Tg_ID", Tg_ID.value);
        localStorage.setItem("Passcode_create.value", Passcode_create.value);
        localStorage.setItem("Passcode_Confirm", Passcode_Confirm.value);

        // console.log(`
        //     ${f_name.value};
        //     ${l_name.value}
        //     ${user_Name.value}
        //     ${Tg_ID.value }
        //     ${Email_Add.value}
        //     ${_whatsApp_Num.value}
        //     ${Passcode_create.value}
        //     ${Passcode_Confirm.value}
        //     `)

        // alert(`
        //      ${f_name.value};
        //     ${l_name.value}
        //     ${user_Name.value}
        //     ${Tg_ID.value }
        //     ${Email_Add.value}
        //     ${_whatsApp_Num.value}
        //     ${Passcode_create.value}
        //     ${Passcode_Confirm.value}
        //     `)
         check_passwords()
        window.location.href = "index.html"
    };


    // document.getElementById("singUp_Form").reset()


    // Rember to store in LS first
    // console.log(`
    //     ${f_name.value};
    //     ${l_name.value};
    //     ${user_Name.value};
    //     ${Email_Add.value};
    //     ${_whatsApp_Num.value};
    //     ${Tg_ID.value};
    //     ${Passcode_create.value};
    //     ${Passcode_Confirm.value}
    //     `)
    
})
if (
  f_name &&
  l_name &&
  user_Name &&
  Tg_ID &&
  Email_Add &&
  _whatsApp_Num &&
  Passcode_create &&
  Passcode_Confirm
) {
    f_name.value = localStorage.getItem("f_name") || "";
    l_name.value = localStorage.getItem("l_name") || "";
    user_Name.value = localStorage.getItem("user_Name") || "";
    Tg_ID.value = localStorage.getItem("Tg_ID") || "";
    Email_Add.value = localStorage.getItem("Email_Add") || "";
    _whatsApp_Num.value = localStorage.getItem("_whatsApp_Num") || "";
    Passcode_create.value = localStorage.getItem("Passcode_create") || "";
    Passcode_Confirm.value = localStorage.getItem("Passcode_create") || "";
}

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
  modal.style.display = "none"
})

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