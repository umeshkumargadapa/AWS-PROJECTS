const API_URL =
"";

async function registerStudent(){

const student = {

studentId:
document.getElementById("studentId").value,

name:
document.getElementById("name").value,

course:
document.getElementById("course").value,

email:
document.getElementById("email").value

};

const response =
await fetch(`${API_URL}/students`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(student)

});

const data =
await response.json();

document.getElementById("message").innerText =
data.message;

}

async function viewStudents(){

const response =
await fetch(`${API_URL}/students`);

const students =
await response.json();

let rows="";

students.forEach(student=>{

rows+=`
<tr>
<td>${student.studentId}</td>
<td>${student.name}</td>
<td>${student.course}</td>
<td>${student.email}</td>
</tr>
`;

});

document.getElementById("studentTable").innerHTML=
rows;

}