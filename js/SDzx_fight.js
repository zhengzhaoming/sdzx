window.onload = function(){
	var new_1 = document.getElementById('new_1');
	var count = document.getElementById('count');
	var message1 =[
			[
				'#', 
				'img_sdzxfi/new_9.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》UR巴纳吉•林克斯首次登场',
				'2017-03-15',
				'主题关卡自由与正义开启活动时间：3月16日维护后至3月22日22:00活动服务器：全区全服活动内容：活动期间开启自由与正义主题关卡'
			],
			[
				'#', 
				'img_sdzxfi/new_2.jpg',
				'白色情人节',
				'#',
				'SD敢达强袭战线》新版机师技能说明',
				'2017-03-09',
				'新版镇魂歌上线后，为了方便大家养成自己的机师。我们为各位指挥官整理了机师技能说明，大家在下列表格中可查看到相应的说明。'
			],
			[
				'#', 
				'img_sdzxfi/new_3.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》3月9日游戏维护公告',
				'2017-03-07',
				'游戏将于2017年3月9日9:00—12:00期间进行停机维护。本次游戏更新版本为2 6版本，维护完毕后需要各位指挥官重新下载安装游戏。'
			],
			[
				'#', 
				'img_sdzxfi/new_2.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》礼包汇总3月15日',
				'2017-03-15',
				'《SD敢达强袭战线》与广大媒体合作，为玩家带来丰厚福利，发布海量媒体礼包，各位玩家可到各大媒体领取。'
			],
			[
				'#', 
				'img_sdzxfi/new_1.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》白色情人节限定好礼',
				'2017-03-13',
				'活动一：白色情人节限定好礼 活动时间：3月14日10:00至3月14日23:59 活动服务器：全区全服 活动内容：充值达到指定金额即可领取奖励。'
			],
			[
				'#', 
				'img_sdzxfi/new_4.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》最强手感量子型00敢达',
				'2017-03-08',
				'主题关卡天使坠落开启活动时间：3月9日维护后至3月15日22:00活动服务器：全区全服活动内容：活动期间开启天使坠落主题关卡'
			],
			[
				'#', 
				'img_sdzxfi/new_6.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》UR报丧女妖（觉醒）登场',
				'2017-02-27',
				'活动一：累计充值得UR报丧女妖•命运女神（觉醒）活动时间：2月28日10:00至3月6日23:59活动服务器：全区全服活动内容：累计充值达到指定金额即可领取奖励。'
			],
			[
				'#', 
				'img_sdzxfi/new_7.png',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》开学季 新兵能量拼图活动',
				'2017-02-21',
				'《SD敢达强袭战线》开学季 新兵能量拼图活动'
			],
			[
				'#', 
				'img_sdzxfi/new_5.jpg',
				'UR巴纳吉',
				'#',
				'《SD敢达强袭战线》流派东方不败！',
				'2017-03-06',
				'活动一：累计消费得UR多蒙•卡修活动时间：3月7日10:00至3月9日23:59活动服务器：全区全服活动内容：累计消费指定哈啰币即可领取奖励。'
			]
		];

	function makeList(lie){
		var str ='';
		for (var i = 0;i<lie.length;i++){
			str +="<li>";
			str +='<a href="'+lie[i][0]+'">';
			str +='<img class="new_pic" src="'+lie[i][1]+'" alt="'+lie[i][2]+'"></a>';
			str +='<a class="new_text" href="'+lie[i][3]+'">';
			str +="<h2>"+lie[i][4]+"</h2>";
			str +="<strong>"+lie[i][5]+"</strong>";
			str +="<p>"+lie[i][6]+"</p>";
			str +="</a></li>";
		}
		return str;
	}

	var lis = makeList(message1);
	new_1.innerHTML = lis;
	count.innerHTML = message1.length + "条";
}