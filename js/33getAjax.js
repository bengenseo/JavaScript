function getAjax(httpUrl,callBackFn){
    var xhr=new XMLHttpRequest();
    xhr.open("GET",httpUrl);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.status==200&&xhr.readyState==4){
            callBackFn(xhr);
        };
    }
}