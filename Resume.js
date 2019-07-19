
    
var image5 = document.querySelector(".img_5");
var modal_history = document.querySelector(".modal-work-history");
var closebtn_work_history = document.querySelector(".close-btn-work-history");


var image4 = document.querySelector(".img_4");
var modal_edu = document.querySelector(".modal-edu");
var closebtn_edu = document.querySelector(".close-btn-edu");


var modal_skills = document.querySelector(".modal-skills");
var closebtn_skills = document.querySelector(".close-btn-skills");
var image6 = document.querySelector(".img_6");

function openModal_history(){
    modal_history.style.display = 'block'
    console.log("clicked")

}

function closeModal_history(){
    modal_history.style.display = 'none'

}

function openModal_education(){
    modal_edu.style.display = 'block'

}

function closeModal_education(){
    modal_edu.style.display = 'none'

}

function openModal_skills(){
    modal_skills.style.display = 'block'

}

function closeModal_skills(){
    modal_skills.style.display = 'none'

}

console.log(image5);
console.log("modal-for-history" );
console.log(modal_history);

image5.onclick = openModal_history;
closebtn_work_history.onclick = closeModal_history;   

image4.onclick = openModal_education;
closebtn_edu.onclick = closeModal_education;
   

image6.onclick = openModal_skills;
closebtn_skills.onclick = closeModal_skills;
