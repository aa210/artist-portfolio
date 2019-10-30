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
  
  
  
  /* $(window).scroll(
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
});   */
  
//Mobile Menu
 $("#mobileMenuButton").click(function(){
    $("#navigationMobile").slideToggle();
  }); 
  
 $("#viewMenu").click(function(){
    $("#menuPrint").slideToggle();
 }); 
  
//Gallery Click
$("#hair").hide();
$("#spaStudio").show();
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

/*

 /*
  https://i.pinimg.com/736x/0d/53/b4/0d53b4dbdcfef6d7a37bafeae2e3ebba.jpg
 
 https://i.pinimg.com/236x/46/b6/1a/46b61a31f7e1d8c19b8ccd519078068a.jpg
 
 https://img.allw.mn/content/makeup/2011/09/bride-getting-ready_make-up-black-white_Real-Wedding_CrystalBen_Perez-Photography_southern-weddings-dec09.jpg
 


2. Services Menu Page
- service, amount of time, price menu list
https://www.hairworkzkapiti.co.nz/pricing.html
https://hair-beauty.vamtam.com/contact-us/
https://hair-beauty.vamtam.com/pricing/
https://salon.freevision.me/services/
https://www.placid.in/services/skin
https://www.nafsalon.com/prices
https://curly.mikado-themes.com/
—
https://relaxandrenewmassage.org/policy
https://www.rubyroom.com/pages/massage

Write Full Menu w/ 3 Columns, Divided By Section”
1.HAIR
Prices  from
*Cuts
- Woman cut
- Man cut
- Child Boy Cut
- Child Girl Cut
*Styles:
- Box Braids ……. $60+
- Crochet Braids……$60+
- Faux Locs…….$100+
- Senegalese Twists
- Sew In w/ Closure
- Sew In w/ Leave Out
- Wig Install
- Ponytails
- Perm
- Keratin
- Roller Set
- Blow Dry

*Color:
- Tint (regrowth)
- Tint(long hair)
- Foil Highlights
- Half Head
- Full Head
- Ombre
2.SKIN+Nails (page/section)
*Nails
- Facials (Header): types list+time+price
- Threading
- Waxing
- Treatments
3.SPA:
- Massage(types)
- Foot Therapy
- Body Scrub
4.PACKAGES:
Text Info:
- https://www.placid.in/services
- https://lapeersalon.com/
- https://www.thehairdon.com/
- https://www.hairworkzkapiti.co.nz/pricing.html
- http://fuschiatherapy.com/services/
- https://blowoutjunkie.com/services-menu/bridal/
- http://www.jemome.com/cdn/2013/07/nail-salon-service-menu_280749.jpg
- http://cdn.editthewebsite.com/pictures/full/e068789f.jpg
- http://polishedroc.com/files/2017/08/updated-1-1.jpg?w=1060&h=795&a=t
3. Booking Calendar Page
https://salon.freevision.me/booking/
https://pur.vamtam.com/appointments
4. Treatment Descriptions?

jQuery:
- https://www.w3schools.com/jquery/jquery_ref_effects.asp

Testimonials:
- https://curly.mikado-themes.com/elements/testimonials/
- https://hair-beauty.vamtam.com/reviews/
- https://www.hairbyestylez.com/
- http://preview.themeforest.net/item/hair-salon-wordpress-theme-hair-salon-wp/full_screen_preview/17739078?_ga=2.143291829.1613731331.1564806537-1640327584.1564800416

Developer Tools:
- www.capterra.com/appointment-scheduling-software/
- schedulicity.com
6. Treatment/Services Descriptions
https://pur.vamtam.com/treatments/salt-therapies/
—



*/
