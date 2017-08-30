// 生成的位置、数组、条数显示的位置
function makeList(list,lie,count){
	var new_1 = document.getElementById(list);
	var count = document.getElementById(count);
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
	count.innerHTML = lie.length + "条";
	var lis = makeList(lie);
	new_1.innerHTML = lis;
}
