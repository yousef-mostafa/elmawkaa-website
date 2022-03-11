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