function swiper(selector){
    var swiperDiv = document.querySelector(selector);
    var imgItem = document.querySelectorAll(selector+" .item");
    // //追加小圆点功能
    var circleListDiv=document.createElement("ul");
    circleListDiv.className="circleList";
    imgItem.forEach(function(item,i){
        if(i==0){
            circleListDiv.innerHTML+='<li class="circle active"></li>';
        }else{
            circleListDiv.innerHTML+='<li class="circle"></li>';
        }
    });
    swiperDiv.appendChild(circleListDiv);
    var circles = document.querySelectorAll(selector+' .circle');
    var currentImg = 0;
    //相同内容封装函数
    function bannerImg() {
        //初始化，将所有的li列表中的active去掉
        imgItem.forEach(function (item) {
            item.classList.remove("active");
        });
        circles.forEach(function (item) {
            item.classList.remove("active");
        })
        //添加active
        imgItem[currentImg].classList.add('active');
        circles[currentImg].classList.add('active');
    }
    var preBtn = document.querySelector(selector+" .pre");
    var nextBtn = document.querySelector(selector+" .next");
    preBtn.onclick = function () {
        currentImg = currentImg - 1;
        //判断重置
        if (currentImg < 0) {
            currentImg = imgItem.length - 1;
        }
        bannerImg();
    }
    nextBtn.onclick = function () {
        currentImg = currentImg + 1;
        //判断重置
        if (currentImg >= imgItem.length) {
            currentImg = 0;
        }

        //函数调用
        bannerImg();
    }

    circles.forEach(function (item,index) {
        item.onclick = function () {
            currentImg=index;
            bannerImg();
        }
    })
}