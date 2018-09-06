$(function (){ 
    $('.ui.accordion').accordion();
    $('.ui.accordion.content').transition('scale');
    $('.header.sticky').sticky({
        context: '#page'
    });
    // $('.slidenav.sticky').sticky({
    //     offset: 120,
    //     context: '.container'
    // });
});