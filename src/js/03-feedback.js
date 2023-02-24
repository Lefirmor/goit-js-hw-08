import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const Obj = {}
const locStorKey = "feedback-form-state"
autoFill()

form.addEventListener('input', throttle (e => {
    Obj[e.target.name] = e.target.value
    localStorage.setItem(locStorKey, JSON.stringify(Obj))
    
    
  
    
    console.log(Obj)
    
    
}, 500))

form.addEventListener("submit", e =>{
    
    e.preventDefault();
    // if(e.currentTarget.email.value === ""  || e.currentTarget.message.value){
    //     return alert("Заполнить нужно всё") 
        
    // }
    localStorage.removeItem(locStorKey)
    e.currentTarget.reset();
    console.log(Obj)
    
})

function autoFill () {
    const localStor = JSON.parse(localStorage.getItem(locStorKey))
    if(localStor) {
        const inp = document.querySelector('input').value = localStor.email;
        const text = document.querySelector('textarea').value = localStor.message;
    }
    
}
