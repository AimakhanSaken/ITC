$(document).ready(function(){ 
    $('.burger__top_nav').click(function(event){ 
        $('.burger__top_nav,.top_nav__menu').toggleClass('active'); 
        $('.body').toggleClass('lock'); 
 
    }); 
});