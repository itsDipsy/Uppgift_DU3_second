function init_quiz_page_html_component() {

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
            <div class="quiz_box"></div>   
            <div class="quiz_box"></div>   
            <div class="quiz_box"></div>   
            <div class="quiz_box"></div>   
        </div>
    </div>

    <footer>
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="">DOG CEO Zinc</a> </p>
    </footer>   
`
}