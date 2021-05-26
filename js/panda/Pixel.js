(function(){this['ピクセル']=this['作る']();
this['ピクセル']['白黒']="白";
this['ピクセル']['x座標']=(0);
this['ピクセル']['y座標']=(0);
return this['ピクセル']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;
this['幅']=root['ピクセルの幅'];
this['本体']=this['画像']['作る']();
this['本体']['変更']((((root['画像パス']+"panda/white.png?")+(((255)).乱数()))))['大きさ']((root['ピクセルの幅']),(root['ピクセルの高さ']));
this['本体']['親']=this;
this['本体']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['親']['トグル']();
});
this['本体']['反映']=dtlbind(this,function(白黒){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (白黒==="白");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['変更']((((root['画像パス']+"panda/white.png?")+(((255)).乱数()))));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['変更']((((((root['画像パス']+"panda/")+(this['ピクセルの色']))+".png?")+(((255)).乱数()))));
}));
});
this['本体']['反映'](("白"));
this['トグル']=dtlbind(this,function(){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return (this['白黒']==="白");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['白黒']="黒";
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['白黒']="白";
}));
return this['本体']['反映']((this['白黒']));
});
this['リセット']=dtlbind(this,function(){
var self=this;var 自分=self;
this['白黒']="白";
return this['本体']['反映']((this['白黒']));
});
this['位置']=dtlbind(this,function(x,y){
var self=this;var 自分=self;
this['本体']['位置']((x),(y));
this['x座標']=x;
return this['y座標']=y;
});
return this['大きさ']=dtlbind(this,function(w,h){
var self=this;var 自分=self;
return this['本体']['大きさ']((w),(h));
});
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Pixel.js.map
