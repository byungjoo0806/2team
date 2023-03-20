// ----------------현욱님 코드-----------------------------
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


// -------------------------------------------------
// 전역변수 선언

let player;

// 상점 아이템 배열
let storeItems = [];

// 인벤토리
let inven = [];
// --------------------------



// 메인 페이지 처음 실행될때 동작할 함수
function mainStart() {

  // 플레이어 생성
  //                                      atk def  hp crit exp money stealPer 기본 20%
  player = new mainPlayerCharacter("병주", 10, 10, 100, 0.5, 0, 1000, 20);

  // 상점 아이템 생성 
  new createItem(1, 100, "공격력 증가 아이템", "atk", "./img/red-potion.png"); // 공격력 증가 아이템
  new createItem(2, 200, "방어력 증가 아이템", "def", "./img/red-potion2.png"); // 방어력 증가 아이템   
  new createItem(3, 300, "체력 증가 아이템", "hp", "./img/red-potion.png"); // 체력 증가 아이템
  new createItem(4, 400, "훔치기 확률 아이템", "steal", "./img/red-potion2.png"); // 훔치기 확률 증가

  // 임의로 4개 더 추가
  new createItem(5, 500, "공격력 증가 아이템2", "atk", "./img/red-potion.png");
  new createItem(6, 600, "방어력 증가 아이템2", "def", "./img/red-potion2.png");
  new createItem(7, 700, "체력 증가 아이템2", "hp", "./img/red-potion.png");
  new createItem(8, 800, "훔치기 확률 아이템2", "steal", "./img/red-potion2.png");

  // 스탯창 설정 함수
  mainStatSet();
}


// 스탯창 설정함수
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


// --------------------------------------------------
// html 인벤토리, 전투시작 버튼 onclick에 적용할 함수들

// 다른분들 파트
// 1.인벤토리버튼 누르면 적용되는 함수

// 2.전투시작 버튼 누르면 적용될 함수

// 3.상점 버튼 누르면 적용되는 함수
function openStore() {
  // 상점 팝업창 띄우기

  console.log("상점버튼");

  let popup = document.querySelector(".main-store-wrap");

  if (popup.classList.contains("is-active")) {
    popup.classList.remove("is-active");
  } else {
    popup.classList.add("is-active");

    // 상점아이템 보여주는 함수 호출
    openStoreItem();
  }
}

// --------------------------------------------------

// 상점 아이템 생성 함수
function createItem(point, price, content, type, itemimg) {
  this.point = point;
  this.price = price;
  this.content = content;
  this.type = type;
  this.itemimg = itemimg;

  storeItems.push(this);
}


// 상점 아이템 보여주는 함수
function openStoreItem() {
  console.log("상점아이템");

  let storeItemDiv = document.querySelector(".store-items-div");

  // 아이템 화면에 출력
  text = "<div>";
  storeItems.forEach(function(i, v) {
    console.log(i);

    // 아이템 4개씩 나열되게
    if (v%4 === 0) {
      text += "</div><div>";
    }
    
    text += `<div class="store-item">
    <div style="font-weight:600;">${i['content']}</div>
    <div class="store-item-img" style="background-image:url(${i['itemimg']});"></div>
    <div class="main-stat"><div>효과</div>
    <div>${i['type']} +${i['point']}</div></div>
    <div class="main-stat"><div>가격</div><div>${i['price']}</div></div>
    <div class="buy-btn" onclick="itemBuy('${i['content']}')">구매</div></div>`;
    storeItemDiv.innerHTML= text;

    // let itemimg = document.querySelector('.store-item-img');
    // itemimg.setAttribute("src", `${i['itemimg']}`);
  });
  text += "</div>";
}


// 인벤토리에 아이템 추가하는 함수
function putInven(item) {
  console.log("putinven");
  console.log(item);

  inven.push(item);
  console.log(inven);
}
 

// 상점 구매버튼 눌렀을때 나오는 함수
function itemBuy(itemcontent) {
  console.log("구매");
  console.log(itemcontent);

  storeItems.some(function (i) {
    if (i['content'] === itemcontent) {
      console.log(i);
      let buy = window.confirm(`${i['content']}을 구매하시겠습니까?`);
      if (buy) { // 확인 눌렀을때
        let cmoney = player['money'] - i['price'];
        if (cmoney >= 0) { // 돈 있어서 구매할 수 있을때
          player['money'] = cmoney; // 돈 차감

          // 인벤토리에 아이템 추가하는 함수
          putInven(i);
          alert(`구매 완료되었습니다. 현재 money :  ${player['money']}`);
          console.log("구매 완료");
          return true;
        } else {
          alert(`돈이 부족합니다. 현재 money : ${player['money']}`);
          console.log("돈 부족");
          return true;
        }
      } else {  // 취소 눌렀을때
        alert("구매를 취소했습니다.");
        console.log("구매취소");
        return true;
      }
    } else {
      i = "다른 아이템";
    }
    console.log("itembuy", i);
  }); 
}



  // 인벤토리 창 
  function openInventory() {
    let popupinventory = document.querySelector(".main-inventory-wrap");
    console.log("ddd");
    if (popupinventory.classList.contains("is-active")) {
        console.log("dddd");
      popupinventory.classList.remove("is-active");
      
    } else {
      popupinventory.classList.add("is-active");
      console.log("eqqeeq")
      showInventory();
    }
  }

  
  function showInventory() {
    // 인벤토리 배열에 있는 아이템 객체들을 가져옴.
    let inventoryItems = getInventoryItems();
  console.log()
    // 인벤토리를 보여주는 UI 요소를 선택.
    // let inventoryUI = document.querySelector('.main-inventory-wrap');
    let inventoryUI = document.querySelector('.inventory-items-div');
  
    // 이전에 인벤토리 UI에 존재하는 모든 자식 요소들을 삭제.
    // while (inventoryUI.firstChild) {
    //   inventoryUI.removeChild(inventoryUI.firstChild);
    // }
  
    // 인벤토리 배열에 있는 각각의 아이템 객체들을 화면에 보여줌.
    inventoryItems.forEach(item => {
      let itemUI = document.createElement('div');
      itemUI.textContent = item.content;
      itemUI.setAttribute('class',"store-item");

      inventoryUI.appendChild(itemUI);
      
      console.log("inventoryitemsforeach");
      console.log(item);

    });
    // 인벤토리 UI를 화면에 보여줌.
    // inventoryUI.style.display = 'block';
  }
  
  function getInventoryItems() {
    // 인벤토리 배열. 전역 변수로 선언된 inventory 배열을 사용.
    return inven;
  }
  






mainStart();
