//elem kiválasztása id alapján
let cont = document.getElementById("cont")
let col3 = document.querySelector("#col3Id")  // #-gel kezdődik, mint a CSS-ben

// elem kiválasztása class alapján
let col2Element = document.querySelector(".col2") // .-tal kezdődik, mint a CSS-ben

// az elemhez tartozó összes stíluselem lekérdezése
let col2Style = window.getComputedStyle(col2Element)

// az elem egy meghatározott talajdonságának az lekérdezése
let col2color = window.getComputedStyle(col2Element).getPropertyValue("color")
// vagy rövidebben
let col2Color = col2Style.getPropertyValue("color")


function changeColorMode() {

    let elem1 = document.querySelector(".col1")
    elem1.style.color = "#FE5858"
    // document.querySelector(".col1").style.color = "#FE5858"
    
    cont.style.backgroundColor = "#5d353e" 
    // document.getElementById("cont").style.backgroundColor = "#5d353e"

    col2Element.style.color = "white"
    // document.querySelector(".col2").style.color = "white"

    col3.style.backgroundColor = "#B2D6CA"
    col3.style.color = col2Color
    // document.querySelector("#col3Id").style.backgroundColor = "#B2D6CA"
    // document.querySelector("#col3Id").style.color = col2Color
}