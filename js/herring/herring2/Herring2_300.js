(function(){return this['module']['require']("../../js/herring/herring2/Image.js","../../js/herring/herring2/Card.js","../../js/herring/herring2/UI.js",dtlbind(this,function(){
var self=this;var 自分=self;
this['画面幅']=(300);
this['画面高さ']=(210);
this['imageディレクトリのパス']="../../image/";
this['画像パス']=this['imageディレクトリのパス'];
this['横倍率']=((300)/(500));
this['縦倍率']=((210)/(350));
this['画面配置']['実行']();
this['カードの幅']=((55)*this['横倍率']);
this['カードの左上x']=(((-(240)*this['横倍率'])+(((((480)*this['横倍率'])-(this['カードの幅']*(8))))/(9))));
this['カードの左上y']=((90)*this['縦倍率']);
this['カードの間隔']=(((((480)*this['横倍率'])-((this['カードの幅']*(8)))))/(9));
this['カードの配置']['実行']();
this['二進では画像の幅']=((500)*this['横倍率']);
this['二進では画像の左上x']=(-this['二進では画像の幅']/(2));
this['二進では画像の左上y']=((175)*this['縦倍率']);
this['十進ラベルの左上y']=(-(65)*this['縦倍率']);
this['十進ラベルの文字サイズ']=((30)*this['横倍率']);
this['十進ラベルの左上x']=((-this['十進ラベルの文字サイズ']/(2))-this['十進ラベルの文字サイズ']);
this['十進ラベルの数字の間隔']=this['十進ラベルの文字サイズ'];
this['十進ラベルの文字色']=this['色']['作る']((255),(255),(255));
this['GOボタンの幅']=((150)*this['横倍率']);
this['GOボタンの左上x']=(-this['GOボタンの幅']/(2));
this['GOボタンの左上y']=((3)*this['縦倍率']);
this['イラストトグルボタンの左上x']=((206)*this['横倍率']);
this['イラストトグルボタンの左上y']=((137)*this['縦倍率']);
this['イラストトグルボタンの幅']=((28)*this['横倍率']);
return this['UIの配置']['実行']();
}));
}).checkerror().apply(root,[]);
//# sourceMappingURL=Herring2_300.js.map