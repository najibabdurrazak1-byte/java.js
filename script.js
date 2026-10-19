
const studentForm = document.getElementById("studentForm");
const cardResult = document.getElementById("cardResult");
const formMessage = document.getElementById("formMessage");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const schoolName = document.getElementById("schoolName").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!studentName || !schoolName || !course) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    document.getElementById("cardStudentName").textContent = studentName;
    document.getElementById("cardSchoolName").textContent = schoolName;
    document.getElementById("cardCourse").textContent = course;

    formMessage.textContent = "";
    cardResult.hidden = false;
});
