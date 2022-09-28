//スクロールで出てくるナビ
// $(function(){
//   var startPos = 0,winScrollTop = 0;
//   $(window).on('scroll',function(){
//     winScrollTop = $(this).scrollTop();
//     if (winScrollTop >= startPos) {
//       if(winScrollTop >= 200){
//         $('header').addClass('hide');
//       }
//     } else {
//         $('header').removeClass('hide');
//     }
//     startPos = winScrollTop;
// });
// });

// ハンバーガーメニュー
$(function(){
  $("#menu").on("click", function(){
    console.log('ok');
      $(this).toggleClass("open");
      $('#menu-contents').toggleClass("hidden");
  });
});