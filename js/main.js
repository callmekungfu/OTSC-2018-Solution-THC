var img = null;

$("#addNewFilm").submit(function(evt){
    evt.preventDefault();
    var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
    var json = {
        title: title,
        description: description,
        price: parseInt(price),
        image: img
    };
    console.log(json);
    $.post('/huton/server/films.php',json,function(a, b, c){
        alert("successfully added a film!");
    });
    console.log(json);
});

$("#addNewFilm").change(function(){
    var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
    if(img && title && description && price){
        $(".submit-btn").attr('disabled', false);
    }
})

$("#filmPoster").change(function(evt,b){
    evt.preventDefault();
    var fileData = $('#filmPoster').prop('files')[0];   
    var formData = new FormData();                  
    formData.append('file', fileData);
    $.ajax({
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
        
            xhr.upload.addEventListener("progress", function(evt) {
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                percentComplete = parseInt(percentComplete * 100);
                console.log(percentComplete);
                $("#uploadProgress")
                .animate({
                    "width": percentComplete + "%"
                }, {
                    duration: 600,
                    easing: 'linear'
                });  
              }
            }, false);
        
            return xhr;
        },
        url: '/huton/server/uploadImg.php', // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: formData,                         
        type: 'post',
        success: function(response){
            console.log(response); // display response from the PHP script, if any
            img = $("#filmPoster").val().substring($("#filmPoster").val().indexOf("fakepath")+9);
            console.log(img);
            var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
            if(img && title && description && price){
                $(".submit-btn").attr('disabled', false);
            }
        }
     });
    
});

$("#imgUpload").submit(function(evt){
    evt.preventDefault();
    var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
    var json = {
        title: title,
        description: description,
        price: parseInt(price),
        image: img
    };
    $.post('/huton/server/uploadImg.php',json,function(a, b, c){
        alert("successfully added a film!");
    });
    console.log(json);
});