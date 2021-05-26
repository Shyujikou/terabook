(function(){this['カード']=this['作る']();
this['カード']['幅']=(100);
this['カード']['高さ']=(162);
this['カード']['initialize']=dtlbind(this,function(数字){
var self=this;var 自分=self;
this['辞書']=this['辞書']['作る']();
this['辞書']['書く']("表",((((root['imageディレクトリのパス']+"herring/")+((""+数字)))+".png")));
this['辞書']['書く']("裏",((root['imageディレクトリのパス']+"herring/0.png")));
this['裏表']="表";
this['値']=数字;
this['本体']=this['画像']['作る']();
this['本体']['変更']((this['辞書']['読む']("表")));
return this['本体']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['トグル']();
})['bind']((this));
});
this['カード']['トグル']=dtlbind(this,function(){
var self=this;var 自分=self;
dtlbind(this,function(){
var self=this;var 自分=self;
return ((this['裏表'])==="表");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['裏表']="裏";
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['裏表']="表";
}));
return this['本体']['変更']((this['辞書']['読む']((this['裏表']))));
});
this['カード']['値?']=dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (this['裏表']==="表");
})['なら']()['そうでなければ'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['値'];
}))['実行'](dtlbind(this,function(){
var self=this;var 自分=self;
return (0);
}));
});
return this['カードの配置']=dtlbind(this,function(){
var self=this;var 自分=self;
this['カード1']=this['カード']['作る']((1));
this['カード2']=this['カード']['作る']((2));
this['カード4']=this['カード']['作る']((4));
this['カード8']=this['カード']['作る']((8));
this['カード幅']=root['カードの幅'];
this['左上x']=root['カードの左上x'];
this['左上y']=root['カードの左上y'];
this['間隔']=root['カードの間隔'];
return this['配列']['作る']((this['カード8']),(this['カード4']),(this['カード2']),(this['カード1']))['それぞれ実行'](dtlbind(this,function(要素){
var self=this;var 自分=self;
要素['本体']['大きさ']((this['カード幅']))['位置']((this['左上x']),(this['左上y']));
return this['左上x']=((this['左上x']+this['カード幅'])+this['間隔']);
}));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Card.js.map
