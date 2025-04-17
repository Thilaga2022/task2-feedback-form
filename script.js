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

const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const feedbackInput = document.getElementById("textarea");
  const saveBtn = document.querySelector("button");

  function checkFields() {
    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      feedbackInput.value.trim() !== ""
    ) {
      saveBtn.disabled = false;
    } else {
      saveBtn.disabled = true;
    }
  }

  // Add input listeners to check fields in real-time
  nameInput.addEventListener("input", checkFields);
  emailInput.addEventListener("input", checkFields);
  feedbackInput.addEventListener("input", checkFields);