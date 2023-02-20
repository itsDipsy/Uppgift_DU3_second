function register() {
    document.querySelector("body").style.backgroundColor = "green";
    document.body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";

    
    document.querySelector("body").style.backgroundColor = "green";
    document.body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
    document.querySelector(".page_name").innerHTML = "Register"

    document.querySelector("#new").innerHTML = "Already have a account? login in"
    document.querySelector(".slogan").innerHTML = "Let the quiz games begin";
    document.querySelector(".login_button").style.display = "none"
    document.querySelector(".register_button").style.display = "block"

    document.querySelector(".username").value = ""
    document.querySelector(".password").value = ""

    function reister_function() {
        if (document.querySelector("#new").classList.contains("selected") === true) {
            document.querySelector(".register_button").addEventListener("click", (event) => {
                event.stopImmediatePropagation(); // Denna behövs för annars kommer både login och fetch click event bubblas

                start_request("post");
                document.querySelector(".username").value = ""
                document.querySelector(".password").value = ""
    

            })
        }
    }
    reister_function();
}