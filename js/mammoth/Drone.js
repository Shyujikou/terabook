(function(){this['turtle']['moveToSlow']=dtlbind(this,function(x,y,t){
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
return this['position'](((startx+((this['v']*dx)))),((starty+((this['v']*dy)))));
}));
});
this['turtle']['addAlias']("moveToSlow","位置までゆっくり");
this['turtle']['forwardHit']=dtlbind(this,function(x,y,t){
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
return this['position'](((startx+((v*dx)))),((starty+((v*dy)))));
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
return this['moveBy']((((((((n-(1)))*(180))).cos()*(x))*(3))),(((((((n-(1)))*(180))).cos()*(y))*(3))));
}))['after_execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['position']((startx),(starty));
}));
});
this['turtle']['addAlias']("forwardHit","歩いて当たる");
this['ドローン']=this['作る']();
this['ドローン']['本体'];
this['ドローン']['持ち物']=this['未定義'];
this['ドローン']['操作']=dtlbind(this,function(命令){
var self=this;var 自分=self;
return dtlbind(this,function(){
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
dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['縦?']())===(2));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['本当']((((this['現在地']['横?']())===(1))),(((this['現在地']['横?']())===(3))));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['崖にぶつかったメッセージ']['実行']();
}));
}));
this['歩いて当たる']("d");
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物']['歩いて当たる']("d");
}));
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
this['歩いて当たる']("u");
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物']['歩いて当たる']("u");
}));
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
dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['縦?']())===(2));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['本当']((((this['現在地']['横?']())===(1))),(((this['現在地']['横?']())===(3))));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['離陸していないメッセージ']['実行']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['横?']())===(2));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['崖にぶつかったメッセージ']['実行']();
}));
}));
this['歩いて当たる'](("r"));
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物']['歩いて当たる']("r");
}));
}));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="←");
}))['そうでなければ'](dtlbind(this,function(){
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
dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['縦?']())===(2));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['本当']((((this['現在地']['横?']())===(1))),(((this['現在地']['横?']())===(3))));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['離陸していないメッセージ']['実行']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['横?']())===(2));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['崖にぶつかったメッセージ']['実行']();
}));
}));
this['歩いて当たる']("l");
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物']['歩いて当たる']("l");
}));
}));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="◯");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
this['つかむ']();
return this['位置更新']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="×");
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['縦?']())===(1));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['空中では離せないメッセージ']['実行']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['and']['本当']((((this['現在地']['縦?']())===(2))),(((this['現在地']['横?']())===(2))));
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['空中では離せないメッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['はなす']();
return this['位置更新']();
}));
}));
});
this['ドローン']['位置更新']=dtlbind(this,function(){
var self=this;var 自分=self;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
this['位置までゆっくり']((this['現在地']));
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物']['位置までゆっくり']((this['現在地']));
}));
});
this['ドローン']['位置までゆっくり']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置までゆっくり'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(2.7))))),(1));
});
this['ドローン']['位置まですぐ']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
this['現在地y']=this['現在地']['y?']();
return this['本体']['位置'](((this['現在地x']+(this['マップチップ幅']/(2)))),((this['現在地y']-((this['マップチップ高さ']/(2.7))))));
});
this['ドローン']['歩いて当たる']=dtlbind(this,function(方向){
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
return ((this['現在地']['y?']())-(((this['マップチップ高さ']/(2))-(this['マップチップ高さ']/(10)))));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['現在地']['y?']())-((this['マップチップ高さ']/(3))));
}));
this['本体']['歩いて当たる']((this['x']),(this['y']),(0.8));
return root['window']['setTimeout']((dtlbind(this,function(){
var self=this;var 自分=self;
return root['ヒット']['鳴らす']();
})['bind']((this['ルート']))),(200));
});
this['ドローン']['つかむ']=dtlbind(this,function(){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return this['現在地']['同じ?']((this['コイン']['現在地']));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物']=this['コイン'];
return this['持ち物']['持たれてる']=this['真'];
}));
return this['本体']['変身する'](((((root['imageディレクトリのパス']+"mammoth/drone2.png?")+(((255)).乱数())))));
});
this['ドローン']['はなす']=dtlbind(this,function(){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return this['持ち物'];
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物']['持たれてる']=this['偽'];
return this['持ち物']=this['未定義'];
}));
return this['本体']['変身する']((((root['imageディレクトリのパス']+"mammoth/drone.png?")+(((255)).乱数()))));
});
this['ドローン']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['本体']=this['タートル']['作る']()['ペンなし']()['拡大する']((0.11))['拡大する']((root['ドローン拡大倍率']))['変身する']((((root['imageディレクトリのパス']+"mammoth/drone.png?")+(((255)).乱数()))));
});
return this['ドローン']['初期化']=dtlbind(this,function(){
var self=this;var 自分=self;
this['持ち物']=this['未定義'];
return this['本体']['変身する']((((root['imageディレクトリのパス']+"mammoth/drone.png?")+(((255)).乱数()))));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Drone.js.map
