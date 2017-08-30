window.onload = function(){
	var	body = document.getElementById('body');

	/*三大按钮*/
	var	promptly = document.getElementById('promptly');
	var download = document.getElementById('download');
 	var website = document.getElementById('website');


	
	var mobile_register = document.getElementById('mobile_register');
	var backdrop = document.getElementById('backdrop');
	var phoneRe = document.getElementById('phoneRe');
	var quickRe = document.getElementById('quickRe');
	var phoneText = document.getElementById('phoneText');
	var quickText = document.getElementById('quickText');
	
	var Tipsbox = document.getElementById('Tipsbox');
	var close_Tips = document.getElementById('close_Tips');






	promptly.onclick = function(){
		mobile_register.style.display = "block";
		body.style.overflow = "hidden";
	}
	backdrop.onclick = function(){
		mobile_register.style.display = "none";
		body.style.overflow = "";
	}
	phoneRe.onclick = function(){
		phoneRe.style.backgroundImage  = "url(img_mobile/phone_register_active_03.png)";
		quickRe.style.backgroundImage  = "url(img_mobile/quick_register.png)";
		phoneText.style.display="block"
		quickText.style.display="none"
	}
	quickRe.onclick = function(){
		phoneRe.style.backgroundImage  = "url(img_mobile/phone_register_03.png)";
		quickRe.style.backgroundImage  = "url(img_mobile/quick_register_active_03.png)";
		phoneText.style.display="none"
		quickText.style.display="block"
	}
	download.onclick = function(){
		Tipsbox.style.display="block";
		body.style.overflow = "hidden";
	}

	close_Tips.onclick = function(){
		Tipsbox.style.display="none";
		body.style.overflow = "";
	}
} 
