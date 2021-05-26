(function(){this['コイン']=this['作る']();
this['コイン']['本体'];
this['コイン']['位置までゆっくり']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置までゆっくり'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))),(1));
});
this['コイン']['位置まですぐ']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))));
});
this['コイン']['歩いて当たる']=dtlbind(this,function(方向){
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
return ((this['現在地']['y?']())+((this['マップチップ高さ']/(13))));
}))['then'](dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="d");
}))['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['y?']())-(((this['マップチップ高さ']/(1.5))-(this['マップチップ高さ']/(10)))));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['y?']())-((this['マップチップ高さ']/(1.5))));
}));
return this['本体']['歩いて当たる']((this['x']),(this['y']),(0.8));
});
this['コイン']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['本体']=this['タートル']['作る']()['変身する']((((root['imageディレクトリのパス']+"mammoth/coin.png"))))['ペンなし']()['拡大する']((root['コイン拡大倍率']));
this['本体']['実体']=this['コイン'];
return this['コイン']['初期化']();
});
return this['コイン']['初期化']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['持たれてる']=this['偽'];
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Coin.js.map
