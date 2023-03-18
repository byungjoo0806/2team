const MaxStealPercentage = 100;


//                                          atk def  hp crit exp money stealPer 기본 20%
let player = new mainPlayerCharacter("병주", 10, 10, 100, 0.5, 0, 1000, 20);
//                                       atk def hp stealSuccessPer
let muheon = new createCharacters("무헌", 10, 10, 100, 0);
let professor = new createCharacters("교수", 5, 15, 80, 5);
let boss_lee = new createCharacters("학과장", 20, 10, 200, 10);
let hyunwook = new createCharacters("현욱", 20, 10, 200, 10);
let ahyun = new createCharacters("아현", 20, 10, 200, 10);
let jisup = new createCharacters("지섭", 20, 10, 200, 10);
let megacoffee = new createCharacters("메가커피", 20, 10, 200, 10);

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


function getExp() {

}

function alertMessage(message) {
    console.log(message);
    return message;

}

function buttonClickItemUse() {


}

function itemUse() {

}

function createCharacters(name, atk, def, hp, stealSuccessPer) { // 플레이어와 몬스터 생성 함수
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.stealSuccessPer = stealSuccessPer; // 이확률은 내 훔치기 성공확률에서 -연산을 해주게된다.
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



let monster = [muheon, professor, hyunwook, ahyun, jisup, megacoffee, boss_lee];
console.log(player);
for (let i = 0; i < monster.length; i++) {

    console.log(monster[i].hp);
}

// 몬스터 [1] 에 배열번호 체크 

function rndMonsterAppear() {
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


rndMonsterAppear();
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
    if (monster[i].hp === 0) {
        console.log("몬스터죽음")
        getExp();
    }


}

steal(1);