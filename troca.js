
// camelCase is a convention that for a variable, we capitalize the second word


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

// The DOM: Document Object Model: How I use js to modify an HTML document


// Save funtion:

let saveEl = document.getElementById("save-el")

// U can use also .textcontent instead innertext, its cheaper computationally and does not ommit non human readable characters like spaces.

function save() {
    saveEl.innerText  += count + '\xa0' + "-" + '\xa0'
    count = 0
    countEl.textContent = count
}