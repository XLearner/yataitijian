/*
 *		主逻辑js
 */


$(document).ready(function(){

	// 下拉框
	var input = $('.drag');
	input.click(function(){
		var that = $(this);
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
	$('.submit_btn a').click(function(){
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
	


});

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