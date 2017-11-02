/*
 *		主逻辑js
 */


$(document).ready(function(){

	// 下拉框
	var input = $('.drag');
	input.click(function(event){
		event.stopPropagation();
		var that = $(this);
		// 当下拉列表不能完整显示在屏幕上时
		if($(window).height() - that.offset().top < 270){
			$('.drag_menu').css({
				'top': '-680%',
				'border-top-color': '#bfbfbf'
			});
		}else{
			$('.drag_menu').css({
				'top': '100%',
				'border-top-color': 'transparent'
			});
		}

		// 获取下拉菜单
		var nextEle = $(this).next();
		if(nextEle.hasClass('on')){
			nextEle.slideUp('fast');
			nextEle.removeClass('on');
			that.removeClass('dragged');
		}else{
			nextEle.slideDown('fast');
			nextEle.addClass('on');
			that.addClass('dragged');
		}

		// 下拉框菜单点击
		nextEle.find('li').off('click').click(function(){
			// 传递选择值
			that.val($(this).html());
			// 设置选择值的属性，后台获取 key
			that.attr('key', $(this).attr('key'));
			// 收起下拉框
			$(this).parent().slideUp('fast').removeClass('on');
			that.removeClass('dragged');
			if(!that.hasClass('dragged')){
				that.parent().removeClass('error_border');
				that.parents('li').find('.error span').hide();
			}
		});
	});
	$(document).click(function(){
		$('.drag_menu').slideUp('fast').removeClass('on');
		input.removeClass('dragged');
	});

	// 获取当前时间 并返回时间 格式为：YYYY-mm-DD
	function getNowDate(){
		var date = new Date();
		var day = '';
		var time = date.getMonth();
		time++;
		if(time > 9){
			day = date.getFullYear() + '-' + time + '-' + date.getDate();
		}else{
			day = date.getFullYear() + '-0' + time + '-' + date.getDate();
		}
		return day;
	}

	// 日期选择器
	laydate.render({
		elem: '.select_date',
	    showBottom: false,
	    theme: '#62bd18',
	    value: '请选择预约日期',
	    min: getNowDate(),
		max: '2080-10-14',
		ready: function(){
			$('.select_date').attr('key', '1');
		}
	});
	// 日期变动 错误提示消失
	var originDate = $('.select_date').html();
	$('.select_date').click(function(){
		if($(this).html() != originDate){
			$(this).removeClass('error_border');
			$(this).parents('li').find('.error span').hide();
		}
	});

	// 表单验证
	$('.submit_btn a').click(function(event){
		event.stopPropagation();
		// 检验是否有错误
		// true：弹出弹框提示
		// false：错误点获得焦点
		var formVal = check_form();
		if(formVal){
			layer.open({
				type: 1,
				title: ' ',
				btn: ['确定', '取消'],
				skin: 'layui-layer-rim', //加上边框
				area: ['300px', '190px'], //宽高
				content: $('.suc_booking'),
				yes: function(index, layero){
					// console.log(layero);
					layer.close(index);
				}
			})
		}else{
			$('.error_border input').first().focus();
		}

	});

	// input框值变动时 错误提示消失
	$('.input input').on('input propertychange', function(){
		$(this).parent().removeClass('error_border');
		$(this).parents('li').find('.error span').hide();
	});

	// tab标签点击事件	设置滑块位置
	var tab = 0;
	$('.tab-menu a').click(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		originLeft = $(this).position().left;
		$('.tab-menu i').css('left', originLeft);

		tab = $.inArray(this, $('.tab-menu a'));

		$('.tab-con').addClass('hide');
		$('.tab-con').eq(tab).removeClass('hide');

	});


	// 列表高度
	var Lis = $('.table-wrap');
	var list = [];
	for (var i = 0; i < Lis.length; i++) {
		var _li = Lis.eq(i).find('li');
		list.push(_li);
	}
    // var li1 = $('.table-wrap:eq(0) li');
    // var li2 = $('.table-wrap:eq(1) li');
    // var li3 = $('.table-wrap:eq(2) li');

    for (var i = 0; i < list.length; i++) {
    	resetH(list[i]);
    }
    // resetH(li1);
    // resetH(li2);
    // resetH(li3);
});


	// 产品详情 初始化表单高度
	function resetH(e){
		//获取行数
    	var count = e.eq(0).children().length;

	    for (var j = 0; j < count; j++) {
	    	var li_temp = [];
	    	// 获取元素
    	    for (var i = 0; i < count; i++) {
    	    	var L = count * i + j;
    	    	li_temp.push(e.children().eq(L));
    	    }
    	    // 获取高度
    	    var h1 = 0;
    	    for(var i = 0; i < li_temp.length; i++){
    	    	if($(li_temp[i]).height() > h1){
    	    		h1 = $(li_temp[i]).height();
    	    	}
    	    }
    	    // 设置高度
    	    for (var i = 0; i < li_temp.length; i++) {
    	    	$(li_temp[i]).height(h1);
    	    }
    	}
    }






// 表单验证
function check_form(){
	var formVal = true;
	// 名字是否为空
	if(!$('[name="name"]').check_name()){
		$('[name="name"]').parent().addClass('error_border');
		$('.name-error').show();
		formVal = false;
	}else{
		$('[name="name"]').parent().removeClass('error_border');
		$('.name-error').hide();
	}

	// 性别
	if($('[name="sex"]').attr('key') == 0){
		$('[name="sex"]').parent().addClass('error_border');
		$('.sex-error').show();
		formVal = false;
	}else{
		$('[name="sex"]').parent().removeClass('error_border');
		$('.sex-error').hide();
	}

	// 身份证是否为空
	if(!$('[name="idcard"]').check_idcard()){
		$('[name="idcard"]').parent().addClass('error_border');
		$('.ID-error').show();
		formVal = false;
	}else{
		$('[name="idcard"]').parent().removeClass('error_border');
		$('.ID-error').hide();
	}

	// 手机检测
	if(!$('[name="phone"]').check_phone()){
		$('[name="phone"]').parent().addClass('error_border');
		$('.phone-error').show();
		formVal = false;
	}else{
		$('[name="phone"]').parent().removeClass('error_border');
		$('.phone-error').hide();
	}

	// 日期
	if($('.select_date').attr('key') == 0){
		$('.select_date').addClass('error_border');
		$('.date-error').show();
		formVal = false;
	}else{
		$('.select_date').removeClass('error_border');
		$('.date-error').hide();
	}

	// 人数
	if($('[name="man_num"]').attr('key') == 0){
		$('[name="man_num"]').parent().addClass('error_border');
		$('.code-error').show();
		formVal = false;
	}else{
		$('[name="man_num"]').parent().removeClass('error_border');
		$('.code-error').hide();
	}
	return formVal;
}





