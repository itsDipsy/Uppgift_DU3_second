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
            <li>
                Dog Breed Quiz
            </li>
            </nav>
    </header>
        <div id="log_out_wrapper">
            <div>   
                <div class="namn">Namn</div>
                <div class="log_out_button">log out</div>
            </div>
        
        </div>

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

the_quiz();
}

function the_quiz(){

    let the_quiz_dog_arr = [];
    for (let i = 0; i < 4; i++) {
        let random_dog_number = Math.floor(Math.random() * ALL_BREEDS.length);
        let random_dog = ALL_BREEDS[random_dog_number];
        the_quiz_dog_arr.push(random_dog);
    }


    let the_right_dog_in_quiz_number = Math.floor(Math.random() * the_quiz_dog_arr.length + 1);
    let the_right_dog_in_quiz = ALL_BREEDS[the_right_dog_in_quiz_number];
    console.log(the_quiz_dog_arr)
    console.log(the_right_dog_in_quiz)

    document.querySelector(".image_box").backgroundImage = `url(${the_right_dog_in_quiz.url})`

    document.querySelectorAll(".quiz_box").forEach((box, index) => {
        box.innerHTML = the_quiz_dog_arr[index].name;
        box.addEventListener("click", () => {
            console.log("click " + box.innerHTML)
        })
    })

}