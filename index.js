
console.log("workin");

var tablinks=document.getElementsByClassName("tab-l");
var tabcontents=document.getElementsByClassName("tabc");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("skill");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("skill");
document.getElementById(tabname).classList.add("active")
}