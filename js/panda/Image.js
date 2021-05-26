(function(){this['Image']=this['UI']['create']();
this['Image']['left']=(0);
this['Image']['attachEvent']=dtlbind(this,function(){
var self=this;var 自分=self;
var t;
t=this;
return this['element']['click'](dtlbind(this,function(){
var self=this;var 自分=self;
return t['action']();
}));
});
this['Image']['initialize']=dtlbind(this,function(url){
var self=this;var 自分=self;
var t;
t=this;
this['element']=root['window']['$']("<img></img>")['attr']("src",(url))['css']("position","absolute")['css']("vertical-align","top")['css']("white-space","nowrap");
return this['autoLayout']();
});
this['Image']['setAction']=dtlbind(this,function(a){
var self=this;var 自分=self;
this['action']=a;
return this;
});
this['Image']['getImageURL']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['element']['attr']("src");
});
this['Image']['change']=dtlbind(this,function(url){
var self=this;var 自分=self;
this['element']['attr']("src",(url));
return this;
});
this['Image']['setHover']=dtlbind(this,function(imgURL){
var self=this;var 自分=self;
var _saveImgURL;
var _hoverImgURL;
var _f1;
var _f2;
_saveImgURL=this['getImageURL']();
_hoverImgURL=imgURL;
_f1=dtlbind(this,function(){
var self=this;var 自分=self;
return this['change']((_hoverImgURL));
})['bind']((this));
_f2=dtlbind(this,function(){
var self=this;var 自分=self;
return this['change']((_saveImgURL));
})['bind']((this));
this['element']['hover']((_f1),(_f2));
return this;
});
this['Image']['size']=dtlbind(this,function(w,h){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return w;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['element']['attr']("width",(w));
}));
dtlbind(this,function(){
var self=this;var 自分=self;
return h;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['element']['attr']("height",(h));
}));
return this;
});
this['Image']['zIndex']=dtlbind(this,function(n){
var self=this;var 自分=self;
this['element']['css']("z-index",(n));
return this;
});
this['addAlias']("Image","image")['addAlias']("Image","画像");
return this['Image']['addAlias']("setAction","動作設定")['addAlias']("action","動作")['addAlias']("getImageURL","画像URL？")['addAlias']("change","変更")['addAlias']("setHover","ホバー画像")['addAlias']("size","大きさ");
}).checkerror().apply(root,[]);
//# sourceMappingURL=Image.js.map
