function new_user(user_name1, password) {
    let new_user = {
        user_name: user_name1,
        password: password,
    }

    return new_user;
}
async function fetch_function(input_data_obj, request_form, dog_data) {
    let http_request_object;
    let request;
    if (request_form === "get" && input_data_obj !== "1" && dog_data === undefined) {
        console.log("yes1")
        request = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${input_data_obj.user_name}&password=${input_data_obj.password}`)
    }
    if (request_form === "post" && input_data_obj !== "1" && dog_data === undefined ) {
        http_request_object = {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                action: "register",
                user_name: input_data_obj.user_name,
                password: input_data_obj.password,
            }),
        }
        console.log(http_request_object)
        request = new Request("https://teaching.maumt.se/apis/access/", http_request_object)
    }



    if(request_form === "get" && input_data_obj === "1" && dog_data !== undefined){
        console.log("yes2");
        request = new Request(`https://dog.ceo/api/breed/${dog_data}/images/random`);
    }
  
    let response = await fetch(request);
    let resource = await response.json();
    let return_object = { 
        status: response.status,
        the_resource: resource
    }
    console.log(resource)
    return return_object;
}

async function start_request_login(request_form, dog_data) {

    let fetch_obj;
    if(document.querySelector(".username") !== null && document.querySelector(".password") !== null){
        fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
    }
    else{
        fetch_obj = "1";
    }
    let resource = await fetch_function(fetch_obj, request_form, dog_data);
    console.log(resource);

    if(resource.the_resource.data === null) { // checks and sees if the resource did not come through
        let error_dom = document.querySelector("p");
        error_dom.style.backgroundColor = "white" // Denna overwritar rgb(0,0,0,0)
        error_dom.innerHTML = "Wrong username or password";
        error_dom.classList.add("error_dom")
    }

    if(resource.status === 418){
        let info_login_teapot_fail = document.createElement("div");
        info_login_teapot_fail.innerHTML = `
            <div>
                <div>Oops a teapot try again</div>
                <button class="close">CLOSE</button>
            </div>
        `;
        info_login_teapot_fail.classList.add("request_dom_close");
        document.querySelector("#the_whole").appendChild(info_login_teapot_fail);   
        document.querySelector(".close").addEventListener("click", () => {
            info_login_teapot_fail.remove();
        })
    }
    
    return resource
}


async function start_request_request(request_form, dog_data) {

    let fetch_obj;
    if(document.querySelector(".username") !== null && document.querySelector(".password") !== null){
        fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
    }
    else{
        fetch_obj = "1";
    }



    let resource = await fetch_function(fetch_obj, request_form, dog_data);
    
 
    


    if(resource.the_resource.data === null) { // checks and sees if the resource did not come through
        let info_request_dom_fail = document.createElement("div");
        info_request_dom_fail.innerHTML = `
            <div>
                <div>That names already taken</div>
                <button class="close">CLOSE</button>
            </div>
        `;
        info_request_dom_fail.classList.add("request_dom_close");
        document.querySelector("#the_whole").appendChild(info_request_dom_fail);   
        document.querySelector(".close").addEventListener("click", () => {
            info_request_dom_fail.remove();
        })
        
    }
    if(resource.the_resource.data !== null){
        let info_request_dom_success = document.createElement("div");
        info_request_dom_success.innerHTML = `
            <div>
                <div>Registration Complete</div>
                <button class="close">CLOSE</button>
            </div>
        `;
        info_request_dom_success.classList.add("request_dom_close");
        document.querySelector("#the_whole").appendChild(info_request_dom_success);   
        document.querySelector(".close").addEventListener("click", () => {
            info_request_dom_success.remove();
        })
        
    }
    
    if(resource.status === 418){
        let info_login_teapot_fail = document.createElement("div");
        info_login_teapot_fail.innerHTML = `
            <div>
                <div>Oops a teapot try again</div>
                <button class="close">CLOSE</button>
            </div>
        `;
        info_login_teapot_fail.classList.add("request_dom_close");
        document.querySelector("#the_whole").appendChild(info_login_teapot_fail);   
        document.querySelector(".close").addEventListener("click", () => {
            info_login_teapot_fail.remove();
        })
    }

    return resource.the_resource
}

async function start_request_quiz(request_form, dog_data) {

    let fetch_obj;
    if(document.querySelector(".username") !== null && document.querySelector(".password") !== null){
        fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
    }
    else{
        fetch_obj = "1";
    }
    let resource = await fetch_function(fetch_obj, request_form, dog_data);
    console.log(resource);
    
    if(resource.status === 418){
        let info_login_teapot_fail = document.createElement("div");
        info_login_teapot_fail.innerHTML = `
            <div>
                <div>Oops a teapot try again</div>
                <button class="close">CLOSE</button>
            </div>
        `;
        info_login_teapot_fail.classList.add("request_dom_close");
        document.querySelector("#the_whole").appendChild(info_login_teapot_fail);   
        document.querySelector(".close").addEventListener("click", () => {
            info_login_teapot_fail.remove();
        })
    }
    return resource
}
