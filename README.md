# 소담영화제 website

반응형디자인을 적용한 소담영화제 클론 웹페이지입니다.
- HTML,CSS,jQuery

### 🔎주요로직

- CSS transform을 이용한 로딩화면

- CSS transform을 이용한 반짝이는 밤하늘 background

```css

/* 가상선택자 ::before을 사용해 투명 bg로 된 별을 깔아주고 z-index -10을 줌 */

section::before {
  height: 100vh;
  width: 100%;
  background: url('../img/layout/section01_before.png');
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  transform-origin: 50% 50%;
  animation: loadingStar 1.5s ease-in-out;
}

/* 가상선택자 ::after을 사용해 배경색과 같은 문양을 넣고 rotation 시킴 */
/* z-index -9로 설정해 ::before에 깔아준 별 위로 올려 별을 노출시켰다 숨김을반복 */

section::after {
  background: url('../img/layout/section01_after.png');
  animation: rotation 80s linear infinite;
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: '';
  z-index: -9;
}
```

- Date 객체를 이용한 D-day 카운팅

```javascript
function countDday() {
// 1. Date객체로 마감 Date 생성
  var dday = new Date('Jun 11,2021,23:59:59').getTime(); //디데이
  setInterval(function () {
  // 2. 현재 Date를 실시간으로 받아옴
    var now = new Date();
    // 3. 목표한 Date - 현재 Date
    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    // 목표한 Date에 도달하면 html에 문구 출력
    if (distance < 0) {
      $('.timer_inner').html('마감되었습니다.');
      $('#conut_list').hide();
    }

  // 목표한 Date에 도달하지 않았을 경우 1000ms 단위로 html에 시간 출력
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
```



