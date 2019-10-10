SC.initialize({
    client_id: "b58fafed3cba2066d07ae1cd704f7c39"
  });

var results = document.getElementById("results");
var loading = document.getElementById("loading");
var buttons = document.getElementsByTagName("button");

for(var j=0; j< buttons.length; j++){
  
var clicked =
  function() {
  var query = this.value;
  loading.textContent = "Loading new track...";                               
  SC.get('/tracks', {
     q:query, 
     limit:200, 
     duration: {to: Math.floor((Math.random() * 440000) + 60000)}
}).then(function(json) { 

  for(var i = 0; i < json.length; i++){ 
    if(json[i].downloadable === false) {
      continue;
  }
  
    var player = document.getElementById("player");
    SC.oEmbed(json[i].permalink_url, {
      maxheight: 100
      }).then(function(res) {
        player.innerHTML = res.html;
      }); 
   loading.textContent = " "; 
  
}   
}); 
};
  
  buttons[j].addEventListener('click', clicked);
}; 

/*
1.CSS design

- Scld Logo
- Change h1 font
- Change body font

https://soundcloud.com/floex/glasshouse-with-butterfly-live



*/
 
 
