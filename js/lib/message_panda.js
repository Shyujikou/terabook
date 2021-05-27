function message(i){
    var reset = 0;
    var success = 1;
    var fail = 2;
    var idName = $("#result");
    var className = idName.attr("class");
    
    switch (i){
        case reset:
            idName.removeClass(className);
            idName.addClass("default_message");
            idName.text('完成后点击“验证答案”按钮哦！');
            break;
        case fail:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，再来挑战一次吧！');
            break;
        case 3:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“2”哦！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“5”哦！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“爱心”哦！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“船”哦！');
            break;
        case 7:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“苹果”哦！');
            break;
        case 8:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“草莓”哦！');
            break;
        case 9:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('答对了！正确答案是“音符”哦！');
            break;
            
    }
    
}

