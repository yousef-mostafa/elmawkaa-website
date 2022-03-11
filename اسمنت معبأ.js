//select elements from document(navbar)
let dropdown_b = document.querySelector(".dropdown button");
let dropdown_content = document.querySelector(".dropdown .content");
dropdown_b.onclick = toggle_dropdown;

/* function to toggle dropdown menu */
function toggle_dropdown(){
    if (dropdown_content.style.display == "none") 
        dropdown_content.style.display = "block";
    else 
        dropdown_content.style.display = "none";
    }

//move from step to an other next

// get elements from document
let next_btn = document.getElementById("next-btn");
let back_btn = document.getElementById("back-btn");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let progress_btns = document.querySelectorAll("#progres-btn button");

console.log(progress_btns );

//event oncklick steps button
next_btn.onclick =  displayNext;
back_btn.onclick =  displayBack;


function displayNext(){
    if(form1.style.display == "block"){
        form1.style.display = "none"
        form2.style.display = "block"
        progress_btns[0].classList.remove("active");
        progress_btns[0].classList.add("visited");
        progress_btns[1].classList.add("active");

    }
    else if(form2.style.display == "block"){
        form2.style.display = "none"
        form3.style.display = "block"
        progress_btns[1].classList.remove("active");
        progress_btns[1].classList.add("visited");
        progress_btns[2].classList.add("active");
    }
    else{
        form3.style.display = "none";
        form4.style.display = "block";
        progress_btns[2].classList.remove("active");
        progress_btns[2].classList.add("visited");
        progress_btns[3].classList.add("active");
    }
}

function displayBack(){
    if(form4.style.display == "block"){
        form4.style.display = "none";
        form3.style.display = "block";
        progress_btns[3].classList.remove("active");
        progress_btns[3].classList.add("visited");
        progress_btns[2].classList.add("active");
    }
    else if(form3.style.display == "block"){
        form3.style.display = "none";
        form2.style.display = "block";
        progress_btns[2].classList.remove("active");
        progress_btns[2].classList.add("visited");
        progress_btns[1].classList.add("active");
    }
    else{
        form2.style.display = "none";
        form1.style.display = "block";
        progress_btns[1].classList.remove("active");
        progress_btns[0].classList.add("visited");
        progress_btns[0].classList.add("active");
    }
}
