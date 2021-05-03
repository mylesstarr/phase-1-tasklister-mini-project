// document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM has loaded");
// }); 

const elementList = document.getElementById('list')
const inputForm = document.getElementById('create-task-form')

function addEventToForm(){
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target['new-task-description'].value)
    let p = document.createElement('p')
    p.textContent = event.target['new-task-description'].value
    // console.log(p)
    const styleSelection = document.getElementsByClassName("priority-menu")
      console.log(styleSelection)
    if (styleSelection.innerText === "High") {p.style.color = "red"}
    
    elementList.appendChild(p)
    deleteEvent(p) 
   
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
    console.log("clicked")
    // console.log(document.getElementsByTagName("p"))
    // const itemToDelete = document.getElementsByTagName("p")
    // console.log(itemToDelete)
    node.remove()
    // itemToDelete.remove() })
})
}
// deleteEvent()




// function deleteEvent(){
//   const deleteEntry = document.createElement("delete")
//   deleteEntry.innerText = "Delete"
//   inputForm.appendChild(deleteEntry)
//   deleteEntry.addEventListener('click', (event) => {console.log("clicked")
//   })
// }
