// dropdown check unit to display second question
const btn = document.querySelector('#unit');
btn.onchange = event => { 
     document.getElementById("second-Q").style.display = "flex"
    }
   // dropdown check chapter to display second question 
const chbtn = document.querySelector('#Chapter');
chbtn.onchange = event => { 
     document.getElementById("checkbox_N").style.display = "flex"
    }
   // dropdown check time to display results   
const tbtn = document.querySelector('#time');
tbtn.onchange = event => { 
    document.getElementById("Results").style.display = "flex"
    document.getElementById("section2").style.display = "block"
    document.getElementById("Submit").style.display = "none"
        }
// SwitchCheck Normal 
function switch_N() {
    // document.getElementById("flexSwitchCheckDefault").style.display = "off"
    document.getElementById("label1").style.color = " #0053CB "
    document.getElementById("Results").style.display = "flex"
    document.getElementById("section2").style.display = "block"
    document.getElementById("Submit").style.display = "none"
    document.getElementById("schedual").style.display = "none"
// Uncheck
// document.getElementById("checkbox").checked = false;
// $("#checkbox").attr("checked", false);
// document.querySelector('.myCheckBox').checked = false;
}
// SwitchCheck Scheduled 
function switch_S() {
    // document.getElementById("flexSwitchCheckDefault").style.display = "off"
    document.getElementById("label").style.color = " #0053CB "
    document.getElementById("schedual").style.display = "flex"
    // Check
// document.getElementById("checkbox").checked = true;  
}
// add question2 
function add() {
    document.getElementById("label").style.color = " #0053CB ";
    var createDiv = document.querySelector("#addsection");
    createDiv.style.display ="block";
   
     
}
// remove question2 
function remove() {
    document.getElementById("label").style.color = " #0053CB "
    document.getElementById("addsection").style.display = "none"
     
}
 
// check input to submit
let InputID = document.getElementById('inputtext');
InputID.addEventListener('input', function() {
    
        document.getElementById("Submit").style.display = "block"
    
});
 
const sb = document.querySelector('#mCQ')
if (sb=="True/False"){
    document.getElementById("line2").style.display = "none"
}