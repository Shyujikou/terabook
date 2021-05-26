(function(){this['マップ']=this['作る']();
this['マップ']['値']=this['配列']['作る']();
this['マップ']['取得']=dtlbind(this,function(行,列){
var self=this;var 自分=self;
return this['値']['読む']((列))['読む']((行));
});
this['マップ']['読む']=dtlbind(this,function(行,列){
var self=this;var 自分=self;
return this['値']['読む']((列))['読む']((行));
});
this['マップ']['登録']=dtlbind(this,function(情報){
var self=this;var 自分=self;
var 行;
this['引数']=情報['split']("|");
行=this['配列']['作る']();
dtlbind(this,function(n){
var self=this;var 自分=self;
this['要素']=this['引数']['読む']((n));
this['横']=n;
this['縦']=((this['値']['要素数?']())+(1));
return 行['書く']((this['マップチップ']['作る']((this['要素']),(this['横']),(this['縦']))));
})['繰り返す']((this['引数']['要素数?']()));
return this['値']['書く']((行));
});
this['マップ']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
return });
return this['マップ']['確定']=dtlbind(this,function(){
var self=this;var 自分=self;
this['背景']=this['画像']['作る']((((root['画像パス']+"mammoth/meiro/meiro-back.png"))));
this['背景']['位置']((root['マップの左上座標x']),(root['マップの左上座標y']));
this['背景']['大きさ']((root['マップの幅']),(root['マップの高さ']));
this['背景']['zIndex'](-(1));
this['行数']=this['値']['要素数?']();
this['列数']=this['値']['読む']((1))['要素数?']();
this['x基準']=(root['マップの左上座標x']-this['マップチップ幅']);
this['y基準']=(root['マップの左上座標y']+this['マップチップ幅']);
return dtlbind(this,function(n){
var self=this;var 自分=self;
this['行']=this['値']['読む']((n));
this['y']=(this['y基準']-(((n)*((this['マップチップ高さ']-(1))))));
this['x基準']=(root['マップの左上座標x']-this['マップチップ幅']);
return dtlbind(this,function(m){
var self=this;var 自分=self;
this['要素']=this['行']['読む']((m));
this['x']=(this['x基準']+(((m)*((this['マップチップ幅']-(1))))));
return this['要素']['位置登録']((this['x']),(this['y']));
})['繰り返す']((this['行']['要素数?']()));
})['繰り返す']((this['値']['要素数?']()));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Map.js.map
