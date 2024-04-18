//이벤트 설정한다.
//1. ul 객체를 찾아서 객체 참조변수 저장한다.
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

//2. navToggle 이벤트 기능을 입력한다.
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
