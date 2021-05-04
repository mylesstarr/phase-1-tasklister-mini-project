document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
}); 

const elementList = document.getElementById('list')
const inputForm = document.getElementById('create-task-form')

function addEventToForm(){
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let p = document.createElement('p')
    p.textContent = event.target['new-task-description'].value
    elementList.appendChild(p)  
    deleteEvent(p) 
    if (event.target["dropDownMenu"].value === "high") {
      p.style.color = "red"
    }
     else if (event.target["dropDownMenu"].value === "medium") {
      p.style.color = "orange"
    }
    else if (event.target["dropDownMenu"].value === "low") {
      p.style.color = "yellow" 
          }
  })
}

addEventToForm()

function deleteEvent(node){
  const deleteEntry = document.createElement("delete")
  deleteEntry.innerText = " Delete"
  deleteEntry.style.color = "red"
  deleteEntry.style.fontWeight = "bold"
  node.appendChild(deleteEntry)
  deleteEntry.addEventListener('click', (event) => {
  node.remove()})
}
