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

    <div id="login_input_wrapper">
        <div id="first_input">
            <div class="label">Username:</div>
            <input type="text" class="username">
        </div>
        <div id="second_input">
            <div class="label" >Password:</div>
            <input type="text" class="password">
        </div>
        <p class="slogan">Let the magic start!</p>
        <button class="login_button">Login</button>
        <button class="register_button">Register</button>
        <div id="new">New to this? Register for free</div>

    </div>

    <footer>
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="">DOG CEO Zinc</a> </p>
    </footer>
`
}

function login() {
    
    document.querySelector("body").style.backgroundColor = "turquoise";
    document.querySelector(".page_name").innerHTML = "Login"

    document.querySelector("#new").innerHTML = "New to this? Register for free"
    document.querySelector(".slogan").innerHTML = "Let the magic start";
    document.querySelector(".login_button").style.display = "block"
    document.querySelector(".register_button").style.display = "none"

    document.querySelector(".username").value = ""
    document.querySelector(".password").value = ""

    function login_function() {
        if (document.querySelector("#new").classList.contains("selected") !== true) {
            document.querySelector(".login_button").addEventListener("click", (event) => {
                event.stopImmediatePropagation(); // Denna behövs för annars kommer både login och fetch click event bubblas

                let fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
                console.log(fetch_obj);
                async function start_request(){
                    let await_dom = document.createElement("div");
                    await_dom.classList.add("await_dom")
                    await_dom.innerHTML = `
                        <div class="await_dom_innertext">fetching ...</div>
                    `;
                    document.querySelector("#the_whole").appendChild(await_dom);
                    let resource = await fetch_function(fetch_obj, "get");
                    if(resource.status === 200){
                        await_dom.remove();
                    }
                }
                start_request();

                document.querySelector(".username").value = ""
                document.querySelector(".password").value = ""
    

            })
        }
    }
    login_function();
}

