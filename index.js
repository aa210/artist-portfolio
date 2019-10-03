$(document).ready(function() { 
 
$(".websites").show()
$("#webLink").addClass("selected");  
$(".webapps").hide();
  
  $("#webLink").click(function() {
    $(this).addClass("selected");
    $("#appsLink").removeClass("selected");
    $(".webapps").hide(500); 
    $(".websites").show(500);
  });
  
  $("#appsLink").click(function() {
    $(this).addClass("selected");
    $("#webLink").removeClass("selected");
    $(".webapps").show(500); 
    $(".websites").hide(500);
  });
  
  
  
});


/*
https://postimg.cc/gallery/msykkeqi/9b1ecf1d/

Nothing
Candal
Im fell


http://justmeandyoukid.com/wp-content/uploads/2015/03/whyrepmatters-300x286.jpg
*/
