
const elementList = document.getElementById('list')
const inputForm = document.getElementById('create-task-form')

function addEventToForm(){
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event.target['new-task-description'].value)
    let p = document.createElement('p')
    p.textContent = event.target['new-task-description'].value
    console.log(p)
    elementList.appendChild(p)
    deleteEvent(p) 
   
  })
}

addEventToForm()

function deleteEvent(node){
  const deleteEntry = document.createElement("delete")
  deleteEntry.innerText = "Delete"
  node.appendChild(deleteEntry)
  deleteEntry.addEventListener('click', (event) => {
    console.log("clicked")
    // console.log(document.getElementsByTagName("p"))
    const itemToDelete = document.getElementsByTagName("p")
    console.log(itemToDelete)
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
