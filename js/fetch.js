async function fetch_function(input_data_obj, request_form) {
    let http_request_object;
    let request;
    if (request_form === "get") {
        request = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${input_data_obj.username}&password=${input_data_obj.password}`)
    }
    if (request_form === "post") {
        http_request_object = {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                action: "register",
                user_name: input_data_obj.username,
                password: input_data_obj.password,
            }),
        }
        request = new Request("https://teaching.maumt.se/apis/access/", http_request_object)
    }
    let response = await fetch(request);
    let resource = await response.json();
    return resource;
}

function new_user(username, password) {
    let new_user = {
        username: username,
        password: password,
    }

    return new_user;
}



async function start_request(request_form){

    let fetch_obj = new_user(document.querySelector(".username").value, document.querySelector(".password").value)
    console.log(fetch_obj);

    let await_dom = document.createElement("div");
    await_dom.classList.add("await_dom")
    await_dom.innerHTML = `
        <div class="await_dom_innertext">fetching ...</div>
    `;
    document.querySelector("#the_whole").appendChild(await_dom);


    let resource = await fetch_function(fetch_obj, request_form);
    console.log(resource);

    if(resource !== null){ // checks and sees if the resource came through
        await_dom.remove();
    }
    else{ // checks and sees if the resource did not come through
        await_dom.remove();
    }


}



async function start_request(request_form){

    let await_dom = document.createElement("div");
    await_dom.classList.add("await_dom")
    await_dom.innerHTML = `
        <div class="await_dom_innertext">fetching ...</div>
    `;
    document.querySelector("#the_whole").appendChild(await_dom);


    let resource = await fetch_function(fetch_obj, request_form);
    console.log(resource);

    if(resource !== null){ // checks and sees if the resource came through
        await_dom.remove();
    }
    else{ // checks and sees if the resource did not come through
        await_dom.remove();
    }


}