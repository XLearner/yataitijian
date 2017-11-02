/*
 *		animate js
 */


$(document).ready(function(){

	// 整屏滚动事件


	var index = window.location.search == '' ? '0' : window.location.search.substring(1);
	var mySwiper = new Swiper('.swiper-container', {
		mode:'vertical',
		mousewheelControl : true,
		mousewheelControlForceToAxis : false,
		simulateTouch : false,
		initialSlide: index,
		onInit: function(swiper){
			// 导航栏选中样式切换
			var toIndex = index;
			swiper.swipeTo(toIndex, 500, false);
			$('.nav li').removeClass('on').eq(toIndex).addClass('on');

			switch(toIndex){
				case '0':
					$('.wrap1 .box').stop().animate({'top': '20%', 'opacity': 1}, 1000);
					break;
				case '1':
					$('.wrap2 h2').stop().animate({'left': '20px', 'opacity': '1'}, 1000);
					setTimeout("$('.wrap2 h2').stop().animate({'left': '0', 'opacity': '1'}, 500)", 1000);
					$('.wrap2 li').eq(0).stop().animate({'top': '0', 'opacity': '1'}, 1000);
					setTimeout("$('.wrap2 li').eq(1).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 100);
					setTimeout("$('.wrap2 li').eq(2).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 250);
					setTimeout("$('.wrap2 li').eq(3).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 400);
					break;
				case '2':
					$('.wrap3 h2').stop().animate({'top': '0', 'opacity': '1'}, 1000);
					$('.wrap3 li').eq(0).stop().animate({'left': '0', 'opacity': '1'}, 1000);
					setTimeout("$('.wrap3 li').eq(1).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 100);
					setTimeout("$('.wrap3 li').eq(2).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 200);
					setTimeout("$('.wrap3 li').eq(3).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 300);
					break;
				case '3':
					$('.wrap4 .box').stop().animate({'left': '0', 'top': '8%', 'opacity': '1'}, 800);
					setTimeout("$('.wrap4 h2').stop().animate({'left': '0', 'top': '0', 'opacity': '1'}, 800)", 500);
					setTimeout("$('.wrap4 .message').stop().animate({'right': '0', 'opacity': '1'}, 800)", 800);
					break;
				case '4':
					$('.wrap5 .map').stop().animate({'top': '0', 'opacity': '1'}, 1000);
					$('.wrap5 h2').stop().animate({'top': '0', 'opacity': '1'}, 1000);
					break;
				// 初始第一块动画
			}



		},
		onSlideChangeEnd: function(swiper){
			// 导航栏选中样式切换
			var toIndex = swiper.activeIndex;
			swiper.swipeTo(toIndex, 500, false);
			$('.nav li').removeClass('on').eq(toIndex).addClass('on');

			// animation
			if(swiper.activeIndex == 0){

				$('.wrap1 .box').stop().animate({'top': '20%', 'opacity': 1}, 1000);

			}else if(swiper.activeIndex == 1){

				$('.wrap2 h2').stop().animate({'left': '20px', 'opacity': '1'}, 1000);
				setTimeout("$('.wrap2 h2').stop().animate({'left': '0', 'opacity': '1'}, 500)", 1000);

				$('.wrap2 li').eq(0).stop().animate({'top': '0', 'opacity': '1'}, 1000);
				setTimeout("$('.wrap2 li').eq(1).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 100);
				setTimeout("$('.wrap2 li').eq(2).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 250);
				setTimeout("$('.wrap2 li').eq(3).stop().animate({'top': '0', 'opacity': '1'}, 1000)", 400);

			}else if(swiper.activeIndex == 2){

				$('.wrap3 h2').stop().animate({'top': '0', 'opacity': '1'}, 1000);
				$('.wrap3 li').eq(0).stop().animate({'left': '0', 'opacity': '1'}, 1000);
				setTimeout("$('.wrap3 li').eq(1).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 100);
				setTimeout("$('.wrap3 li').eq(2).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 200);
				setTimeout("$('.wrap3 li').eq(3).stop().animate({'left': '0', 'opacity': '1'}, 1000)", 300);

			}else if(swiper.activeIndex == 3){

				$('.wrap4 .box').stop().animate({'left': '0', 'top': '8%', 'opacity': '1'}, 800);
				setTimeout("$('.wrap4 h2').stop().animate({'left': '0', 'top': '0', 'opacity': '1'}, 800)", 500);
				setTimeout("$('.wrap4 .message').stop().animate({'right': '0', 'opacity': '1'}, 800)", 800);

			}else if(swiper.activeIndex == 4){

				$('.wrap5 .map').stop().animate({'top': '0', 'opacity': '1'}, 1000);
				$('.wrap5 h2').stop().animate({'top': '0', 'opacity': '1'}, 1000);
			}
			index = swiper.activeIndex;

		},
		onSlideChangeStart: function(swiper){
			// animation
			if(swiper.activeIndex == 0){
				// $('.wrap2 .box').stop().animate({'top': '10%', 'opacity': 0}, 500);

				// 第二快标题
				$('.wrap2 h2').stop().animate({'left': '-500px', 'opacity': '0'}, 500);
				// 第二快内容
				$('.wrap2 li').eq(0).stop().animate({'top': '100px', 'opacity': '0'}, 500);
				setTimeout("$('.wrap2 li').eq(1).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 100);
				setTimeout("$('.wrap2 li').eq(2).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 200);
				setTimeout("$('.wrap2 li').eq(3).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 300);

			}else if(swiper.activeIndex == 1){
				// 第一块
				$('.wrap1 .box').stop().animate({'top': '10%', 'opacity': 0}, 500);
				// 第三块
				$('.wrap3 h2').stop().animate({'top': '-50px', 'opacity': '0'}, 1000);
				$('.wrap3 li').eq(0).stop().animate({'left': '-100px', 'opacity': '0'}, 500);
				setTimeout("$('.wrap3 li').eq(1).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 100);
				setTimeout("$('.wrap3 li').eq(2).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 200);
				setTimeout("$('.wrap3 li').eq(3).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 300);

			}else if(swiper.activeIndex == 2){
				// 第二快标题
				$('.wrap2 h2').stop().animate({'left': '-500px', 'opacity': '0'}, 500);
				// 第二快内容
				$('.wrap2 li').eq(0).stop().animate({'top': '100px', 'opacity': '0'}, 500);
				setTimeout("$('.wrap2 li').eq(1).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 100);
				setTimeout("$('.wrap2 li').eq(2).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 200);
				setTimeout("$('.wrap2 li').eq(3).stop().animate({'top': '100px', 'opacity': '0'}, 500)", 300);

				// 第四块
				$('.wrap4 .box').stop().animate({'left': '-2%', 'top': '11%', 'opacity': '0'}, 500);
				setTimeout("$('.wrap4 h2').stop().animate({'left': '-30px', 'top': '-30px', 'opacity': '0'}, 500)", 150);
				setTimeout("$('.wrap4 .message').stop().animate({'right': '-40px', 'opacity': '0'}, 500)", 300);
			}else if(swiper.activeIndex == 3){
				// 第三块
				$('.wrap3 h2').stop().animate({'top': '-50px', 'opacity': '0'}, 1000);
				$('.wrap3 li').eq(0).stop().animate({'left': '-100px', 'opacity': '0'}, 500);
				setTimeout("$('.wrap3 li').eq(1).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 100);
				setTimeout("$('.wrap3 li').eq(2).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 200);
				setTimeout("$('.wrap3 li').eq(3).stop().animate({'left': '-100px', 'opacity': '0'}, 500)", 300);

				// 第五块
				$('.wrap5 .map').stop().animate({'top': '20px', 'opacity': '0'}, 500);
				$('.wrap5 h2').stop().animate({'top': '-20px', 'opacity': '0'}, 500);
			}else if(swiper.activeIndex == 4){
				// 第四块
				$('.wrap4 .box').stop().animate({'left': '-2%', 'top': '11%', 'opacity': '0'}, 500);
				setTimeout("$('.wrap4 h2').stop().animate({'left': '-30px', 'top': '-30px', 'opacity': '0'}, 500)", 150);
				setTimeout("$('.wrap4 .message').stop().animate({'right': '-40px', 'opacity': '0'}, 500)", 300);
			}
		}
	});


		// 导航栏锚点
	$('.nav li a').click(function(){
		// get need goto index
		var toIndex = $.inArray(this, $('.nav li a'));

		mySwiper.swipeTo(toIndex, 500, true);

		var that = $(this);
		that.parents('ul').children().removeClass('on');
		that.parent().addClass('on');
	});


	// ===================================== 产品页 =====================================
	// 产品页出现动画
	var pro_list = $('.pro .pro-list li');
	for (var i = 0; i < pro_list.length; i++) {
		setTimeout("$('.pro .pro-list li').eq(" + i + ").animate({'top': '0', 'opacity': '1'}, 1000)", i * 200);
	}


	// ===================================== 产品详情 ===================================
	// 产品详情页 tab 标签滑块动画
	originLeft = $('.tab-menu i').css('left');
	$('.tab-menu a').hover(function(){
		// console.log($(this).position().left);
		var leftD = $(this).position().left;
		$(this).parent().find('i').stop().animate({'left': leftD}, 500);
	},
	function(){
		$(this).parent().find('i').stop().animate({'left': originLeft}, 500);
	});


});