const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click",()=>{
    if  (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block";
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = "none";
    }
})

const image1 = document.querySelector(".main-icon")
image1.addEventListener("mouseenter", ()=>{
    image1.style.transform = "rotate(5deg)";
})
image1.addEventListener("mouseleave",()=>{
    image1.style.transform = "rotate(-5deg)";
})

const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName")
const email = document.querySelector(".email")
const notName = document.querySelector(".notificationName")
const notEmail = document.querySelector(".notificationEmail")
const submit = document.querySelector(".submit")
const notSubmit = document.querySelector(".notificationSubmit")
    
formular.addEventListener("submit", (event) => {
    event.preventDefault(); 
       
notName.style.display = fullName.value === "" ? "block" : "none";
notEmail.style.display = email.value === "" ? "block" : "none";
    formular.reset();
 })
    
submit.addEventListener("click",()=>{
    if ((notName&&notEmail).style.display="block" ) {
        notSubmit.style.display = "block";}
    else {
        notSubmit.style.display = "none";}})
            
    
  
 