//alert("HALLLLOU");

let x = document.getElementById("inputNum")//.valueAsNumber

const a = 3.2808399 //feet
const lengthMeter = a.toFixed(3)
const b = 0.3048 //meter
const lengthFeet = b.toFixed(3)
let lengthcalc = document.getElementById("length-el")

const c = 0.264172052 //gallons
const volumeLiter = c.toFixed(3)
const d = 3.78541178 //liter
const volumeGallon = d.toFixed(3)
let volumecalc = document.getElementById("volume-el")

const e = 2.20462262 //pounds
const massKilograms = e.toFixed(3)
const f = 0.45359237 //kilograms
const massPounds = f.toFixed(3)
let masscalc = document.getElementById("mass-el")

const g = 0.745699872 //kilowatts
const powerHorsepower = g.toFixed(3)
const h = 1.34102209 //hp
const powerKilowatt = h.toFixed(3)
let powercalc = document.getElementById("power-el")

function entNum() {
    let result = document.getElementById("inputNum").valueAsNumber
    
    let lengthMeterCalc = result * lengthMeter + " " + "feet"
    let lengthFeetCalc = result * lengthFeet + " " + "meter"

    let volumeLiterCalc = result * volumeLiter + " " + "gallons"
    let volumeGallonCalc = result * volumeGallon + " " + "liter"

    let massKilogramsCalc = result * massKilograms + " " + "pounds"
    let massPoundsCalc = result * massPounds + " " + "kgs"

    let powerHorsepowerCalc = result * powerHorsepower + " " + "kW"
    let powerKilowattCalc = result * powerKilowatt + " " + "hp"

    let lengthSum = result + " " + "meters" + " " + "=" + " " + lengthMeterCalc + " " + "|"+ " " + result + " " + "feet" + " " + "=" + " " + lengthFeetCalc 
    lengthcalc.textContent = lengthSum

    let volumeSum = result + " " + "liter" + " " + "=" + " " + volumeLiterCalc + " " + "|"+ " " + result + " " + "gallons" + " " + "=" + " " + volumeGallonCalc 
    volumecalc.textContent = volumeSum

    let massSum = result + " " + "kgs" + " " + "=" + " " + massKilogramsCalc + " " + "|"+ " " + result + " " + "pounds" + " " + "=" + " " + massPoundsCalc 
    masscalc.textContent = massSum
    
    let powerSum = result + " " + "hp" + " " + "=" + " " + powerHorsepowerCalc + " " + "|"+ " " + result + " " + "kW" + " " + "=" + " " + powerKilowattCalc
    powercalc.textContent = powerSum
}


