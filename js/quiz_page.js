function init_quiz_page_html_component() {
    document.body.style.backgroundColor = "turquoise";
    document.querySelector("#the_whole").innerHTML = "";
    let html_component_quiz_page = document.querySelector("#the_whole").innerHTML = `
    <header>
        <nav>
            <li>
                <img class="dog_logo" src="./media/logo.png" alt="">
            </li>
            <li>log out</li>
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