(function(){return this['サウンド準備']=dtlbind(this,function(){
var self=this;var 自分=self;
root['正解']=root['window']['$'](((((("<audio preload="+(this['dq']))+"auto")+(this['dq']))+"><audio>")));
root['正解']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"success.wav")+(this['dq']))+" type=")+(this['dq']))+"audio/wav")+(this['dq']))+">")))));
root['正解']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"success.mp3")+(this['dq']))+" type=")+(this['dq']))+"audio/mp3")+(this['dq']))+">")))));
root['正解']['appendTo']((root['window']['$']("head")));
root['正解']['鳴らす']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['get']((0))['play']();
});
root['失敗']=root['window']['$'](((((("<audio preload="+(this['dq']))+"auto")+(this['dq']))+"><audio>")));
root['失敗']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"faild.wav")+(this['dq']))+" type=")+(this['dq']))+"audio/wav")+(this['dq']))+">")))));
root['失敗']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"faild.mp3")+(this['dq']))+" type=")+(this['dq']))+"audio/mp3")+(this['dq']))+">")))));
root['失敗']['prop']("volume",(0.4));
root['失敗']['appendTo']((root['window']['$']("head")));
root['失敗']['鳴らす']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['get']((0))['play']();
});
root['ヒット']=root['window']['$'](((((("<audio preload="+(this['dq']))+"auto")+(this['dq']))+"><audio>")));
root['ヒット']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"hit.wav")+(this['dq']))+" type=")+(this['dq']))+"audio/wav")+(this['dq']))+">")))));
root['ヒット']['append']((root['window']['$']((((((((((("<source src="+(this['dq']))+(root['soundディレクトリのパス']))+"hit.mp3")+(this['dq']))+" type=")+(this['dq']))+"audio/mp3")+(this['dq']))+">")))));
root['ヒット']['appendTo']((root['window']['$']("head")));
return root['ヒット']['鳴らす']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['get']((0))['play']();
});
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Sound.js.map
