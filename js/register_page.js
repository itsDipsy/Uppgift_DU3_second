function register() {
    document.body.style.backgroundColor = "green"
    
    document.querySelector(".page_name").innerHTML = "Register"

    document.querySelector("#new").innerHTML = "Already have a account? login in"
    document.querySelector(".slogan").innerHTML = "Let the quiz games begin";
    document.querySelector(".login_button").style.display = "none"
    document.querySelector(".register_button").style.display = "block"


    function reister_function() {
        if (document.querySelector("#new").classList.contains("selected") === true) {
            document.querySelector(".register_button").addEventListener("click", (event) => {
                event.stopImmediatePropagation(); // Denna behövs för annars kommer både login och fetch click event bubblas

                 async function fetching_server(){
                    let request_server_dom = document.createElement("div");
                    request_server_dom.classList.add("the_await_request_dom");
                    document.querySelector("#the_whole").appendChild(request_server_dom);
                    request_server_dom.innerHTML = `
                        <div>fetching server ...</div>
                    `;


                    let response = await start_request_request("post");
                    console.log(response)
                    request_server_dom.remove();

                }
                fetching_server();
                document.querySelector(".username").value = "";
                document.querySelector(".password").value = "";

            })
        }
    }
    reister_function();
}