$('#loginForm').submit(function(evt){
    evt.preventDefault();
    var login = {
        username: $('#username').val(),
        password: $('#password').val()
    }
    $.post("/huton/server/login.php", login, function(a, b, c){
        if(a.length > 2){
            console.log("login success");
            window.location="/huton/admin";
        }else{
            console.log('login failed')
            $('.alert').show();
        }
    })
});