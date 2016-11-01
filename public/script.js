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

  $(function(){
     $(".hero-message").typed({
       strings: ["Virtual Prediction ^350 <br> Idea Future"],
       typeSpeed: 25
     });
 });
});
