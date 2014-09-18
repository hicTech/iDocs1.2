function appInBackground(){
    localStorage.setItem("last_access",new Date().getTime());
}

function appResumed(){
    var timeout = appConfig.logoutTimeout;
    var time_in_background = parseInt(new Date().getTime()) - parseInt(localStorage.getItem("last_access"));
    var password_setted = (localStorage.getItem('password') != "" && localStorage.getItem('password') != null);

    if(password_setted){
        if(time_in_background > timeout){
            //alert("Sessione scaduta");
            location.href = "index.html";
        }
    }


}
