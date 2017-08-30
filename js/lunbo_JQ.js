//container:总div  list:总轮播图容器  dot:小圆点容器集  prbtn:上一页id  nebtn:下一页id page:图片显示的张数 wait:等待切换的时间  time（切换时间，可选）
function lunbo_hz(list,dot,prbtn,nebtn,page,wait,length,time){
    //获取当前网页中的总轮播图容器
    var $list = $(list);
    //设置index值
    var index = 0;
    length = length || parseInt($(list+' img').eq(1).css('width'));
    
    // 获取#dot下的所以span标签
    var dots = $(dot);
    var pr = $(prbtn);
    var ne = $(nebtn);
    var animat = false;
    wait = wait || 3000;
    checkDot();
    //定义一个函数，每次触发的时候，容器的left位置就减少一张图片的长度
    //$list为轮播对象id，page为轮播效果的实际张数，length为轮播一张图片的长度,time为切图的时间
    function next(){
        if(animat){return false};
        animat  = true;
        time = time || 1000;
        index = (++index)>page-1?0:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置减去一张图片的长度
        var new_left = left - length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        if(new_left<(-length*page)){
        // 就让目标在瞬间回到原本的初位置
            $list.animate({left:'-'+length+'px'},0);
        }
        // 判断：如果目标位置少于图片张数*图片长度
        checkDot();
        setTimeout(function(){
            // 检查小圆点
            animat = false;
        },time)
    }
    function pre(){
        // 判断动画是否在进行中
        if(animat){return false};
        animat  = true;
        // 可选参数
        time = time || 1000;
        index = (--index)<0?page-1:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置增加一张图片的长度
        var new_left = left + length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        ;
        if(new_left>(-length)){
            $list.animate({left:'-'+length*page+'px'},0);
            // 判断：如果目标位置大于负图片长度，就让目标在瞬间回到末位置
            }
        checkDot();
        setTimeout(function(){   
            // 检查小圆点
             animat = false;
        },time);
    }
    // 给上一页按钮绑定pre事件
    pr.click(function(){pre();});
    // 给下一页按钮绑定next事件
    ne.click(function(){next();});
    
    dots.click(function(){
        // index等于当前点击的小圆点的index值
        var new_index = parseInt($(this).attr('index'));
        if(index != new_index){
            index = new_index;
            var new_left = (index+1)*-length;
            $list.animate({left:new_left+'px'},length);
            checkDot();
        }
            
    });

    // 检查小圆点的状态，对应图片的小圆点样式发生改变
    function checkDot(){
        // 获取id为dot的对象下的所有span标签，移除span标签所有的类，然后给对应index值的span添加名字为on的类
       dots.removeClass('on').eq(index).addClass('on');
    };

    // 创建一个定时器，每隔3秒点击一次下一页按钮
    var int = setInterval(function(){
        ne.click();}
    ,wait);
    //给对象添加一个鼠标经过离开事件
    //当鼠标移入时，执行第一个函数，当鼠标离开时，执行第二个函数
    $list.hover(function(){
        //清除定时器
        clearInterval(int);
    },function(){
        //重新执行每隔三秒点击一次下一页按钮
        int = setInterval(function(){
            ne.click();}
        ,wait)
    });     
}


function lunbo_hz2(list,prbtn,nebtn,page,wait,length,time){
    //获取当前网页中的总轮播图容器
    var $list = $(list);
    //设置index值
    var index = 0;
    length = length || parseInt($(list+' img').eq(1).css('width'));
    console.log(length);
    // 获取#dot下的所以span标签
    var pr = $(prbtn);
    var ne = $(nebtn);
    var animat = false;
    wait = wait || 3000;
    //定义一个函数，每次触发的时候，容器的left位置就减少一张图片的长度
    //$list为轮播对象id，page为轮播效果的实际张数，length为轮播一张图片的长度,time为切图的时间
    function next(){
        if(animat){return false};
        animat  = true;
        time = time || 1000;
        index = (++index)>page-1?0:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置减去一张图片的长度
        var new_left = left - length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        if(new_left<(-length*page)){
        // 就让目标在瞬间回到原本的初位置
            $list.animate({left:'-'+length+'px'},0);
        }
        // 判断：如果目标位置少于图片张数*图片长度
        setTimeout(function(){
            // 检查小圆点
            animat = false;
        },time)
    }
    function pre(){
        // 判断动画是否在进行中
        if(animat){return false};
        animat  = true;
        // 可选参数
        time = time || 1000;
        index = (--index)<0?page-1:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置增加一张图片的长度
        var new_left = left + length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        ;
        if(new_left>(-length)){
            $list.animate({left:'-'+length*page+'px'},0);
            // 判断：如果目标位置大于负图片长度，就让目标在瞬间回到末位置
            }
        setTimeout(function(){   
            // 检查小圆点
             animat = false;
        },time);
    }
    // 给上一页按钮绑定pre事件
    pr.click(function(){pre();});
    // 给下一页按钮绑定next事件
    ne.click(function(){next();});
    // 创建一个定时器，每隔3秒点击一次下一页按钮
    var ints = setInterval(function(){ne.click();},wait);
    //给对象添加一个鼠标经过离开事件
    //当鼠标移入时，执行第一个函数，当鼠标离开时，执行第二个函数
    $list.hover(function(){
        //清除定时器
        clearInterval(ints);
    },function(){
        //重新执行每隔三秒点击一次下一页按钮
        ints = setInterval(function(){
            ne.click();}
        ,wait)
    });     
}


function lunbo_hz3(list,page,wait,length,time){
    //获取当前网页中的总轮播图容器
    var $list = $(list);
    //设置index值
    var index = 0;
    length = length || parseInt($(list+' img').eq(1).css('width'));
    console.log(length);
    // 获取#dot下的所以span标签
    var animat = false;
    wait = wait || 3000;
    //定义一个函数，每次触发的时候，容器的left位置就减少一张图片的长度
    //$list为轮播对象id，page为轮播效果的实际张数，length为轮播一张图片的长度,time为切图的时间
    function next(){
        if(animat){return false};
        animat  = true;
        time = time || 1000;
        index = (++index)>page-1?0:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置减去一张图片的长度
        var new_left = left - length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        if(new_left<(-length*page)){
        // 就让目标在瞬间回到原本的初位置
            $list.animate({left:'-'+length+'px'},0);
        }
        // 判断：如果目标位置少于图片张数*图片长度
        setTimeout(function(){
            // 检查小圆点
            animat = false;
        },time)
    }
    function pre(){
        // 判断动画是否在进行中
        if(animat){return false};
        animat  = true;
        // 可选参数
        time = time || 1000;
        index = (--index)<0?page-1:index;
        //定义一个变量，获取需要轮播的容器总长度，将其装换成数字类型，方便计算
        var left = parseInt($list.css('left'));
        // 定义目标位置变量，目标位置为当前位置增加一张图片的长度
        var new_left = left + length;
        // 为轮播对象设置一个动画，一秒内对象移动到目标位置
        $list.animate({left:new_left+'px'},time);
        ;
        if(new_left>(-length)){
            $list.animate({left:'-'+length*page+'px'},0);
            // 判断：如果目标位置大于负图片长度，就让目标在瞬间回到末位置
            }
        setTimeout(function(){   
            // 检查小圆点
             animat = false;
        },time);
    }
    // 创建一个定时器，每隔3秒点击一次下一页按钮
    var ints = setInterval(function(){next();},wait);
    //给对象添加一个鼠标经过离开事件
    //当鼠标移入时，执行第一个函数，当鼠标离开时，执行第二个函数
    $list.hover(function(){
        //清除定时器
        clearInterval(ints);
    },function(){
        //重新执行每隔三秒点击一次下一页按钮
        ints = setInterval(function(){
            next();}
        ,wait)
    });     
}