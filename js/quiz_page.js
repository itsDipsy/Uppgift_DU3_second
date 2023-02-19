function init_quiz_page_html_component(name_for_label) {

    document.body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
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
                <div class="namn">${name_for_label}</div>
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
    </div>

    <footer>
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="">DOG CEO Zinc</a> </p>
    </footer>   
`

the_quiz();
}

function the_quiz(){// a reset

    if(document.querySelector(".winner_div") !== null){
        document.querySelector(".winner_div").remove();
    }
    if(document.querySelector(".loser_div") !== null){
        document.querySelector(".loser_div").remove();
    }

    if(document.querySelector(".container_box_div") !== null){
        document.querySelector(".container_box_div").remove();
    }

    document.querySelector(".log_out_button").addEventListener("click", () => {
        init_login_and_register_page_html()
        login();
        change_between_register_and_login_page(register,login)
    })


    let the_quiz_dog_arr = [];
    for (let i = 0; i < 4; i++) {
        let random_dog_number = Math.floor(Math.random() * ALL_BREEDS.length);
        let random_dog = ALL_BREEDS[random_dog_number];
        the_quiz_dog_arr.push(random_dog);
    }

    console.log(the_quiz_dog_arr)

    let the_right_dog_in_quiz_number = Math.floor(Math.random() * the_quiz_dog_arr.length);
    let the_right_dog_in_quiz = the_quiz_dog_arr[the_right_dog_in_quiz_number]
    console.log(the_right_dog_in_quiz)

    document.querySelector(".image_box").backgroundImage = `url(${the_right_dog_in_quiz.url})`

    document.querySelectorAll(".quiz_box").forEach((box, index) => {
        box.innerHTML = the_quiz_dog_arr[index].name;
        box.addEventListener("click", () => {
            console.log(box.innerHTML)
            console.log(the_right_dog_in_quiz.name)
            if(box.innerHTML ===  the_right_dog_in_quiz.name){
                if(document.querySelector(".winner_div") !== null){
                    document.querySelector(".winner_div").remove();
                }
                if(document.querySelector(".loser_div") !== null){
                    document.querySelector(".loser_div").remove();
                }
                let the_winner_div_dom = document.createElement("div");
                document.querySelector("#quiz_page_quiz_wrapper").appendChild(the_winner_div_dom);
                
                the_winner_div_dom.classList.add("winner_div");
                the_winner_div_dom.innerHTML = `
                    <div>CORRECT!</div>
                    <div class="one_more">One More<div>
                `
                
                document.querySelector(".one_more").addEventListener("click", () => {
                    console.log("one more")
                    the_quiz();
                })
            }
            else{
                if(document.querySelector(".winner_div") !== null){
                    document.querySelector(".winner_div").remove();
                }
                if(document.querySelector(".loser_div") !== null){
                    document.querySelector(".loser_div").remove();
                }
                let the_loser_div_dom = document.createElement("div");
                document.querySelector("#quiz_page_quiz_wrapper").appendChild(the_loser_div_dom);
                the_loser_div_dom.classList.add("loser_div");
                the_loser_div_dom.innerHTML = `
                    <div>WRONG!</div>
                    <div class="one_more">One More<div>
                `
                
                
                document.querySelector(".one_more").addEventListener("click", () => {
                    console.log("one more")
                    the_quiz();
                })
            }
        })
    })

}