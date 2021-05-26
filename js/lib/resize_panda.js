function largeURL(file_name,cFrame){
    document.cFrame.location.href = file_name+".html";
    if(!$(this).hasClass("iframe_large")){
        if($(this).hasClass("iframe_small")){
            $("#iframe").removeClass("iframe_small");
        }
        $("#iframe").addClass("iframe_large");
    }
    
}

function smallURL(file_name,cFrame){
    document.cFrame.location.href =  file_name+"_small.html";
    if(!$(this).hasClass("iframe_small")){
        if($(this).hasClass("iframe_large")){
            $("#iframe").removeClass("iframe_large");
        }
        $("#iframe").addClass("iframe_small");
    }
}


function sizecheck(nazo,name){
    var cFrame=name;
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        smallURL(nazo,cFrame);
    }else{
        largeURL(nazo,cFrame);
    }
}

