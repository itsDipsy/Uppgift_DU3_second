function init_quiz_page_html_component() {
<<<<<<< Updated upstream
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

    <div id="quiz_page_quiz_wrapper">

=======

    document.body.style.backgroundImage = "linear-gradient(180deg, rgba(25,25,25,0), rgba(25,25,140,1))";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.querySelector("#the_whole").innerHTML = "";
    let html_component_quiz_page = document.querySelector("#the_whole").innerHTML = `
    <header>
        <nav class="quiz_page_nav">
            <li>
                <img class="dog_logo" src="./media/logo.png" alt="">
            </li>
            <li class="log_out_button">log out</li>
        </nav>
    </header>

    <div class="page_name">Quiz</div>

    <div id="quiz_page_quiz_wrapper">
        <div class="image_box"></div>
        <div class="quiz_box_wrapper">
            <div class="quiz_box" id="box1"></div>   
            <div class="quiz_box" id="box2"></div>   
            <div class="quiz_box" id="box3"></div>   
            <div class="quiz_box" id="box4"></div>   
        </div>
>>>>>>> Stashed changes
    </div>

    <footer>
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="">DOG CEO Zinc</a> </p>
<<<<<<< Updated upstream
    </footer>
=======
    </footer>   
>>>>>>> Stashed changes
`

init_all_resources_and_media();
}

function init_all_resources_and_media(){
    let first_box = document.querySelector("#box1");
    first_box.innerHTML = "hej"
}