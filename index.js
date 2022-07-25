let _s= el => document.querySelector(el) 
let data =[]
let storageData= JSON.parse(localStorage.getItem("team"))
if (storageData==null)localStorage.setItem("team", JSON.stringify([]))
let f2= _s("#intern")
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
    _s("#add-engineer").classList.remove("hidden")
    _s("#manager-control").textContent="engineer information"
})
_s("#new-i").addEventListener("click", function(){
    _s(".add").classList.remove("hidden")
    _s("#add-intern").classList.remove("hidden")
    _s("#manager-control").textContent="intern information"
})
let forms= document.querySelectorAll("form")
forms.forEach(f=>{
    f.addEventListener("submit", e=>{
        let newData = {
            // name: _s()
        }
        e.preventDefault()
        let inputs= f.querySelectorAll("input")
        inputs.forEach(i=> {
            newData[i.title]=i.value
        })
        newData.type =f.dataset.t

          console.log (newData)
          handleNew(newData)
          _s(".add").classList.add("hidden")
          _s(".menu").classList.remove("hidden")
    })  
})
let createNew=(a) => {
    let team= document.createElement("div") 
    for(let key in a){
        let c= document.createElement("div")
        c.classList.add(key)
        c.textContent=a[key]
        team.append(c)
        c.addEventListener("click", ()=>{
            if (key=="email")window.location=`mailto:${a[key]}`
        })
    }
    _s(".team").append(team)
}
let handleNew =a=> {
    data.push(a)
    localStorage.setItem("team", JSON.stringify(a))
    createNew(a)
}
_s(".team").addEventListener("click", ()=>{

})