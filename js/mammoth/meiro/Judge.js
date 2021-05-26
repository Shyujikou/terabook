(function(){return this['命令終了時の動作']=dtlbind(this,function(){
var self=this;var 自分=self;
root['クリア判定']=this['偽'];
root['ゴール判定']=this['偽'];
root['クリア且つ所持数一致判定']=this['偽'];
dtlbind(this,function(){
var self=this;var 自分=self;
return this['スタートゴール']['ゴール']['現在地']['同じ?']((this['ドローン']['現在地']));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['クリア判定']=this['真'];
root['ゴール判定']=this['真'];
root['持っていない物']=this['配列']['作る']();
root['クリア条件']['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['ドローン']['持ち物たち']['選ぶ'](dtlbind(this,function(持ち物){
var self=this;var 自分=self;
return ((要素)===(持ち物['名前']));
}))['要素数?']())<(1));
})['なら']()['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['持っていない物']['書く']((要素));
return root['クリア判定']=this['偽'];
}));
}));
return root['クリア且つ所持数一致判定']=dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return ((root['クリア条件']['要素数?']())===(this['ドローン']['持ち物たち']['要素数?']()));
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['真'];
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['偽'];
}));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['偽'];
}));
}));
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['ゴール判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return root['クリア且つ所持数一致判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (root['命令数']['数字']<=(16));
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
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['クリア判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['違うの持ってるメッセージ']['実行']();
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
this['りんご判定']=(((root['持っていない物']['選ぶ'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return ((要素)===("りんご"));
}))['要素数?']())>(0)));
this['ぶどう判定']=(((root['持っていない物']['選ぶ'](dtlbind(this,function(要素){
var self=this;var 自分=self;
return ((要素)===("ぶどう"));
}))['要素数?']())>(0)));
this['両方判定']=this['全部']['本当']((this['りんご判定']),(this['ぶどう判定']));
return dtlbind(this,function(){
var self=this;var 自分=self;
return this['両方判定'];
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['りんごもぶどうも持っていないメッセージ']['実行']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['りんご判定'];
}))['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['りんごを持っていないメッセージ']['実行']();
}))['なら'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['ぶどう判定'];
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['ぶどうを持っていないメッセージ']['実行']();
}));
}));
}));
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
root['失敗']['鳴らす']();
return root['ゴールしていないメッセージ']['実行']();
}));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Judge.js.map
