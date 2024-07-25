

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

const addAnimation = () => {
    if (f_name.value === "") {
        f_name.classList.add("addError");
    }else{
        f_name.classList.remove("addError")
    }
}

const checkInputForms = () => {
    const isFirstNameValid = handleValInputs(f_name, "f-name_Val");
    const isLastNameValid = handleValInputs(l_name, "L-name_val");
    const isUserNameValid = handleValInputs(user_Name, "username_val");
    const isEmailValid = handleValInputs(Email_Add, "email_val");
    const isWhatsAppNoValid = handleValInputs(_whatsApp_Num, "whatsApp_No_val");
    const isTelegramIdValid = handleValInputs(Tg_ID, "TG_ID_val");
    const isPasswordValid = handleValInputs(Passcode_create, "passcode_val");
    const isPasswordConfirmValid = handleValInputs(
      Passcode_Confirm,
      "passcode_Confirm_val"
    );

    return isFirstNameValid && isLastNameValid && isUserNameValid && isEmailValid && isWhatsAppNoValid
    && isTelegramIdValid && isPasswordValid && isPasswordConfirmValid
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


const check_passwords = () => {
    if (Passcode_create.value != Passcode_Confirm.value) {
        console.error("Passwords does not match")
    }
}

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
        check_passwords();
        window.location.href = "index.html"
    };

    document.getElementById("singUp_Form").reset()


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