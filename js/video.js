//点击按钮、视频区、视频video、背景层、暂停播放键
function playerVideo(p,v,a,b,ag,src){
        var player = document.getElementById(p);
        var video = document.getElementById(v);
        var audio = document.getElementById(a);
        var black = document.getElementById(b);
        var again = document.getElementById(ag);
        player.onclick=function(){
            video.style.display = 'block';
            audio.src=src;
            audio.play();
        };
        audio.onclick = function(){
            audio.pause();
            again.style.display = "block";
        }
        again.onclick = function(){
            audio.play();
            again.style.display = "none";
        }
        black.onclick= function(){
            video.style.display = 'none';
            audio.pause();
            audio.src = "";
            again.style.display = "none";
        }
    }

function playerVideo2(p,v,a,b,ag,src){
        var player = document.getElementById(p);
        var video = document.getElementById(v);
        var audio = document.getElementById(a);
        var black = document.getElementById(b);
        var again = document.getElementById(ag);
        player.onclick=function(){
            video.style.display = 'block';
            audio.src=src;
            again.style.display = "block";
            body.style.overflow = "hidden";
        };
        audio.onclick = function(){
            audio.pause();
            again.style.display = "block";
        }
        again.onclick = function(){
            audio.play();
            again.style.display = "none";
        }
        black.onclick= function(){
            video.style.display = 'none';
            audio.pause();
            audio.src = "";
            again.style.display = "none";
            body.style.overflow = "";
        }
    }

function playerVideo3(p,v,a,b,ag,src){
    var player = document.getElementById(p);
    var video = document.getElementById(v);
    var audio = document.getElementById(a);
    var black = document.getElementById(b);
    var again = document.getElementById(ag);
    player.onclick=function(){
        video.style.display = 'block';
        audio.src=src;
        again.style.display = "block";
    };
    audio.onclick = function(){
        audio.pause();
        again.style.display = "block";
    }
    again.onclick = function(){
        audio.play();
        again.style.display = "none";
    }
    black.onclick= function(){
        video.style.display = 'none';
        audio.pause();
        audio.src = "";
        again.style.display = "none";
    }
}