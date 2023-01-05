const countEl = document.querySelector('.counter')
const buttonEl = document.querySelector('.button')



buttonEl.addEventListener('click', (e) =>{
   if(e.target.classList.contains("increase")){
    countEl.innerHTML++;
   }
   
   if(e.target.classList.contains("decrease")){
    countEl.innerHTML--;
   } 
   
   if(e.target.classList.contains("reset")){
    countEl.textContent = 0
   }
   colorFun();

})

function colorFun(){
    if(countEl.innerHTML > 0){
        countEl.style.color = 'blue'
   }else if(countEl.textContent < 0){
        countEl.style.color = 'green'
   }else {
        countEl.style.color = 'white'
       }
    
}