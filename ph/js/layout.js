$(function(){


    /* nav显示隐藏 */
    $('.header_btn').click(function(){
        $('.header_menu').stop(false,true).slideToggle();
        if ($('.header_btn').attr('type') == "0"){
            $('.header_btn').attr('type','1');
            $('.header_btn').attr('src','images/menuBtn2.png');
            $('.shade').show();
        }else if ($('.header_btn').attr('type') == "1"){
            $('.header_btn').attr('type','0');
            $('.header_btn').attr('src','images/menuBtn1.png');
            $('.shade').hide();
        }
    });
	
})