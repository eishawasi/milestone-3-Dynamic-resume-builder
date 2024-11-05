// get refrences to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle from submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input vALUE 
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var skills = document.getElementById('skill').value;
    // generate the resume content dynamiclly
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(Name, "</p>\n<p><b>Email:</b>").concat(Email, "</p>\n<p><b>Phone:</b>").concat(Phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(Experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    //display the generate resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
