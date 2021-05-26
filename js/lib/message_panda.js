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
            idName.text('できたらチェックボタンを押してね！');
            break;
        case fail:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！もう一度チャレンジしてみよう！');
            break;
        case 3:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「2」だよ！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「5」だよ！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「ハート」だよ！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「船」だよ！');
            break;
        case 7:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「りんご」だよ！');
            break;
        case 8:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「いちご」だよ！');
            break;
        case 9:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('せいかいです！こたえは「おんぷ」だよ！');
            break;
            
    }
    
}

