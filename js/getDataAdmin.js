var movieData = null;
var img = null;
var temp;
$(document).ready(function(){
    $.get("/huton/server/getFilms.php",function(data){
        console.log(data);
        movieData = data;
        data.forEach(function(element, i){
            $(".table-of-movies").append(
                "<tr id='"+i+"'>"+
                    "<th scope='row'>"+i+"</th>"+
                    "<td>"+element.title+"</td>"+
                    "<td class='text-truncate'>" + element.description.substring(0,40)+ " ..." + "</td>"+
                    "<td>"+element.price+"</td>"+
                    "<td><button class='btn btn-primary edit-btn' data-toggle='modal' data-target='#movieDetails'>Update</button><button class='btn btn-danger delete-btn'>Delete</button>"+
                "</tr>"
            )
            $('.delete-btn').click(function(evt){
                var id = parseInt($(evt.target).closest('tr').attr('id'));
                var working = movieData[id];
                $.post("/huton/server/deleteFilm.php", working, function(data, response, stuff){
                    alert("Item deleted, refresh to see changes update.")
                });
            })
            $('.edit-btn').click(function(evt){
                var id = parseInt($(evt.target).closest('tr').attr('id'));
                var working = movieData[id];
                temp = working;
                $("#filmTitle").val(working.title);
                $("#filmDes").val(working.description);
                $("#filmPrice").val(working.price);
                img = working.imgLink;
            })
        });
    }, "json");
});

$("#editFilm").submit(function(evt){
    evt.preventDefault();
    var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
    var json = {
        title: title,
        description: description,
        price: parseInt(price),
        image: img,
        prevT: temp.title,
        prevD: temp.description,
        prevI: temp.imgLink,
        prevP: temp.price
    }
    console.log(json);
    $.post('/huton/server/updateFilm.php',json,function(a, b, c){
        alert("successfully edited a film!");
    });
    console.log(json);
});

$("#editFilm").change(function(){
    var title = $("#filmTitle").val(), description = $("#filmDes").val(), price = $("#filmPrice").val();
    if(img && title && description && price){
        $(".submit-btn").attr('disabled', false);
    }
    
})

$("#filmPoster").change(function(evt,b){
    evt.preventDefault();
    //alert("uploaded");
    img = $("#filmPoster").val().substring($("#filmPoster").val().indexOf("fakepath")+9);
});