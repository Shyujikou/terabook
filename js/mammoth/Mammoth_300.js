(function(){return this['module']['require']("../../js/mammoth/Message.js","../../js/mammoth/Image.js","../../js/mammoth/Maptip.js","../../js/mammoth/Map.js","../../js/mammoth/Drone.js","../../js/mammoth/Coin.js","../../js/mammoth/Controler.js","../../js/mammoth/GUI.js","../../js/mammoth/OrderList.js","../../js/mammoth/Judge.js","../../js/mammoth/Sound.js",dtlbind(this,function(){
var self=this;var 自分=self;
this['imageディレクトリのパス']="../../image/";
this['画像パス']=this['imageディレクトリのパス'];
this['soundディレクトリのパス']="../../sound/";
this['サウンド準備']['実行']();
this['画面幅']=(300);
this['画面高さ']=(210);
this['横倍率']=((300)/(500));
this['縦倍率']=((210)/(350));
this['マップの幅']=((300)*this['横倍率']);
this['マップの高さ']=((180)*this['縦倍率']);
this['マップチップ幅']=(this['マップの幅']/(3));
this['マップチップ高さ']=(this['マップの高さ']/(2));
this['マップの左上座標x']=(-(240)*this['横倍率']);
this['マップの左上座標y']=((165)*this['縦倍率']);
this['マップ']['登録']("rd|ldr|ld");
this['マップ']['登録']("u|u|u");
this['マップ']['確定']();
this['マップ']['表示']();
this['コイン拡大倍率']=(0.7);
this['コイン']['表示']();
this['コイン']['位置まですぐ']((this['マップ']['読む']((3),(2))));
this['ドローン拡大倍率']=(1.4);
this['ドローン']['表示']();
this['ドローン']['位置まですぐ']((this['マップ']['読む']((1),(1))));
this['命令一覧背景の左上x']=(-(240)*this['横倍率']);
this['命令一覧背景の左上y']=(-(20)*this['縦倍率']);
this['命令一覧背景の幅']=((480)*this['横倍率']);
this['ボタン類の幅']=((150)*this['横倍率']);
this['じっこうボタンの左上x']=((80)*this['横倍率']);
this['じっこうボタンの左上y']=(-(128)*this['縦倍率']);
this['じっこうボタン表示']['実行']();
this['やりなおしボタンの左上x']=(-(75)*this['横倍率']);
this['やりなおしボタンの左上y']=(-(128)*this['縦倍率']);
this['やりなおしボタン表示']['実行']();
this['ひとつもどるボタンの左上x']=(-(230)*this['横倍率']);
this['ひとつもどるボタンの左上y']=(-(128)*this['縦倍率']);
this['ひとつもどるボタン表示']['実行']();
this['中央x']=(((((root['命令一覧背景の左上x'])+(root['命令一覧背景の左上x']))+(root['命令一覧背景の幅'])))/(2));
this['画像達の幅']=(root['命令一覧背景の幅']-(20));
this['画像達の間隔']=(this['画像達の幅']/(7));
this['画像w']=(this['画像達の間隔']*(((4)/(5))));
this['画像h']=this['画像w'];
this['一行目初期x']=((root['命令一覧背景の左上x']+(10))-((this['画像w']*(((1)/(5))))));
this['一行目y']=((root['命令一覧背景の左上y']-((17)*this['縦倍率'])));
this['矢印画像w']=(this['画像達の間隔']*(((1)/(5))));
this['矢印画像h']=(this['矢印画像w']*(((15)/(8))));
this['一行目矢印y']=(((root['命令一覧背景の左上y']-(((17)*this['縦倍率'])))-((this['画像h']/(2))))+((this['矢印画像h']/(2))));
this['一行目矢印初期x']=(this['一行目初期x']+((this['画像達の間隔']*(((4)/(5))))));
this['二行目初期x']=(this['一行目初期x']+(this['画像w']*(((3)/(5)))));
this['二行目y']=((root['命令一覧背景の左上y']-(((20)*this['縦倍率'])))-((root['画像h']*(((5)/(7))))));
this['二行目矢印初期x']=(this['二行目初期x']+((this['画像達の間隔']*(((4)/(5))))));
this['二行目矢印y']=((((root['命令一覧背景の左上y']-(((20)*this['縦倍率'])))-((this['画像h']/(2))))+((this['矢印画像h']/(2))))-((this['画像h']*(((5)/(7))))));
this['命令一覧背景表示']['実行']();
this['命令部']['表示']();
this['コントローラ1背景の左上x']=((70)*this['横倍率']);
this['コントローラ1背景の左上y']=((165)*this['縦倍率']);
this['コントローラ1背景の幅']=((170)*this['横倍率']);
this['コントローラ1背景の高さ']=((125)*this['縦倍率']);
this['コントローラ1背景h']=this['マップの高さ'];
this['コントローラ2背景の左上y']=(this['コントローラ1背景の左上y']-(root['コントローラ1背景の高さ']));
this['コントローラ背景表示']['実行']();
this['ボタンの画像幅']=((34)*this['横倍率']);
this['左ボタンの左上x']=(((((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))-((this['ボタンの画像幅']/(2))))-(this['ボタンの画像幅']))+(3));
this['左ボタンの左上y']=(((((((this['コントローラ1背景の左上y'])+(this['コントローラ1背景の左上y']))-(this['コントローラ1背景の高さ'])))/(2.4)))+((this['ボタンの画像幅']/(2))));
this['左ボタン表示']['実行']();
this['右ボタンの左上x']=(((((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))-((this['ボタンの画像幅']/(2))))+(this['ボタンの画像幅']))-(3));
this['右ボタンの左上y']=(((((((this['コントローラ1背景の左上y'])+(this['コントローラ1背景の左上y']))-(this['コントローラ1背景の高さ'])))/(2.4)))+((this['ボタンの画像幅']/(2))));
this['右ボタン表示']['実行']();
this['上ボタンの左上x']=(((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))-((this['ボタンの画像幅']/(2))));
this['上ボタンの左上y']=(((((((((this['コントローラ1背景の左上y'])+(this['コントローラ1背景の左上y']))-(this['コントローラ1背景の高さ'])))/(2.4)))+((this['ボタンの画像幅']/(2))))+(this['ボタンの画像幅']))-(3));
this['上ボタン表示']['実行']();
this['下ボタンの左上x']=(((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))-((this['ボタンの画像幅']/(2))));
this['下ボタンの左上y']=(((((((((this['コントローラ1背景の左上y'])+(this['コントローラ1背景の左上y']))-(this['コントローラ1背景の高さ'])))/(2.4)))+((this['ボタンの画像幅']/(2))))-(this['ボタンの画像幅']))+(3));
this['下ボタン表示']['実行']();
this['ボタン2の画像幅']=((this['コントローラ1背景の幅']/(2))-(25));
this['掴ボタンの左上x']=(((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))+(10));
this['掴ボタンの左上y']=(this['コントローラ2背景の左上y']-(5));
this['掴ボタンの画像幅']=(50);
this['掴ボタン表示']['実行']();
this['離ボタンの左上x']=((((((((this['コントローラ1背景の左上x'])+(this['コントローラ1背景の左上x']))+(this['コントローラ1背景の幅'])))/(2)))-(this['ボタン2の画像幅']))-(10));
this['離ボタンの左上y']=(this['コントローラ2背景の左上y']-(5));
this['離ボタンの画像幅']=(50);
this['離ボタン表示']['実行']();
return this['画像']['作る'](((root['画像パス']+"mammoth/background.png")))['大きさ']((this['画面幅']),(this['画面高さ']))['位置'](((-this['画面幅']/(2))),((this['画面高さ']/(2))))['zIndex'](-(2));
}));
}).checkerror().apply(root,[]);
//# sourceMappingURL=Mammoth_300.js.map
