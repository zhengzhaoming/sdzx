//通过传进来的ID名，实现点击id返回顶部的效果
function return_top(top,div){
    $('#'+top).click(function(){
        $('html,body').animate({scrollTop: '0px'}, 500);
    });
};
//点击第一个ID，滚动到第二个id所在的位置
function find(target,obj){
    $('#'+target).click(function(){
        $('html,body').animate({
            scrollTop:$('#'+obj).offset().top
        }, 500);
    });
}


// 原生JS写法
// function find_top(btn){
//         var obtn = document.getElementById(btn); //获取回到顶部按钮的ID
//         var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
//         var timer = null; //定义一个定时器
//         var isTop = true; //定义一个布尔值，用于判断是否到达顶部
//         window.onscroll = function(){         //滚动条滚动事件
//             //获取滚动条的滚动高度
//             var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
//             if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
//                 obtn.style.display = 'block';
//             }else{         //否则隐藏
//                 obtn.style.display = 'none';
//             }
//             //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
//             if(!isTop){
//                 clearInterval(timer);
//             }
//             isTop = false;
//         }

//         obtn.onclick = function(){    //回到顶部按钮点击事件
//             //设置一个定时器
//             timer = setInterval(function(){
//                 //获取滚动条的滚动高度
//                 var osTop = document.documentElement.scrollTop || document.body.scrollTop;
//                 //用于设置速度差，产生缓动的效果
//                 var speed = Math.floor(-osTop /10 );
//                 document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
//                 isTop =true;  //用于阻止滚动事件清除定时器
//                 if(osTop == 0){
//                     clearInterval(timer);
//                 }
//             },20);
//         }
//     }