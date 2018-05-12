/*

    This script enables the pages to switch with animation, it makes the site look really cool.
    Is it pratical in a world where processing power and internet connection vary? No.

*/

$(document).ready(function(){
    $('body').fadeIn('slow');
});

$('a').click(function(evt){
    evt.preventDefault();
    var target = $(evt.target).closest('a').attr('href');
    if(target.substring(0,1) != '#'){
        $('body').fadeOut('slow', function(){
            window.location = target;
        });
    }else{
        window.location = target;
    }
    
});