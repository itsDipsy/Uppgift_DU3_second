function change_between_register_and_login_page(registerFunc, loginFunc) {
    document.querySelector("#new").addEventListener("click", () => { //

        document.querySelector("#new").classList.toggle("selected");

        if (document.querySelector("#new").classList.contains("selected")) {
            if(document.querySelector(".error_dom") !== null){
                document.querySelector(".error_dom").style.backgroundColor = "rgba(0, 0, 0, 0)"
            }
            document.querySelector(".username").value = ""
            document.querySelector(".password").value = ""
            registerFunc();
        }
        else {
            if(document.querySelector(".error_dom") !== null){
                document.querySelector(".error_dom").style.backgroundColor = "rgba(0, 0, 0, 0)"
            }
            document.querySelector(".username").value = ""
            document.querySelector(".password").value = ""
            loginFunc();
        }
    })
}

function a_teapot_happend(){
    
}