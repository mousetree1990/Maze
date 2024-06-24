
let Gate1 = 1;
let Gate2 = 1;



function storyButton1(){

    let GetmainStory = document.getElementById("storyTextBox");
    let Getbtn1 = document.getElementById("storyButton1")
    let Getbtn2 = document.getElementById("storyButton2");
    let GetChoice1 = document.getElementById("storyChoice1");
    let GetChoice2 = document.getElementById("storyChoice2");
    let Getshop = document.getElementById("shop");
    let GetstoryBoard = document.getElementById("storyBoard");

switch(Gate1){
    case 1:
    GetmainStory.innerHTML = "You find yourself on a winding road, the air thick with the scent of adventure. Suddenly, a voice calls out from behind, echoing through the quiet landscape."
    Getbtn1.innerHTML = "Select";
    Getbtn2.style.display = "flex";
    Getbtn2.innerHTML = "Select";

    //choices
    GetChoice1.innerHTML = "Turn around and see who it is."
    GetChoice2.innerHTML = "Ignore them and keep walking."
    Gate1 = 2;
   
    break;

    case 2:
     GetmainStory.innerHTML = "You turn around and now you can see an old lady on a broom racing towards you. Potions for sale!!! she yells."
     GetChoice1.innerHTML = "See what she has for sale."
     GetChoice2.innerHTML = "Delcine the offer."
     Gate1 = 3
    break;

    case 3:
    
    GetstoryBoard.style.display = "none";
    Getshop.style.display = "flex";
   
    
    break;    

    case 4:
        alert("working");
      
    break;    
}
}


function storyButton2(){
     let GetmainStory = document.getElementById("storyTextBox");

     switch(Gate2){
        case 1:
            GetmainStory.innerHTML = "An old witch flies past you. Potions for sale!!! she yells."
            Gate1 = 4;
        break;    
     }
}
