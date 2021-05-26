(function(){this['じっこうボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['じっこうボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/button1.png"))));
this['じっこうボタン']['zIndex']((50));
this['じっこうボタン']['大きさ']((root['ボタン類の幅']));
this['じっこうボタン']['位置']((root['じっこうボタンの左上x']),(root['じっこうボタンの左上y']));
this['じっこうボタン']['動作設定'](dtlbind(this,function(){
var self=this;var 自分=self;
this['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return });
this['やりなおしボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return });
this['ひとつもどるボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return });
this['ドローン']['位置まですぐ']((this['マップ']['読む']((1),(1))));
this['コイン']['位置まですぐ']((this['マップ']['読む']((3),(2))));
this['ドローン']['初期化']();
this['コイン']['初期化']();
this['命令群']=this['命令部']['命令一覧']['連結']();
return this['時計']=this['タイマー']['作る']()['間隔']((1))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['命令群']['要素数']())>(0));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['ドローン']['操作']((this['命令群']['読む']((1))));
return this['命令群']['shift']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['時計']['中断']();
root['命令終了時の動作']['実行']();
this['じっこうボタン']['動作']=this['じっこうボタン']['_動作'];
this['やりなおしボタン']['動作']=this['やりなおしボタン']['_動作'];
return this['ひとつもどるボタン']['動作']=this['ひとつもどるボタン']['_動作'];
}));
}));
}));
this['じっこうボタン']['_動作']=this['じっこうボタン']['動作'];
return this['じっこうボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/button1-hover.png"))));
});
this['やりなおしボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['やりなおしボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/button2.png"))));
this['やりなおしボタン']['zIndex']((50));
this['やりなおしボタン']['大きさ']((root['ボタン類の幅']))['動作設定'](dtlbind(this,function(){
var self=this;var 自分=self;
this['命令部']['クリア']();
this['ドローン']['位置まですぐ']((this['マップ']['読む']((1),(1))));
this['コイン']['位置まですぐ']((this['マップ']['読む']((3),(2))));
this['ドローン']['初期化']();
return this['コイン']['初期化']();
}));
this['やりなおしボタン']['_動作']=this['やりなおしボタン']['動作'];
this['やりなおしボタン']['位置']((root['やりなおしボタンの左上x']),(root['やりなおしボタンの左上y']));
return this['やりなおしボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/button2-hover.png"))));
});
return this['ひとつもどるボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['ひとつもどるボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/button3.png"))))['動作設定'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['命令部']['削除']();
}));
this['ひとつもどるボタン']['zIndex']((50));
this['ひとつもどるボタン']['大きさ']((root['ボタン類の幅']));
this['ひとつもどるボタン']['位置']((root['ひとつもどるボタンの左上x']),(root['ひとつもどるボタンの左上y']));
this['ひとつもどるボタン']['_動作']=this['ひとつもどるボタン']['動作'];
return this['ひとつもどるボタン']['ホバー画像'](((root['画像パス']+"mammoth/button/button3-hover.png")));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=GUI.js.map
