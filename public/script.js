console.log("hello world");
$(document).ready(function() {

  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              $('html, body').animate({
              scrollTop: target.offset().top
              }, 1000);
              return false;
              }
          }
      });
  });

  $('.js--waypoint-1').addClass('animated fadeInDown');

  $('.js--waypoint-2').waypoint(function(direction){
      $('.js--waypoint-2').addClass('animated fadeInUp');
  }, {
      offset: '60%'
  });

  $('.js--waypoint-3').waypoint(function(direction){
      $('.js--waypoint-3').addClass('animated fadeIn');
  }, {
      offset: '55%'
  });

  $('.js--waypoint-right-1').waypoint(function(direction){
      $('.js--waypoint-right-1').addClass('animated fadeInRight');
  }, {
      offset: '75%'
  });

  $('.js--waypoint-right-2').waypoint(function(direction){
      $('.js--waypoint-right-2').addClass('animated fadeInRight');
  }, {
      offset: '75%'
  });

  $('.js--waypoint-left').waypoint(function(direction){
      $('.js--waypoint-left').addClass('animated fadeInLeft');
  }, {
      offset: '75%'
  });

  $(function(){
     $(".hero-message").typed({
       strings: ["Choose. Learn. Predict. ^350 <br> You are the Oracle"],
       typeSpeed: 25
     });
 });
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
