// bismillah,

// features section
// the "feat-on" class "bottom border"

const ftSimpl = document.getElementById("simpl")
const ftSpeed = document.getElementById("speed")
const ftEasy = document.getElementById("easy")

const ftImg = document.getElementById("feat-image")
const ftTxtH = document.getElementById("feat-text-h")
const ftTxtP= document.getElementById("feat-text-p")

const openArrow1 = document.getElementById("open-arrow-1")
const openArrow2 = document.getElementById("open-arrow-2")
const openArrow3 = document.getElementById("open-arrow-3")
const openArrow4 = document.getElementById("open-arrow-4")

const answr1 = document.getElementById("answer-1")
const answr2 = document.getElementById("answer-2")
const answr3 = document.getElementById("answer-3")
const answr4 = document.getElementById("answer-4")

const email = document.getElementById("email-input")
const cntctBtn = document.querySelector(".join-btn")
const errImg = document.getElementById("error-img")

// ---------------------------------------------------

ftSimpl.addEventListener("click", () => {
  // remove the class from all previes elements and add it to current element 
  ftSimpl.classList.remove("feat-on")
  ftSpeed.classList.remove("feat-on")
  ftEasy.classList.remove("feat-on")

  ftSimpl.classList.add("feat-on")

  // changin image and the header and the paragraph
  ftImg.src = "images/illustration-features-tab-1.svg"
  ftTxtH.innerText = "Bookmark in one click"
  ftTxtP.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
})

ftSpeed.addEventListener("click", () => {
  // remove the class from all previes elements and add it to current element 
  ftSimpl.classList.remove("feat-on")
  ftSpeed.classList.remove("feat-on")
  ftEasy.classList.remove("feat-on")

  ftSpeed.classList.add("feat-on")

  // changin image and the header and the paragraph
  ftImg.src = "images/illustration-features-tab-2.svg"
  ftTxtH.innerText = "Intelligent search"
  ftTxtP.innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
})

ftEasy.addEventListener("click", () => {
  // remove the class from all previes elements and add it to current element 
  ftSimpl.classList.remove("feat-on")
  ftSpeed.classList.remove("feat-on")
  ftEasy.classList.remove("feat-on")

  ftEasy.classList.add("feat-on")
  ftImg.src = "images/illustration-features-tab-3.svg"
  ftTxtH.innerText = "Share your bookmarks"
  ftTxtP.innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
})


// qustion section
// open the answers

openArrow1.addEventListener("click", () => {
  answr1.classList.toggle("answer-off")
})

openArrow2.addEventListener("click", () => {
  answr2.classList.toggle("answer-off")
})

openArrow3.addEventListener("click", () => {
  answr3.classList.toggle("answer-off")
})

openArrow4.addEventListener("click", () => {
  answr4.classList.toggle("answer-off")
})

email.addEventListener("blur",() => {
  let emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  if(emailRegEx.test(email.value) == false){
    errImg.classList.remove("display-none")
  }else{
    errImg.classList.add("display-none")
  }
})