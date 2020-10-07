//弹窗函数封装
//args是传入的值
// args:{
//     title:"温馨提醒";
// };
function bgAlert(args) {
    var bg = document.createElement("main");
    bg.className = "bg";
    bg.innerHTML = `
    <div>
        <button type="button" class="close">X</button>
        <div class="text">`+args.title+`</div>
    </div>
    `;
    var body = document.querySelector("body");
    body.appendChild(bg);

    var close = document.querySelector(".close");
    close.onclick = function () {
        body.removeChild(bg);
    }
}