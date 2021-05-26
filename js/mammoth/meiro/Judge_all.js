(function(){return this['命令終了時の動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['クリア判定']=this['偽'];
root['ゴール判定']=this['偽'];
dtlbind(this,function(){
var self=this;var 自分=self;
return this['スタートゴール']['ゴール']['現在地']['同じ?']((this['ドローン']['現在地']));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['クリア判定']=this['真'];
root['ゴール判定']=this['真'];
return root['クリア条件']['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
root['window']['console']['log']((this['ドローン']['持ち物たち']['選ぶ'](dtlbind(this,function(持ち物){
var self=this;var 自分=self;
return ((要素)===(持ち物['名前']));
}))));
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['ドローン']['持ち物たち']['選ぶ'](dtlbind(this,function(持ち物){
var self=this;var 自分=self;
return ((要素)===(持ち物['名前']));
}))['要素数?']())<(2));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア判定']=this['偽'];
}));
}));
}));
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['ゴール判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (root['命令数']['数字']<=(22));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['正解']['鳴らす']();
return root['正解メッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['最短じゃない正解メッセージ']['実行']();
}));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['たりないメッセージ']['実行']();
}));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['ゴールしていないメッセージ']['実行']();
}));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Judge_all.js.map
