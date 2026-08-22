 var defaultStudents = [
  { fname: "Ahmed", lname: "Ali", crs: "JavaScript", phone: "01011111111", email: "ahmed@mail.com", grade: "A" },
  { fname: "Sara", lname: "Hassan", crs: "React", phone: "01122222222", email: "sara@mail.com", grade: "B+" },
  { fname: "Omar", lname: "Mostafa", crs: "Node.js", phone: "01233333333", email: "omar@mail.com", grade: "A-" },
  { fname: "Laila", lname: "Yousef", crs: "Python", phone: "01044444444", email: "laila@mail.com", grade: "A" },
  { fname: "Yassin", lname: "Mahmoud", crs: "MongoDB", phone: "01155555555", email: "yassin@mail.com", grade: "B"},
  { fname: "Menna", lname: "Ahmed", crs: "JavaScript", phone: "01033311111", email: "maenna@mail.com", grade: "A+" },
  
];

var students = [];
var selectedIndex = null;
 
var studentSelect = document.querySelector("#studentSelect");
var detailsBox  =  document.querySelector("#detailsBox");
var studentForm =  document.querySelector("#studentForm");
var deleteBtn  = document.querySelector("#deleteBtn");
var fnameInput = document.querySelector("#fname");
var lnameInput = document.querySelector("#lname");
var crsInput   = document.querySelector("#crs");
var gradeInput = document.querySelector("#grade");
var phoneInput = document.querySelector("#phone");
var emailInput = document.querySelector("#email");


window.addEventListener("load", function () {
    var storedData = localStorage.getItem("studentsData");
    if (storedData) {
        students = JSON.parse(storedData);
    }
    else {
        students = defaultStudents;
        saveToStorage();
    }
    renderDropdown();
});

function saveToStorage() {
     localStorage.setItem( "studentsData", JSON.stringify(students)  );

} 
function renderDropdown() { 
    studentSelect.innerHTML = '<option value="">-- Choose Student --</option>';
    for (var i = 0; i < students.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = students[i].fname +  " " + students[i].lname;
        studentSelect.appendChild(option); 
    } 
}
studentSelect.addEventListener("change", function () {
    selectedIndex = this.value;
    if (  selectedIndex != "" && students[selectedIndex] ) { 
        var currentStudent = students[selectedIndex];
        fnameInput.value = currentStudent.fname; 
        lnameInput.value =  currentStudent.lname; 
        crsInput.value =  currentStudent.crs; 
        gradeInput.value =  currentStudent.grade; 
        phoneInput.value =  currentStudent.phone; 
        emailInput.value = currentStudent.email; 
        detailsBox.style.cssText = ` display:block; `;
    } 
    else { 
        detailsBox.style.cssText = ` display:none;  `; 
    }
});

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (  selectedIndex == null ||selectedIndex == "") {
        return;
    }
    students[selectedIndex] = {
        fname: fnameInput.value.trim(),
        lname: lnameInput.value.trim(),
        crs: crsInput.value.trim(),
        grade: gradeInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim()
    }; 
    saveToStorage();
    renderDropdown(); 
    studentSelect.value = selectedIndex;
    alert("Student updated successfully");
});

deleteBtn.addEventListener("click", function () {

    if ( selectedIndex == null || selectedIndex == "") {
        return;
    }
    students =students.filter(function (student, index) { 
            return index != selectedIndex; 
        });
    saveToStorage();
    selectedIndex = null;
    renderDropdown(); 
    detailsBox.style.cssText = `  display:none;  `;
});