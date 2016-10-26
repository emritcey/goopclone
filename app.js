console.log("HI!");

$(document).ready(function(){
  $("#pink").on("click", function(){
    $("body").css("background", "darkgray");
  });

  $("#blue").on("click", function(){
    $("body").css("background", "white");
    $("body").append("<h1>HEY THERE</h1>")
  })


});


function duplicate(array) {
  var new_array = array.concat(array);
  return new_array;
}

console.log(duplicate([1,2,3]))

for(var i=0; i<100; i++) {
  if(i%3 === 0 && i%5===0){
    console.log("fizzbuzz");
  }else if(i%5 === 0){
    console.log("buzz");
  }else if(i%3 === 0) {
    console.log("fizz");
  }
}

console.log("HI!")
