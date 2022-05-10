const finalDest = document.getElementById("show-item")
const moveTxt = document.getElementById("add-button")
let getTxt = document.getElementById("text-ent")

moveTxt.addEventListener("click", function getItem() {
  let getTxt = document.getElementById("text-ent").value

  if (getTxt ===  "") {
    alert("Write something before adding")
  } else {
    finalDest.innerHTML += `<li>${getTxt}<span class="close">x</span></li>`
    document.getElementById("text-ent").value = ""
  }
  
  const closebtns = document.getElementsByClassName("close");

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
})

getTxt.addEventListener("keyup", function entItem(event) {
  if (event.keyCode === 13) {
    let getTxt = document.getElementById("text-ent").value

    if (getTxt ===  "") {
      alert("Write something before adding")
    } else {
      finalDest.innerHTML += `<li>${getTxt}<span class="close">x</span></li>`
      document.getElementById("text-ent").value = ""
    }
    
    const closebtns = document.getElementsByClassName("close");
  
  /* Loop through the elements, and hide the parent, when clicked on */
  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }
}
})





