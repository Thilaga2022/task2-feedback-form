var tarea = document.getElementById("textarea")
var count = document.querySelector(".charactercount")
var maxLength = textarea.getAttribute("maxlength");

tarea.addEventListener("input",function(){
    
count.textContent =tarea.value.length

if(tarea.value.length == maxLength){
    tarea.classList.add("no-cursor")
    alert("Reached maximum charector limit!!")
}
    
})