const zona = document.querySelector(".form")
zona.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
zona.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("divs")
    zona.style.background = `url("div${n}.png")`
})

for(i=1; i<document.querySelector(".divs").children.length + 1; i++){
    document.querySelector(`.div${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e))
}

const transferirTextura = (n,e)=>{
    e.dataTransfer.setData("div", n)
}