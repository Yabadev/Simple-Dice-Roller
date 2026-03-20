const roll=()=>{
 const numberResults=[];
 const imgResults=[];
 const result=document.getElementById("input").value;
 const display1=document.getElementById("resultDisplay");
 const display2=document.getElementById("imgDisplay");
 for(let i=0;i<result;i++){
    const random=Math.floor(Math.random()*6)+1;
      numberResults.push(random);
      imgResults.push(`<img src="dice_imgs/dice${random}.png" alt="Dice${random}">`);
    }
 display1.textContent=`Result:${numberResults.join(" , ")}`;
 display2.innerHTML=imgResults.join(" ");
}