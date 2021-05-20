$(function () {
  $('nav ul li a,.back_to_top a,a.button,.footer_top a').click(function () {
    // console.log($(this.hash))

    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();

    $('html,body').stop();
    $('html,body').animate({ scrollTop: offsetElem.top }, 1500);
  });

  //go to top buttom display
  $(window).scroll(function () {
    // console.log($(this).scrollTop())

    if ($(this).scrollTop() == 0) {
      $('.back_to_top').removeClass('on');
    } else {
      $('.back_to_top').addClass('on');
    }
  });

  //section offset top 값으로 add class
  let wHeight = $(window).innerHeight();
  console.log('window height: ' + wHeight);
  $(window).scroll(function () {
    let thisScrollTop = $(this).scrollTop();
    $('section').each(function () {
      let thisOffset = $(this).offset();
      if (
        thisOffset.top <= thisScrollTop &&
        thisScrollTop < thisOffset.top + wHeight
      ) {
        $(this).addClass('active');
      }
    });
  });

  var timer = setTimeout(function () {
    $('#header, #intro img,.title_1,.title_2,.title_3,.intro_right').addClass(
      'aniOn'
    );
    $('.title_2').toggleClass('changed');
  }, 1500);
});

//iframe api
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '400',
    width: '620',
    videoId: '9lRDo1XjV9U',
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
  event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

//timer
function countDday() {
  var dday = new Date('Jun 11,2021,23:59:59').getTime(); //디데이
  setInterval(function () {
    var now = new Date(); //현재 날짜 가져오기
    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      $('.timer_inner').html('마감되었습니다.');
      $('#conut_list').hide();
    }

    if (s < 10) {
      s = '0' + s;
    }
    $('#days').html(d + '.');
    $('#hour').html(h + '.');
    $('#mimutes').html(m + '.');
    $('#seconds').html(s);
  }, 1000);
}
countDday();
