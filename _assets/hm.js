$(function (){ 
    $('.ui.accordion').accordion();
    $('.ui.accordion.content').transition('scale');
    $('.header.sticky').sticky({
        context: '#page'
    });
    var activeContent = $('.ui.accordion .content .item.active').parent('.content');
    activeContent.addClass('active');
    activeContent.prev('.title').addClass('active');
    // $('.slidenav.sticky').sticky({
    //     offset: 120,
    //     context: '.container'
    // });
});