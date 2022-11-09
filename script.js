// checking if already exist or not
if(localStorage.getItem("bg")){
    document.body.style.background = localStorage.getItem("bg");
    document.getElementById("btncolor").value = localStorage.getItem("bg");

}
// apply function 
function background(){
    var color = document.getElementById("btncolor").value;
    //setting color in localstorage -- browsers
    localStorage.setItem("bg", color);

    document.body.style.background = localStorage.getItem("bg");

    document.getElementById("btncolor").value = localStorage.getItem("bg");
}
function reset_bg(){
    localStorage.clear();
    window.location.reload();
}