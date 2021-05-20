$(function () {
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function () {
    // console.log($(this.hash))

    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();

    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 1500);
  });

  //go to top buttom display
  $(window).scroll(function () {
    // console.log($(this).scrollTop())

    if ($(this).scrollTop() == 0) {
      $(".back_to_top").removeClass("on");
    } else {
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 add class
  let wHeight = $(window).innerHeight();
  console.log("window height: " + wHeight);
  $(window).scroll(function () {
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function () {
      let thisOffset = $(this).offset();
      if (
        thisOffset.top <= thisScrollTop &&
        thisScrollTop < thisOffset.top + wHeight
      ) {
        $(this).addClass("active");
      }
    });
  });
});

//iframe api
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "400",
    width: "620",
    videoId: "9lRDo1XjV9U",
    playerVars: {
      setVolume: 0,
      rel: 0,
      autohide: 1,
      enablejsapi: 1,
      disablekb: 1,
      loop: 1,
      frameborder: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  //로딩된 후에 실행될 동작
  event.target.playVideo(); //자동재생
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.
  }
}
