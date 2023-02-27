console.log(localStorage)
if(localStorage.length === 2){
    init_quiz_page_html_component(localStorage.getItem("username"));
}
else{
    init_login_and_register_page_html();
    login();
    change_between_register_and_login_page(register,login)
}