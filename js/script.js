$(document).ready(function () {
    //Cufon text replacement
    Cufon.replace('#about .right ul li');
    Cufon.replace('h2', {textShadow: '0 2px rgba(0, 0, 0, 0.15)'});
    Cufon.replace('#social .right a', {hover: true});
    Cufon.replace('#work .left h3', {hover: true});
    Cufon.replace('h3', {textShadow: '0 2px rgba(0, 0, 0, 0.15)'});
    Cufon.replace('#contactinfo'), {hover: true};

    //jQuery lightbox
    $('#work .right a').lightBox();

    //Content effects
    $('.page').hide();
    $('#navigation li:first').addClass('active').show();
    $('.page:first').show();

    $('#navigation li').click(function () {
        $('#navigation li').removeClass('active');
        $(this).addClass('active');

        $('.page').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn('slow');
        return false;
    });
});