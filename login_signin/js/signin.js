var keyList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
var temp = "";

function idCheck() {
  var $idInput = document.getElementById("idInput");
  var $idCorrect = document.getElementById("idCorrect");
  var idExp = /^[0-9a-zA-Z_]{3,11}$/;
  if ($idInput.value === "") {
    $idCorrect.innerHTML = "아이디는 빈 칸일 수 없습니다.";
    return false;
  } else if (!$idInput.value.match(idExp)) {
    $idCorrect.innerHTML = "아이디 조건에 맞지 않습니다.";
    return false;
  } else {
    $idCorrect.innerHTML = "OK";
    return true;
  }
}
function pwCheck() {
  var $pwInput = document.getElementById("pwInput");
  var $pwCorrect = document.getElementById("pwCorrect");
  var pwExp = /^.*(?=^.{6,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if ($pwInput.value === "") {
    $pwCorrect.innerHTML = "비밀번호는 빈 칸일 수 없습니다.";
    return false;
  } else if (!$pwInput.value.match(pwExp)) {
    $pwCorrect.innerHTML = " 비밀번호 조건에 맞지 않습니다..";
    return false;
  } else {
    $pwCorrect.innerHTML = " OK";
    return true;
  }
}
function pwCheck2() {
  var $pwInput = document.getElementById("pwInput");
  var $pwInput2 = document.getElementById("pw2Input");
  var $pwCorrect2 = document.getElementById("pwCorrect2");
  if ($pwInput.value === $pwInput2.value) {
    $pwCorrect2.innerHTML = " OK";
    return true;
  } else {
    $pwCorrect2.innerHTML = " 비밀번호가 일치하지 않습니다.";
    return false;
  }
}
function nameCheck() {
  var $nameInput = document.getElementById("nameInput");
  var $nameCorrect = document.getElementById("nameCorrect");
  var nameExp = /^[가-힣]{2,12}$/; //한글만 입력
  if (!$nameInput.value.match(nameExp)) {
    $nameCorrect.innerHTML = " 한글로 2자 이상 입력해 주세요.";
    return false;
  } else if ($nameInput.value === "") {
    $nameCorrect.innerHTML = "이름은 빈 칸일 수 없습니다.";
    return false;
  } else {
    $nameCorrect.innerHTML = " OK";
    return true;
  }
}
function nickCheck() {
  var $nickInput = document.getElementById("nickInput");
  var $nickCorrect = document.getElementById("nickCorrect");
  var nickExp = /^[가-힣0-9\x20]{2,12}|[a-zA-Z0-9\x20]{4,12}$/;

  if (!$nickInput.value.match(nickExp)) {
    $nickCorrect.innerHTML = " 조건에 맞지 않는 닉네임입니다.";
    return false;
  } else if ($nickInput.value === "") {
    $nickCorrect.innerHTML = "닉네임은 빈 칸일 수 없습니다.";
    return false;
  } else {
    $nickCorrect.innerHTML = " OK";
    return true;
  }
}
function emailCheck() {
  var $emailInput = document.getElementById("emailInput");
  var $emailCorrect = document.getElementById("emailCorrect");
  var emailExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!$emailInput.value.match(emailExp)) {
    $emailCorrect.innerHTML = " 올바른 메일형식이 아닙니다.";
    return false;
  } else if ($emailInput.value === "") {
    $emailCorrect.innerHTML = "E-mail은 빈 칸일 수 없습니다.";
    return false;
  } else {
    $emailCorrect.innerHTML = " OK";
    return true;
  }
}
function telCheck() {
  var $telInput = document.getElementById("telInput");
  var $telCorrect = document.getElementById("telCorrect");
  var telExp = /^[0-9]{9,10}$/;
  if (!$telInput.value.match(telExp)) {
    $telCorrect.innerHTML = " 숫자만 입력해 주세요.";
    return false;
  } else if ($telInput.value === "") {
    $telCorrect.innerHTML = "전화번호는 빈 칸일 수 없습니다.";
    return false;
  } else {
    $telCorrect.innerHTML = " OK";
    return true;
  }
}
function phoneCheck() {
  var $phoneInput = document.getElementById("phoneInput");
  var $phoneCorrect = document.getElementById("phoneCorrect");
  var phoneExp = /^[0-9]{10,11}$/;
  if (!$phoneInput.value.match(phoneExp)) {
    $phoneCorrect.innerHTML = " 숫자만 입력해 주세요.";
    return false;
  } else if ($phoneInput.value === "") {
    $phoneCorrect.innerHTML = "휴대폰번호는 빈 칸일 수 없습니다.";
    return false;
  } else {
    $phoneCorrect.innerHTML = " OK";
    return true;
  }
}
function postCheck() {
  var $inputPost = document.getElementById("inputPost");
  var $postCorrect = document.getElementById("postCorrect");
  postExp = /^\d{3}-?\d{3}$/u;
  if (!$inputPost.value.match(postExp)) {
    $postCorrect.innerHTML = " 우편번호 형식에 맞지 않습니다.";
    return false;
  } else if ($inputPost.value === "") {
    $postCorrect.innerHTML = "우편번호는 빈 칸일 수 없습니다.";
    return false;
  } else {
    $postCorrect.innerHTML = " OK";
    return true;
  }
}

function addressCheck() {
  var $inputAddress = document.getElementById("inputAddress");
  var $addressCorrect = document.getElementById("addressCorrect");
  if ($inputAddress.value === "") {
    $addressCorrect.innerHTML = " 기본주소는 빈 칸일 수 없습니다.";
    return false;
  } else {
    $addressCorrect.innerHTML = " OK";
    return true;
  }
}

function makeCode(plength) {
  temp = "";
  for (i = 0; i < plength; i++)
    temp += keyList.charAt(Math.floor(Math.random() * keyList.length));
  return temp;
}

function populateform() {
  var canvasRobot = document.getElementById("canvas_robot");
  var canvasContext = canvasRobot.getContext("2d");
  canvasContext.clearRect(0, 0, canvasRobot.width, canvasRobot.height);
  canvasContext.font = "italic 18px Georgia";
  canvasContext.fillText(makeCode(8), 8, 30);
}

function charCheck() {
  var $codeCorrect = document.getElementById("codeCorrect");
  var $inputCode = document.getElementById("inputCode");
  if (temp === $inputCode.value) {
    $codeCorrect.innerHTML = "일치합니다.";
    return true;
  } else if ($codeCorrect.value === "") {
    $codeCorrect.innerHTML = "자동등록방지문자를 입력해 주세요.";
  } else {
    $codeCorrect.innerHTML = "문자가 일치하지 않습니다. 다시 입력해 주세요.";
    return false;
  }
}

function signinDone(event) {
  if (
    idCheck() &&
    nameCheck() &&
    phoneCheck() &&
    emailCheck() &&
    pwCheck() &&
    pwCheck2() &&
    telCheck() &&
    postCheck() &&
    addressCheck() &&
    charCheck()
  ) {
    alert("가입되었습니다.");
    window.location = "./login.html";
  } else {
    alert("실패하였습니다. 다시 한 번 확인해 주세요.");
    event.preventDefault();
  }
}
