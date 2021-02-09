$(function(){
  //drawerjs
  $('.drawer').drawer();

  //wowjs
  new WOW().init();

  //TOPに戻るボタン（フローティングアイテム）
  $(window).on("scroll", function() { // スクロール検知
    if ($(this).scrollTop() > 100) { // トップから100px以上スクロールしたら
      $('.totop').show(); // 表示する
    } else {
      $('.totop').hide(); // 100pxを下回ったら非表示にする
    }
  });

  $('.totop').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //スムーススクロール。ページ内リンクの書き方。
  $('a[href^="#"]').click(function(){ // #から始まるURLがクリックされた時
    let header = $('.header').innerHeight(); // .headerクラスがついた要素の高さを取得
    let speed = 300; // 移動速度を指定（ミリ秒）
    let id = $(this).attr("href"); // hrefで指定されたidを取得
    let target = $("#" == id ? "html" : id); // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let position = $(target).offset().top - header; //トップからの距離から固定header分の高さを引く

    $("html, body").animate( // ターゲットの位置までspeedの速度で移動
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  //ページ内リンクでクリックした要素に下線を引く（クリックイベントの処理）
  $('.header-nav-item-link').click(function() {
    $('.header-nav-item-link').removeClass('is-active');
    $(this).addClass('is-active');
  });
 
});