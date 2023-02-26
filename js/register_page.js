function register() {

    document.body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
    
    document.querySelector(".page_name").innerHTML = "Request"

    document.querySelector("#new").innerHTML = "Already have a account? login in"
    document.querySelector(".slogan").innerHTML = "Let the quiz games begin";
    document.querySelector(".login_button").style.display = "none"
    document.querySelector(".register_button").style.display = "block"


    function reister_function() {
        if (document.querySelector("#new").classList.contains("selected") === true) {
            document.querySelector(".register_button").addEventListener("click", (event) => {
                event.stopImmediatePropagation(); // Denna behövs för annars kommer både login och fetch click event bubblas

                 async function test(){
                    let request_server_dom = document.createElement("div");
                    request_server_dom.classList.add("the_await_request_dom");
                    document.querySelector("#the_whole").appendChild(request_server_dom);
                    request_server_dom.innerHTML = `
                        <div>fetching server ...</div>
                    `;


                    let response = await start_request("post");
                    console.log(response)
                    request_server_dom.remove();

                }
                test();
                document.querySelector(".username").value = "";
                document.querySelector(".password").value = "";

            })
        }
    }
    reister_function();
}