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
        case success:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('恭喜你，答对了！');
        break;
        
        case fail:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，再来挑战一次吧！');
        break;
        
        /*case 3:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('おしい！コインを持ったままです！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('離陸していないので動けません！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('崖にぶつかって動けません！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('空中では離せません！');
            break;
        */
            
    }
    
}

