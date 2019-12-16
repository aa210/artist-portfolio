$(document).ready(function() { 
  //5-digit sequence random number generator  
var tmSequenceGenerator= function generate() {
          return Math.floor(Math.random() * 90000) + 10000;
    }


$("#yourTMSequence").val(tmSequenceGenerator);
  

 
//mobileMenu dropdown 
$("#mobileMenuButton").click(function(){
    $("#navbar-mobile").slideToggle();
  }); 
  
    //radio buttons that hide other inputs when clicked and erases value from hidden values
$("#aboutRadioIndividual").click(function(){
  $("#aboutYouIndividual").removeClass("hidden");
  $("#tmi_contact").removeClass("hidden");
  $("#aboutYouCouple, #aboutYouGroup, #tmc_contact, #tmg_contact").addClass("hidden");
  $("#aboutYouCouple input, #aboutYouGroup input, #tmcContact, #tmgContact").val("");
  
  
});
  
$("#aboutRadioCouple").click(function(){
  $("#aboutYouCouple").removeClass("hidden");
  $("#tmc_contact").removeClass("hidden");
  $("#aboutYouIndividual, #aboutYouGroup, #tmi_contact, #tmg_contact").addClass("hidden");
  $("#aboutYouIndividual input, #aboutYouGroup input, #tmiContact, #tmgContact").val("");
  
});
  
 $("#aboutRadioGroup").click(function(){
  $("#aboutYouGroup").removeClass("hidden");
   $("#tmg_contact").removeClass("hidden");
  $("#aboutYouIndividual, #aboutYouCouple, #tmi_contact, #tmc_contact").addClass("hidden");
   $("#aboutYouIndividual input, #aboutYouCouple input, #tmiContact, #tmcContact").val("");
   
  
}); 
  
  
$("#lookingRadioIndividual").click(function(){
   $("#lookingForIndividual").removeClass("hidden");
  $("#lookingForGroup, #lookingForCouple").addClass("hidden");
  $("#lookingForGroup input, #lookingForCouple input").val("");
});  

$("#lookingRadioCouple").click(function(){
   $("#lookingForCouple").removeClass("hidden");
  $("#lookingForGroup, #lookingForIndividual").addClass("hidden");
  $("#lookingForGroup input, #lookingForIndividual input").val("");
});  
  
$("#lookingRadioGroup").click(function(){
   $("#lookingForGroup").removeClass("hidden");
  $("#lookingForIndividual, #lookingForCouple").addClass("hidden");
  $("#lookingForIndividual input, #lookingForCouple input").val("");
});    
  

  
   
 
  
  
    
 
    
  
  
    

    
    
    
   
    
   
    

  

$("#previewTag").click(function(){
    event.preventDefault(); //tells browser NOT to do its usual reloading the entire page after it sends the form off to a server. Keeps user on page.
 
  
  //variable for unique sequence
  var yourTMSequence = "tm_"+$("#yourTMSequence").val().split(",");
  
 /* Following are list of variables that store user inputs and removes spaces*/
  
  //You are tm tags
  var aboutYouTmi = $("#tmi-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmi.length;i++){
      if(aboutYouTmi[i] != ""){
      aboutYouTmi[i] = " tmi_"+aboutYouTmi[i].replace(/\s+/g, '');
    } else
      aboutYouTmi[i] = aboutYouTmi[i];
    }
      
    var aboutYouTmc = $("#tmc-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmc.length;i++){
      if(aboutYouTmc[i] != ""){
      aboutYouTmc[i] = " tmc_"+aboutYouTmc[i].replace(/\s+/g, '');
    } else
      aboutYouTmc[i] = aboutYouTmc[i];
    }
    
    var aboutYouTmg = $("#tmg-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmg.length;i++){
      if(aboutYouTmg[i] != ""){
      aboutYouTmg[i] = " tmg_"+aboutYouTmg[i].replace(/\s+/g, '');
    } else
      aboutYouTmg[i] = aboutYouTmg[i];
    }
  
  //you offer tmo tags
   var aboutYouTmio = $("#tmio-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmio.length;i++){
      
    if(aboutYouTmio[i] != ""){
   aboutYouTmio[i] = " tmio_"+aboutYouTmio[i].replace(/\s+/g, '');
    } else
      aboutYouTmio[i] = aboutYouTmio[i];
    }
    
   var aboutYouTmco = $("#tmco-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmco.length;i++){
      
    if(aboutYouTmco[i] != ""){
   aboutYouTmco[i] = " tmco_"+aboutYouTmco[i].replace(/\s+/g, '');
    } else
      aboutYouTmco[i] = aboutYouTmco[i];
    }
    
    var aboutYouTmgo = $("#tmgo-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmgo.length;i++){
      
    if(aboutYouTmgo[i] != ""){
   aboutYouTmgo[i] = " tmgo_"+aboutYouTmgo[i].replace(/\s+/g, '');
    } else
      aboutYouTmgo[i] =  aboutYouTmgo[i];
    }
    
 //you are interested in tmi tags  
  var aboutYouTmii = $("#tmii-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmii.length;i++){
      if(aboutYouTmii[i] != ""){
   aboutYouTmii[i] = " tmii_"+aboutYouTmii[i].replace(/\s+/g, '');
    } else
      aboutYouTmii[i] = aboutYouTmii[i];
    }
    
     var aboutYouTmgi = $(" #tmgi-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmgi.length;i++){
      if(aboutYouTmgi[i] != ""){
   aboutYouTmgi[i] = " tmgi_"+aboutYouTmgi[i].replace(/\s+/g, '');
    } else
      aboutYouTmgi[i] = aboutYouTmgi[i];
    }
    
    var aboutYouTmci = $("#tmci-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmci.length;i++){
      if(aboutYouTmci[i] != ""){
   aboutYouTmci[i] = " tmci_"+aboutYouTmci[i].replace(/\s+/g, '');
    } else
      aboutYouTmci[i] = aboutYouTmci[i];
    }
    
  //you love tml tags
   var aboutYouTmil = $("#tmil-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmil.length;i++){
      if(aboutYouTmil[i] != ""){
   aboutYouTmil[i] = " tmil_"+aboutYouTmil[i].replace(/\s+/g, '');
    } else
      aboutYouTmil[i] = aboutYouTmil[i];
    }
   
     var aboutYouTmcl = $("#tmcl-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmcl.length;i++){
      if(aboutYouTmcl[i] != ""){
   aboutYouTmcl[i] = " tmcl_"+aboutYouTmcl[i].replace(/\s+/g, '');
    } else
      aboutYouTmcl[i] = aboutYouTmcl[i];
    }
 
    var aboutYouTmgl = $("#tmgl-aboutYou").val().split(",");
    for (i=0;i<aboutYouTmgl.length;i++){
      if(aboutYouTmgl[i] != ""){
   aboutYouTmgl[i] = " tmgl_"+aboutYouTmgl[i].replace(/\s+/g, '');
    } else
      aboutYouTmgl[i] = aboutYouTmgl[i];
    }
 
  //you have or possess tmh tags
   var aboutYouTmih = $("#tmih-aboutYou").val().split(","); 
    for (i=0;i<aboutYouTmih.length;i++){
      if(aboutYouTmih[i] != ""){
   aboutYouTmih[i] = " tmih_"+aboutYouTmih[i].replace(/\s+/g, '');
    } else
      aboutYouTmih[i] = "";
    }
    
                            
  var aboutYouTmch = $("#tmch-aboutYou").val().split(","); 
    for (i=0;i<aboutYouTmch.length;i++){
      if(aboutYouTmch[i] != ""){
   aboutYouTmch[i] = " tmch_"+aboutYouTmch[i].replace(/\s+/g, '');
    } else
      aboutYouTmch[i] = "";
    }
    
                            
  var aboutYouTmgh = $("#tmgh-aboutYou").val().split(","); 
    for (i=0;i<aboutYouTmgh.length;i++){
      if(aboutYouTmgh[i] != ""){
   aboutYouTmgh[i] = " tmgh_"+aboutYouTmgh[i].replace(/\s+/g, '');
    } else
      aboutYouTmgh[i] = "";
    }
    
//Your contact tm_c tags 
  var aboutYouTmic = $("#tmiContact").val().split(",");
  for (i=0;i<aboutYouTmic.length;i++){
      if(aboutYouTmic[i] != ""){
   aboutYouTmic[i] = " tmic_"+aboutYouTmic[i].replace(/\s+/g, '');
    } else
      aboutYouTmic[i] = "";
    }
  
   var aboutYouTmcc = $("#tmcContact").val().split(",");
  for (i=0;i<aboutYouTmcc.length;i++){
      if(aboutYouTmcc[i] != ""){
   aboutYouTmcc[i] = " tmcc_"+aboutYouTmcc[i].replace(/\s+/g, '');
    } else
      aboutYouTmcc[i] = "";
    }
  
   var aboutYouTmgc = $("#tmgContact").val().split(",");
  for (i=0;i<aboutYouTmgc.length;i++){
      if(aboutYouTmgc[i] != ""){
   aboutYouTmgc[i] = " tmgc_"+aboutYouTmgc[i].replace(/\s+/g, '');
    } else
      aboutYouTmgc[i] = "";
    }  
  
  
  
  //Looking for TM_ tags
  var aboutYouTmiLooking = $("#tmi-aboutYou-looking").val().split(",");
   for (i=0;i<aboutYouTmiLooking.length;i++){ 
     aboutYouTmiLooking[i] = aboutYouTmiLooking[i].replace(/\s+/g, '');
        if (aboutYouTmiLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmiLooking[i] = " tmifi_"+ aboutYouTmiLooking[i];
} else if(aboutYouTmiLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmiLooking[j] = " tmcfi_"+ aboutYouTmiLooking[i];
}  else if(aboutYouTmiLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmiLooking[i] = " tmgfi_"+ aboutYouTmiLooking[i];
} else if(aboutYouTmiLooking[i] = ""){
  aboutYouTmiLooking[i] = "";
} else
  aboutYouTmiLooking[i] = aboutYouTmiLooking[i];
   }  
    
    var aboutYouTmcLooking = $("#tmc-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmcLooking.length;i++){ 
     aboutYouTmcLooking[i] = aboutYouTmcLooking[i].replace(/\s+/g, '');
        if (aboutYouTmcLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
   aboutYouTmcLooking[i] = " tmifc_"+ aboutYouTmcLooking[i];
} else if(aboutYouTmcLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmcLooking[j] = " tmcfc_"+ aboutYouTmcLooking[i];
}  else if(aboutYouTmcLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmcLooking[i] = " tmgfc_"+ aboutYouTmcLooking[i];
} else if(aboutYouTmcLooking[i] = ""){
  aboutYouTmcLooking[i] = "";
} else
  aboutYouTmcLooking[i] = aboutYouTmcLooking[i];
   }  
    
    var aboutYouTmgLooking = $("#tmg-aboutYou-looking").val().split(",");
     for (i=0;i<aboutYouTmgLooking.length;i++){ 
     aboutYouTmgLooking[i] = aboutYouTmgLooking[i].replace(/\s+/g, '');
        if (aboutYouTmgLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmgLooking[i] = " tmifg_"+ aboutYouTmgLooking[i];
} else if(aboutYouTmgLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmgLooking[j] = " tmcfg_"+ aboutYouTmgLooking[i];
}  else if(aboutYouTmgLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmgLooking[i] = " tmgfg_"+ aboutYouTmgLooking[i];
} else if(aboutYouTmgLooking[i] = ""){
  aboutYouTmgLooking[i] = "";
} else
  aboutYouTmgLooking[i] = aboutYouTmgLooking[i];
   }  
     
   
  
  //Looking for who offers tmo tags
  var aboutYouTmioLooking = $("#tmio-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmioLooking.length;i++){ 
     aboutYouTmioLooking[i] = aboutYouTmioLooking[i].replace(/\s+/g, '');
        if (aboutYouTmioLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmioLooking[i] = " tmifio_"+ aboutYouTmioLooking[i];
} else if(aboutYouTmioLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmioLooking[j] = " tmcfio_"+ aboutYouTmioLooking[i];
}  else if(aboutYouTmioLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmioLooking[i] = " tmgfio_"+ aboutYouTmioLooking[i];
} else if(aboutYouTmioLooking[i] = ""){
  aboutYouTmioLooking[i] = "";
} else
  aboutYouTmioLooking[i] = aboutYouTmioLooking[i];
   } 
    
    var aboutYouTmcoLooking = $("#tmco-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmcoLooking.length;i++){ 
     aboutYouTmcoLooking[i] = aboutYouTmcoLooking[i].replace(/\s+/g, '');
        if (aboutYouTmcoLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmcoLooking[i] = " tmifco_"+ aboutYouTmcoLooking[i];
} else if(aboutYouTmcoLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmcoLooking[j] = " tmcfco_"+ aboutYouTmcoLooking[i];
}  else if(aboutYouTmcoLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmcoLooking[i] = " tmgfco_"+ aboutYouTmcoLooking[i];
} else if(aboutYouTmcoLooking[i] = ""){
  aboutYouTmcoLooking[i] = "";
} else
  aboutYouTmcoLooking[i] = aboutYouTmcoLooking[i];
   } 
    
      var aboutYouTmgoLooking = $("#tmgo-aboutYou-looking").val().split(",");
     for (i=0;i<aboutYouTmgoLooking.length;i++){ 
     aboutYouTmgoLooking[i] = aboutYouTmgoLooking[i].replace(/\s+/g, '');
        if (aboutYouTmgoLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmgoLooking[i] = " tmifgo_"+ aboutYouTmgoLooking[i];
} else if(aboutYouTmgoLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmgoLooking[j] = " tmcfgo_"+ aboutYouTmgoLooking[i];
}  else if(aboutYouTmgoLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmgoLooking[i] = " tmgfgo_"+ aboutYouTmgoLooking[i];
} else if(aboutYouTmgoLooking[i] = ""){
  aboutYouTmgoLooking[i] = "";
} else
  aboutYouTmgoLooking[i] = aboutYouTmgoLooking[i];
   }  
    
  
  
  //Looking for who interested in tmi tags
   var aboutYouTmiiLooking = $("#tmii-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmiiLooking.length;i++){ 
     aboutYouTmiiLooking[i] = aboutYouTmiiLooking[i].replace(/\s+/g, '');
        if (aboutYouTmiiLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmiiLooking[i] = " tmifii_"+ aboutYouTmiiLooking[i];
} else if(aboutYouTmiiLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmiiLooking[j] = " tmcfii_"+ aboutYouTmiiLooking[i];
}  else if(aboutYouTmiiLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmiiLooking[i] = " tmgfii_"+ aboutYouTmiiLooking[i];
} else if(aboutYouTmiiLooking[i] = ""){
  aboutYouTmiiLooking[i] = "";
} else
  aboutYouTmiiLooking[i] = aboutYouTmiiLooking[i];
   } 
    
  
   var aboutYouTmciLooking = $("#tmci-aboutYou-looking").val().split(",");
   for (i=0;i<aboutYouTmciLooking.length;i++){ 
     aboutYouTmciLooking[i] = aboutYouTmciLooking[i].replace(/\s+/g, '');
        if (aboutYouTmciLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmciLooking[i] = " tmifci_"+ aboutYouTmciLooking[i];
} else if(aboutYouTmciLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmciLooking[j] = " tmcfci_"+ aboutYouTmciLooking[i];
}  else if(aboutYouTmciLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmciLooking[i] = " tmgfci_"+ aboutYouTmciLooking[i];
} else if(aboutYouTmciLooking[i] = ""){
  aboutYouTmciLooking[i] = "";
} else
  aboutYouTmciLooking[i] = aboutYouTmciLooking[i];
   } 
    
     var aboutYouTmgiLooking = $("#tmgi-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmgiLooking.length;i++){ 
     aboutYouTmgiLooking[i] = aboutYouTmgiLooking[i].replace(/\s+/g, '');
        if (aboutYouTmgiLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmgiLooking[i] = " tmifgi_"+ aboutYouTmgiLooking[i];
} else if(aboutYouTmgiLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmgiLooking[j] = " tmcfgi_"+ aboutYouTmgiLooking[i];
}  else if(aboutYouTmgiLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmgiLooking[i] = " tmgfgi_"+ aboutYouTmgiLooking[i];
} else if(aboutYouTmgiLooking[i] = ""){
  aboutYouTmgiLooking[i] = "";
} else
  aboutYouTmgiLooking[i] = aboutYouTmgiLooking[i];
   } 
    
  //Looking for who loves tml tags
      
  var aboutYouTmilLooking = $("#tmil-aboutYou-looking").val().split(",");
  for (i=0;i<aboutYouTmilLooking.length;i++){ 
     aboutYouTmilLooking[i] = aboutYouTmilLooking[i].replace(/\s+/g, '');
        if (aboutYouTmilLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmilLooking[i] = " tmifil_"+ aboutYouTmilLooking[i];
} else if(aboutYouTmilLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmilLooking[j] = " tmcfil_"+ aboutYouTmilLooking[i];
}  else if(aboutYouTmiiLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmiiLooking[i] = " tmgfil_"+ aboutYouTmilLooking[i];
} else if(aboutYouTmilLooking[i] = ""){
  aboutYouTmilLooking[i] = "";
} else
  aboutYouTmilLooking[i] = aboutYouTmilLooking[i];
   } 
    
    var aboutYouTmclLooking = $("#tmcl-aboutYou-looking").val().split(",");
 for (i=0;i<aboutYouTmclLooking.length;i++){ 
     aboutYouTmclLooking[i] = aboutYouTmclLooking[i].replace(/\s+/g, '');
        if (aboutYouTmclLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmclLooking[i] = " tmifcl_"+ aboutYouTmclLooking[i];
} else if(aboutYouTmclLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmclLooking[j] = " tmcfcl_"+ aboutYouTmclLooking[i];
}  else if(aboutYouTmclLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmclLooking[i] = " tmgfcl_"+ aboutYouTmclLooking[i];
} else if(aboutYouTmclLooking[i] = ""){
  aboutYouTmclLooking[i] = "";
} else
  aboutYouTmclLooking[i] = aboutYouTmclLooking[i];
   } 
    
    var aboutYouTmglLooking = $("#tmgl-aboutYou-looking").val().split(",");
    for (i=0;i<aboutYouTmglLooking.length;i++){ 
     aboutYouTmglLooking[i] = aboutYouTmglLooking[i].replace(/\s+/g, '');
        if (aboutYouTmglLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmglLooking[i] = " tmifgl_"+ aboutYouTmglLooking[i];
} else if(aboutYouTmglLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmglLooking[j] = " tmcfgl_"+ aboutYouTmglLooking[i];
}  else if(aboutYouTmglLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmglLooking[i] = " tmgfgl_"+ aboutYouTmglLooking[i];
} else if(aboutYouTmglLooking[i] = ""){
  aboutYouTmglLooking[i] = "";
} else
  aboutYouTmglLooking[i] = aboutYouTmglLooking[i];
   } 
    
    
  //Looking for who possess tmh tags
  var aboutYouTmihLooking = $("#tmih-aboutYou-looking").val().split(",");
   for (i=0;i<aboutYouTmihLooking.length;i++){ 
     aboutYouTmihLooking[i] = aboutYouTmihLooking[i].replace(/\s+/g, '');
        if (aboutYouTmihLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmihLooking[i] = " tmifih_"+ aboutYouTmihLooking[i];
} else if(aboutYouTmihLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmihLooking[j] = " tmcfih_"+ aboutYouTmihLooking[i];
}  else if(aboutYouTmihLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmihLooking[i] = " tmgfih_"+ aboutYouTmihLooking[i];
} else if(aboutYouTmihLooking[i] = ""){
  aboutYouTmihLooking[i] = "";
} else
  aboutYouTmciLooking[i] = aboutYouTmihLooking[i];
   } 
    
    var aboutYouTmchLooking = $("#tmch-aboutYou-looking").val().split(",");
  for (i=0;i<aboutYouTmchLooking.length;i++){ 
     aboutYouTmchLooking[i] = aboutYouTmchLooking[i].replace(/\s+/g, '');
        if (aboutYouTmchLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmchLooking[i] = " tmifch_"+ aboutYouTmchLooking[i];
} else if(aboutYouTmchLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmchLooking[j] = " tmcfch_"+ aboutYouTmchLooking[i];
}  else if(aboutYouTmchLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmchLooking[i] = " tmgfch_"+ aboutYouTmchLooking[i];
} else if(aboutYouTmchLooking[i] = ""){
  aboutYouTmchLooking[i] = "";
} else
  aboutYouTmchLooking[i] = aboutYouTmchLooking[i];
   } 
    
    var aboutYouTmghLooking = $("#tmgh-aboutYou-looking").val().split(",");
for (i=0;i<aboutYouTmghLooking.length;i++){ 
     aboutYouTmghLooking[i] = aboutYouTmghLooking[i].replace(/\s+/g, '');
        if (aboutYouTmghLooking[i] != "" && !$("#aboutYouIndividual").hasClass("hidden")){ 
   aboutYouTmghLooking[i] = " tmifgh_"+ aboutYouTmghLooking[i];
} else if(aboutYouTmghLooking[i] != "" && !$("#aboutYouCouple").hasClass("hidden")){ 
  aboutYouTmghLooking[j] = " tmcfgh_"+ aboutYouTmghLooking[i];
}  else if(aboutYouTmghLooking[i] != "" && !$("#aboutYouGroup").hasClass("hidden")){ 
  aboutYouTmghLooking[i] = " tmgfgh_"+ aboutYouTmghLooking[i];
} else if(aboutYouTmghLooking[i] = ""){
  aboutYouTmghLooking[i] = "";
} else
  aboutYouTmghLooking[i] = aboutYouTmghLooking[i];
   } 
  
  
  
  
  //array of inputs and a for loop that iterates through each input to check if input is empty. If input is empty, tag corresponding to the input is omitted from the sequence
  var createTagInputs =[aboutYouTmi, aboutYouTmc, aboutYouTmg, aboutYouTmio, aboutYouTmco, aboutYouTmgo, aboutYouTmii, aboutYouTmci, aboutYouTmgi, aboutYouTmil, aboutYouTmcl, aboutYouTmgl, aboutYouTmih, aboutYouTmch, aboutYouTmgh, aboutYouTmic, aboutYouTmcc, aboutYouTmgc]; 
  for (i=0; i <createTagInputs.length; i++){
    if(createTagInputs[i] !=""){
      createTagInputs[i] = createTagInputs[i];   
  } else
   createTagInputs[i] = "";
  }
  
  var createTagInputsLooking =[aboutYouTmiLooking, aboutYouTmcLooking, aboutYouTmgLooking, aboutYouTmioLooking, aboutYouTmcoLooking, aboutYouTmgoLooking, aboutYouTmiiLooking, aboutYouTmciLooking, aboutYouTmgiLooking, aboutYouTmilLooking, aboutYouTmclLooking, aboutYouTmglLooking, aboutYouTmihLooking, aboutYouTmchLooking, aboutYouTmghLooking];
  for (i=0; i < createTagInputsLooking.length; i++){
    if(createTagInputsLooking[i] !=""){
      createTagInputsLooking[i] = createTagInputsLooking[i];     
  } else
   createTagInputsLooking[i] = "";
  }
  
  
  //variables that join input groups into their own string
  var finalCreateTag = createTagInputs.join("");
  var finalCreateTagLooking = createTagInputsLooking.join("");
  
  //variable for sequence that will display on the page
  var sequence = "TagiMagi.com: tmi00_ "+ yourTMSequence + finalCreateTag + finalCreateTagLooking;
  
 
 //hides and shows sequence in html #previewSection
  $("#previewSection").text(sequence).toggle();
});
  
  
  
});  



/*

1.fix moving navbar-desktop links

*/
