$("#contactForm").submit(function(evt){
    evt.preventDefault();
    var name = $("#contactName").val(), email = $("#contactEmail").val(), message = $("#contactMessage").val();
    var json = {
        name: name,
        email: email,
        message: message
    }
    $.post('/huton/server/messages.php',json,function(a, b, c){
        alert("Thank you for the message, we will contact you shortly!")
    });
    console.log(json);
});