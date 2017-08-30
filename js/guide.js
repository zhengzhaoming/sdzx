 window.onload = function(){
    // lunbo_one('list_L','dot_L','lunbo_L',3000,300,4,361);
    
    // lunbo_one('list_R','dot_R','lunbo_R',2900,200,4,361);
    var phone_reg = document.getElementById('phone_reg');
    var quick_reg = document.getElementById('quick_reg');
    var hide_password = document.getElementById('hide_password');

    quick_reg.onclick=function(){
        quick_reg.className="btn";
        phone_reg.className="";
        hide_password.className="";
        show_password.className="hide";
    }
    phone_reg.onclick=function(){
        quick_reg.className="";
        phone_reg.className="btn";
        hide_password.className="hide";
        show_password.className="";
    }

}