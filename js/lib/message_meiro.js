function message(i){
    var reset = 0;
    var success = 1;
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
            idName.text('答对了！你用最短的程序完成了挑战哦！');
        break;
        case 2:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('好可惜，试试看能不能用更短的程序完成挑战呢？');
        break;
        case 3:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，你还没有到达终点哦！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，你没有拿到苹果哦！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，你没有拿到葡萄哦！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，你没有拿到苹果和葡萄哦！');
            break;
        case 7:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，只能拿一个苹果和一串葡萄哦！');
            break;
        case 8:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('真遗憾，要拿到所有的水果才能通关哦！');
            break;
            
    }
    
}

