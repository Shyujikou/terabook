(function(){this['命令一覧背景表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['命令一覧背景']=this['画像']['作る']((((root['画像パス']+"mammoth/button/buttonback3.png"))));
this['命令一覧背景']['位置']((root['命令一覧背景の左上x']),(root['命令一覧背景の左上y']));
this['命令一覧背景']['大きさ']((root['命令一覧背景の幅']),(root['命令一覧背景の高さ']));
return this['命令一覧背景']['zIndex']((1));
});
this['命令部']=this['作る']();
this['命令部']['命令一覧']=this['配列']['作る']();
this['命令部']['画像達']=this['配列']['作る']();
this['命令部']['命令数']=(0);
this['命令部']['反映']=dtlbind(this,function(){
var self=this;var 自分=self;
this['幅']=root['命令一覧の画像幅'];
this['x']=root['命令一覧の基準左上x'];
this['y']=root['命令一覧の基準左上y'];
return this['縦並びor横並び']=root['命令一覧の縦並びor横並び'];
});
this['命令部']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['命令リスト']=this['配列']['作る']();
this['矢印リスト']=this['配列']['作る']();
dtlbind(this,function(n){
var self=this;var 自分=self;
var 要素;
要素=this['画像']['作る']((((root['画像パス']+"mammoth/method/method.png"))));
要素['zIndex']((50));
要素['大きさ']((root['画像w']),(root['画像h']));
要素['位置'](((root['一行目初期x']+((((n-(1)))*root['画像達の間隔'])))),(root['一行目y']));
return this['命令リスト']['書く']((要素));
})['繰り返す']((7));
dtlbind(this,function(n){
var self=this;var 自分=self;
var 要素;
要素=this['画像']['作る']((((root['画像パス']+"mammoth/method/arrow.png"))));
要素['zIndex']((50));
要素['大きさ']((root['矢印画像w']),(root['矢印画像h']));
要素['位置'](((root['一行目矢印初期x']+((((n-(1)))*root['画像達の間隔'])))),(root['一行目矢印y']));
return this['矢印リスト']['書く']((要素));
})['繰り返す']((6));
dtlbind(this,function(n){
var self=this;var 自分=self;
var 要素;
要素=this['画像']['作る']((((root['画像パス']+"mammoth/method/method.png"))));
要素['zIndex']((50));
要素['大きさ']((root['画像w']),(root['画像h']));
要素['位置'](((root['二行目初期x']+((((n-(1)))*root['画像達の間隔'])))),(root['二行目y']));
return this['命令リスト']['書く']((要素));
})['繰り返す']((7));
return dtlbind(this,function(n){
var self=this;var 自分=self;
var 要素;
要素=this['画像']['作る']((((root['画像パス']+"mammoth/method/arrow.png"))));
要素['zIndex']((50));
要素['大きさ']((root['矢印画像w']),(root['矢印画像h']));
要素['位置'](((root['二行目矢印初期x']+((((n-(2)))*this['画像達の間隔'])))),(root['二行目矢印y']));
return this['矢印リスト']['書く']((要素));
})['繰り返す']((7));
});
this['命令部']['追加']=dtlbind(this,function(命令){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['命令数']<(14));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['命令数']=(this['命令数']+(1));
this['命令一覧']['書く']((命令));
dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="←");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/left.png")));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="→");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/right.png")));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="↑");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/up.png")));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="↓");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/down.png")));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="◯");
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/button6-icon.png")));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (命令==="×");
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['filename']=(((root['imageディレクトリのパス']+"/mammoth/button/button5-icon.png")));
}));
this['xsize']=((root['画像w']*(0.8)));
this['ysize']=((root['画像h']*(0.8)));
this['xpos']=((((this['命令リスト']['読む']((this['命令数']))['xpos?']())+((root['画像w']/(2)))))-(this['xsize']/(2)));
this['ypos']=((((this['命令リスト']['読む']((this['命令数']))['ypos?']())-((root['画像h']/(2)))))+(this['ysize']/(2)));
this['画像達']['書く']((this['画像']['作る']((this['filename']))['大きさ']((this['xsize']),(this['ysize']))['位置']((this['xpos']),(this['ypos']))['zIndex']((55))));
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['命令数']<(14));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['矢印リスト']['読む']((this['命令数']))['change']((((root['画像パス']+"mammoth/method/arrow-hover.png"))));
}));
}));
});
this['命令部']['削除']=dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['命令数']>(0));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['命令一覧']['pop']();
this['画像達']['読む']((this['画像達']['要素数']()))['show']();
this['画像達']['pop']();
dtlbind(this,function(){
var self=this;var 自分=self;
return (this['命令数']<(14));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['矢印リスト']['読む']((this['命令数']))['change']((((root['画像パス']+"mammoth/method/arrow.png"))));
}));
return this['命令数']=(this['命令数']-(1));
}));
});
return this['命令部']['クリア']=dtlbind(this,function(){
var self=this;var 自分=self;
(dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['命令数'])>(0));
})['bind']((this)))['の間']()['実行']((dtlbind(this,function(){
var self=this;var 自分=self;
return this['削除']();
})['bind']((this))));
return this['命令数']=(0);
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=OrderList.js.map
