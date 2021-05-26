(function(){return this['module']['require']("../../js/panda/Image.js","../../js/panda/Message.js","../../js/panda/UI.js","../../js/panda/ColorData.js","../../js/panda/Pixel.js","../../js/panda/Canvas.js","../../js/panda/ColorButton.js",dtlbind(this,function(){
var self=this;var 自分=self;
this['画面幅']=(500);
this['画面高さ']=(350);
this['画像パス']="../../image/";
this['ファイル名']="panda3-q2-150.png";
this['正解メッセージ番号']=(8);
this['画像の幅']=(1042);
this['画像の高さ']=(720);
this['横の拡大倍率']=(this['画面幅']/this['画像の幅']);
this['縦の拡大倍率']=(this['画面高さ']/this['画像の高さ']);
this['ピクセルの横間隔']=(24.95);
this['ピクセルの縦間隔']=(24.83);
this['開始位置x']=(40.5);
this['開始位置y']=(60.5);
this['座標辞書']=this['辞書']['作る']();
this['座標辞書']['書く']("1?x",((-(250)+this['開始位置x'])));
this['座標辞書']['書く']("2?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(1))))));
this['座標辞書']['書く']("3?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(2))))));
this['座標辞書']['書く']("4?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(3))))));
this['座標辞書']['書く']("5?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(4))))));
this['座標辞書']['書く']("6?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(5))))));
this['座標辞書']['書く']("7?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(6))))));
this['座標辞書']['書く']("8?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(7))))));
this['座標辞書']['書く']("9?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(8))))));
this['座標辞書']['書く']("10?x",(((-(250)+this['開始位置x'])+((this['ピクセルの横間隔']*(9))))));
this['座標辞書']['書く']("?1y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(0))))));
this['座標辞書']['書く']("?2y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(1))))));
this['座標辞書']['書く']("?3y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(2))))));
this['座標辞書']['書く']("?4y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(3))))));
this['座標辞書']['書く']("?5y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(4))))));
this['座標辞書']['書く']("?6y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(5))))));
this['座標辞書']['書く']("?7y",((((175)-this['開始位置y'])-((this['ピクセルの縦間隔']*(6))))));
this['座標辞書']['書く']("?8y",(((((175)-this['開始位置y'])-(0))-((this['ピクセルの縦間隔']*(7))))));
this['座標辞書']['書く']("?9y",((((175)-this['開始位置y'])-((this['ピクセルの縦間隔']*(8))))));
this['座標辞書']['書く']("?10y",((((175)-this['開始位置y'])-((this['ピクセルの縦間隔']*(9))))));
this['座標辞書']['書く']("1?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("2?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("3?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("4?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("5?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("6?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("7?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("7?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("9?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("10?w",(this['ピクセルの横間隔']));
this['座標辞書']['書く']("?1h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?2h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?3h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?4h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?5h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?6h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?7h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?8h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?9h",(this['ピクセルの縦間隔']));
this['座標辞書']['書く']("?10h",(this['ピクセルの縦間隔']));
this['じっこうボタンの幅']=(130);
this['じっこうボタンのx座標']=(-(5)-(root['じっこうボタンの幅']));
this['じっこうボタンのy座標']=-(140);
this['やりなおしボタンの幅']=(130);
this['やりなおしボタンのx座標']=(5);
this['やりなおしボタンのy座標']=-(140);
this['画面配置']['実行']();
this['ピクセルの色']="black";
this['色ボタンの幅']=(32);
this['色ボタンの高さ']=(32);
this['色ボタン同士の間隔']=(4);
this['色ボタンの開始位置x']=((-this['色ボタンの幅']*(3))-(this['色ボタン同士の間隔']*(2.5)));
this['色ボタンの開始位置y']=(164);
this['色ボタン配置']['実行']();
root['縦のピクセル数']=(10);
root['横のピクセル数']=(10);
root['色データ配列']=this['配列']['作る']();
root['色データ配列']['書く']("2,1,1,2,1,1,2");
root['色データ配列']['書く']("3,4,3");
root['色データ配列']['書く']("1,2,4,2,1");
root['色データ配列']['書く']("0,1,4,1,3,1");
root['色データ配列']['書く']("0,1,8,1");
root['色データ配列']['書く']("0,1,2,1,1,1,1,1,1,1");
root['色データ配列']['書く']("1,1,4,1,1,1,1");
root['色データ配列']['書く']("2,1,1,1,2,1,2");
root['色データ配列']['書く']("3,1,2,1,3");
root['色データ配列']['書く']("4,2,4");
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
//# sourceMappingURL=Panda_hard2.js.map