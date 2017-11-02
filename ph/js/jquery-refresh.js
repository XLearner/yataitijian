var e=e||window.event;

// 刷新的ajax函数名
window.pull_action_con=function(){}

function refresh(a,type,b){
	// 上拉刷新 事件
	// touchstart事件
	this.touchs = function(evt) {
	    try {
	    	tr_y=0;
	        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
	 
	        var touch = evt.touches[0]; //获取第一个触点
	        var x = Number(touch.pageX); //页面触点X坐标
	        var y = Number(touch.pageY); //页面触点Y坐标
	        //记录触点初始位置
	        startX = x;
	        startY = y;
	        // console.log("初始:"+startY);
	 
	    } catch (e) {
	        console.log('touchSatrtFunc：' + e.message);
	    }
	}
	// touchmove事件
	this.touchm = function(evt) {
		try {
	        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
	        var touch = evt.touches[0]; //获取第一个触点
	        var x = Number(touch.pageX); //页面触点X坐标
	        var y = Number(touch.pageY); //页面触点Y坐标
	 		
	        //判断滑动方向 上下
	        var box_h=$("html").height();
	     	tr_y=y - startY;
	         if (box_h-$(window).scrollTop()<=parseInt($(window).height())+1) {
	         	if (tr_y<0) {
	         		a.find('.pull_update').show();
	         		// console.log(tr_y);
	         		// 使容器整体跟手指一起偏移
	         		a.css('transform', 'translateY('+ tr_y+'px)');
	         	}
	         }
	        // console.log(startY);
	        
	    } catch (e) {
	        console.log('touchm:' + e.message);
	    }
	}

	//touchend事件
	this.touche = function(evt) {
	    try {
	 		pull_up_action(tr_y,a);
	    } catch (e) {
	        console.log('touchEndFunc：' + e.message);
	    }
	}

	// 松手后执行的函数，添加偏移量和更新数据
	function pull_up_action(y,box){
		range=b
		// 此数字为上拉多少距离才进行刷新
		if (y<=-range) {
			// 松手后符合条件，展示等待条并执行更新
			box.css('transform', 'translateY(-'+ box.find('.pull_update').outerHeight() +"px)");
			// console.log("高度:"+box.find('#pull_update').outerHeight());

			pull_action_con();

		}else{
			// 松手后不符合条件（力度不够），清除偏移量
			box.css('transform', 'translateY(0)');
			box.find('.pull_update').hide();
		}
	}


	// 上拉刷新 事件 end


	// 下拉刷新 事件

	//touchmove事件，这个事件无法获取坐标
	this.touchMoveFunc = function(evt) {
	    try {
	        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
	        var touch = evt.touches[0]; //获取第一个触点
	        var x = Number(touch.pageX); //页面触点X坐标
	        var y = Number(touch.pageY); //页面触点Y坐标
	 		
	        //判断滑动方向 上下
	     	tr_y=y - startY;
	         if ($(window).scrollTop()==0) {
	         	if (tr_y>0) {
	         		// console.log(tr_y);
	         		// 使容器整体跟手指一起偏移
	         		a.find('.pull_update').show();
	         		a.css('transform', 'translateY('+ tr_y+'px)');
	         	}
	         }
	        
	    } catch (e) {
	        console.log('touchMoveFunc：' + e.message);
	    }
	}

	//touchend事件
	this.touchEndFunc = function (evt) {
	    try {
	 		pull_to_action(tr_y,a);
	    } catch (e) {
	        console.log('touchEndFunc：' + e.message);
	    }
	}

	// 松手后执行的函数，添加偏移量和更新数据
	function pull_to_action(y,box){
		range=b;
		// 此数字为下拉多少距离才进行刷新
		if (y>=range) {
			// 松手后符合条件，展示等待条并执行更新
			box.css('transform', 'translateY('+ box.find('.pull_update').outerHeight() +"px)");
			// console.log("高度002:"+box.find('#pull_update').outerHeight());

			pull_action_con();

		}else{
			// 松手后不符合条件（力度不够），清除偏移量
			box.css('transform', 'translateY(0)');
			box.find('.pull_update').hide();
		}
	}
	// 下拉刷新 事件 end


	// 上拉刷新
	this.up = function(box) {
		box[0].addEventListener('touchstart',this.touchs,false);
		box[0].addEventListener('touchmove',this.touchm,false);
		box[0].addEventListener('touchend', this.touche, false);
	};
	// 上拉刷新 end

	// 下拉刷新
	this.down = function(box) {
		box[0].addEventListener('touchstart',this.touchs,false);
		box[0].addEventListener('touchmove',this.touchMoveFunc,false);
		box[0].addEventListener('touchend', this.touchEndFunc, false);
	};
	// 下拉刷新 end

	this.mx = function () {
		// a[0].removeEventListener('touchstart',this.touchs,false);
		a[0].removeEventListener('touchmove',this.touchm,false);
		a[0].removeEventListener('touchend', this.touche, false);
		a[0].removeEventListener('touchmove',this.touchMoveFunc,false);
		a[0].removeEventListener('touchend', this.touchEndFunc, false);
		console.log("移除");
	}

// b是上（下）拉到多少PX才进行刷新的数值
	b=b||100;
	if (type=="up") {
		this.up(a);
		console.log("上拉");
	}else if (type=="down") {
		this.down(a);
		console.log("下拉");
	}else{
		console.log("上下拉刷新的类型");
		console.log(type);
		return false;
	}
}



