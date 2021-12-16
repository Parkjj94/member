// 마우스 이벤트 효과
var pic = document.getElementById('pic');
pic.onmouseover = changePic; //함수 호출
pic.onmouseout = originPic;

function changePic(){       //사진 변경
    pic.src = "../static/images/healing.jpg"
}

function originPic(){       // 원래 사진으로 변경
    pic.src = "../static/images/activity.jpg"
}

setInterval(myWatch, 1000); //1초 간격으로 설정

function myWatch(){
var date = new Date();
var now = date.toLocaleTimeString();
document.getElementById("demo").innerHTML = now;
}
