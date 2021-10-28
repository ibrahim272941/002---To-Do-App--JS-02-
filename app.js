const inputField = document.querySelector('.container__input');
const todoBtn = document.querySelector('.container__button');
const toDoArea = document.querySelector('.to-dos-area');
const arrow = document.querySelector('#arrow')
const date = document.querySelector('.real-date-time')
const all = document.querySelector('body')

const realDate = {hour:'numeric', minute:'numeric' ,weekday : 'long',month : 'short' ,day : 'numeric' }

const today = new Date();

date.innerHTML=today.toLocaleDateString('en-US',realDate)

todoBtn.addEventListener('click',()=>{
   let words = document.createElement('p');
   
   words.classList.add('to-do')
   words.innerText = `${inputField.value} (${date.innerHTML})`
 
  
   toDoArea.appendChild(words)
   arrow.style.display='block'
   inputField.value=''
   

   words.addEventListener('click',()=>{
       
       words.style.cursor='pointer'
       
       words.style.textDecorationColor='rgb(145,80,80)'
       words.style.textDecorationStyle='double'
       words.style.textDecorationLine='line-through'
       words.style.backgroundColor = 'rgb(5, 252, 190)'
       words.style.opacity='.7'
       
       
   })
   arrow.addEventListener('click',()=>{




    arrow.style.cursor='pointer'
    words.style.cursor='pointer'
       
    words.style.textDecorationColor='rgb(145,80,80)'
    words.style.textDecorationStyle='none'
    words.style.textDecorationLine='none'
    words.style.backgroundColor = 'rgb(4, 160, 160)'
    words.style.opacity='.9'
   })
   words.addEventListener('dblclick',()=>{
       words.style.cursor='pointer'
       words.style.display='none'
       
   })

   
   
})