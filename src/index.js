// const header = document.getElementsByTagName('h1')
// const myToDos = document.getElementsByTagName('h2')
// const elementId = document.getElementById('list')

// function logDocumentById(element){
//   const elementId = document.getElementById(element)
//   console.log(`This is a console log of ${element} ${console.log(document.getElementById(element))}`)
// }

// logDocumentById('main-content')




// function functionToAddEventListener(itemOnPage) {
//   itemOnPage.addEventlistener("click", ()=>{console.log("that was clicked")})
// }

// functionToAddEventListener(elementId)



// function addAlertEvent(){}



// document.addEventListener("DOMContentLoaded", () => {

// const myToDos = document.getElementsByTagName('h2')

// myToDos.addEventListener('click', (event)=>{console.log("that was clicked")})

// })




const elementId = document.getElementById('list')

// function clickHandler(){
//   alert("hi")
// }

// function addAlertClick() {
//   const elementId = document.getElementById('list')
//   elementId.addEventListener("click", clickHandler )
// }

// addAlertClick()


function addAlertClick() {
  const elementId = document.getElementById('list')
  elementId.addEventListener("click", () => {
    alert("alert");
    console.log("alert was clicked")
  }) 

  
}

addAlertClick()

const inputForm = document.getElementsByTagName('new-task-description')

function addEventToForm(){
  const inputForm = document.getElementsByTagName('new-task-description')
  inputForm.addEventListener('submit', )
}
