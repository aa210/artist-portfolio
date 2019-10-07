$(document).ready(function() { 
  //fadeIns (must include css properies!!)
$(function() { 
    $(window).scroll( function(){
           
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);  }
        });      
    });
  
  
  
  $(window).scroll(
  function(){
    
     $('.slideInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'width':'100%'},900);

              
                    
            }
        }); 
    
  });
});  
  
//Mobile Menu
 $("#mobileMenuButton").click(function(){
    $("#navigationMobile").slideToggle();
  }); 
  
 $("#viewMenu").click(function(){
    $("#menuPrint").slideToggle();
 }); 
  
//Gallery Click
$("#hair").show();
$("#spaStudio").hide();
$("#nails").hide();
$("#beauty").hide(); 
  
$("#beautyLink").click(function() {
    $("#spaStudio, #nails, #hair").hide(500); 
    $("#beauty").show(500);
  });
  
$("#studioLink").click(function() {
    $("#hair, #nails, #beauty").hide(500); 
    $("#spaStudio").show(500);
  });
  
$("#nailsLink").click(function() {
    $("#spaStudio, #hair, #beauty  ").hide(500); 
    $("#nails").show(500);
  });
  
$("#hairLink").click(function() {
    $("#spaStudio, #nails, #beauty").hide(500);
    $("#hair").show(500);
  });
  

  
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


//Testimonial Slider
$("#review1").show();
$("#right1").show(); 
$("#left1").show(); 
$("#review2").hide();
$("#review3").hide();
$("#left2").hide();  
$("#left3").hide(); 
$("#right2").hide(); 
$("#right3").hide();
$("#rightArrowSmall #right2, #rightArrowSmall #right3").hide();
$("#leftArrowSmall #left2, #leftArrowSmall #left3").hide();

 $("#right1, #left3").click(function() {
    
   $("#review1").slideUp(200);
   $("#review3").slideUp(200);
   $("#review2").slideDown(500); 
  
   $("#left2,#right2").show(); $("#right3,#right1,#left3,#left1").hide();
   
   
  }); 
 $("#right3, #left2").click(function() {
   
   
$("#review2, #review3").slideUp(200);
$("#review1").slideDown(500);
    
$("#left1, #right1").show(); $("#right3, #right2, #left3, #left2").hide();  
    
  });  
 $("#right2, #left1").click(function() {
   
     $("#review2,#review1").slideUp(200);
  $("#review3").slideDown(500);
  $("#left3,#right3").show(); $("#right1,#right2,#left1,#left2").hide();  
 
     
    
  });
 
   
});
