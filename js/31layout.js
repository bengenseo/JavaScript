// html.classList.add("android");
(function(){
    function bg(){
        var userAgent=navigator.userAgent;
        // window.innerWidth,可以获取HTML宽度
        var wh= window.innerWidth;
        var html=document.querySelector("html");
        html.className="";
        if(userAgent.indexOf("Windows")!=-1){
            html.classList.add("pc");
        }else if(userAgent.indexOf("Android")!=-1){
            html.classList.add("android");
        }
        if(wh<640){
            html.classList.add("minW640");
            html.classList.add("minW960");
            html.classList.add("minW1200");
        }else if(wh<960){
            html.classList.add("maxW640");
            html.classList.add("minW960");
            html.classList.add("minW1200");
        }else if(wh<1200){
            html.classList.add("maxW640");
            html.classList.add("maxW960");
            html.classList.add("minW1200");
        }else{
            html.classList.add("maxW640");
            html.classList.add("maxW960");
            html.classList.add("maxW1200");
        }
        // rem布局
        var danWei=wh/3.75;// 屏幕宽度除以7.5rem（单位不带入）比例为满屏
        html.style.fontSize=danWei+"px";
    };
    bg();
    window.onresize=function(){
        bg();
    };
})();