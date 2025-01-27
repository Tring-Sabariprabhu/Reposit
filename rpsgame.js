const userchoice = confirm("Start Game");

if(userchoice){
    let userinput = "";
    userinput = (prompt("Enter rock or paper or scissor")).trim().toLowerCase(); 

    if(userinput == "rock" || userinput == "paper" || userinput == "scissor"){
        let systeminput = "";
        let result = "";
        let randomNum = Math.floor(Math.random()*3)+1;
        switch (randomNum) {
            case 1:
                systeminput = "rock";
                if(systeminput == userinput)
                    result = "GAme Tied!";
                else
                    result = (userinput=="paper")?"User won":"System won";
                break;
            case 2:
                systeminput = "paper";
                if(systeminput == userinput)
                    result = "GAme Tied!";
                else
                    result = (userinput=="scissor")?"User won":"System won";
                break;
            case 3:
                systeminput = "scissor";
                if(systeminput == userinput)
                    result = "GAme Tied!";
                else
                    result = (userinput=="rock")?"User won":"System won";
                break;
        }
        console.log("System => " + systeminput);
        console.log("User => " + userinput);
        alert(result);
    }
    else
        alert("You entered Wrong!! Please refresh page to Restart.")
    
}
else{
    alert("Game Cancelled");
}
