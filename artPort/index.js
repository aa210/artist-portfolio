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

/*
About Page:
- 1 Column: Top Photo + Summary (separate CV/Clients Page)
- 2 Column: Photo (separate CV Page)
- 3 Column:Photo , Summary/Recogntion, Clients; Ex

- CV/Clients Page: Education,



*/
