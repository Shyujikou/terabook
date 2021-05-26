(function(){return this['画面配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['背景']=this['画像']['作る']();
this['背景']['変更'](((((((root['画像パス'])+"panda/")+(root['ファイル名']))+"?")+(((255)).乱数()))));
this['背景']['大きさ']((root['画面幅']),(root['画面高さ']));
this['背景']['位置'](((-(1)*((root['画面幅']/(2))))),((root['画面高さ']/(2))));
this['じっこうボタン']=this['画像']['作る']();
this['じっこうボタン']['変更']((((root['画像パス']+"panda/button1.png?")+(((255)).乱数()))));
this['じっこうボタン']['ホバー画像']((((root['画像パス']+"panda/button1-hover.png?")+(((255)).乱数()))));
this['じっこうボタン']['大きさ']((root['じっこうボタンの幅']));
this['じっこうボタン']['位置']((root['じっこうボタンのx座標']),(root['じっこうボタンのy座標']));
this['じっこうボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['キャンバス']['成否判定']();
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['正解メッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['失敗メッセージ']['実行']();
}));
});
this['やりなおしボタン']=this['画像']['作る']();
this['やりなおしボタン']['変更']((((root['画像パス']+"panda/button2.png?")+(((255)).乱数()))));
this['やりなおしボタン']['ホバー画像']((((root['画像パス']+"panda/button2-hover.png?")+(((255)).乱数()))));
this['やりなおしボタン']['大きさ']((root['やりなおしボタンの幅']));
this['やりなおしボタン']['位置']((root['やりなおしボタンのx座標']),(root['やりなおしボタンのy座標']));
return this['やりなおしボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['キャンバス']['オールリセット']();
this['色ボタンの枠を消す']['実行']();
root['ピクセルの色']="black";
return this['メッセージ初期化']['実行']();
});
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=UI.js.map
