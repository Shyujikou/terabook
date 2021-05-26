(function(){this['黒ボタン']=this['画像']['作る']();
this['黒ボタン']['色名']="black";
this['黒ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="black";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['赤ボタン']=this['画像']['作る']();
this['赤ボタン']['色名']="red";
this['赤ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="red";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['緑ボタン']=this['画像']['作る']();
this['緑ボタン']['色名']="green";
this['緑ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="green";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['黄色ボタン']=this['画像']['作る']();
this['黄色ボタン']['色名']="orange";
this['黄色ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="orange";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['青ボタン']=this['画像']['作る']();
this['青ボタン']['色名']="blue";
this['青ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="blue";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['ピンクボタン']=this['画像']['作る']();
this['ピンクボタン']['色名']="purple";
this['ピンクボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['ピクセルの色']="purple";
this['色ボタンの枠を消す']['実行']();
return this['枠つき']();
});
this['色ボタン配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['x']=root['色ボタンの開始位置x'];
this['y']=root['色ボタンの開始位置y'];
this['幅']=root['色ボタンの幅'];
this['高さ']=root['色ボタンの高さ'];
this['黒ボタン']['変更']((((root['画像パス']+"panda/black.png?")+(((255)).乱数()))));
this['赤ボタン']['変更']((((root['画像パス']+"panda/red.png?")+(((255)).乱数()))));
this['緑ボタン']['変更']((((root['画像パス']+"panda/green.png?")+(((255)).乱数()))));
this['黄色ボタン']['変更']((((root['画像パス']+"panda/orange.png?")+(((255)).乱数()))));
this['青ボタン']['変更']((((root['画像パス']+"panda/blue.png?")+(((255)).乱数()))));
this['ピンクボタン']['変更']((((root['画像パス']+"panda/purple.png?")+(((255)).乱数()))));
return this['配列']['作る']((this['黒ボタン']),(this['赤ボタン']),(this['緑ボタン']),(this['黄色ボタン']),(this['青ボタン']),(this['ピンクボタン']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
要素['位置']((this['x']),(this['y']))['大きさ']((this['幅']),(this['高さ']));
this['x']=((this['x']+(this['幅']))+(root['色ボタン同士の間隔']));
要素['枠つき']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['変更']((((((root['画像パス']+"panda/")+(this['色名']))+"-s.png?")+(((255)).乱数()))));
});
return 要素['枠なし']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['変更']((((((root['画像パス']+"panda/")+(this['色名']))+".png?")+(((255)).乱数()))));
});
}));
});
return this['色ボタンの枠を消す']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['配列']['作る']((this['黒ボタン']),(this['赤ボタン']),(this['緑ボタン']),(this['黄色ボタン']),(this['青ボタン']),(this['ピンクボタン']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return 要素['枠なし']();
}));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=ColorButton.js.map
