function checkResult() {

    
    var name = document.getElementById("studentName").value;
    var mark = parseInt(document.getElementById("studentMark").value);

    var resultDiv = document.getElementById("result");
    var studentList = document.getElementById("studentList");

    if (name === "") {
        resultDiv.textContent = "Please enter a student name.";
        return;
    }

    
    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    
    var result = "";
    var grade = "";

    
    if (mark >= 80) {
        result = "PASS";
        grade = "Distinction";
    }
    else if (mark >= 65) {
        result = "PASS";
        grade = "Merit";
    }
    else if (mark >= 50) {
        result = "PASS";
        grade = "Pass";
    }
    else {
        result = "FAIL";
        grade = "Fail";
    }

    
    resultDiv.innerHTML =
        "Student: " + name +
        "<br>Mark: " + mark +
        "<br>Result: " + result +
        "<br>Grade: " + grade;

    
    var listItem = document.createElement("li");
    listItem.textContent =
        name + " - " + mark + "% - " + result + " (" + grade + ")";

    studentList.appendChild(listItem);

    
    document.getElementById("studentName").value = "";
    document.getElementById("studentMark").value = "";
}
