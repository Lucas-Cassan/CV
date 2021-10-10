$(document).ready(function (){

        $('#phoneHome').css("display", "flex")
        $('.BG').show();

    $('#ClickUnlock').click(function (){
        unlock.play();
        $('#phoneLock').css('transform', 'translateY(-200%)').css('filter', 'blur(5px)');
        $('#app').css("transform", "scale(1)");
        $('#dock').css("transform", "translateY(0)");
        $('#phoneHome').css("z-index", "5");
        $('#ClickUnlock').hide();
    });

    $('.app').mouseenter(function (){
        $(this).css("transform", "scale(1.05)");
    });
    $('.app').mouseleave(function (){
        $(this).css("transform", "scale(1)");
    });


    $('.slideBarBack').click(function (){
        $('#phoneApp').removeClass('open');
        $('#phoneAppBG').removeClass('open');
        backApp();
    });

    $('#Reglages').click(function (){
        $('.phoneBorder').css('z-index', '10');
        $('#phoneApp').addClass('open');
        $('#phoneAppBG').addClass('open');
        $('#AppReglages').css('display','flex');
    });
    $('#Competences').click(function (){
        $('.phoneBorder').css('z-index', '10');
        $('#phoneApp').addClass('open');
        $('#phoneAppBG').addClass('open');
        $('#AppCompetences').css('display','flex');
    });
    $('#Formation').click(function (){
        $('.phoneBorder').css('z-index', '10');
        $('#phoneApp').addClass('open');
        $('#phoneAppBG').addClass('open');
        $('#AppFormation').css('display','flex');
    });
    $('#Experiences').click(function (){
        $('.phoneBorder').css('z-index', '10');
        $('#phoneApp').addClass('open');
        $('#phoneAppBG').addClass('open');
        $('#AppExperiences').css('display','flex');
    });

    function backApp(){
        setTimeout(function(){
            $('#AppReglages').fadeOut();
            $('#AppCompetences').fadeOut();
            $('#AppExperiences').fadeOut();
            $('#AppFormation').fadeOut();
            $('.phoneBorder').css('z-index', '5');
        }, 200);
    }


    //FORMATION

    $('#scrollAudio').click(function (){
        $('#scrollAudio').fadeOut();
        $('#scrollDev').fadeIn();
        $('#scrollGraphisme').fadeIn();

        $('#memojiDev').fadeOut();
        $('#memojiGraphisme').fadeOut();
        $('#memojiAudio').fadeIn().css('display', 'flex');
    });
    $('#scrollDev').click(function (){
        $('#scrollDev').fadeOut();
        $('#scrollGraphisme').fadeOut();
        $('#scrollAudio').fadeIn();
        $('#scrollAudio').removeClass('gauche');

        $('#memojiDev').fadeIn().css('display', 'flex');
        $('#memojiAudio').fadeOut();
    });
    $('#scrollGraphisme').click(function (){
        $('#scrollDev').fadeOut();
        $('#scrollGraphisme').fadeOut();
        $('#scrollAudio').fadeIn();
        $('#scrollAudio').addClass('gauche');

        $('#memojiGraphisme').fadeIn().css('display', 'flex');
        $('#memojiAudio').fadeOut();
    });


});