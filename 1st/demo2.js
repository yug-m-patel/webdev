function generate(event){
    event.preventDefault();
    let number = Math.floor(Math.random() * 100) + 1;
    document.getElementById("span-display").textContent = number;
    // document.write(number);
}