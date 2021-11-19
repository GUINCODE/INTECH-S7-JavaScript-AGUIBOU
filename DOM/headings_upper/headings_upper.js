
let array = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
for (let i = 0; i < array.length; i++) {
    array[i].innerHTML= array[i].innerText.toUpperCase()
}

