var myCanvas=document.querySelector("#myCanvas");
var ctx=myCanvas.getContext("2d");

function renderClok() {
    //清除画布
    ctx.clearRect(0,0,800,800);
    //保留
    ctx.save();
    //将坐标移动到画布的中心
    
    //移动
    ctx.translate(400,400);

    ctx.rotate(-2*Math.PI/4);
    ctx.save();

    //绘制分钟刻度
    for(var j=0;j<60;j++){
        ctx.rotate(2*Math.PI/60);
        ctx.beginPath();
        ctx.lineWidth=3
        ctx.moveTo(290,0);
        ctx.lineTo(300,0);
        ctx.strokeStyle="#FF9201";
        ctx.stroke();
        ctx.closePath();
    }

    //恢复
    ctx.restore();
    ctx.save();

    //绘制时钟刻度
    for(var i=0;i<12;i++){
        ctx.rotate(2*Math.PI/12);
        ctx.beginPath();
        ctx.lineWidth=5
        ctx.moveTo(280,0);
        ctx.lineTo(300,0);
        ctx.strokeStyle="#666";
        ctx.stroke();
        ctx.closePath();
    }

    //绘制表盘开始
    ctx.beginPath();
    ctx.arc(0,0,300,0,2*Math.PI);
    ctx.strokeStyle="#666";
    ctx.stroke();
    //绘制结束
    ctx.closePath();

    //获取时间
    var time=new Date();
    var H=time.getHours();
    // if(H>12){
    //     H=H-12
    // }

    //三元运算符
    //如果H>12，H-12，否则=原来的值
    H=H>12?H-12:H;
    var M=time.getMinutes();
    var S=time.getSeconds();
    // console.log(H,M,S);


    ctx.restore();
    ctx.save();
    //绘制时针
    ctx.beginPath();
    ctx.lineWidth=5
    ctx.rotate(2*Math.PI/12*H+2*Math.PI/60/12*M+2*Math.PI/60/60/12*S);
    ctx.moveTo(-10,0);
    ctx.lineTo(200,0);
    ctx.strokeStyle="#ff5700";
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
    ctx.save();
    //绘制分针
    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.rotate(2*Math.PI/60*M+2*Math.PI/60/60*S);
    ctx.moveTo(-20,0);
    ctx.lineTo(230,0);
    ctx.strokeStyle="#3793FF";
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
    ctx.save();
    //绘制秒针
    ctx.beginPath();
    ctx.lineWidth=2
    ctx.rotate(2*Math.PI/60*S);
    ctx.moveTo(-30,0);
    ctx.lineTo(270,0);
    ctx.strokeStyle="#43506c";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();


    //绘制圆心
    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.fillStyle="#45E3FF";
    ctx.fill();
    ctx.closePath();

    ctx.restore();

}
setInterval(function(){

    renderClok();
},1000);