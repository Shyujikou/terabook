(function(){this['画面配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['背景']=this['画像']['作る']()['変更'](((this['画像パス']+"herring/background.png")));
this['背景']['zIndex'](-(2));
return this['背景']['大きさ']((root['画面幅']),(root['画面高さ']))['位置'](((-(1)*((root['画面幅']/(2))))),((root['画面高さ']/(2))));
});
this['をつくろう']=this['画像']['作る']();
this['次のターゲット']=this['作る']();
this['次のターゲット']['桁1']=this['ラベル']['作る']("");
this['次のターゲット']['桁10']=this['ラベル']['作る']("");
this['次のターゲット']['位置']=dtlbind(this,function(x,y,サイズ){
var self=this;var 自分=self;
this['桁10']['位置']((x),(y));
this['桁1']['位置'](((x+(サイズ/(2)))),(y));
return this;
});
this['次のターゲット']['文字サイズ']=dtlbind(this,function(サイズ){
var self=this;var 自分=self;
this['桁1']['文字サイズ']((サイズ));
this['桁10']['文字サイズ']((サイズ));
return this;
});
this['次のターゲット']['更新']=dtlbind(this,function(){
var self=this;var 自分=self;
this['現在の値']=root['window']['parseInt']((this['現在の値']));
this['次の値']=((((16)).乱数()-(1)));
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['現在の値']===this['次の値']);
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['更新']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['桁10']['書く']("");
this['桁1']['書く']("");
dtlbind(this,function(){
var self=this;var 自分=self;
return (this['次の値']<(10));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['桁1']['書く']((this['次の値']));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['桁10']['書く']((this['次の値']));
}));
return this['現在の値']=this['次の値'];
}));
});
return this['UIの配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['次のターゲットの左上x']=root['次のターゲットの左上x'];
this['次のターゲットの左上y']=root['次のターゲットの左上y'];
this['次のターゲットの文字サイズ']=root['次のターゲットの文字サイズ'];
this['次のターゲット']['位置']((this['次のターゲットの左上x']),(this['次のターゲットの左上y']),(this['次のターゲットの文字サイズ']));
this['次のターゲット']['文字サイズ']((this['次のターゲットの文字サイズ']));
this['次のターゲット']['更新']();
this['をつくろうの左上x']=root['をつくろうの左上x'];
this['をつくろうの左上y']=root['をつくろうの左上y'];
this['をつくろうの幅']=root['をつくろうの幅'];
this['をつくろう']['zIndex'](-(1));
this['をつくろう']['変更']((((root['画像パス']+"herring/parts1.png"))));
this['をつくろう']['位置']((this['をつくろうの左上x']),(this['をつくろうの左上y']));
this['をつくろう']['大きさ']((this['をつくろうの幅']));
this['OKボタン']=this['画像']['作る']((((root['画像パス']+"herring/button1.png"))));
this['OKボタンの幅']=root['OKボタンの幅'];
this['OKボタンの左上x']=root['OKボタンの左上x'];
this['OKボタンの左上y']=root['OKボタンの左上y'];
this['OKボタン']['大きさ']((this['OKボタンの幅']));
this['OKボタン']['位置']((this['OKボタンの左上x']),(this['OKボタンの左上y']));
this['OKボタン']['ホバー画像']((((root['画像パス']+"herring/button1-hover.png"))));
this['OKボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['合計']=(0);
this['配列']['作る']((this['カード1']),(this['カード2']),(this['カード4']),(this['カード8']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return this['合計']=(this['合計']+(要素['値?']()));
}));
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['次のターゲット']['現在の値'])===this['合計']);
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['正解メッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['失敗メッセージ']['実行']();
}));
});
this['やりなおしボタン']=this['画像']['作る']((((root['画像パス']+"herring/button2.png"))));
this['やりなおしボタンの幅']=root['やりなおしボタンの幅'];
this['やりなおしボタンの左上x']=root['やりなおしボタンの左上x'];
this['やりなおしボタンの左上y']=root['やりなおしボタンの左上y'];
this['やりなおしボタン']['大きさ']((this['やりなおしボタンの幅']));
this['やりなおしボタン']['位置']((this['やりなおしボタンの左上x']),(this['やりなおしボタンの左上y']));
this['やりなおしボタン']['ホバー画像']((((root['画像パス']+"herring/button2-hover.png"))));
this['やりなおしボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['メッセージ初期化']['実行']();
return this['配列']['作る']((this['カード1']),(this['カード2']),(this['カード4']),(this['カード8']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (要素['裏表']==="裏");
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return 要素['トグル']();
}));
}));
});
this['次の問題へボタン']=this['画像']['作る']((((root['画像パス']+"herring/button3.png"))));
this['次の問題へボタンの幅']=root['次の問題へボタンの幅'];
this['次の問題へボタンの左上x']=root['次の問題へボタンの左上x'];
this['次の問題へボタンの左上y']=root['次の問題へボタンの左上y'];
this['次の問題へボタン']['大きさ']((this['次の問題へボタンの幅']));
this['次の問題へボタン']['位置']((this['次の問題へボタンの左上x']),(this['次の問題へボタンの左上y']));
this['次の問題へボタン']['ホバー画像']((((root['画像パス']+"herring/button3-hover.png"))));
return this['次の問題へボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['次のターゲット']['更新']();
this['メッセージ初期化']['実行']();
return this['配列']['作る']((this['カード1']),(this['カード2']),(this['カード4']),(this['カード8']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (要素['裏表']==="裏");
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return 要素['トグル']();
}));
}));
});
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=UI.js.map
