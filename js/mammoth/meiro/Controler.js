(function(){this['コントローラ背景表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['x']=root['コントローラ1背景の左上x'];
this['y']=root['コントローラ1背景の左上y'];
this['w']=root['コントローラ1背景の幅'];
this['h']=root['コントローラ1背景の高さ'];
this['画像']['作る']((((root['画像パス']+"mammoth/meiro/buttonback2.png"))))['位置']((this['x']),(this['y']))['大きさ']((this['w']),(this['h']));
this['x']=this['x'];
this['y']=this['コントローラ2背景の左上y'];
this['w']=root['コントローラ1背景の幅'];
this['h']=((root['マップの高さ'])-this['h']);
return this['画像']['作る']((((root['画像パス']+"mammoth/meiro/back_meiro.png"))))['位置']((this['x']),(this['y']))['大きさ']((this['w']),(this['h']))['zIndex'](-(1));
});
this['左ボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['左ボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/left.png"))));
this['左ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['命令部']['追加']("←");
});
this['左ボタン']['大きさ']((root['ボタンの画像幅']));
this['左ボタン']['位置']((root['左ボタンの左上x']),(root['左ボタンの左上y']));
return this['左ボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/left-hover.png"))));
});
this['右ボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['右ボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/right.png"))));
this['右ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['命令部']['追加']("→");
});
this['右ボタン']['大きさ']((root['ボタンの画像幅']));
this['右ボタン']['位置']((root['右ボタンの左上x']),(root['右ボタンの左上y']));
return this['右ボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/right-hover.png"))));
});
this['上ボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['上ボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/up.png"))));
this['上ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['命令部']['追加']("↑");
});
this['上ボタン']['大きさ']((root['ボタンの画像幅']));
this['上ボタン']['位置']((root['上ボタンの左上x']),(root['上ボタンの左上y']));
return this['上ボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/up-hover.png"))));
});
return this['下ボタン表示']=dtlbind(this,function(){
var self=this;var 自分=self;
this['下ボタン']=this['画像']['作る']((((root['画像パス']+"mammoth/button/down.png"))));
this['下ボタン']['動作']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['命令部']['追加']("↓");
});
this['下ボタン']['大きさ']((root['ボタンの画像幅']));
this['下ボタン']['位置']((root['下ボタンの左上x']),(root['下ボタンの左上y']));
return this['下ボタン']['ホバー画像']((((root['画像パス']+"mammoth/button/down-hover.png"))));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=Controler.js.map
