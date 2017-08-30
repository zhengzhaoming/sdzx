window.onload = function(){
	var lis1 = document.getElementById('lis1');
	var lis1f = document.getElementById('lis1f');
	var lis2 = document.getElementById('lis2');
	var lis3 = document.getElementById('lis3');
	var lis4 = document.getElementById('lis4');
	var lis5 = document.getElementById('lis5');
	var lis6 = document.getElementById('lis6');
	var lis7 = document.getElementById('lis7');
	var lis7t = document.getElementById('lis7t');
	var message1 =[
			['#', 'img_sdzxjs/n_jishi1.png','阿莎奇•考德威尔'],
			['#', 'img_sdzxjs/n_jishi2.png','拉克丝•克莱茵'],
			['#', 'img_sdzxjs/n_jishi3.png','芙蕾•阿尔斯塔'],
			['#', 'img_sdzxjs/n_jishi4.png','史黛拉•鲁西耶'],
			['#', 'img_sdzxjs/n_jishi5.png','古荻莉亚•蓝娜•伯恩斯坦'],
			['#', 'img_sdzxjs/n_jishi6.png','米娅•坎贝尔'],
			['#', 'img_sdzxjs/n_jishi7.png','阿特拉'],
			['#', 'img_sdzxjs/n_jishi8.png','拉克丝•克莱茵'],
		];
		var message2 =[
			['#', 'img_sdzxjs/n_jishi9.png','弗尔•伏朗托'],
			['#', 'img_sdzxjs/n_jishi10.png','巴纳吉•林克斯'],
			['#', 'img_sdzxjs/n_jishi11.png','夏亚•阿兹纳布尔'],
			['#', 'img_sdzxjs/n_jishi12.png','阿姆罗•雷'],
			['#', 'img_sdzxjs/n_jishi13.png','兰巴•拉尔'],
			['#', 'img_sdzxjs/n_jishi14.png','刹那•F•清音'],
			['#', 'img_sdzxjs/n_jishi15.png','格拉汉姆•艾卡'],
			['#', 'img_sdzxjs/n_jishi16.png','劳•鲁•克鲁泽'],
		];
		var message3 =[
			['#', 'img_sdzxjs/n_jishi17.png','基拉•大和'],
			['#', 'img_sdzxjs/n_jishi18.png','阿斯兰•萨拉'],
			['#', 'img_sdzxjs/n_jishi19.png','卡缪•维丹'],
			['#', 'img_sdzxjs/n_jishi20.png','西罗•亚马达'],
			['#', 'img_sdzxjs/n_jishi21.png','塞拉•玛斯'],
			['#', 'img_sdzxjs/n_jishi22.png','艾玛•辛'],
			['#', 'img_sdzxjs/n_jishi23.png','卡莲•约书亚'],
			['#', 'img_sdzxjs/n_jishi24.png','克劳娜•哈蒙'],
		];
		var message4 =[
			['#', 'img_sdzxjs/n_jishi25.png','列珍•修奈特'],
			['#', 'img_sdzxjs/n_jishi26.png','珍•亚吉'],
			['#', 'img_sdzxjs/n_jishi27.png','玛丽达•库尔斯'],
			['#', 'img_sdzxjs/n_jishi28.png','璞露'],
			['#', 'img_sdzxjs/n_jishi29.png','哈曼•卡恩'],
			['#', 'img_sdzxjs/n_jishi30.png','蕾蒂•安'],
			['#', 'img_sdzxjs/n_jishi31.png','露娜玛利亚•霍克'],
			['#', 'img_sdzxjs/n_jishi32.png','卡嘉莉•尤拉•阿斯哈'],
		];
		var message5 =[
			['#', 'img_sdzxjs/n_jishi33.png','阿姆罗•雷'],
			['#', 'img_sdzxjs/n_jishi34.png','凯•西汀'],
			['#', 'img_sdzxjs/n_jishi35.png','龙•何塞'],
			['#', 'img_sdzxjs/n_jishi36.png','小林隼人'],
			['#', 'img_sdzxjs/n_jishi37.png','夏亚•阿兹纳布尔'],
			['#', 'img_sdzxjs/n_jishi38.png','巴纳吉•林克斯'],
			['#', 'img_sdzxjs/n_jishi39.png','利迪•马瑟纳斯'],
			['#', 'img_sdzxjs/n_jishi40.png','塔克萨•马克尔'],
		];
		var message6 =[
			['#', 'img_sdzxjs/n_jishi41.png','金'],
			['#', 'img_sdzxjs/n_jishi42.png','卡迪姆'],
			['#', 'img_sdzxjs/n_jishi43.png','迪尼姆'],
			['#', 'img_sdzxjs/n_jishi44.png','斯连达'],
			['#', 'img_sdzxjs/n_jishi45.png','尤里•克拉尼尔'],
			['#', 'img_sdzxjs/n_jishi46.png','松永真'],
			['#', 'img_sdzxjs/n_jishi47.png','泰利•山德斯二世'],
			['#', 'img_sdzxjs/n_jishi48.png','杰古斯•马其斯'],
		];
		var message7 =[
			['#', 'img_sdzxjs/n_jishi49.png','捷多•亚西塔'],
			['#', 'img_sdzxjs/n_jishi50.png','克瓦特罗•巴纳吉'],
			['#', 'img_sdzxjs/n_jishi51.png','SD胡索•艾文'],
			['#', 'img_sdzxjs/n_jishi52.png','希罗•尤尔'],
			['#', 'img_sdzxjs/n_jishi53.png','基拉•大和'],
			['#', 'img_sdzxjs/n_jishi54.png','真•飞鸟'],
			['#', 'img_sdzxjs/n_jishi55.png','安德鲁•巴尔特菲尔德'],
			['#', 'img_sdzxjs/n_jishi56.png','伊扎克•玖尓'],
		];
		var message8 =[
			['#', 'img_sdzxjs/n_jishi57.png','S罗•裘尔'],
			['#', 'img_sdzxjs/n_jishi58.png','从云劾'],
			['#', 'img_sdzxjs/n_jishi59.png','刹那•F•清音'],
			['#', 'img_sdzxjs/n_jishi60.png','洛克昂•史特拉托斯'],
			['#', 'img_sdzxjs/n_jishi61.png','阿雷路亚•帕普提兹姆'],
			['#', 'img_sdzxjs/n_jishi62.png','提耶利亚•厄德'],
			['#', 'img_sdzxjs/n_jishi63.png','利邦兹•阿尔马克'],
			['#', 'img_sdzxjs/n_jishi64.png','帕特里克•克拉萨瓦'],
		];
		var message9 =[
			['#', 'img_sdzxjs/n_jishi65.png','谢尔盖•斯米尔诺夫'],
			['#', 'img_sdzxjs/n_jishi66.png','三日月•奥古斯'],
		];
	function makeList(lie){
		var str ='';
		for (var i = 0;i<lie.length;i++){
			str +="<li>";
			str +='<a href="'+lie[i][0]+'"trange="_blank" style="position:relative">';
			str +='<img src="'+lie[i][1]+'" alt="'+lie[i][2]+'">';
			str +='<p class="peo_name">'+lie[i][2]+'</p>'
			str +='</a>';
			str +='</li>'
		}
		return str;
	}
	
	lis1.innerHTML = makeList(message1);
	lis1f.innerHTML = makeList(message1);
	lis2.innerHTML = makeList(message2);
	lis3.innerHTML = makeList(message3);
	lis4.innerHTML = makeList(message4);
	lis5.innerHTML = makeList(message5);
	lis6.innerHTML = makeList(message6);
	lis7.innerHTML = makeList(message7);
	lis7t.innerHTML = makeList(message7);
}