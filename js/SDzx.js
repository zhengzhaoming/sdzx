window.onload = function(){

	//底部广告栏的控制
	var close_ad = document.getElementById('close_ad');
	//左右侧边栏的控制
	var sidebar_L = document.getElementById('sidebar_L');
	var sidebar_R = document.getElementById('sidebar_R');
	var sideL_hide = document.getElementById('sideL_hide');
	var sideR_hide = document.getElementById('sideR_hide');

	//中间活动部分的按钮控制
	var quanbu = document.getElementById('quanbu');
	var news = document.getElementById('news');
	var notice = document.getElementById('notice');
	var active = document.getElementById('active');

	//跑马灯的控制
	var runpic = document.getElementById('runpic');

	//帮助窗口
		//客服
	var kefubox_close = document.getElementById('kefubox_close');
	var kefu = document.getElementById('kefu');
	var kefubox =document.getElementById('kefubox');
		// 论坛
	var luntanbox_close = document.getElementById('luntanbox_close');
	var luntan = document.getElementById('luntan');
	var luntanbox =document.getElementById('luntanbox');
		// 微信
	var weixinbox_close = document.getElementById('weixinbox_close');
	var weixin = document.getElementById('weixin');
	var weixinbox =document.getElementById('weixinbox');
		// qq
	var qqbox_close = document.getElementById('qqbox_close');
	var qq = document.getElementById('qq');
	var qqbox =document.getElementById('qqbox');


		// 中间新闻内容
	var lis1 = document.getElementById('quanbu_list');
	var lis2 = document.getElementById('news_list');
	var lis3 = document.getElementById('notice_list');
	var lis4 = document.getElementById('active_list');
	var new_li = document.getElementById('new_ul').getElementsByTagName('li');

	var message1 =[
			['[活动]', '#','《SD敢达强袭战线》白色情人节限定好礼','2017-03-13'],
			['[公告]', '#','《SD敢达强袭战线》新版机师技能说明','2017-03-09'],
			['[公告]', '#','《SD敢达强袭战线》3月9日游戏维护公告','2017-03-07'],
			['[公告]', '#','《SD敢达强袭战线》礼包汇总12月14日','2016-12-14'],
			['[活动]', '#','SD敢达强袭战线》最强手感量子型00敢达','2017-03-08'],
			['[活动]', '#','《SD敢达强袭战线》流派东方不败！','2017-03-06'],	
		];
	var message2 =[
			['[新闻]', '#','帅到一脸血《SD敢达强袭战线》人气机师推荐','2016-12-06'],
			['[新闻]', '#','铁血的巴巴托斯《SD敢达强袭战线》不灭的动作情怀','2016-11-09'],
			['[新闻]', '#','【18183原创】SD敢达强袭战线新手升战指南','2016-11-04'],
			['[新闻]', '#','《SD敢达强袭战线》兑换码使用教程','2016-11-01'],
			['[新闻]', '#','《SD敢达强袭战线》敢达擂台简介','2016-10-31'],
			['[新闻]', '#','《SD敢达强袭战线》不删档测试福利爆料第一弹','2016-10-27'],	
		];
	var message3 =[
			['[公告]', '#','《SD敢达强袭战线》新版机师技能说明','2017-03-09'],
			['[公告]', '#','《SD敢达强袭战线》3月9日游戏维护公告','2017-03-09'],
			['[公告]', '#','《SD敢达强袭战线》礼包汇总12月14日','2016-12-14'],
			['[公告]', '#','《SD敢达强袭战线》最强手感UR机体新春上线','2017-01-17'],
			['[公告]', '#','《SD敢达强袭战线》12月29日新服开启公告','2016-12-28'],
			['[公告]', '#','《SD敢达强袭战线》12月22日更新维护公告！','2016-12-21'],	
		];
	var message4 =[
			['[活动]', '#','《SD敢达强袭战线》白色情人节限定好礼','2017-03-13'],
			['[活动]', '#','《SD敢达强袭战线》最强手感量子型00敢达','2017-03-08'],
			['[活动]', '#','《SD敢达强袭战线》流派东方不败！','2017-03-06'],
			['[活动]', '#','《SD敢达强袭战线》UR报丧女妖（觉醒）登场','2017-02-27'],
			['[活动]', '#','《SD敢达强袭战线》开学季 新兵能量拼图活动','2017-02-21'],
			['[活动]', '#','《SD敢达强袭战线》2017开学季 全民福利狂欢周','2017-02-20'],	
		];
		
		//循环生成
	function makeList(obj){
		var str ='';
		for (var i = 0;i<obj.length;i++){
			str +="<li>";
			str +='<span>'+obj[i][0]+'</span>';
			str +='<a href="'+obj[i][1]+'">'+obj[i][2]+'</a>';
			str +='<span class="fr">'+obj[i][3]+'</span>';
			str +='</li>'
		}
		return str;
	}

	// 循环遍历生成
	lis1.innerHTML = makeList(message1);
	lis2.innerHTML = makeList(message2);
	lis3.innerHTML = makeList(message3);
	lis4.innerHTML = makeList(message4);

	//中间新闻内容部分
	quanbu.onmouseover = function(){
		lis1.style.display="block";
		lis2.style.display="none";
		lis3.style.display="none";
		lis4.style.display="none";

	}
	news.onmouseover = function(){
		lis1.style.display="none";
		lis2.style.display="block";
		lis3.style.display="none";
		lis4.style.display="none";
	}
	notice.onmouseover = function(){
		lis1.style.display="none";
		lis2.style.display="none";
		lis3.style.display="block";
		lis4.style.display="none";
	}
	active.onmouseover = function(){
		lis1.style.display="none";
		lis2.style.display="none";
		lis3.style.display="none";
		lis4.style.display="block";
	}
	


		// 客服按钮
	kefu.onclick = function(){
		console.log(1);
		kefubox.style.display = "block";
		luntanbox.style.display = "none";
		weixinbox.style.display = "none";
		qqbox.style.display = "none";
	}
		// 客服提示关闭
	kefubox_close.onclick = function(){
		kefubox.style.display = "none";
	}
		// 论坛按钮
	luntan.onclick = function(){
		luntanbox.style.display = "block";
		kefubox.style.display = "none";
		weixinbox.style.display = "none";
		qqbox.style.display = "none";
	}
		// 论坛提示关闭
	luntanbox_close.onclick = function(){
		luntanbox.style.display = "none";
	}
		// 微信按钮
	weixin.onclick = function(){
		weixinbox.style.display = "block";
		luntanbox.style.display = "none";
		kefubox.style.display = "none";
		qqbox.style.display = "none";
	}
		// 微信提示关系
	weixinbox_close.onclick = function(){
		weixinbox.style.display = "none";
	}
		// QQ按钮
	qq.onclick = function(){
		qqbox.style.display = "block";
		weixinbox.style.display = "none";
		luntanbox.style.display = "none";
		kefubox.style.display = "none";
	}
		//QQ提示关闭
	qqbox_close.onclick = function(){
		qqbox.style.display = "none";
	}

	//跑马灯的控制
	runpic.onmouseover = function(){
		runpic.style.animationPlayState="paused"
	}
	runpic.onmouseout = function(){
		runpic.style.animationPlayState="running"
	}

	//左边栏的控制
	sideL_hide.onclick = function(){;
		if(sidebar_L.style.left == "1px"){
			sidebar_L.style.left = -243+'px';
		}else{
			sidebar_L.style.left = 1+'px';
		}
		
	}
	//右边栏的控制
	sideR_hide.onclick = function(){
		if(sidebar_R.style.right == "1px"){
			sidebar_R.style.right = -243+'px';
		}else{
			sidebar_R.style.right = 1+'px';
		}
	}
	// 关闭广告栏
	close_ad.onclick = function(){
		document.getElementById('foot_ad').className="hide";
	}
	
}