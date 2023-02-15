function init_login_and_register_page_html() {
    document.body.style.backgroundColor = "turquoise";
    document.querySelector("#the_whole").innerHTML = "";
    let html_component_login_page = document.querySelector("#the_whole").innerHTML = `
    <header>
        <nav>
            <li>
                <img class="dog_logo" src="./media/logo.png" alt="">
            </li>
            <li>Dog breed quiz</li>
        </nav>
    </header>

    <div class="page_name">Login</div>

    <div id="quiz_page_wrapper">

    </div>

    <footer>
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="">DOG CEO Zinc</a> </p>
    </footer>
`
}

function login() {

    document.querySelector("body").style.backgroundColor = "turquoise";

    document.querySelector(".page_name").innerHTML = "Login";

    document.querySelector("#new").innerHTML = "New to this? Register for free";

    document.querySelector(".slogan").innerHTML = "Let the magic start";

    document.querySelector(".login_button").style.display = "block";

    document.querySelector(".register_button").style.display = "none";

    function login_function() {
        if (document.querySelector("#new").classList.contains("selected") !== true) {
            document.querySelector(".login_button").addEventListener("click", (event) => {

                event.stopImmediatePropagation(); // Denna behövs för annars kommer både login och fetch click event bubblas

                start_request("get");

                document.querySelector(".username").value = "";
                document.querySelector(".password").value = "";


            })
        }
    }
    login_function();
}

