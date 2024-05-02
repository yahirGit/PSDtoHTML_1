$(document).ready(function() {

    new WOW().init();

    $('.js_wp_2').waypoint(function(direction) {
        $('.js_wp_2').addClass('animated slideInUp')
    },{
        offset: '70%'
    });

    $('.js_wp_3').waypoint(function(direction) {
        $('.js_wp_3').addClass('animated fadeIn')
    },{
        offset: '70%'
    });

 
    
    $(".iphone_btn").delay(2500).animate({bottom: "+=-3"}, 250);
    
    //Establece un tiempo en el cual despues de ese tiempo realiza lo que este dentro del bloque de codigo.
    var delay = setTimeout(function() {
        $(".iphone_btn").addClass('box_shadow_btn');
        //
    }, 2500);
    
    $(".iphone_btn").delay(1000).animate({top: "+=-3"}, 150);
    
    var delay2 = setTimeout(function() {
        $(".iphone_btn").removeClass("box_shadow_btn");
    }, 4000);

});