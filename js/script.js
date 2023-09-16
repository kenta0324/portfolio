(function (d) {
  var config = {
      kitId: "mtp7pct",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

(function (d) {
  var config = {
      kitId: "mtp7pct",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

$(function () {
  // ハンバーガー
  $(".hamburger,.sp-nav a").on("click", function () {
    $(".sp-nav").fadeToggle();
    $(".hamburger").toggleClass("open");
  });
  //スライダー
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });

  $(".galley-box").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

function PageTopCheck() {
  var winScrollTop = $(this).scrollTop();
  var secondTop = $("#service-wrap").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if (winScrollTop >= secondTop) {
    $(".js-scroll").removeClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を除去
    $(".js-pagetop").addClass("scroll-view"); //.js-pagetopにscroll-viewというクラス名を付与
  } else {
    //元に戻ったら
    $(".js-scroll").addClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を付与
    $(".js-pagetop").removeClass("scroll-view"); //.js-pagetopからscroll-viewというクラス名を除去
  }
}

//クリックした際の動き
$(".scroll-top a").click(function () {
  var elmHash = $(this).attr("href"); //hrefの内容を取得
  if (elmHash == "#service-wrap") {
    //もし、リンク先のhref の後が#area-2の場合
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, pos);
  } else {
    $("body,html").animate({ scrollTop: 0 }, 300); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
  return false; //リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopCheck(); /* スクロールした際の動きの関数を呼ぶ*/
});
