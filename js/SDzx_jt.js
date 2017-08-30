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
			['#', 'img_sdzxjt/n_jiti1.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti2.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti3.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti4.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti5.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti6.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti7.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti8.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
		var message2 =[
			['#', 'img_sdzxjt/n_jiti9.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti10.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti11.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti12.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti13.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti14.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti15.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti16.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
		var message3 =[
			['#', 'img_sdzxjt/n_jiti17.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti18.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti19.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti20.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti21.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti22.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti23.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti24.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
		var message4 =[
			['#', 'img_sdzxjt/n_jiti25.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti26.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti27.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti28.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti29.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti30.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti31.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti32.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
		var message5 =[
			['#', 'img_sdzxjt/n_jiti33.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti34.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti35.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti36.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti37.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti38.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti39.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti40.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
		var message6 =[
			['#', 'img_sdzxjt/n_jiti41.jpg','SD敢达强袭战线,Hi-ν敢达,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti42.jpg','SD敢达强袭战线,独角兽敢达2号机报丧女妖 (NT-D),SD高达,敢达,敢达游戏'],
			['#', 'img_sdzxjt/n_jiti43.jpg','SD敢达强袭战线,00强化模组,SD敢达,高达,高达手游'],
			['#', 'img_sdzxjt/n_jiti44.jpg','SD敢达强袭战线,命运敢达,SD敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti45.jpg','SD敢达强袭战线,飞翼零式敢达,高达,高达游戏,敢达手游'],
			['#', 'img_sdzxjt/n_jiti46.jpg','SD敢达强袭战线,Z敢达,敢达,敢达游戏,高达手游'],
			['#', 'img_sdzxjt/n_jiti47.jpg','SD敢达强袭战线,独角兽敢达 (NT-D),SD高达,敢达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti48.jpg','SD敢达强袭战线,新安洲,SD敢达,高达,敢达手游'],
		];
	var message7 =[
			['#', 'img_sdzxjt/n_jiti49.jpg','SD敢达强袭战线,异端敢达红色机,SD高达,高达,高达游戏'],
			['#', 'img_sdzxjt/n_jiti50.jpg','SD敢达强袭战线,重炮型强袭敢达,SD高达,敢达,敢达游戏'],
		];
	function makeList(lie){
		var str ='';
		for (var i = 0;i<lie.length;i++){
			str +="<li>";
			str +='<a href="'+lie[i][0]+'"trange="_blank">';
			str +='<img src="'+lie[i][1]+'" alt="'+lie[i][2]+'">';
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