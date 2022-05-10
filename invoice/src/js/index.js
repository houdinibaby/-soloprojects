let service = []
let servicePrice = []

const washEl = document.getElementById("wash-el")
const mowEl = document.getElementById("mow-el")
const weedsEl = document.getElementById("weeds-el")
let taskEl = document.getElementById("task-add")
let totalAdd = document.getElementById("total-el")
const invoiceEl = document.getElementById("invoice-el")

const remove = document.getElementById("buttRem")

washEl.addEventListener("click", function () {
    service.push("Wash Car") 
    servicePrice.push(10)
    renderLeads()
    
} ) 

mowEl.addEventListener("click", function () {
    service.push("Mow Lawn")
    servicePrice.push(20)
    renderLeads()

}) 

weedsEl.addEventListener("click", function () {
    service.push("Pull Weeds")
    servicePrice.push(30)
    renderLeads()
    
}) 

//remove.addEventListener("click", function () {
    //alert("sup")

//})

function renderLeads() {
    let listItems = ""
    let listPrice = 0
    
    for (let i = 0; i < service.length; i++) {
        listItems += `
        <div>
            <li>$${servicePrice[i]}</li>
                <button id = buttRem >Remove</button>${service[i]} </div>`
    }
        for (let i = 0; i < servicePrice.length; i++) {
        listPrice += servicePrice[i]
        }
    taskEl.innerHTML = listItems
    totalAdd.textContent = "$" + listPrice
}

invoiceEl.addEventListener("click", function () {
    taskEl.innerHTML = ""
    totalAdd.textContent = ""
    service = []
    servicePrice = []
    
})

//<div class="p21">$</div>


//let cashEL = cashEl1 + cashEl2 + cashEl3

//<li id="cash-el1">$10</li>
