let body = document.querySelector("body")
let snakefield = document.createElement("section")
snakefield.id = "snakeField"
body.appendChild(snakefield)

let colors = [
    "blue",
    "yellow",
    "green",
    "lime",
    "pink",
    "white",
    "violett",
    "orange"
]

for (let i = 1; i<= 100; i++) {
    let div = document.createElement("div")
    div.classList.add("item")
    snakefield.appendChild(div)  
    div.addEventListener('mouseover', event => {
        event.target.style.background = colors[Math.floor(Math.random() * 7)]
        setTimeout(() => {
            event.target.style.background = "lightblue"
        }, 1000)
      
    })
}




