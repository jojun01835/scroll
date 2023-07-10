let section2Offset = $(".section2").offset().top;
let section3Offset = $(".section3").offset().top;
let section4Offset = $(".section4").offset().top;
let animationStarted = false;

$(window).scroll(function () {
  let sct = $(window).scrollTop();

  if (sct > section2Offset - 150 && !animationStarted) {
    animationStarted = true;
    $(".section2 .left").stop().animate({ left: 0 }, 500);
    $(".section2 .right").stop().delay(500).animate({ right: 0 }, 500);
  } else if (sct <= section2Offset - 150 && animationStarted) {
    animationStarted = false;
    $(".section2 .left").stop().delay(500).animate({ left: "-100%" }, 500);
    $(".section2 .right").stop().animate({ right: "-100%" }, 500);
  }

  if (sct > section3Offset - 150) {
    $(".section3 .left").stop().fadeIn(1000);
    $(".section3 .right").stop().fadeIn(1000);
  } else {
    $(".section3 .left").stop().fadeOut(1000);
    $(".section3 .right").stop().fadeOut(1000);
  }
});

$(window).scroll(function () {
  $(".box").each(function () {
    const scrollTop = $(window).scrollTop();
    const boxTop = $(this).offset().top;

    if (scrollTop > boxTop - 1100) {
      $(this).stop().animate({ top: 0 }, 300);
    } else {
      $(this).stop().animate({ top: 300 }, 300);
    }
  });
});

$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollTop === 0) {
    $(".box").stop().animate({ top: 300 }, 300);
  }
});
