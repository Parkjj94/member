// 회원 가입 유효성(validation) 검사

function checkMember(){
    var form = document.regForm;
    var id = form.mid.value;        // id는 5글자
    var pwd1 = form.passwd.value;    // password는 8글자, 영문자, 숫자, 특수문자 포함 모두 포함
    var pwd2 = form.passwd_confirm.value;
    var name = form.name.value

    // 비밀번호 정규 표현식 생성
    var pwd_pat1 = /[0-9A-Za-z]/    // 영문자, 숫자
    var pwd_pat2 = /[~!@#$%^&*]/      // 특수문자

    if(id.length != 5){     // 아이디 글자수 5자가 아니면
        alert("아이디는 5자만 가능합니다.")
        form.mid.select();     //선택 영역지정
        return false;
    }
    else if(pwd1.length != 8 || !pwd_pat1.test(pwd1) || !pwd_pat2.test(pwd1)) {
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자리입니다.");
        form.pwd.select();
        return false;
    }
    else if(pwd1 != pwd2){     //비밀번호와 비밀번호 확인이 일치하지 않으면
        alert("비밀번호를 동일하게 입력해 주세요.")
        form.passwd_confirm.select();
        return false;
    }
    else if(name == ""){
        alert("이름은 필수 입력사항입니다.");
        form.name.focus(); //커서 이동
        return false;
    }
    else{
        form.submit();         // form 전송
    }

}