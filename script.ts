// get refrences to the form and display area 
 const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


//handle from submission
form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();// prevent page reload


// collect input vALUE 

const Name=(document.getElementById('name')as HTMLInputElement).value
const Email=(document.getElementById('email')as HTMLInputElement).value
const Phone=(document.getElementById('phone')as HTMLInputElement).value
const Education=(document.getElementById('education')as HTMLInputElement).value
const Experience=(document.getElementById('experience')as HTMLInputElement).value
const skills=(document.getElementById('skill')as HTMLInputElement).value


// generate the resume content dynamiclly
const resumeHTML=`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${Name}</p>
<p><b>Email:</b>${Email}</p>
<p><b>Phone:</b>${Phone}</p>

<h3>Education</h3>
<p>${Education}</p>

<h3>Experience</h3>
<p>${Experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

//display the generate resume 
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML
} else{
    console.error('the resume display element is missing.');
}

});
