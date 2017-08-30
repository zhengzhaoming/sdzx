window.onload = function(){

	/*1f*/
	var content_1f = document.getElementById('content_1f').getElementsByTagName('div');

	/*2f*/
	var con2f_pic = document.getElementById('con2f_pic').getElementsByTagName('div');
	var con2f_title = document.getElementById('con2f_title');
	var con2f_text = document.getElementById('con2f_text').getElementsByTagName('p');
	var con2f_js =  document.getElementById('con2f_js');


	/*3f*/
	var img_3a = document.getElementById('img_3a'); 
	var img_3b = document.getElementById('img_3b'); 	
	var con3f_Lh1 = document.getElementById('con3f_Lh1'); 
	var con3f_Rh1 = document.getElementById('con3f_Rh1');
	var con3f_text = document.getElementById('con3f_text').getElementsByTagName('p');

	/*4f*/
	var img_4a = document.getElementById('img_4a'); 
	var img_4b = document.getElementById('img_4b'); 	
	var img_4c = document.getElementById('img_4c'); 
	var text_4a = document.getElementById('text_4a'); 	
	/*5f*/
	var c5f_top = document.getElementById('c5f_top');
	var new_active = document.getElementById('new_active'); 	

	window.onscroll = function(){
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;

		/*动画：2f*/
		if((scroll>=600) && (scroll<=1700)){
			for(var i=0;i<con2f_pic.length;i++){
				con2f_pic[i].style.animationPlayState = 'running';
			}
			con2f_title.style.animationPlayState ="running";
			for(var i=0;i<con2f_text.length;i++){
				con2f_text[i].style.animationPlayState ="running";
			}
			con2f_js.style.animationPlayState ="running";
		}

		/*动画：3f*/
		if((scroll>=1700) && (scroll <= 2600)){
			img_3a.style.animationPlayState = 'running';
			img_3b.style.animationPlayState ="running";
			con3f_Lh1.style.animationPlayState = 'running';
			con3f_Rh1.style.animationPlayState ="running";
			for(var i=0;i<con3f_text.length;i++){
				con3f_text[i].style.animationPlayState ="running";
			}
		}

		/*动画：4f*/
		if((scroll >=2600) && (scroll <=3750)){
			img_4a.style.animationPlayState = 'running';
			img_4b.style.animationPlayState ="running";
			img_4c.style.animationPlayState = 'running';
			text_4a.style.animationPlayState ="running";
		}

		/*动画：5f*/
		if( scroll >=3750){
			c5f_top.style.animationPlayState = 'running';
			new_active.style.animationPlayState ="running";
		}
	}
}