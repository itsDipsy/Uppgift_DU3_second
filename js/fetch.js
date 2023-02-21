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
    return resource;
}

async function start_request(request_form, dog_data) {
    if (document.querySelector(".error_dom") !== null) {
        document.querySelector(".error_dom").remove();
    }
    let fetch_obj;
    if(document.querySelector(".username") !== null && document.querySelector(".password") !== null){
        fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
    }
    else{
        fetch_obj = "1";
    }
    let resource = await fetch_function(fetch_obj, request_form, dog_data);
    console.log(resource);
    if(resource.data === null && resource.status !== "success") { // checks and sees if the resource did not come through
        let error_dom = document.createElement("div")
        error_dom.classList.add("error_dom");
        error_dom.innerHTML = "There is an error with username or password try again";
        if(document.querySelector("#login_input_wrapper") !== null){
           document.querySelector("#login_input_wrapper").appendChild(error_dom);
        }
    }
    return resource
}

