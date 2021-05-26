(function(){this['turtle']['moveToSlow']=dtlbind(this,function(x,y,t,with_){
var self=this;var 自分=self;
var startx;
var starty;
var dx;
var dy;
var interval;
startx=this['xpos?']();
starty=this['ypos?']();
dx=(x-startx);
dy=(y-starty);
interval=(t/(90));
return this['timer']['create']()['interval']((interval))['times']((90))['execute'](dtlbind(this,function(n){
var self=this;var 自分=self;
this['v']=((((((n*(2))+(270))).sin()+(1)))/(2));
this['position'](((startx+((this['v']*dx)))),((starty+((this['v']*dy)))));
return dtlbind(this,function(){
var self=this;var 自分=self;
return with_;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return with_['each'](dtlbind(this,function(e){
var self=this;var 自分=self;
return e['本体']['position'](((startx+((this['v']*dx)))),((starty+((this['v']*dy)))));
}));
}));
}));
});
this['turtle']['addAlias']("moveToSlow","位置までゆっくり");
this['turtle']['forwardHit']=dtlbind(this,function(x,y,t,with_){
var self=this;var 自分=self;
var startx;
var starty;
var dx;
var dy;
var interval;
var after_t;
var after_interval;
startx=this['xpos?']();
starty=this['ypos?']();
dx=(x-startx);
dy=(y-starty);
interval=(t/(90));
after_t=(t-((interval*(25))));
after_interval=(after_t/(8));
return this['timer']['create']()['interval']((interval))['times']((25))['execute'](dtlbind(this,function(n){
var self=this;var 自分=self;
var v;
v=((((((n*(2))+(270))).sin()+(1)))/(2));
this['position'](((startx+((v*dx)))),((starty+((v*dy)))));
return dtlbind(this,function(){
var self=this;var 自分=self;
return with_;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return with_['each'](dtlbind(this,function(e){
var self=this;var 自分=self;
return e['本体']['position'](((startx+((v*dx)))),((starty+((v*dy)))));
}));
}));
}))['interval']((after_interval))['times']((8))['execute'](dtlbind(this,function(n){
var self=this;var 自分=self;
var x;
var y;
x=dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['true'](((dx>(0))),((dx<(0))));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (1);
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return (0);
}));
y=dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['true'](((dy>(0))),((dy<(0))));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (1);
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return (0);
}));
this['moveBy']((((((((n-(1)))*(180))).cos()*(x))*(3))),(((((((n-(1)))*(180))).cos()*(y))*(3))));
return dtlbind(this,function(){
var self=this;var 自分=self;
return with_;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
x=this['xpos?']();
y=this['ypos?']();
return with_['each'](dtlbind(this,function(e){
var self=this;var 自分=self;
return e['本体']['position']((x),(y));
}));
}));
}))['after_execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['position']((startx),(starty));
}));
});
this['turtle']['addAlias']("forwardHit","歩いて当たる");
this['ドローン']=this['作る']();
this['ドローン']['本体'];
this['ドローン']['持ち物たち']=this['配列']['作る']();
this['ドローン']['操作']=dtlbind(this,function(命令){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="↓");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['現在地']['進行可?']("d"));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地']=this['現在地']['下']();
return this['位置更新']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['歩いて当たる']("d");
}));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="↑");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['現在地']['進行可?']("u"));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地']=this['現在地']['上']();
return this['位置更新']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['歩いて当たる']("u");
}));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="→");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['現在地']['進行可?']("r"));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地']=this['現在地']['右']();
return this['位置更新']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['歩いて当たる'](("r"));
}));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="←");
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['現在地']['進行可?']("l"));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地']=this['現在地']['左']();
return this['位置更新']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['歩いて当たる']("l");
}));
}));
this['位置更新']();
return this['つかむ']();
});
this['ドローン']['位置更新']=dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['位置までゆっくり']((this['現在地']));
});
this['ドローン']['位置までゆっくり']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置までゆっくり'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))),(1),(dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['持ち物たち']['要素数?']())>(0));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物たち'];
}))));
});
this['ドローン']['位置まですぐ']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(1.5))))));
});
this['ドローン']['歩いて当たる']=dtlbind(this,function(方向){
var self=this;var 自分=self;
this['x']=dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="r");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['x?']())+((root['マップチップ幅']/(1.5))))+(root['マップチップ幅']));
}))['then'](dtlbind(this,function(){
var self=this;var 自分=self;
return (方向==="l");
}))['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return (((this['現在地']['x?']())+((root['マップチップ幅']/(1.5))))-(root['マップチップ幅']));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['x?']())+(this['マップチップ幅']/(1.5)));
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
this['本体']['歩いて当たる']((this['x']),(this['y']),(0.8),(dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['持ち物たち']['要素数?']())>(0));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物たち'];
}))));
return root['window']['setTimeout']((dtlbind(this,function(){
var self=this;var 自分=self;
return root['ヒット']['鳴らす']();
})['bind']((this['ルート']))),(200));
});
this['ドローン']['つかむ']=dtlbind(this,function(){
var self=this;var 自分=self;
this['相手たち']=this['フルーツたち']['チェック']((this['現在地']));
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['相手たち']['要素数?']();
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物たち']=this['持ち物たち']['連結']((this['相手たち']));
return this['相手たち']['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return 要素['持たれてる']=this['真'];
}));
}));
});
this['ドローン']['はなす']=dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物たち']['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return 要素['持たれてる']=this['偽'];
}));
this['持ち物たち']['クリア']();
return this;
});
this['ドローン']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['本体']=this['タートル']['作る']()['ペンなし']()['拡大する']((0.15))['拡大する']((root['ドローン拡大倍率']))['変身する']((((root['imageディレクトリのパス']+"mammoth/meiro/mammoth.png?")+(((255)).乱数()))));
return this;
});
this['ドローン']['初期位置設定']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['初期位置']=場所;
return this;
});
return this['ドローン']['_初期化']=dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物たち']['クリア']();
this['本体']['変身する']((((root['imageディレクトリのパス']+"mammoth/meiro/mammoth.png?")+(((255)).乱数()))));
this['位置まですぐ']((this['初期位置']));
return this;
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Drone.js.map
