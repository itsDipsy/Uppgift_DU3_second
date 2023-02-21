function new_user(user_name1, password) {
    let new_user = {
        user_name: user_name1,
        password: password,
    }

    return new_user;
}
async function fetch_function(input_data_obj, request_form) {
    let http_request_object;
    let request;
    if (request_form === "get") {
        request = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${input_data_obj.user_name}&password=${input_data_obj.password}`)
    }
    if (request_form === "post") {
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

    let response = await fetch(request);
    let resource = await response.json();
    return resource;
}

async function start_request(request_form) {
    if (document.querySelector(".error_dom") !== null) {
        document.querySelector(".error_dom").remove();
    }
    let fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)


    let await_dom = document.createElement("div");
    await_dom.classList.add("await_dom")
    await_dom.innerHTML = `
        <div class="await_dom_innertext">fetching ...</div>
    `;
    document.querySelector("#the_whole").appendChild(await_dom);


    let resource = await fetch_function(fetch_obj, request_form);
    console.log(resource)
    if (resource.data !== null) { // checks and sees if the resource came through
        await_dom.remove();
        init_quiz_page_html_component(fetch_obj.user_name);
    }
    else { // checks and sees if the resource did not come through
        await_dom.remove();
        let error_dom = document.createElement("div")
        error_dom.classList.add("error_dom");
        error_dom.innerHTML = "There is an error with username or password try again";
        document.querySelector("#login_input_wrapper").appendChild(error_dom);
    }
}



