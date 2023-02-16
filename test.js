fetch("https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=ee&password=ee")
.then(promise => {
    console.log(promise);
    return promise.json();
})
.then(data => console.log(data));