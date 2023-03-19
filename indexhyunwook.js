const MaxStealPercentage = 100;


// 전역변수로 어떤걸 클릭하는지 받아오기
let selectPlayerChoice = 0;

//                                          atk def  hp crit exp money stealPer 기본 20%
let player = new mainPlayerCharacter("병주", 10, 10, 100, 0.5, 0, 1000, 20);
//                                       atk def hp stealSuccessPer exp level(난이도정도로 생각)
let muheon = new createCharacters("무헌", 10, 10, 100, 0, 10, 10);
let professor = new createCharacters("교수", 5, 15, 80, 5, 20);
let boss_lee = new createCharacters("학과장", 20, 10, 200, 10, 100);
let hyunwook = new createCharacters("현욱", 20, 10, 200, 10, 1);
let ahyun = new createCharacters("아현", 20, 10, 200, 10, 5);
let jisup = new createCharacters("지섭", 20, 10, 200, 10, 1);
let megacoffee = new createCharacters("메가커피", 20, 10, 200, 10, 30);

let monster = [muheon, professor, hyunwook, ahyun, jisup, megacoffee, boss_lee];
console.log(player);


function buttonClickAttack() {
    selectPlayerChoice = 1;
}

function attack() {

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

function buttonClickSteal() {
    //다음 컷신으로 넘어가는 기능
    //훔치기 성공시 경험치 획득은 있는가?
    selectPlayerChoice = 2;
}
function itemUse() {

}
function buttonClickItemUse() {
    selectPlayerChoice = 3;
}



function getExp(monster) {
    player.exp = player.exp + monster.exp;
}


function alertMessage(message) {
    console.log(message);
    return message;

}


// 매개변수 형식은 dmg10 dmg20 dmg30 dmg40 dmg50 
function getDamge20() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg20")) {
        dmg.classList.remove("dmg20");

    } else {
        dmg.classList.add("dmg20");


    }
}
function getDamge10() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg10")) {
        dmg.classList.remove("dmg10");

    } else {
        dmg.classList.add("dmg10");


    }
}
function getDamge30() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg30")) {
        dmg.classList.remove("dmg30");

    } else {
        dmg.classList.add("dmg30");


    }
}
function getDamge40() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg40")) {
        dmg.classList.remove("dmg40");

    } else {
        dmg.classList.add("dmg40");


    }
}
function getDamge50() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg50")) {
        dmg.classList.remove("dmg50");

    } else {
        dmg.classList.add("dmg50");


    }
}
function getDamge60() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg60")) {
        dmg.classList.remove("dmg60");

    } else {
        dmg.classList.add("dmg60");


    }
}
function getDamge70() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg70")) {
        dmg.classList.remove("dmg70");

    } else {
        dmg.classList.add("dmg70");


    }
}
function getDamge80() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg80")) {
        dmg.classList.remove("dmg80");

    } else {
        dmg.classList.add("dmg80");


    }
}
function getDamge90() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg90")) {
        dmg.classList.remove("dmg90");

    } else {
        dmg.classList.add("dmg90");


    }
}
function getDamge100() {
    // 상점 팝업창 띄우기

    console.log("으앜상처받음");

    let dmg = document.getElementById("d");

    if (dmg.classList.contains("dmg100")) {
        dmg.classList.remove("dmg100");

    } else {
        dmg.classList.add("dmg100");


    }
}


function createCharacters(name, atk, def, hp, stealSuccessPer, exp, level) { // 플레이어와 몬스터 생성 함수
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.stealSuccessPer = stealSuccessPer; // 이확률은 내 훔치기 성공확률에서 -연산을 해주게된다.
    this.exp = exp;
    this.level = level

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
    monsterName1 = document.getElementById("monsterNmae");
    monsterName1.innerHTML = monster.name;

    let monsterLevel1
    monsterLevel1 = document.getElementById("monsterLevel");
    monsterLevel1.innerHTML = monster.level;

    console.log(monster.name);
}


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
    for (let i = 0; i < monster.length - 1; i++) {
        AppearIndex[i] = i;
    }
    for (let i = 0; i < monster.length - 1; i++) {
        rndidex = parseInt(Math.random() * 6);
        temp = AppearIndex[i];
        AppearIndex[i] = AppearIndex[rndidex];
        AppearIndex[rndidex] = temp;

    }
    for (let i = 0; i < monster.length - 1; i++) {
        AppearIndex[i] = monster[AppearIndex[i]];
    }
    AppearIndex[6] = monster[6];
    console.log("최종");
    console.log(AppearIndex);
    return AppearIndex
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
        return true
    } else return false
}


function MonstersDie(monsObj) {
    if (monsObj.hp === 0) { // 
        console.log("몬스터죽음");
        getExp();
        return true
    } else (monsObj.hp !== 0)
    {
        console.log("몬스터살아있음");
        return false
    }

}

function cut() {

}
function monsterAct(){

}

function fight(monsObj) {
    
    let gmaeDone = true;
    let preAttackbit = 0; // 0일때 플레이어 공격 1일때 몬스터 공격 시작은 항상0으로 시작한다.
    setMonster(monsObj.name);
    while (gmaeDone) {
        if (preAttackbit === 0) {
            //3가지중하나가 선택가능하다. 하나만가능하다는 메시지를 넘겨준다. 싸우기 버튼을 누를경우 리턴1을해준다. 훔치기를 누를경우 리턴2를해준다. 인벤토리를 3을 리턴한다.
            console.log("하나만선택가능합니다!")
            f();
            console.log(selectPlayerChoice);
            preAttackbit = 1;
        } else if (preAttackbit === 1) {
            monsterAct();
            preAttackbit = 0;
        }
        if (mainPlayerCharactesDie() || MonstersDie(monsObj)) {
            gmaeDone = false;
            preAttackbit = 0;

        }

    }
}
function setPlayer() {
    // mainstart 할때 플레이어 캐릭터 객체를 생성하기때문에 따로 선언하지않는다.
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) { }
}
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(selectPlayerChoice), 3000)
    });

    let onIn = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    if (onIn >= 1) {
        console.log("선택이 되었습니다")


        console.log(selectPlayerChoice);

        switch (onIn) {
            case 1: attack();
                console.log("attack");
                break;
            case 2: steal();
                console.log("steal");
                break;

            case 3: itemUse();
                console.log("use");
                break;
            default:
                break;
        }
        selectPlayerChoice = 0;

    }
}



// function playerAct() { // 이벤트를 통해 받아올 변수
//     //onclick를 통해 리턴이 들어오면
//     //리턴에 따라 switch문 통과
//     let onIn = 0; // onclick 이벤트를 통해서 선택지에따라 이벤트 retrun 반환 1이면공격 2이면 훔치기 3이면인벤토리 구현해야함 ㅋㅋ;;
//     onIn = selectPlayerChoice;
//     const wakeUpTime = Date.now() + 3000;
//     console.log("선택시간 3초입니다.")
//     while (onIn < 1) {

//         console.log('작동하는구만');
//         if (onIn >= 1) {
//             console.log("선택이 되었습니다")


//             console.log(selectPlayerChoice);

//             switch (onIn) {
//                 case 1: attack();
//                     comsole.log("attack");
//                     break;
//                 case 2: steal();
//                     comsole.log("steal");
//                     break;

//                 case 3: itemUse();
//                     comsole.log("use");
//                     break;
//                 default:
//                     break;
//             }
//             selectPlayerChoice = 0;

//         }
//     }


// }




function mainStart() {

    // 플레이어 생성
    //                                      atk def  hp crit exp money stealPer 기본 20%
    player = new mainPlayerCharacter("병주", 10, 10, 100, 0.5, 0, 1000, 20);

    // 상점 아이템 생성 
    new createItem(1, 100, "공격력 증가 아이템", "atk"); // 공격력 증가 아이템
    new createItem(2, 200, "방어력 증가 아이템", "def"); // 방어력 증가 아이템   
    new createItem(3, 300, "체력 증가 아이템", "hp"); // 체력 증가 아이템
    new createItem(4, 400, "훔치기 확률 아이템", "steal"); // 훔치기 확률 증가

    // 임의로 4개 더 추가
    new createItem(5, 500, "공격력 증가 아이템2", "atk");
    new createItem(6, 600, "방어력 증가 아이템2", "def");
    new createItem(7, 700, "체력 증가 아이템2", "hp");
    new createItem(8, 800, "훔치기 확률 아이템2", "steal");

    // 스탯창 설정 함수
    mainStatSet();
}

function mainStatSet() {

    let mainStatName = document.querySelector(".main-stat-name");
    mainStatName.innerHTML = player.name;

    let mainStatAtk = document.querySelector(".main-stat-atk");
    mainStatAtk.innerHTML = player.atk;

    let mainStatDef = document.querySelector(".main-stat-def");
    mainStatDef.innerHTML = player.def;

    let mainStatHp = document.querySelector(".main-stat-hp");
    mainStatHp.innerHTML = player.hp;

    let mainStatMoney = document.querySelector(".main-stat-money");
    mainStatMoney.innerHTML = player.money;

    let mainStatStealper = document.querySelector(".main-stat-stealper");
    mainStatStealper.innerHTML = player.stealPer;

}
function mainFightstart() {
    let mons=[];
    mons=rndMonsterAppear();
    //몬스터 배열정리랜덤배열
    rndMonsterAppear();
    //컷신 불러오는 함수
    //전투를 불러오는함수   //몬스터를 세팅시켜주는함수  //플레이어를 세팅시켜주는함수
    fight(mons[0]);
    cut();
    
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