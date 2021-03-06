(function(){return this['module']['require']("../../js/panda/Image.js","../../js/panda/Message.js","../../js/panda/UI.js","../../js/panda/ColorData.js","../../js/panda/Pixel.js","../../js/panda/Canvas.js","../../js/panda/ColorButton.js",dtlbind(this,function(){
var self=this;var 自分=self;
this['画面幅']=(300);
this['画面高さ']=(210);
this['画像パス']="../../image/";
this['ファイル名']="panda2-q1-150.png";
this['正解メッセージ番号']=(5);
this['画像の幅']=(500);
this['画像の高さ']=(350);
this['横の拡大倍率']=(this['画面幅']/this['画像の幅']);
this['縦の拡大倍率']=(this['画面高さ']/this['画像の高さ']);
this['ピクセルの横間隔']=(24.9);
this['ピクセルの縦間隔']=(24.9);
this['開始位置x']=(150);
this['開始位置y']=(61);
this['座標辞書']=this['辞書']['作る']();
this['座標辞書']['書く']("1?x",((((-(250)+this['開始位置x']))*this['横の拡大倍率'])));
this['座標辞書']['書く']("2?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(1)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("3?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(2)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("4?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(3)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("5?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(4)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("6?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(5)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("7?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(6)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("8?x",(((((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(7)))))*this['横の拡大倍率'])));
this['座標辞書']['書く']("?1y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(0)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?2y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(1)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?3y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(2)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?4y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(3)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?5y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(4)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?6y",(((((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(5)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?7y",((((((175)-this['開始位置y'])-((this['ピクセルの縦間隔']*(6)))))*this['縦の拡大倍率'])));
this['座標辞書']['書く']("1?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("2?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("3?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("4?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("5?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("6?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("7?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("8?w",((this['ピクセルの横間隔']*this['横の拡大倍率'])));
this['座標辞書']['書く']("?1h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?2h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?3h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?4h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?5h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?6h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['座標辞書']['書く']("?7h",((this['ピクセルの縦間隔']*this['縦の拡大倍率'])));
this['じっこうボタンの幅']=((130)*this['横の拡大倍率']);
this['じっこうボタンのx座標']=(((-(5)*this['横の拡大倍率']))-(root['じっこうボタンの幅']));
this['じっこうボタンのy座標']=(-(97)*this['縦の拡大倍率']);
this['やりなおしボタンの幅']=((130)*this['横の拡大倍率']);
this['やりなおしボタンのx座標']=(((5)*this['横の拡大倍率']));
this['やりなおしボタンのy座標']=(-(97)*this['縦の拡大倍率']);
this['画面配置']['実行']();
this['ピクセルの色']="black";
this['色ボタンの幅']=((32)*this['横の拡大倍率']);
this['色ボタンの高さ']=((32)*this['縦の拡大倍率']);
this['色ボタン同士の間隔']=((4)*this['横の拡大倍率']);
this['色ボタンの開始位置x']=((-this['色ボタンの幅']*(3))-(this['色ボタン同士の間隔']*(2.5)));
this['色ボタンの開始位置y']=((164)*this['縦の拡大倍率']);
this['色ボタン配置']['実行']();
root['縦のピクセル数']=(7);
root['横のピクセル数']=(8);
root['色データ配列']=this['配列']['作る']();
root['色データ配列']['書く']("1,2,2,2,1");
root['色データ配列']['書く']("0,8");
root['色データ配列']['書く']("0,8");
root['色データ配列']['書く']("0,8");
root['色データ配列']['書く']("1,6,1");
root['色データ配列']['書く']("2,4,2");
root['色データ配列']['書く']("3,2,3");
this['キャンバス']['表示']();
root['window']['document']['addEventListener']("touchstart",(dtlbind(this,function(e){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (root['flag']===root['真']);
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return e['preventDefault']();
}));
})['bind']((this))));
return root['window']['document']['addEventListener']("touchend",(dtlbind(this,function(){
var self=this;var 自分=self;
root['flag']=root['真'];
return root['window']['setTimeout']((dtlbind(this,function(){
var self=this;var 自分=self;
return root['flag']=root['偽'];
})['bind']((this))),(400));
})['bind']((this))));
}));
}).checkerror().apply(root,[]);
//# sourceMappingURL=Panda_normal1_300.js.map
