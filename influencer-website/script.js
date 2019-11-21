$(document).ready(function() { 
 
  $(".aboutLink").click(function() {
    $("#homePage").addClass("hidden");
    $("#contactPage").addClass("hidden");
 $("#blogPage").addClass("hidden");  
 $("#videoPage").addClass("hidden");  
   $("#campaignPage").addClass("hidden");   
    $("#aboutPage").removeClass("hidden");
    
    
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
    $(this).animate({'opacity':'1'},800);
     $(".headers h1").fadeIn();
    
  });
  
  $(".blogLink").click(function() {
    $("#homePage").addClass("hidden");
    $("#contactPage").addClass("hidden");
    $("#aboutPage").addClass("hidden");
  $("#campaignPage").addClass("hidden");
$("#videoPage").addClass("hidden");     $("#blogPage").removeClass("hidden");  
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  
  $(".contactLink").click(function() {
    $("#homePage").addClass("hidden");
    $("#aboutPage").addClass("hidden");
    $("#blogPage").addClass("hidden");
  $("#campaignPage").addClass("hidden");
 $("#videoPage").addClass("hidden");  
      
    $("#contactPage").removeClass("hidden");
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });
  
 $(".homeLink").click(function() {
    $("#homePage").removeClass("hidden");   
    $("#aboutPage").addClass("hidden");
     $("#contactPage").addClass("hidden");
 $("#blogPage").addClass("hidden");
  $("#campaignPage").addClass("hidden");
  $("#videoPage").addClass("hidden");  
   $(".selected").removeClass("selected");
    $(this).addClass("selected");
  }); 
  
 $(".videoLink").click(function() {
    $("#homePage").addClass("hidden");
    $("#aboutPage").addClass("hidden");
    $("#blogPage").addClass("hidden");
    $("#contactPage").addClass("hidden");
   $("#campaignPage").addClass("hidden");
$("#videoPage").removeClass("hidden");  
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  
  
  
$(".campaignLink").click(function() {
    $("#homePage").addClass("hidden");
    $("#aboutPage").addClass("hidden");
    $("#blogPage").addClass("hidden");
 
 $("#videoPage").addClass("hidden");  
      
    $("#contactPage").addClass("hidden");
  
  $("#campaignPage").removeClass("hidden");
   $(".selected").removeClass("selected");
    
    $(this).addClass("selected");
  });  

  $("#videoPics1").click(function() {
    $("#video2").addClass("hidden");
    $("#video3").addClass("hidden"); $("#video1").removeClass("hidden");
     
  });
   $("#videoPics2").click(function() {
    $("#video1").addClass("hidden");
    $("#video3").addClass("hidden");
    $("#video2").removeClass("hidden");
      
  });
  $("#videoPics3").click(function() {
    $("#video2").addClass("hidden");
    $("#video1").addClass("hidden");
    $("#video3").removeClass("hidden");
      
  });
  
});

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.timer3').countTo({
            from: 10,
            to: 25,
            speed: 4000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
        $('.timer2').countTo({
            from: 5,
            to: 17,
            speed: 4000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
        $('.timer1').countTo({
            from: 15,
            to: 32,
            speed: 4000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
