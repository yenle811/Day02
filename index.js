const allStudent = [];
function printStudent(student) {
  const trWrapper = document.createElement("tr");
  const thId = document.createElement("th");
  thId.textContent = student.id;
  const tdStudentName = document.createElement("td");
  tdStudentName.textContent = student.name;
  const tdStudentAge = document.createElement("td");
  tdStudentAge.textContent = student.age;
  trWrapper.appendChild(thId);
  trWrapper.appendChild(tdStudentName);
  trWrapper.appendChild(tdStudentAge);
  const tbodyContent = document.getElementById("table-body");
  tbodyContent.appendChild(trWrapper);
}
function displayStudent() {
  const tbodyContent = document.getElementById("table-body");
  tbodyContent.innerHTML = "";
  allStudent.forEach(
    function (student) {
    printStudent(student);
  });
}
displayStudent();
function getStudent() {
  const inputName = document.getElementById("name");
  const inputAge = document.getElementById("age");
  const newStudent = {
    id: allStudent.length,
    name: inputName.value,
    age: inputAge.value,
  };
  allStudent.push(newStudent);
  displayStudent();
}
const addNewStudent = document.getElementById("add-new-student");
addNewStudent.addEventListener("click", getStudent);
