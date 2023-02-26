function init_quiz_page_html_component(name_for_label) {

    document.body.style.backgroundColor = "turquoise"
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
        <p>The Dog Breed Quiz is made possible thanks to the free API by <a href="https://dog.ceo/dog-api/">DOG CEO Zinc</a> </p>
    </footer>   
`

the_quiz();
return
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

    let the_right_dog_in_quiz_number = Math.floor(Math.random() * the_quiz_dog_arr.length);
    let the_right_dog_in_quiz = the_quiz_dog_arr[the_right_dog_in_quiz_number]
    console.log(the_right_dog_in_quiz)

    async function get_image() {
        document.querySelector(".image_box").style.backgroundImage = `url(./media/logo.png)`;
        let get_image_dom = document.createElement("div");
        get_image_dom.classList.add("the_await_request_dom");
        document.querySelector("#the_whole").appendChild(get_image_dom);
        get_image_dom.innerHTML = `
            <div>fetching server ...</div>
        `;

        let resource = await start_request("get", the_right_dog_in_quiz.url) 

        document.querySelector(".the_await_request_dom").remove();

        console.log(resource.message);
        document.querySelector(".image_box").style.backgroundImage = `url(${resource.message})`
    }
    get_image();


    document.querySelectorAll(".quiz_box").forEach((box, index) => {
        box.innerHTML = the_quiz_dog_arr[index].name;
        box.addEventListener("click", () => {
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