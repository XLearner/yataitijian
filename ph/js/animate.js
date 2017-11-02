/*
	@author: L

	@time: 09-30

	@func: 移动端动效

 */


$(document).ready(function(){
	// 套餐详情
	if($('.pc_detail').length != 0){
		$('.header').css({'opacity': '1', 'top': '0'});
		$('.t_header').css({'opacity': '1'});
	}

	// top menu
	$('.header').animate({'opacity': '1', 'top': '0'}, 1000);
	// banner
	$('.index_banner').animate({'opacity': '1'}, 1000);
	// about us
	$('.index_about_box').animate({'top': '0', 'opacity': '1'}, 1000);
	// bottom btn
	$('.fixed_link_box').animate({'opacity': '.8'}, 1000);

	// 产品介绍
	if($('.pro_box').length != 0){
		var proT = $('.pro_box').offset().top;

		$('.titBox').animate({
			'right': '0',
			'opacity': '1'
		}, 1000);

		for(var i = 0; i < $('.pro_con li').length; i++){
			setTimeout("$('.pro_con li').eq("+ i +").animate({'top': '0', 'opacity': '1',}, 1000)", i * 500);
		}
	}

	// 在线预约
	if($('.online_box').length != 0){
		$('.online_box .titBox').animate({'opacity': '1', 'top': '0'}, 1000);
		setTimeout("$('.online_box .t_img').animate({'opacity': '1', 'top': '0'}, 1000)", 500);
		setTimeout("$('.online_box .online_con').animate({'opacity': '1', 'top': '0'}, 1000)", 1000);
		$('.bottom_btn_box .bottom_btn').animate({'opacity': '1'}, 1000);
	}

	// 关于我们
	if($('.about_box').length != 0){
		$('.about_box .titBox').animate({'opacity': '1', 'top': '0'}, 1000);
		setTimeout("$('.about_box .t_img').animate({'opacity': '1', 'top': '0'}, 1000)", 500);
		setTimeout("$('.about_box .about_con').animate({'opacity': '1', 'top': '0'}, 1000)", 1000);
	}

	// 联系我们
	if($('.contactUs_box').length != 0){
		$('.contactUs_box .titBox').animate({'opacity': '1', 'top': '0'}, 1000);
		setTimeout("$('.contactUs_box .t_img').animate({'opacity': '1', 'top': '0'}, 1000)", 500);
		setTimeout("$('.contactUs_box .contactUs_con').animate({'opacity': '1', 'top': '0'}, 1000)", 1000);
	}

	// 套餐列表
	if($('.t_header').length != 0){
		$('.t_header').animate({'opacity': '1'}, 1000);

		for(var i = 0; i < $('.package_list_box li').length; i++){
			setTimeout("$('.package_list_box li').eq("+ i +").animate({'top': '0', 'opacity': '1',}, 1000)", i * 300);
		}
	}

	// 预约须知
	if($('.search_box').length != 0){
		$('.search_box .titBox').animate({'opacity': '1', 'top': '0'}, 1000);

		$('.search_box .t_img').eq(0).animate({'top': '0', 'opacity': '1',}, 1000)
	}

});

$(document).scroll(function(){
	var scrollT = $(document).scrollTop();

	var winH = $(window).height();

	// 产品介绍
	if($('.index_pro_box').length != 0){
		var proT = $('.index_pro_box').offset().top;

		if(proT - scrollT < winH * 2 / 3){
			$('.titBox').animate({
				'right': '0',
				'opacity': '1'
			}, 1000);

			for(var i = 0; i < $('.pro_con li').length; i++){
				setTimeout("$('.pro_con li').eq("+ i +").animate({'top': '0', 'opacity': '1',}, 1000)", i * 500);
			}

		}
	}


	// 预约须知
	if($('.search_box').length != 0){
		// debugger;
		var search_img = $('.search_box .t_img');
		for(var i = 1; i < search_img.length; i++){
			var serT = search_img.eq(i).offset().top;
			if(serT - scrollT < winH * 9 / 10 ){
				search_img.eq(i).animate({'top': '0', 'opacity': '1',}, 1000);
			}
		}
	}


});