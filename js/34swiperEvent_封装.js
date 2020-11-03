var bgEvent={
    eventAll:{

    },
    init:function(dom){
        dom.eventAll={};
        dom.addEvent=this.addEvent;
        dom.emit=this.emit;
        dom.removeEvent=this.removeEvent;
        dom.touchData={};
        dom.addEventListener("touchstart",function(e){
            // console.log(e);
            this.touchData.startX=e.touches[0].pageX;
            this.touchData.startY=e.touches[0].pageY;
        });
        dom.addEventListener("touchmove",function(e){
            // console.log(e);
            this.touchData.endX=e.touches[0].pageX;
            this.touchData.endY=e.touches[0].pageY; 
        });
        dom.addEventListener("touchend",function(e){
            var x=this.touchData.endX-this.touchData.startX;
            var y=this.touchData.endY-this.touchData.startY;
            if((Math.abs(x) > Math.abs(y)) && Math.abs(x)>100){
                if(x>0){
                    // console.log("右");
                    e.swiperDir="swiperRight";
                    dom.emit("swiperRight",e);
                }else{
                    // console.log("左");
                    e.swiperDir="swiperLeft";
                    dom.emit("swiperLeft",e);
                }
            }else if((Math.abs(x) < Math.abs(y)) && Math.abs(y)>100){
                if(y>0){
                    // console.log("下");
                    e.swiperDir="swiperBottom";
                    dom.emit("swiperBottom",e);
                }else{
                    // console.log("上");
                    e.swiperDir="swiperTop";
                    dom.emit("swiperTop",e);
                }
            }
            // console.log("结束");
        });
    },
    addEvent:function(eventName,callBackFn){
        if(this.eventAll[eventName]==undefined){
            this.eventAll[eventName]=[];
        }
        this.eventAll[eventName].push(callBackFn)
    },
    emit:function(eventName,eventMsg){
        if(this.eventAll[eventName]!=undefined){
            this.eventAll[eventName].forEach(function(item,i) {
                item(eventMsg);
            });
        };
    },
    removeEvent:function(eventName,callBackFn){
        var that=this;
        this.eventAll[eventName].forEach(function(item,i){
            if(item==callBackFn){
                that.eventAll[eventName].splick(i,1);
            }
        });
    },
};
