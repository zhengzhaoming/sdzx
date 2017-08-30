// 图片集合、圆点集合、轮播图集合、间隔时间、切换速度,图片数量，宽度
//      水平移动
function lunbo_one(listobj,dotobj,lunboobj,time,speed,page,length){
        var animat = false;
        var index = 0;
        var list = document.getElementById(listobj);
        var dots = document.getElementById(dotobj).getElementsByTagName('span');
        var int = setInterval(function(){next()},time);
        function next(){
            if(animat){
                return;
            }
            var width = parseInt(list.style.left);
            var next_width = width-length;
            index = (++index > page-1)? 0: index;
            animation(width, next_width);
        }
        function animation(width, next_width, one_time, interval){
            if(animat){
                return;
            }
            checkIndex();
            animat = true;
            one_time = one_time || speed;
            interval = interval || 10;
            var offset = (next_width-width)/(one_time/interval);
            go(width, offset, next_width);
            function go(w, offset, next_width){
                list.style.left = w+'px';  
                w += offset;
                if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                     setTimeout(function(){
                            go(w, offset, next_width);
                        },interval);
                 }else{
                        if(next_width <= -(length*page)){
                            list.style.left = 0+'px';
                        }else{
                        list.style.left = next_width+'px';
                    }
                    animat = false;
                 }
            }
        }
        function checkIndex(){
            for(var i=0; i<dots.length; i++){
                dots[i].className = '';
            }
            dots[index].className = 'on';
        }
        for(var i=0; i<dots.length; i++){
            dots[i].onmouseover = function(){
                if(animat){
                    return;
                }
                var new_index = this.getAttribute('index');
                var width = parseInt(list.style.left);
                var next_width;
                if(width != next_width){
                    next_width= new_index*-length;
                    index = new_index;
                    animation(width, next_width);
                }

            }
        }
        var container = document.getElementById(lunboobj);
        container.onmouseover=function(){
            clearInterval(int);
        };
        container.onmouseout = function(){
            int = setInterval(function(){next()},time);
        }

    }

// 图片集合、轮播图集合、间隔时间、切换速度,图片数量，宽度
//      水平移动
function lunbo_one2(listobj,lunbobj,time,speed,page,length){
    var animat = false;
    var index = 1;
    var list = document.getElementById(listobj);
    var int = setInterval(function(){next()},time);
    function next(){
        if(animat){
            return;
        }
        var width = parseInt(list.style.left);
        var next_width = width-length;
        index = (++index > page)? 1: index;
        animation(width, next_width);
    }
    document.getElementById('next').onclick = function(){next()}
    function pre(){

        if(animat){
            return false;
        }
        var width = parseInt(list.style.left);
        var next_width = width+length;
        index = (--index < 1)? page: index;
        animation(width, next_width);
    }
    // 绑定点下一张图片的方法
    document.getElementById('pre').onclick = function(){pre()}



    function animation(width, next_width, one_time, interval){
        if(animat){
            return;
        }
        animat = true;
        one_time = one_time || speed;
        interval = interval || 10;
        var offset = (next_width-width)/(one_time/interval);
        go(width, offset, next_width);
        function go(w, offset, next_width){
            list.style.left = w+'px';  
            w += offset;
            if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                 setTimeout(function(){
                        go(w, offset, next_width);
                    },interval);
             }else{
                    if(next_width <= -(length*(page+1))){
                        list.style.left = -length+'px';
                    }else if(next_width >= -length){
                        list.style.left = -(length*(page+1))+'px';
                    }
                    else{
                    list.style.left = next_width+'px';
                    animat = false;
                }
                animat = false;
             }
        }
    }
    var container = document.getElementById(lunbobj);
    container.onmouseover=function(){
        animat = false;
        clearInterval(int);
    };
    container.onmouseout = function(){
        int = setInterval(function(){next()},time);
    }

}



// 图片集合、圆点集合、间隔时间、图片数量
//      淡入淡出
function lunbo_two(listobj,dotobj,time,page){
    var arr = document.getElementById(listobj).getElementsByTagName('a');
    var animat = false;
    var index = 0; //下标
    var setInt = setInterval(function(){next()},time); //定时器
    for(var i =0;i<arr.length;i++){
        arr[i].style.zIndex = arr.length-i;
    }
    var list = document.getElementById(dotobj).getElementsByTagName('span');
    function checkIndex(){
        for(var i = 0;i<list.length;i++){
            list[i].className = '';
        }
        list[index].className="sub";
    }

    for(var i = 0;i<list.length;i++){
        list[i].onmouseover = function(){
            if(animat){return;}
            var new_index = Number(this.getAttribute('index'));
            if(index != new_index){
                animation(index,new_index);
                index = new_index;
                checkIndex();
            }
        }
        list[i].onclick = function(){
            if(animat){return;}
            var new_index = Number(this.getAttribute('index'));
            if(index != new_index){
                animation(index,new_index);
                index = new_index;
                checkIndex();
            }
        }
    }
    var int = setInterval(function(){next()},time);
    function next(){
        if (animat) {return;}
        var new_index = (index+1)>(page-1)?0:(index+1);
        animation(index,new_index);
        index = new_index;
        checkIndex();
    };
    function animation(index,new_index){
        var interval = 10;  //一帧需要的时间
        var run_time = 1000;    //一次动画需要的时间
        var offset = 1/(1000/30);   // 每帧改变的透明度
        var offset2 = 0;
        animat = true;
        arr[index].style.opacity = 1;
        arr[new_index].style.opacity = 0;
        arr[new_index].style.display = 'block';
        change_op();
        function change_op(){
            offset2 += offset;
            arr[index].style.opacity -= offset;
            arr[new_index].style.opacity = offset2;
            if(arr[index].style.opacity>=0){
                setTimeout(function(){change_op()},10);
            } 
            else{
                arr[index].style.display = 'none';
                animat = false;
            }
        }
    }
}


function Switch(o,length,num,p,n){
    var animat = false;
    var index = 0;
    var list = document.getElementById(o);
    var p = document.getElementById(p);
    var n = document.getElementById(n);
    function next(){
        if(animat){ return;}
        var width = parseInt(list.style.left);
        var next_width = width-length;
        animation(width, next_width);
    }
     function pre(){

        if(animat){return;}
        var width = parseInt(list.style.left);
        var next_width = width+length;
        animation(width, next_width);
    }
    p.onclick = function(){pre()}
    n.onclick = function(){next()}
    function animation(width, next_width, one_time, interval){

        if(animat){
            return;
        }
        animat = true;
        one_time = one_time || 500;
        interval = interval || 10;
        var offset = (next_width-width)/(one_time/interval);
        go(width, offset, next_width);
        function go(w, offset, next_width){
            list.style.left = w+'px';  
            w += offset;
            if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                 setTimeout(function(){
                        go(w, offset, next_width);
                    },interval);
             }else{
                    if(next_width <= -(length*(num-1))){
                        list.style.left = -(length*(num-1))+'px';
                        n.style.display = "none";
                        
                    }else if(next_width >= -10){
                        list.style.left = 0+'px';
                        p.style.display = "none";
                    }
                    else{
                    animat = false;
                    list.style.left = next_width+'px';
                    p.style.display = "block";
                    n.style.display = "block";

                }
                animat = false;
             }
        }
    }
}