
 
 let playerGold = 60;
 let ConfirmGold = 0;
 let buyGate = 1;
 let buyGate2 = 1;


 let storeHealthPotion = 5;
 let confirmHealthPotion = 0;
 let inventoryHealthPotion = 0;

 let storeBoogeyPotion = 1;
 let confirmBoogeyPotion = 0;
 let inventoryBoogeyPotion = 0;
 let ConfirmItem1 = 0;

 function Buy1(){
    
    switch (buyGate){
 case 1:
  

  let ShopItem1Quantity = 0;
  let Purchase1 = document.getElementById("shopItem1");
  let Purchase2 = document.getElementById("confirmInvItem1");
  let Totalcost = document.getElementById("totalCost");
  let gitPotionSlot1 = document.getElementById("potionSlot1");
  if (playerGold < ConfirmGold){
  gitPotionSlot1.style.display = "none";
  }
  
  confirmBoogeyPotion = confirmBoogeyPotion +1;
  storeBoogeyPotion = storeBoogeyPotion - 1;
  ConfirmGold = ConfirmGold +50;
  
  Purchase1.innerHTML =`Boogeys Dance (50g) (${ShopItem1Quantity})`;
  Purchase2.innerHTML = `Boogeys Dance (50g) (${confirmBoogeyPotion})`;
  Totalcost.innerHTML = `Total Cost: ${ConfirmGold}`;

  

 break;

 case 2:
    
 break;
     }
 }


 function Buy2(){

 switch (buyGate2){
    case 1:
        
        let Purchase1 = document.getElementById("shopItem2");
        let Purchase2 = document.getElementById("confirmInvItem2");
        let Totalcost = document.getElementById("totalCost");
        

        confirmHealthPotion = confirmHealthPotion +1;
        storeHealthPotion = storeHealthPotion -1;
        ConfirmGold = ConfirmGold + 10;

        Purchase1.innerHTML = `Health Potion (10g) (${storeHealthPotion})`;
        Purchase2.innerHTML = `Health Potion (10g) (${confirmHealthPotion})`;
        Totalcost.innerHTML = `Total Cost: ${ConfirmGold}`;
    
       if (storeHealthPotion <= 0){
        
        buyGate2 = 2;
       }
    break;

    case 2:
alert("Out of Stock");
        
    break;
 }

   
    
 }


 function confirmBtn(){
    let purchase2 = document.getElementById("confirmInvItem1");
    let totalCost = document.getElementById("totalCost");
    let purchase4 = document.getElementById("confirmInvItem2");
    let gitPotionSlot4 = document.getElementById("potionSlot4");
    let gitPotionSlot1 = document.getElementById("potionSlot1");
    let gitgoldStat = document.getElementById("goldStat");
    let gitshopItem1 = document.getElementById("shopItem1");
    let gitshopItem2 = document.getElementById("shopItem2");
    purchase2.innerHTML = ``
    if (playerGold < ConfirmGold){
        alert("You do not have enough gold to purchase these items.")
        storeBoogeyPotion = storeBoogeyPotion + confirmBoogeyPotion;
        gitshopItem1.innerHTML = `Boogey Potion (50g) (${storeBoogeyPotion})`;
        
    }
    if (confirmBoogeyPotion >= 1){
        gitPotionSlot4.style.display = "flex";
        inventoryBoogeyPotion = inventoryBoogeyPotion + confirmBoogeyPotion;
        gitPotionSlot4.innerHTML = `Boogey Potion (${inventoryBoogeyPotion})`;
    }
    if (confirmHealthPotion >= 1){
        gitPotionSlot1.style.display = "flex";
        inventoryHealthPotion = inventoryHealthPotion + confirmHealthPotion;
        gitPotionSlot1.innerHTML = `Health Potion (${inventoryHealthPotion})`;
    }
    playerGold = playerGold - ConfirmGold;
    gitgoldStat.innerHTML = `Gold: ${playerGold}`;
    ConfirmGold = 0;
    totalCost.innerHTML = `Total Cost: ${ConfirmGold}`;
    purchase4.innerHTML = ``
    confirmBoogeyPotion = 0;
    confirmHealthPotion = 0;
 }

    
 


 