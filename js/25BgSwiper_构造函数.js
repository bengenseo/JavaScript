function BgSwiper(selector){
    this.swiperDiv = document.querySelector(selector);
    this.imgItem = document.querySelectorAll(selector+" .item");
    // //追加小圆点功能
    this.circleListDiv=document.createElement("ul");
    this.circleListDiv.className="circleList";
    var that=this;
    this.imgItem.forEach(function(item,i){
        if(i==0){
            that.circleListDiv.innerHTML+='<li class="circle active"></li>';
        }else{
            that.circleListDiv.innerHTML+='<li class="circle"></li>';
        }
    });
    this.swiperDiv.appendChild(this.circleListDiv);
    this.circles = document.querySelectorAll(selector+' .circle');
    this.currentImg = 0;
    
    this.preBtn = document.querySelector(selector+" .pre");
    this.nextBtn = document.querySelector(selector+" .next");
    this.preBtn.onclick = function () {
        that.back();
    }
    this.nextBtn.onclick = function () {
        that.forword();
    }

    this.circles.forEach(function (item,index) {
        item.onclick = function () {
            that.go(index);
        }
    })
}
//上面里层用代理that
//相同内容封装函数
BgSwiper.prototype.bannerImg=function() {
    //初始化，将所有的li列表中的active去掉
    this.imgItem.forEach(function (item) {
        item.classList.remove("active");
    });
    this.circles.forEach(function (item) {
        item.classList.remove("active");
    })
    //添加active
    this.imgItem[this.currentImg].classList.add('active');
    this.circles[this.currentImg].classList.add('active');
};
BgSwiper.prototype.go=function(index){
    this.currentImg=index;
    this.bannerImg();
}
BgSwiper.prototype.forword=function(){
    this.currentImg = this.currentImg + 1;
    //判断重置
    if (this.currentImg >= this.imgItem.length) {
        this.currentImg = 0;
    }

    //函数调用
    this.bannerImg();
}
BgSwiper.prototype.back=function(){
    this.currentImg = this.currentImg - 1;
    //判断重置
    if (this.currentImg < 0) {
        this.currentImg = this.imgItem.length - 1;
    }
    this.bannerImg();
}