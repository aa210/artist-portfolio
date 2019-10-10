$(document).ready(function() {
  
  // List of TwitchTV accounts to use
  var streamers=["ESL_SC2", "syndicate", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "Scaxz9"];
 
 // For each TwitchTV account...
 streamers.forEach(function(streamer) { 
   // Variables to store pieces of the API Url that will get info for each user
  var url="https://wind-bow.gomix.me/twitch-api/";
  var addOn = "?callback=?"
  var channels = url + 'channels/' + streamer + addOn;
  var streams = url + 'streams/' + streamer + addOn;
   //get the JSON channel link AND the JSON stream link for each user (nested)
    $.getJSON(channels, function(response) {
   $.getJSON(streams, function(data) {
     
    var name = response.name;
    var logo = "<img class='userIMG' src='"+response.logo+ "'><br>"; 
    var url = "<a href="+response.url+">";
     
  // What to add to page if user is online, user is offline, or user doesn't exist
   if(response.error) {
     $(".streaming").append("<div class='userInfo offline'>"+streamer+"<br><img class='userIMG' src='//thumb18.shutterstock.com/photos/thumb_large/450076/450076,1284955408,4.jpg'><br>!!user not found<hr>");
   } else if 
    (!response.error && data.stream !==null) { 
    var statu = data.stream.channel.status;
      
   $(".streaming").append("<div class='userInfo online'>"+url+name+"<br>"+logo +"</a><p style='color:green; font-weight:bold;'>online"+"</p><b style='color:#1a1a1a;font-style:italic;'>"+statu+"</b><hr></div>");
    }
     else if(!response.error && data.stream === null)
     {
       $(".streaming").append("<div class='userInfo offline'>"+url+name+"<br>"+logo +"</a><p style='color:red;' #id='offline'>offline<hr></div>");
     };
      });
   });
  });
  });
// Buttons to navigate through users.
  $(".btn-success").click(function () {
   $(".offline").css('display', 'none');
   $(".online").css('display', 'block');
});
   
 $(".btn-danger").click(function () {
    $(".online").css('display', 'none');
   $(".offline").css('display', 'block');
 }); 
 $(".btn-info").click(function () {
   $(".online").css('display', 'block');
  $(".offline").css('display', 'block');
   });
