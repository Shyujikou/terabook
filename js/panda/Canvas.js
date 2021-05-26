(function(){this['キャンバス']=this['作る']();
this['キャンバス']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;
return });
this['キャンバス']['ピクセル配列']=this['配列']['作る']();
this['キャンバス']['色データ配列']=this['配列']['作る']();
this['キャンバス']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['縦幅']=root['縦のピクセル数'];
this['横幅']=root['横のピクセル数'];
this['左上x']=root['ピクセル11の絶対位置x'];
this['左上y']=root['ピクセル11の絶対位置y'];
this['ピクセル配列']=this['配列']['作る']();
this['色データ配列']=this['配列']['作る']();
return dtlbind(this,function(y){
var self=this;var 自分=self;
var 行配列;
var obj;
this['y座標']=root['window']['parseFloat']((root['座標辞書']['読む'](((("?"+(y))+"y")))));
this['height']=root['window']['parseFloat']((root['座標辞書']['読む'](((("?"+(y))+"h")))));
行配列=this['配列']['作る']();
this['x座標']=dtlbind(this,function(x){
var self=this;var 自分=self;
var 要素;
this['x座標']=root['window']['parseFloat']((root['座標辞書']['読む'](((((x)+"?")+"x")))));
this['width']=root['window']['parseFloat']((root['座標辞書']['読む'](((((x)+"?")+"w")))));
要素=this['ピクセル']['作る']();
要素['位置']((this['x座標']),(this['y座標']));
要素['大きさ']((this['width']),(this['height']));
return 行配列['書く']((要素));
})['繰り返す']((this['横幅']));
this['ピクセル配列']['書く']((行配列));
return this['色データ配列']['書く']((this['色データ']['作る']()['登録']((root['色データ配列']['読む']((y))))));
})['繰り返す']((this['縦幅']));
});
this['キャンバス']['色データ取得']=dtlbind(this,function(){
var self=this;var 自分=self;
this['カウント配列リスト']=this['配列']['作る']();
return dtlbind(this,function(番号){
var self=this;var 自分=self;
this['白黒']="白";
this['カウント']=(0);
this['カウント配列']=this['配列']['作る']();
this['行']=this['ピクセル配列']['読む']((番号));
dtlbind(this,function(要素番号){
var self=this;var 自分=self;
this['要素']=this['行']['読む']((要素番号));
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['要素']['白黒'])===(this['白黒']));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['カウント']=(this['カウント']+(1));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['カウント配列']['書く']((this['カウント']));
this['カウント']=(1);
return this['白黒']=this['要素']['白黒'];
}));
})['繰り返す']((this['行']['要素数?']()));
this['カウント配列']['書く']((this['カウント']));
return this['カウント配列リスト']['書く']((this['カウント配列']));
})['繰り返す']((this['ピクセル配列']['要素数?']()));
});
this['キャンバス']['成否判定']=dtlbind(this,function(){
var self=this;var 自分=self;
this['現在の色データ']=this['色データ取得']();
this['結果']=root['真'];
dtlbind(this,function(行番号){
var self=this;var 自分=self;
this['色データ行']=this['現在の色データ']['読む']((行番号));
this['目標データ行']=this['色データ配列']['読む']((行番号))['取得']();
return dtlbind(this,function(要素番号){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['色データ行']['読む']((要素番号)))!==(this['目標データ行']['読む']((要素番号))));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['結果']=root['偽'];
}));
})['繰り返す']((this['目標データ行']['要素数?']()));
})['繰り返す']((this['現在の色データ']['要素数?']()));
return this['結果'];
});
return this['キャンバス']['オールリセット']=dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(番号){
var self=this;var 自分=self;
this['行']=this['ピクセル配列']['読む']((番号));
return dtlbind(this,function(要素番号){
var self=this;var 自分=self;
this['要素']=this['行']['読む']((要素番号));
return this['要素']['リセット']();
})['繰り返す']((this['行']['要素数?']()));
})['繰り返す']((this['ピクセル配列']['要素数?']()));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Canvas.js.map
