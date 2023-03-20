

let id = document.getElementById('id')

let password = document.getElementById('pw')

let login = document.getElementById('login')

let errStack = 0;

login.addEventListener('click', () => {
    console.log("snffla");

    if (id.value == '2team'){
        if (password.value == '1234') {
            alert('로그인 되었습니다!') 
            ducument.location.href="www.naver.com";
            
        }
        else {
            alert('아이디와 비밀번호를 다시 확인해주세요')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }
    if(errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호를 찾기를 권장드립니다.')
    }
})