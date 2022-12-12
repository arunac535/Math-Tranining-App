

const operand1 = document.querySelector("#operand1");
const operand2=document.querySelector("#operand2");
const operator=document.querySelector("#operator")
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const msgbox=document.querySelector("#msgbox");
const correctBeep=document.querySelector("#correctBeep");
const wrongBeep=document.querySelector("#wrongBeep");
let indexofAns;
let interval;
const options=[option1,option2,option3,option4];


const generateNumber = (lower, upper) => {
    const randomNumber=Math.ceil(Math.random()*(upper-lower))+lower;
    return randomNumber;
    // Generates a random number which is present in between lower bound and upper bound.
   
    
}
const generateOperator = () => {
    const opr=["+","-","*","/"];
    // let r=opr[Math.ceil(Math.random()*opr.length)]
    let randomNumber=generateNumber(-1,opr.length-1);
    console.log(opr[randomNumber]);
    return opr[randomNumber];
    
    

   
    
}


const generateQuestion = () => {
    operand1.innerHTML = generateNumber(-50, 50);
    operand2.innerHTML = generateNumber(-50, 50);
    operator.innerHTML = generateOperator();

    for(let i=0;i<options.length;++i){
        options[i].setAttribute("style","background-color:(77,,62,71);");
        options[i].removeAttribute("disabled");
    }
    msgbox.innerHTML="Result";

}

    // sets the value of `operand1`, `operator` and `operand2` fields.
   
const generateAnswer = () => {
   generateQuestion();
   let a = parseInt(operand1.innerHTML);
   let b = parseInt(operand2.innerHTML);
   let op=operator.innerHTML;
   let ans;
   if(op=="-"){
    ans=a-b;
   }else{
    ans=eval((a)+op+(b));
   }
   console.log(ans);
   let indexofAns=generateNumber(0,options.length)-1;
   console.log(indexofAns);
   for(let i=0;i<options.length;++i){
      if(i!=indexofAns){
         if( op == "/"){
            options[i].innerHTML=generateNumber(ans,ans+50).toFixed(2);
         }else{
            options[i].innerHTML=generateNumber(ans,ans+50);
         }
      }else{
         // Sets the correct option.
         if(op == "/"){
             options[i].innerHTML = ans.toFixed(2);
         }
         else{
             options[i].innerHTML = ans;
         }
     }
   }
   clearInterval(interval);

}
for(let i=0;i<options.length;i++){
    options[i].addEventListener("click",function(){
        for(let j=0;j<options.length;j++){
            if(j==indexofAns){
                options[j].setAttribute("style","background-color:green;");
            }else{
                options[j].setAttribute("style","background-color:red;");

            }
            options[j].setAttribute("disabled","true");
        }

        if(i!=indexofAns){
            msgbox.innerHTML = "Wrong Answer";
            wrongBeep.play();

        }else{
            msgbox.innerHTML = "Correct Answer";
            correctBeep.play();
        }
        interval =setInterval(generateAnswer,5000);

    });

}

// calling the generateAnswer() function here
generateAnswer();
