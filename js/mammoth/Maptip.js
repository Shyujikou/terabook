(function(){this['マップチップ']=this['作る']();
this['マップチップ']['initialize']=dtlbind(this,function(情報,横,縦){
var self=this;var 自分=self;
this['情報']=情報;
this['横']=横;
this['縦']=縦;
this['x']=(0);
this['y']=(0);
return this;
});
this['マップチップ']['上']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['マップ']['取得']((this['横']),((this['縦']-(1))));
});
this['マップチップ']['下']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['マップ']['取得']((this['横']),((this['縦']+(1))));
});
this['マップチップ']['左']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['マップ']['取得'](((this['横']-(1))),(this['縦']));
});
this['マップチップ']['右']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['マップ']['取得'](((this['横']+(1))),(this['縦']));
});
this['マップチップ']['x?']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['x'];
});
this['マップチップ']['y?']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['y'];
});
this['マップチップ']['横?']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['横'];
});
this['マップチップ']['縦?']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['縦'];
});
this['マップチップ']['情報?']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['情報'];
});
this['マップチップ']['進行可?']=dtlbind(this,function(方向){
var self=this;var 自分=self;
return this['情報']['含む?']((方向));
});
this['マップチップ']['同じ?']=dtlbind(this,function(チップ){
var self=this;var 自分=self;
return this['全部']['本当']((((this['横?']())===(チップ['横?']()))),(((this['縦?']())===(チップ['縦?']()))));
});
return this['マップチップ']['位置登録']=dtlbind(this,function(x,y){
var self=this;var 自分=self;
this['x']=x;
this['y']=y;
return this;
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Maptip.js.map
