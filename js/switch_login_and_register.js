function change_between_register_and_login_page(registerFunc, loginFunc) {
    document.querySelector("#new").addEventListener("click", () => { //

        document.querySelector("#new").classList.toggle("selected");

        if (document.querySelector("#new").classList.contains("selected")) {
            registerFunc();
        }
        else {
            loginFunc();
        }
    })
}
