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
    console.log(response);
    let resource = await response.json();
    console.log(resource)
}

function new_user(username, password) {
    let new_user = {
        username: username,
        password: password,
    }

    return new_user;
}