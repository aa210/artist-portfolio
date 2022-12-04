$(document).ready(function() {
  
$("#logo").ready(function() {
             $("#main").removeClass("hidden");
        });
    
  $(function() {
  $("#artWork").mouseover(function() {
    $(".subLinks").addClass("subLinks-change");
  });
  $(".subLinks").mouseleave(function() {
    $(".subLinks").removeClass("subLinks-change");
  });
    

  
});
  
  

   
  });
