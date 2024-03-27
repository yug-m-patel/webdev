function check(event){
    event.preventDefault();
    let number = document.getElementById("number").value;
    let guess = 7;
    let count = 0;
    while (count <6){
        if (number == guess){
            document.getElementById("span-msg").textContent = "Yes its Right !!!"
            document.getElementById("span-msg").style.color = "green";
            break;
        }
        else if (number < guess){
            document.getElementById("span-msg").textContent = "Its too low !!!"
            document.getElementById("span-msg").style.color = "red";
            count++;
            
        }
        else if (number > guess){
            document.getElementById("span-msg").textContent = "Its too high !!!"
            document.getElementById("span-msg").style.color = "blue";
            count++;
        }
        
    }
    // document.getElementById("span-msg").textContent = "Sorry your chances are over!!!"
}