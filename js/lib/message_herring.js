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
            idName.text('作ったらチェックボタンをおしてね！');
            break;
        case success:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('おめでとう！せいかいです！');
        break;
        
        case fail:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！もう一度チャレンジしてみよう！');
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

