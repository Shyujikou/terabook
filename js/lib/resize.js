function largeURL(file_name,cFrame){
    var file_name=''+file_name;
    document.cFrame.location.href = file_name+".html";
    if(!$(this).hasClass("iframe_large")){
        if($(this).hasClass("iframe_small")){
            $("#iframe").removeClass("iframe_small");
        }
        $("#iframe").addClass("iframe_large");
    }
    
}

function smallURL(file_name,cFrame){
    var file_name=''+file_name;
    document.cFrame.location.href =  file_name+"_small.html";
    if(!$(this).hasClass("iframe_small")){
        if($(this).hasClass("iframe_large")){
            $("#iframe").removeClass("iframe_large");
        }
        $("#iframe").addClass("iframe_small");
    }
}


function sizecheck(name){
    var cFrame=name;
    var reg=/(.*)(?:\.([^.]+$))/;
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    file_name=file_name.match(reg)[1]
    file_name=file_name.replace("quiz", "");
    file_name="content"+file_name+"";
    /*console.log(file_name);
    var w = $(window).width();
    var x = 600;*/
    console.log(file_name);
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        smallURL(file_name,cFrame);
    }else{
        largeURL(file_name,cFrame);
    }
}

