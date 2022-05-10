setInterval(getTime, 1000)

 
function getTime() {
  let dateInfo = new Date()
  let hour = dateInfo.getHours() 
  let minutes = dateInfo.getMinutes()
  let seconds = dateInfo.getSeconds()

  hour = hour < 10 ? "0" + hour : hour
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  let currentTime =`${hour} : ${minutes} : ${seconds} ` 

  document.getElementById("current-time").innerHTML = currentTime

const dow = [
  "Vasárnap",
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek",
  "Szombat",
]

const month = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Agusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
]

const day = dateInfo.getDate()
const year = dateInfo.getFullYear()

const currentDate = `${year}, ${month[dateInfo.getMonth()]}, ${dow[dateInfo.getDay()]} ${day}`

document.getElementById("current-date").innerHTML = currentDate
} 

getTime()






