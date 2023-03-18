const MaxStealPercentage = 100;


//                                          atk def  hp crit exp money stealPer 기본 20%
let player = new mainPlayerCharacter("병주", 10, 10, 100, 0.5, 0, 1000, 20);
//                                       atk def hp stealSuccessPer exp
let muheon = new createCharacters("무헌", 10, 10, 100, 0,10,10);
let professor = new createCharacters("교수", 5, 15, 80, 5,20);
let boss_lee = new createCharacters("학과장", 20, 10, 200, 10,100);
let hyunwook = new createCharacters("현욱", 20, 10, 200, 10,1);
let ahyun = new createCharacters("아현", 20, 10, 200, 10,5);
let jisup = new createCharacters("지섭", 20, 10, 200, 10,1);
let megacoffee = new createCharacters("메가커피", 20, 10, 200, 10,30);

let monster = [muheon, professor, hyunwook, ahyun, jisup, megacoffee, boss_lee];
console.log(player);


function buttonClickAttack() {
    attack();
}

function attack() {

}

function buttonClickSteal() {
    steal();
    //다음 컷신으로 넘어가는 기능
    //훔치기 성공시 경험치 획득은 있는가?
}
// 내 기본 성공확률은 5% 무헌 몬스터 만났을때 그대로 유지 교수 몬스터 만났을때 내 성공확률을 -5% 해준다
// 포션 먹을시 성공 확률 합계산으로 1%씩 증가

// monsterper에는 muheon.stealSuccessPer 가들어간다.
function steal(monsterPer) {
    //let SuccessStealPercentage = 100;
    let stealPercentage = parseInt(Math.random() * (player.stealPer - monsterPer));
    let randStealPer = parseInt(Math.random() * 100);

    if (stealPercentage >= randStealPer) {
        console.log("훔치기 성공!");
    } else if (stealPercentage < randStealPer) {
        console.log("훔치기 실패");
    }
    // 상점에 들어가야할기능
    // if(stealPercentage===maxstealPercentage)
    // {
    //     alertMessage("확률을 100%이상으로 높일수없습니다.");
    // }


}


function getExp(monster) {
    player.exp=monster.exp;

}

getExp(muheon);
console.log(player.exp);

function alertMessage(message) {
    console.log(message);
    return message;

}

function buttonClickItemUse() {


}
// 매개변수 형식은 dmg10 dmg20 dmg30 dmg40 dmg50 
function getDamge20(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg20")) {
        dmg.classList.remove("dmg20");

    } else {
        dmg.classList.add("dmg20");

      
    }
}
function getDamge10(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg10")) {
        dmg.classList.remove("dmg10");

    } else {
        dmg.classList.add("dmg10");

      
    }
}

function getDamge30(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg30")) {
        dmg.classList.remove("dmg30");

    } else {
        dmg.classList.add("dmg30");

      
    }
}

function getDamge40(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg40")) {
        dmg.classList.remove("dmg40");

    } else {
        dmg.classList.add("dmg40");

      
    }
}

function getDamge50(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg50")) {
        dmg.classList.remove("dmg50");

    } else {
        dmg.classList.add("dmg50");

      
    }
}

function getDamge60(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg60")) {
        dmg.classList.remove("dmg60");

    } else {
        dmg.classList.add("dmg60");

      
    }
}

function getDamge70(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg70")) {
        dmg.classList.remove("dmg70");

    } else {
        dmg.classList.add("dmg70");

      
    }
}

function getDamge80(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg80")) {
        dmg.classList.remove("dmg80");

    } else {
        dmg.classList.add("dmg80");

      
    }
}

function getDamge90(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg90")) {
        dmg.classList.remove("dmg90");

    } else {
        dmg.classList.add("dmg90");

      
    }
}

function getDamge100(){
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg100")) {
        dmg.classList.remove("dmg100");

    } else {
        dmg.classList.add("dmg100");

      
    }
}
function itemUse() {

}

function createCharacters(name, atk, def, hp, stealSuccessPer,exp,level) { // 플레이어와 몬스터 생성 함수
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.stealSuccessPer = stealSuccessPer; // 이확률은 내 훔치기 성공확률에서 -연산을 해주게된다.
    this.exp=exp;
    this.level=level
    
}
function mainPlayerCharacter(name, atk, def, hp, crit, exp, money, stealPer) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.crit = crit;
    this.exp = exp;
    this.money = money;
    this.stealPer = stealPer;

}

function setMonster(monster) // 몬스터 이름이랑 레벨입력
{
    let monsterName1
    monsterName1=document.getElementById("monsterNmae");
    monsterName1.innerHTML=monster.name;

    let monsterLevel1
    monsterLevel1=document.getElementById("monsterLevel");
    monsterLevel1.innerHTML=monster.level;

    console.log(monster.name);
}


setMonster(muheon); 


function rndMonsterAppear() { // 몬스터 등장순서 랜덤으로 만드는 것 학과장은 가장 뒤
    let AppearIndex = [];
    let rndidex = parseInt(Math.random() * 6);
    let n = 0;
    let temp;
    // for (let i = 0; i < monster.length - 1; i++) {
    //     rndidex = parseInt(Math.random() * 6);
    //     AppearIndex[i] = rndidex;
    // }
    // console.log(AppearIndex);

    // for (let i = 0; i < monster.length - 1; i++) {
    //     for (n; n < monster.length-1; n++) {
    //             rndidex = parseInt(Math.random() * 6);
    //             console.log(rndidex);
    //             if (AppearIndex[i] !== rndidex) {
    //                 AppearIndex[i] = rndidex;
    //                 console.log("이거 잘되는거 맞음?");
    //         }
    //     }

    // }
    for(let i=0;i<monster.length-1;i++){
        AppearIndex[i]=i;
    }
    for(let i=0;i<monster.length-1;i++){
        rndidex = parseInt(Math.random() * 6);
        temp=AppearIndex[i];
        AppearIndex[i]=AppearIndex[rndidex];
        AppearIndex[rndidex]=temp;

    }
    for(let i=0;i<monster.length-1;i++){
        AppearIndex[i]=monster[AppearIndex[i]];
    }
    AppearIndex[6] = monster[6];
    console.log("최종");
    console.log(AppearIndex);
}


function mainPlayerCharactesDie() {
    if (player.hp === 0)//플레이어가 죽는조건
    {
        //플레이어가 가진것을 초기화한다. 돈제외
        player.atk = 10;
        player.def = 10;
        player.hp = 100;
        player.crit = 0.5;
        player.exp = 0;
        player.stealPer = 5;
    }
}


function MonstersDie() {
    let i = 0;
    if (monster[i].hp === 0) { // 
        console.log("몬스터죽음");
        getExp();
    }else(monster[i].hp!==0)
    {
        console.log("몬스터살아있음");
    }

}


function mainGamestart(){
    //몬스터 배열정리랜덤배열
    //컷신 불러오는 함수
    //전투를 불러오는함수
    //몬스터를 세팅시켜주는함수
    //플레이어를 세팅시켜주는함수
    //게임은 턴제방식 선공권은 항상플레이어가 가진다.
    //어떤행동을하든 1턴을 소모한다.
    //공격시 getdmg함수 steal 함수 useitem함수 플레이어 선제턴 진행
    //체력깍이는 html조작 함수실행
    //사용자 죽었는지 몬스터죽었는지 판별하는함수
    //몬스터 공격진행
    //체력깍이는 html조작 함수실행
    ///사용자 죽었는지 몬스터죽었는지 판별하는함수
    //사용자 죽었을시 돈제외 초기화하며 메인화면으로 이동 몬스터죽었을시 경험치 돈 얻는다
    //다음컷신
    //7단계 학과장잡을때까지 무한반복

}