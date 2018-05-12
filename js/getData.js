var movieData = null;

$(document).ready(function(){
    $.get("/huton/server/getFilms.php",function(data){
        console.log(data);
        movieData = data;
        data.forEach(function(element, i){
            var padding = (isEven(i)) ? 'p-3' : '';
            console.log(padding);
            $(".card-container").append(
                "<div class='card "+padding+"' id="+ i +">"+
                "<div class='img-container' style='background-image: url(/huton/images/"+element.imgLink+")'>"+
                "</div>"+
                "<div class='card-body'>"+
                    "<h4 class='card-title'>"+element.title+"</h4>"+
                    "<h6 class='card-subtitle mb-2 text-muted'>$" + element.price + "</h6>"+
                    "<p class='card-text text-truncate'>"+element.description+"</p>"+
                    "<button type='button' class='btn btn-primary mt-10 mr-15'>Buy Now</button>"+
                    "<button type='button' class='btn btn-outline-primary mt-10 show-modal' data-toggle='modal' data-target='#movieDetails'>Learn More</button>"+
                "</div>"+
            "</div>"
            )
            $('.show-modal').click(function(evt){
                var id = parseInt($(evt.target).closest('.card').attr('id'));
                var working = movieData[id];
                console.log(working);
                $("#modalTitle").text(working.title);
                $("#modalPrice").text(working.price);
                $("#modalDescription").text(working.description);
                $("#modalPoster").attr("src", "/huton/images/"+working.imgLink)
            })
        });
    }, "json");
});

function isEven(n) {
    return n % 2 == 0;
 }