const allbtns=()=>{
    let buttons=document.querySelectorAll("#b1")
    let innerbtns=document.querySelectorAll("#b2")
    
    console.log(buttons);



const triger=()=>{
        buttons[0].addEventListener('click',()=>{
            console.log(innerbtns[1].parentElement.parentElement.nextElementSibling.children[0].classList.add("h1"));
        })
        
    
    
}
triger();
}
allbtns();
