window.onload = function(){
	var reg_nav1 = document.getElementById('reg_nav1');
	var reg_nav2 = document.getElementById('reg_nav2');
	var reg_nav3 = document.getElementById('reg_nav3');
	var phone_reg = document.getElementById('phone_reg');
	var hide_quick = document.getElementById('hide_quick');
	var login = document.getElementById('login');
	var zc = document.getElementById('zc');

	reg_nav1.onclick = function(){
		phone_reg.className = "";
		hide_quick.className = "hide";
		login.className = "hide";
		reg_nav1.style.backgroundImage  = "url(img_fc/nav1_28.png)";
		reg_nav2.style.backgroundImage  = "url(img_fc/nav2.png)";
		reg_nav3.style.backgroundImage  = "url(img_fc/nav3.png)";
		zc.style.backgroundImage  = "url(img_fc/zhucedianji_37.png)";
	}
	reg_nav2.onclick = function(){
		phone_reg.className = "hide";
		hide_quick.className = "";
		login.className = "hide";
		reg_nav1.style.backgroundImage  = "url(img_fc/nav1.png)";
		reg_nav2.style.backgroundImage  = "url(img_fc/nav2_29.png)";
		reg_nav3.style.backgroundImage  = "url(img_fc/nav3.png)";
		zc.style.backgroundImage  = "url(img_fc/zhucedianji_37.png)";
	}
	reg_nav3.onclick = function(){
		phone_reg.className = "hide";
		hide_quick.className = "hide";
		login.className = "";
		reg_nav1.style.backgroundImage  = "url(img_fc/nav1.png)";
		reg_nav2.style.backgroundImage  = "url(img_fc/nav2.png)";
		reg_nav3.style.backgroundImage  = "url(img_fc/nav3_30.png)";
		zc.style.backgroundImage = "url(img_fc/denglu_37.png)";
	}
}