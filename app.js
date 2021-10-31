const form = document.querySelector('.container_input');
const inputField = document.querySelector('.container__input')
const todoBtn = document.querySelector('.input-button');
const toDoArea = document.querySelector('.area');

const date = document.querySelector('.real-date-time')

const realDate = {hour:'numeric', minute:'numeric' ,weekday : 'long',month : 'short' ,day : 'numeric' }

const today = new Date();

date.innerHTML=today.toLocaleDateString('en-US',realDate)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = `${inputField.value }  ${date.innerHTML}`
    if(inputField.value ==='')return
    const taskArea = document.createElement('div')
    taskArea.classList.add('area')
    
    const taskContent = document.createElement('div')
    taskContent.classList.add('to-dos-area')
    
    taskArea.appendChild(taskContent)
    
    const inputElement = document.createElement('textarea')
    inputElement.type='textarea'
   inputElement.cols = '124'
  

    inputElement.classList.add('text')
    inputElement.value=input
    inputElement.setAttribute('readonly','readonly')
    taskContent.appendChild(inputElement)

   const actionElement=document.createElement('div')
   actionElement.classList.add('action')
   
  
   const doneElement = document.createElement('button')
   doneElement.classList.add('done')
   doneElement.innerText='Done'
   actionElement.appendChild(doneElement)

   const delElement = document.createElement('button')
   delElement.classList.add('delete')
   delElement.innerText='Delete'
   actionElement.appendChild(delElement)

   taskContent.appendChild(actionElement)




    toDoArea.appendChild(taskArea)
    
    
    delElement.addEventListener('click',()=>{
        toDoArea.removeChild(taskArea)
    })
    doneElement.addEventListener('click',()=>{
        inputElement.style.background='linear-gradient(to right, rgb(12, 236, 98), rgb(128, 219, 143))'
    })
    inputField.value=''

    inputElement.addEventListener('click',()=>{
        inputElement.style.background='linear-gradient(to right, rgb(145, 248, 248), rgb(5, 185, 185))'
    })

})

