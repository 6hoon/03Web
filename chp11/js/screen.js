// 콜백함수 (onload call back fuction)
function call_js() {
  // 모든 UI객체참조변수 선언
  let slideshow = document.querySelector(".slideshow");
  let slideshow_slides = document.querySelector(".slideshow_slides");
  // <a href="#"><img></a> UI 객체배열
  let slides = document.querySelectorAll(".slideshow_slides a");
  let indicators = document.querySelectorAll(".indicator a");
  let prev = document.querySelector(`.prev`);
  let next = document.querySelector(`.next`);
  // 현재 화면의 위치 index, 시간설정, 슬라이드 수
  let currentIndex = 0;
  let timer = null;
  let slideCount = slides.length;

  // 이미지들을 일렬로 우측으로 배치
  for (let i = 0; i < slideCount; i++) {
    let newLeft = `${i * 100}%`;
    slides[i].style.left = newLeft;
  }

  // div.slideshow_slides 를 움직인다.
  function goToSlide(index) {
    currentIndex = index;
    let newLeft = `${index * -100}%`;
    slideshow_slides.style.left = newLeft;
    //
    indicators.forEach((e) => {
      e.classList.remove("active");
    });
    indicators[currentIndex].classList.add("active");
    // for (let i = 0; i < indicators.length; i++) {
    //   indicators[i].classList.remove("active");
    // }
    // indicators[currentIndex].classList.add("active");
  }
  // index 0~3 : timer초 간격으로 goToSlide(index)를 불러줌
  goToSlide(0);

  //
  function startTimer() {
    timer = setInterval(() => {
      currentIndex += 1;
      let index = currentIndex % slideCount;
      goToSlide(index);
    }, 3000);
  }

  startTimer();

  // 이벤트 처리
  slideshow_slides.addEventListener(`mouseenter`, function () {
    clearInterval(timer);
  });
  slideshow_slides.addEventListener(`mouseleave`, function () {
    startTimer();
  });
  prev.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });
  prev.addEventListener("click", function (e) {
    e.preventDefault(); // a tag 기본기능을 막는다.
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }
    goToSlide(currentIndex);
  });

  next.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });
  next.addEventListener("click", function (e) {
    e.preventDefault(); // a tag 기본기능을 막는다.
    currentIndex += 1;
    if (currentIndex > slideCount - 1) {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  });

  indicators.forEach((e) => {
    e.addEventListener(`mouseenter`, () => {
      clearInterval(timer);
    });
  });

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", (e) => {
      e.preventDefault();
      goToSlide(i);
    });
  }
} // end of call_js()
