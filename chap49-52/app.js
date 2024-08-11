// Q no 1

// function info(){
// var userName=document.getElementById('name').value;
// var fatherName=document.getElementById('fatherName').value;
// var email=document.getElementById('email').value;
// var number=document.getElementById('no').value;
// document.write('Name : '+userName+'<br>')
// document.write('Fathername: '+fatherName+'<br>')
// document.write('Email: '+email+'<br>')
// document.write('Number :'+number+'<br>')
// }


// Q no 2

// function readMore(){
//        var description='reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus';
//       var pera=document.getElementById('para');
//         pera.innerHTML +=description
//      }


// Q no 3

// function addStudent() {
//         var studentName = document.getElementById('stdName').value;
//         var studentAge = document.getElementById('stdAge').value;
//         var studentGrade = document.getElementById('stdGrade').value;
    
//         if (studentName === "" || studentAge === "" || studentGrade === "") {
//             alert("Please fill in all fields");
//             return;
//         }
    
//         var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    
//         var row = document.createElement('tr');
    
//         var nameCell = document.createElement('td');
//         var ageCell = document.createElement('td');
//         var gradeCell = document.createElement('td');
//         var deleteCell = document.createElement('td');
//         var editCell = document.createElement('td');
    
//         nameCell.innerText = studentName;
//         ageCell.innerText = studentAge;
//         gradeCell.innerText = studentGrade;
    
//         var deleteButton = document.createElement('button');
//         deleteButton.innerText = "Delete";
//         deleteButton.setAttribute('onclick', 'deleteRow(this)');
        
//         var editButton = document.createElement('button');
//         editButton.innerText = "Edit";
//         editButton.setAttribute('onclick', 'editRow(this)');
    
//         deleteCell.appendChild(deleteButton);
//         editCell.appendChild(editButton);
    
//         row.appendChild(nameCell);
//         row.appendChild(ageCell);
//         row.appendChild(gradeCell);
//         row.appendChild(deleteCell);
//         row.appendChild(editCell);
    
//         table.appendChild(row);
    
//         document.getElementById('stdName').value = "";
//         document.getElementById('stdAge').value = "";
//         document.getElementById('stdGrade').value = "";
//         alert("Student added successfully");
//     }
    
//     function deleteRow(btn) {
//         var row = btn.parentNode.parentNode;
//         row.parentNode.removeChild(row);
//     }
    
//     function editRow(btn) {
//         var row = btn.parentNode.parentNode;
//         var nameCell = row.children[0];
//         var ageCell = row.children[1];
//         var gradeCell = row.children[2];
    
//         var newName = prompt("Edit Name:", nameCell.innerText);
//         var newAge = prompt("Edit Age:", ageCell.innerText);
//         var newGrade = prompt("Edit Grade:", gradeCell.innerText);
    
//         if (newName !== null && newName !== "") {
//             nameCell.innerText = newName;
//         }
//         if (newAge !== null && newAge !== "") {
//             ageCell.innerText = newAge;
//         }
//         if (newGrade !== null && newGrade !== "") {
//             gradeCell.innerText = newGrade;
//         }
//     }