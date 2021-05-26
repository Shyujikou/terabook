(function(){this['フルーツ']=this['作る']();
this['フルーツ']['ファイル名設定']=dtlbind(this,function(filename){
var self=this;var 自分=self;
this['ファイル名']=filename;
return this;
});
this['フルーツ']['本体'];
this['フルーツ']['位置までゆっくり']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置までゆっくり'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))),(1));
});
this['フルーツ']['位置まですぐ']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))));
});
this['フルーツ']['歩いて当たる']=dtlbind(this,function(方向){
var self=this;var 自分=self;
this['x']=dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="r");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['x?']())+((root['マップチップ幅']/(2))))+(root['マップチップ幅']));
}))['then'](dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="l");
}))['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['x?']())+((root['マップチップ幅']/(2))))-(root['マップチップ幅']));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['x?']())+(this['マップチップ幅']/(2)));
}));
this['y']=dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="u");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['y?']())-((this['マップチップ高さ']/(1.5))))+(this['マップチップ高さ']));
}))['then'](dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="d");
}))['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['y?']())-((this['マップチップ高さ']/(1.5))))-(this['マップチップ高さ']));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['y?']())-((this['マップチップ高さ']/(1.5))));
}));
return this['本体']['歩いて当たる']((this['x']),(this['y']),(0.8));
});
this['フルーツ']['名前設定']=dtlbind(this,function(名前){
var self=this;var 自分=self;
this['名前']=名前;
return this;
});
this['フルーツ']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['本体']=this['タートル']['作る']()['変身する']((((((root['imageディレクトリのパス']+"mammoth/meiro/")+(this['ファイル名']))+"?")+(((255)).乱数()))))['ペンなし']()['拡大する']((root['フルーツ拡大倍率']));
this['本体']['実体']=this;
return this;
});
this['フルーツ']['初期位置設定']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['初期位置']=場所;
return this;
});
this['フルーツ']['_初期化']=dtlbind(this,function(){
var self=this;var 自分=self;
this['持たれてる']=this['偽'];
this['位置まですぐ']((this['初期位置']));
return this;
});
this['ぶどう']=this['フルーツ']['作る']()['ファイル名設定']("grape.png")['名前設定']("ぶどう");
this['ぶどう2']=this['フルーツ']['作る']()['ファイル名設定']("grape.png")['名前設定']("ぶどう");
this['ばなな']=this['フルーツ']['作る']()['ファイル名設定']("banana.png")['名前設定']("ばなな");
this['ばなな2']=this['フルーツ']['作る']()['ファイル名設定']("banana.png")['名前設定']("ばなな");
this['りんご']=this['フルーツ']['作る']()['ファイル名設定']("apple.png")['名前設定']("りんご");
this['りんご2']=this['フルーツ']['作る']()['ファイル名設定']("apple.png")['名前設定']("りんご");
this['フルーツたち']=this['配列']['作る']((this['ぶどう']),(this['ぶどう2']),(this['ばなな']),(this['ばなな2']),(this['りんご']),(this['りんご2']));
return this['フルーツたち']['チェック']=dtlbind(this,function(場所){
var self=this;var 自分=self;
var ヒットたち;
ヒットたち=root['配列']['作る']();
this['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return 要素['持たれてる']['反対']();
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return 要素['現在地']['同じ?']((場所));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return ヒットたち['書く']((要素));
}));
}));
}));
return ヒットたち;
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Fruit.js.map
