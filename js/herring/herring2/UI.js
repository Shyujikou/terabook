(function(){this['画面配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['背景']=this['画像']['作る']()['変更'](((this['画像パス']+"herring/background.png")));
this['背景']['zIndex'](-(2));
return this['背景']['大きさ']((root['画面幅']),(root['画面高さ']))['位置'](((-(1)*((root['画面幅']/(2))))),((root['画面高さ']/(2))));
});
this['イラストトグルボタン']=this['画像']['作る']();
this['イラストトグルボタン']['有無']="無";
this['イラストトグルボタン']['トグル']=dtlbind(this,function(){
var self=this;var 自分=self;
this['有無']=dtlbind(this,function(){
var self=this;var 自分=self;
return (this['有無']==="有");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return "無";
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return "有";
}));
return this['変更']((this['辞書']['読む']((this['有無']))));
});
this['イラストトグルボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['配列']['作る']((this['カード1']),(this['カード2']),(this['カード4']),(this['カード8']),(this['カード16']),(this['カード32']),(this['カード64']),(this['カード128']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return 要素['イラストトグル']();
}));
return this['トグル']();
});
this['GOボタン']=this['画像']['作る']();
this['二進では画像']=this['画像']['作る']();
this['十進ラベル']=this['作る']();
this['十進ラベル']['位置']=dtlbind(this,function(x,y,サイズ){
var self=this;var 自分=self;
this['桁100']['位置']((x),(y));
this['桁10']['位置'](((x+(サイズ/(2)))),(y));
return this['桁1']['位置'](((x+サイズ)),(y));
});
this['十進ラベル']['文字の色']=dtlbind(this,function(色){
var self=this;var 自分=self;
this['桁100']['文字の色']((色));
this['桁10']['文字の色']((色));
return this['桁1']['文字の色']((色));
});
this['十進ラベル']['文字サイズ']=dtlbind(this,function(サイズ){
var self=this;var 自分=self;
this['桁100']['文字サイズ']((サイズ));
this['桁10']['文字サイズ']((サイズ));
return this['桁1']['文字サイズ']((サイズ));
});
this['十進ラベル']['書く']=dtlbind(this,function(値){
var self=this;var 自分=self;
this['桁100']['書く']("");
this['桁10']['書く']("");
this['桁1']['書く']("");
return dtlbind(this,function(){
var self=this;var 自分=self;
return (値>(100));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['桁100']['書く']((値));
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return (値>(10));
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['桁10']['書く']((値));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['桁1']['書く']((値));
}));
});
this['十進ラベル']['桁100']=this['ラベル']['作る']("255");
this['十進ラベル']['桁10']=this['ラベル']['作る']("");
this['十進ラベル']['桁1']=this['ラベル']['作る']("");
return this['UIの配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['イラストトグルボタン']['辞書']=this['辞書']['作る']();
this['イラストトグルボタン']['辞書']['書く']("有",((root['imageディレクトリのパス']+"herring/1.png")));
this['イラストトグルボタン']['辞書']['書く']("無",((root['imageディレクトリのパス']+"herring/none.png")));
this['イラストトグルボタン']['変更']((this['イラストトグルボタン']['辞書']['読む']("無")));
this['イラストトグルボタンの左上x']=root['イラストトグルボタンの左上x'];
this['イラストトグルボタンの左上y']=root['イラストトグルボタンの左上y'];
this['イラストトグルボタンの幅']=root['イラストトグルボタンの幅'];
this['イラストトグルボタン']['位置']((this['イラストトグルボタンの左上x']),(this['イラストトグルボタンの左上y']));
this['イラストトグルボタン']['大きさ']((root['イラストトグルボタンの幅']));
this['GOボタンの左上x']=root['GOボタンの左上x'];
this['GOボタンの左上y']=root['GOボタンの左上y'];
this['GOボタンの幅']=root['GOボタンの幅'];
this['GOボタン']['変更']((((root['画像パス']+"herring/button1.png?")+(((255)).乱数()))));
this['GOボタン']['大きさ']((this['GOボタンの幅']));
this['GOボタン']['位置']((this['GOボタンの左上x']),(this['GOボタンの左上y']));
this['GOボタン']['ホバー画像']((((root['画像パス']+"herring/button1-hover.png?")+(((255)).乱数()))));
this['GOボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
this['合計']=(0);
this['配列']['作る']((this['カード1']),(this['カード2']),(this['カード4']),(this['カード8']),(this['カード16']),(this['カード32']),(this['カード64']),(this['カード128']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return this['合計']=(this['合計']+(要素['値?']()));
}));
this['合計']['toString']()['allreplace']("[0-9]",dtlbind(this,function(c){
var self=this;var 自分=self;
return root['window']['String']['fromCharCode']((((c['charCodeAt']((0)))+(65248))));
}));
return root['十進ラベル']['書く']((this['合計']));
});
this['二進ではx']=root['二進では画像の左上x'];
this['二進ではy']=root['二進では画像の左上y'];
this['二進ではの幅']=root['二進では画像の幅'];
this['二進では画像']['位置']((this['二進ではx']),(this['二進ではy']));
this['二進では画像']['大きさ']((this['二進ではの幅']));
this['二進では画像']['zIndex'](-(1));
this['二進では画像']['変更']((((root['画像パス']+"herring/nisin2_back.png?")+(((255)).乱数()))));
this['十進ラベルx']=root['十進ラベルの左上x'];
this['十進ラベルy']=root['十進ラベルの左上y'];
this['十進ラベル文字色']=root['十進ラベルの文字色'];
this['十進ラベルの文字サイズ']=root['十進ラベルの文字サイズ'];
this['十進ラベルの数字の間隔']=root['十進ラベルの数字の間隔'];
this['十進ラベル']['位置']((this['十進ラベルx']),(this['十進ラベルy']),(this['十進ラベルの数字の間隔']));
this['十進ラベル']['文字の色']((this['十進ラベル文字色']));
return this['十進ラベル']['文字サイズ']((this['十進ラベルの文字サイズ']));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=UI.js.map
