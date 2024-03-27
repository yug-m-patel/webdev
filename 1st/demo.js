// alert("hello")
// document.write("Jati re je!!!")

function displayName(event){
    event.preventDefault();
    let txt_val = document.getElementById("txt-name").value;
    document.write(txt_val)
    // document.getElementById("span-display").textContent = txt_val;
}