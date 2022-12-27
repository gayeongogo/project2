const id1=document.getElementById('id1');

let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let email1=document.getElementById('email1');
let name1=document.getElementById('name1'); 
let tel1=document.getElementById('tel1');
let tel2=document.getElementById('tel2');
let tel3=document.getElementById('tel3');
let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');

let regId=/^[a-zA-Z0-9]{6,10}$/;
let regPw1=/^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;
let regName1=/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{3,10}$/;
let regEmail1=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*.[a-zA-Z]{2,3}$/g;
let regPhone1=/^01[0|1|6|7|8|9?]$/;
let regPhone2=/^[0-9]{3,4}$/;
let regPhone3=/[0-9]{4}$/;

//([0-9]{3,4})[0-9]{4}


id1.addEventListener("blur", function(){
    if(!regId.test(id1.value)){
        id1Msg.style.color='#dc000c';
        id1Msg.innerHTML="6~10자 이내로 설정해주세요.";
        id1.value="";
       
    }else{
        id1Msg.style.color='#0b5cc7';
        id1Msg.innerHTML="사용 가능한 아이디입니다";
    }
});

pw1.addEventListener("blur", function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color='#dc000c';
        pw1Msg.innerHTML="영문, 숫자, 특수문자 중 최소 2가지 유형을 혼합해 주세요.";
        pw1.value="";

    }else if((pw1.value=="") && (pw2.value=="")){
        pw1Msg.innerHTML="";
    }else{
        pw1Msg.style.color='#0b5cc7';
        pw1Msg.innerHTML="사용 가능한 비밀번호입니다.";
    }
});

pw2.addEventListener("focus", function(){
    if(document.getElementById('pw1').value==""){
        alert("패스워드를 입력해주세요");
        document.getElementById('pw1').focus();
    }
});
pw2.addEventListener("blur",function(){
    if(pw1.value !=pw2.value){
        pw2Msg.style.color='#dc000c';
        pw2Msg.innerHTML="비밀번호가 일치하지 않습니다. 다시 입력해주시기 바랍니다.";
        return false;
    }else{
        if((pw1.value=="") && (pw2.value=="")){
            pw1Msg.innerHTML="";
        }else{
            pw2Msg.style.color='#0b5cc7';
            pw2Msg.innerHTML="비밀번호가 일치합니다.";
        }
    }
});


tel1.addEventListener("blur", function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color='#dc000c';
        tel1Msg.innerHTML="숫자만 입력 가능합니다";
        tel1.value="";
    }else{
        tel1Msg.style.color='#0b5cc7';
        tel1Msg.innerHTML="";
    }
});

tel2.addEventListener("blur", function(){
    if(!regPhone2.test(tel2.value)){
        tel1Msg.style.color='#dc000c';
        tel1Msg.innerHTML="숫자만 입력 가능합니다";
        tel1.value="";
    }else{
        tel1Msg.style.color='#0b5cc7';
        tel1Msg.innerHTML="";
    }
});

tel3.addEventListener("blur", function(){
    if(!regPhone3.test(tel3.value)){
        tel1Msg.style.color='#dc000c';
        tel1Msg.innerHTML="숫자만 입력 가능합니다";
        tel1.value="";
    }else{
        tel1Msg.style.color='#0b5cc7';
        tel1Msg.innerHTML="";
    }
});

//document.getElementById("submit").onclick=function(){}  //밑의 것과 같음
document.getElementById('submit').addEventListener("click",function(){
    if(name1.value==""){
        alert("이름을 입력하세요");
        return false;
    }else{
        if(tel1.value==""){
            alert("전화번호를 입력하세요");
            return false;
        }else{
            if(id1.value==""){
                alert("아이디를 입력하세요");
                return false;
            }else{
                if(!regPw1.test(pw1.value)){
                    alert("비밀번호를 입력하세요")
                    pw1.value=""
                    return false;
                }else{
                    location.href = "result.html"
                }
            }
        }
    }
})