function doSubmit() {
    let frm = document.form1;
    let flag = true;
    idCheck();
    pwCheck();
    emailCheck();
    nameCheck();
    birthCheck();
    genderCheck();
    telCheck();
    if (document.getElementById('realName').checked) {
        allConfimcheck();
    }


    if (!idCheck() || !pwCheck() || !emailCheck() || !nameCheck() || !birthCheck() || !genderCheck() || !telCheck() || !allConfimcheck()) {
        flag = false;
    }

    if (flag) {
        if (confirm("입력한 내용이 맞나요")) {
            frm.submit();
        }
    }
}
function sizeChange() {
    let containDiv = document.getElementById('container');
    document.getElementById('containerWidth').innerHTML =
        '<h1>width : ' + containDiv.clientWidth + '</h1>';
    document.getElementById('containerHight').innerHTML =
        '<h1>hight : ' + containDiv.clientHeight + '</h1>';

    if (containDiv.clientWidth < 768) {
        document.getElementById('inner').style = "width:100%;";
    } else {
        document.getElementById('inner').style = "width: 500px;";
    }
}

function realNamecheck() {
    if (document.getElementById('realName').checked) {
        document.getElementById('realNameCheck').style = "color: #00ff04;";
        realNameMenuOn();
    } else {
        document.getElementById('realNameCheck').style = "color: #b8b8b8;";
        realNameMenuOff();
    }
}
function inputFocusTb(id) {
    if (document.getElementById(id + "Error").innerHTML == '') {
        document.getElementById(id + "Tr").style = "border:2px solid green";
    }
}
function inputFocusDv(id) {
    if (document.getElementById(id + "Error").innerHTML == '') {
        document.getElementById(id + "Div").style = "border:2px solid green";
    }
}

function idCheck() {
    let frm = document.form1;
    document.getElementById("inputIdTr").style = "";
    document.getElementById('inputIdError').innerHTML = "";
    document.getElementById("inputIdTr").className = "input R";
    let regID = /^[a-z0-9_-]{4,19}$/;
    if (frm.inputId.value === '') {
        document.getElementById('inputIdError').innerHTML = "*아이디:필수정보입니다.";
        return false;
    } else if (!regID.test(frm.inputId.value)) {
        document.getElementById('inputIdError').innerHTML = "*아이디:5~20자의 영문 소문자, 숫자와 특수기호(_)(-)만 사용 가능합니다.";
        return false;
    } else {
        document.getElementById("inputIdTr").className = "input";

        return true;
    }
}
function pwCheck() {
    let frm = document.form1;
    document.getElementById("inputPwTr").style = "";
    document.getElementById('pwNo').innerHTML = "";
    document.getElementById('inputPwError').innerHTML = "";
    document.getElementById("inputPwTr").className = "input R";
    let regPw = /^[a-z0-9A-Z\W]{8,16}$/g;
    if (frm.inputPw.value === '') {
        document.getElementById('inputPwError').innerHTML = "*비밀번호:필수정보입니다.";
        return false;
    } else if (!regPw.test(frm.inputPw.value)) {
        document.getElementById('pwNo').innerHTML = "사용불가";
        document.getElementById('inputPwError').innerHTML = "*비밀번호:8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요.";
        return false;
    } else {
        document.getElementById("inputPwTr").className = "input";

        return true;
    }
}
function pwView() {
    let frm = document.form1;
    if (frm.inputPw.type === 'password') {
        frm.inputPw.type = "text";
        document.getElementById('pwEye').innerHTML = "<i class='icon fa-solid fa-eye-slash' onclick='pwView()'></i>";
    } else {
        frm.inputPw.type = "password";
        document.getElementById('pwEye').innerHTML = "<i class='icon fa-solid fa-eye' onclick='pwView()'></i>";
    }
}

function emailCheck() {
    let frm = document.form1;
    document.getElementById("inputEmailTr").style = "";
    document.getElementById('inputEmailError').innerHTML = "";
    document.getElementById("inputEmailTr").className = "input R";
    let regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (frm.inputEmail.value === '') {
        document.getElementById("inputEmailTr").className = "input";
        return true;
    } else if (!regEmail.test(frm.inputEmail.value)) {
        document.getElementById('inputEmailError').innerHTML = "*이메일 주소가 정확한지 확인해 주세요.";
        return false;
    } else {
        document.getElementById("inputEmailTr").className = "input";
        return true;
    }
}
function nameCheck() {
    let frm = document.form1;
    document.getElementById("inputNameDiv").style = "";
    document.getElementById('inputNameError').innerHTML = "";
    document.getElementById("inputNameDiv").className = "input R";
    let regName = /^[가-힣a-zA-Z]{1,}$/;
    if (frm.inputName.value === '') {
        document.getElementById('inputNameError').innerHTML = "*이름:필수정보입니다.";
        return false;
    } else if (!regName.test(frm.inputName.value)) {
        document.getElementById('inputNameError').innerHTML = "*이름:한글, 영문, 대/소문자를 사용해주세요.(특수기호,공백 사용 불가)";
        return false;
    } else {
        document.getElementById("inputNameDiv").className = "input";
        return true;
    }
}
function birthCheck() {
    let frm = document.form1;
    let date = new Date();
    let dday = '';
    dday = dday + (date.getFullYear()) + (date.getMonth() + 1) + date.getDate();
    document.getElementById("inputBirthDiv").style = "";
    document.getElementById('inputBirthError').innerHTML = "";
    document.getElementById("inputBirthDiv").className = "input R";

    let regBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (frm.inputBirth.value === '') {
        document.getElementById('inputBirthError').innerHTML = "*생년월일:필수정보입니다.";
        return false;
    } else if (frm.inputBirth.value.length != 8) {
        document.getElementById('inputBirthError').innerHTML = "*생년월일:생년월일은 8자리 숫자로 입력해주세요.";
        return false;
    } else if (!regBirth.test(frm.inputBirth.value)) {
        document.getElementById('inputBirthError').innerHTML = "*생년월일:생년월일이 정확한지 확인해주세요";
        return false;
    } else if (frm.inputBirth.value < dday - 1100000) {
        document.getElementById('inputBirthError').innerHTML = "*생년월일:생년월일이 정확한지 확인해주세요";
        return false;
    } else if (frm.inputBirth.value > dday - 140000 + 1) {
        document.getElementById('inputBirthError').innerHTML = "*생년월일:만 14세 미만의 어린이는 보호자의 동의가 필요합니다.";
        document.getElementById("inputBirthDiv").className = "input";
        document.getElementById("inputBirthError").style = "color:green;";
        return false;
    }
    else {
        document.getElementById("inputBirthDiv").className = "input";
        return true;
    }
}

function telCheck() {
    let frm = document.form1;
    document.getElementById("inputTelDiv").style = "";
    document.getElementById('inputTelError').innerHTML = "";
    document.getElementById("inputTelDiv").className = "input R";
    let regTel = /^(01[0-9]{1})[0-9]{3,4}[0-9]{4}$/;
    if (frm.inputTel.value === '') {
        document.getElementById('inputTelError').innerHTML = "*휴대전화번호:필수정보입니다.";
        return false;
    } else if (!regTel.test(frm.inputTel.value)) {
        document.getElementById('inputTelError').innerHTML = "*휴대전화번호:휴대전화번호가 정확한지확인해주세요.";
        return false;
    } else {
        document.getElementById("inputTelDiv").className = "input";
        return true;
    }
}

function genderCheck() {
    let id = ['genderM', 'genderW', 'genderN'];
    let flag = false;

    for (let data of id) {
        if (document.getElementById(data).checked) {
            document.getElementById(data + "Div").style = " border: 2px solid green; color:green"
            document.getElementById("inputGenderDiv").className = "input";
            document.getElementById('inputGenderError').innerHTML = "";
            flag = true;
        } else {
            document.getElementById(data + "Div").style = ""
        }
    }
    if (flag) {
        return true;
    } else {
        document.getElementById("inputGenderDiv").className = "input R";
        document.getElementById('inputGenderError').innerHTML = "*성별:성별을 선택해주세요.";
        return false;
    }
}

function realNameMenuOn() {
    document.getElementById('selectTelCompanyDiv').style = "";
    document.getElementById('allConfimDiv').style = "";
    document.getElementById('inputGlobalTelDiv').style = "display: none;";
}

function realNameMenuOff() {
    document.getElementById('selectTelCompanyDiv').style = "display: none;";
    document.getElementById('allConfimDiv').style = "display: none;";
    document.getElementById('allConfimError').innerHTML = "";
    document.getElementById('inputGlobalTelDiv').style = "";
}


function allConfimcheck() {
    if (document.getElementById('allConfim').checked) {
        document.getElementById('allConfimCheck').style = "color: #00ff04;";
        document.getElementById('allConfimDiv').className = "allConfimDiv G";
        document.getElementById('allConfimError').innerHTML = "";
        return true;
    } else {
        document.getElementById('allConfimCheck').style = "color: #ff0000;";
        document.getElementById('allConfimDiv').className = "allConfimDiv R";
        document.getElementById('allConfimError').innerHTML = "필수 약관에 모두 동의해 주세요.";
        return false;
    }
}