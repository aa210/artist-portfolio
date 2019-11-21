$(document).ready(function() { 
 
   //Scroll Up Menu
var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $(".navbar, #topDivMobile").outerHeight();
         $(document).scroll(function () {
            var y = $(document).scrollTop(),
                header = $(".navbar, #topDivMobile");
        
            if (y >= 160) {
                var st = $(this).scrollTop();
 
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
            return;
                                                
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down                
                header.removeClass('fixed');
            } else {
                // Scroll Up                
                if(st + $(window).height() < $(document).height() && y > 142) {
                    header.addClass('fixed');                    
                }else if(y <= 142){
                    header.removeClass('fixed');
                }
            }
 
            lastScrollTop = st; 
            } else {
                header.removeClass('fixed');
            }
        });

  
});



//Mobile Menu
 $("#mobileMenuButton").click(function(){
    $("#navigationMobile").slideToggle();
   $(".fa-bars").toggleClass("hidden");
    $(".fa-close").toggleClass("hidden");
  }); 
    
  
 $("#viewMenu").click(function(){
    $("#menuPrint").slideToggle();
 }); 
   
   
 //PORTFOLIO 
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
  
 
 
/*
https://postimg.cc/gallery/msykkeqi/9b1ecf1d/

Nothing
Candal
Im fell


http://justmeandyoukid.com/wp-content/uploads/2015/03/whyrepmatters-300x286.jpg
*/
