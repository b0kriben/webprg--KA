const button = document.querySelector(".btn")

// Event listener
button.addEventListener("click",function() {
console.log("első event listener")
})

button.addEventListener("click", () => {
console.log("második event listener")
})


// Event handler
button.onclick = () => {
console.log("első event handler")
}

button.onclick = () => {
console.log("második event handler")
}