(function(){return this['命令終了時の動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['クリア判定']=this['偽'];
root['持ったまま']=this['偽'];
dtlbind(this,function(){
var self=this;var 自分=self;
return this['マップ']['取得']((1),(2))['同じ?']((this['コイン']['現在地']));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['コイン']['持たれてる']['反対']();
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア判定']=this['真'];
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return root['持ったまま']=this['真'];
}));
}));
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['正解']['鳴らす']();
return root['正解メッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['持ったまま'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['惜しいメッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['失敗メッセージ']['実行']();
}));
}));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Judge.js.map
