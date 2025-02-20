

const questionBtn = document.querySelectorAll('#faq-btn')
// const answers =document.querySelectorAll('p')
const answers = document.querySelectorAll('.faq-answer')
const minusIcon =document.querySelectorAll('.minusIcon')
const plusIcon =document.querySelectorAll('.plusIcon')
questionBtn.forEach(btn => (
    btn.addEventListener('click', function () {
        this.classList.toggle('active')
        
        if(answers.style.maxheight) {
            answers.style.maxheight = null 
            plusIcon.style.display= 'block'
            minusIcon.style.display= 'none'
        } else answers.style.maxheight = answers.scrollheight + 'px'
        plusIcon.style.display= 'none'
        minusIcon.style.display= 'block'

    })    
))    
console.log(questionBtn)





// document.getElementById("dropdwon").onclick = function() {changeIcon()};

// changeIcon () => { 


// document.getElementById("dropdown").innerHTML = ' xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';


//  }

// const showAnwers = () => {

// }

    
//     let  = 
//     document.getElementById('rectangle')
// let btn = 
//     document.getElementById('btn')
// btn.addEventListener('click', () => {

// const containerBox = document.querySelector(".faq_accordion");

// containerBox.addEventListener("click", function (e) {
//   const faqItem = e.target.closest(".faq_accordion_item");
//   const image = faqItem.querySelector(".faq_accordion_image");
//   const content = faqItem.querySelector(".faq_answer");

//   if (faqItem) {
//     content.classList.toggle("hidden");
//     content.classList.contains("hidden")
//       ? (image.src = "./assets/images/icon-plus.svg")
//       : (image.src = "./assets/images/icon-minus.svg");
//   }
// })