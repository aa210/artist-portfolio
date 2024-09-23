$(document).ready(function() {
  
$("#logo").ready(function() {
             $("#main").removeClass("hidden");
        });
    
  $(function() {
  $("#art-work").mouseover(function() {
    $(".sub-links").addClass("sub-links-change");
  });
  $(".sub-links").mouseleave(function() {
    $(".sub-links").removeClass("sub-links-change");
  });
  
});  
   
  });
