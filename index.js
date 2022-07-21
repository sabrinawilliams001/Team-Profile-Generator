let _s= el => document.querySelector(el)
_s("#manager").addEventListener("submit", e=>{
    e.preventDefault()
    let input = _s("#manager").querySelectorAll("input")
    for (let i = 0; i < input.length; i++) {
    if(input[i].value==""){
        alert("please fill")
        return
    } 
    }
    processForm(input)
})
const processForm = (data) =>{
    _s(".menu").classList.remove("hidden")
    _s("#manager").classList.add("hidden")

}
_s("#new-e").addEventListener("click", function(){
    _s(".add").classList.remove("hidden")
    _s("#manager-control").textContent="engineer information"
    _s("#add-new").dataset.c="engineer"
})
_s("#new-i").addEventListener("click", function(){
    _s(".add").classList.remove("hidden")
    _s("#manager-control").textContent="intern information"
    _s("#add-new").dataset.c="intern"
})
_s("#add-new").addEventListener("submit", e=>{
    e.preventDefault()
})