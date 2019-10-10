$(document).ready(function() {
/*Play Button*/  
  $("#playButton").click(function(){
    $(this).addClass("hidden"); 
  $("#pauseButton").removeClass("hidden");
  });
  $("#pauseButton").click(function(){
    $(this).addClass("hidden"); 
  $("#playButton").removeClass("hidden");
  });
  
$(function() { 
    $(window).scroll( function(){
           
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);  }
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
                
                $(this).animate({'width':'100%'},800);

              
                    
            }
        }); 
    
  });
});


 });


