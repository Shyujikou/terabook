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
            idName.text('先依次点击命令按钮，然后再点击“运行”按钮试试看吧！');
            break;
        case success:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('恭喜你，通关了！');
        break;
        case fail:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，再来挑战一次吧！');
        break;
        case 3:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('好可惜，金币还没有放下来哦！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('还没有起飞呢，不能移动哦！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('撞上山崖，动不了了！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("info");
            idName.text('不能在空中放下金币哦！');
            break;
            
    }
    
}

