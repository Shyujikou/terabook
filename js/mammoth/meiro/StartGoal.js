(function(){this['スタートゴール']=this['作る']();
this['スタートゴール']['本体'];
return this['スタートゴール']['表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['スタート']=this['作る']();
this['スタート']['持ち物']=root['偽'];
this['スタート']['実体']=this['スタートゴール'];
this['スタート']['位置設定']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
return this['現在地y']=this['現在地']['y?']();
});
this['スタート']['位置設定']((this['マップ']['読む']((1),(1))));
this['ゴール']=this['作る']();
this['ゴール']['持ち物']=root['偽'];
this['ゴール']['実体']=this['スタートゴール'];
this['ゴール']['位置設定']=dtlbind(this,function(場所){
var self=this;var 自分=self;
this['現在地']=場所;
this['現在地横']=this['現在地']['横?']();
this['現在地縦']=this['現在地']['縦?']();
this['現在地x']=this['現在地']['x?']();
return this['現在地y']=this['現在地']['y?']();
});
return this['ゴール']['位置設定']((this['マップ']['読む']((7),(5))));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=StartGoal.js.map
