console.log("HI!");

$(document).ready(function(){
  $("#pink").on("click", function(){
    $("body").css("background", "darkgray");
  });

  $("#blue").on("click", function(){
    $("body").css("background", "white");
    $("body").append("<h1>HEY THERE</h1>" )
  })
});
