function message(i){
    var reset = 0;
    var success = 1;
    var idName = $("#result");
    var className = idName.attr("class");
    
    switch (i){
        case reset:
            idName.removeClass(className);
            idName.addClass("default_message");
            idName.text('メイレイボタンをおしたら「じっこう！」ボタンをおしてみよう！');
            break;
        case success:
            idName.removeClass(className);
            idName.addClass("success");
            idName.text('正解！ いちばん短いプログラムでのクリアだよ！');
        break;
        case 2:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('おしい！ できるだけ短いプログラムでゴールしてみよう！');
        break;
        case 3:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ まだゴールにたどりついていないよ！');
            break;
        case 4:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ りんごをとっていないよ！');
            break;
        case 5:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ ぶどうをとっていないよ！');
            break;
        case 6:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ りんごもぶどうもとっていないよ！');
            break;
        case 7:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ りんごとぶどうを一つずつだけとってゴールしてね！');
            break;
        case 8:
            idName.removeClass(className);
            idName.addClass("fail");
            idName.text('残念！ すべてのフルーツをとってゴールしてね！');
            break;
            
    }
    
}

