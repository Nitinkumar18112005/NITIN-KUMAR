var attendanceRecords = [];

function submitAttendance() {
    var studentName = document.getElementById("studentName").value;
    var rollNo = document.getElementById("rollNo").value;

    if (studentName.trim() !== "" && rollNo.trim() !== "") {
        var record = { studentName: studentName, rollNo: rollNo };
        attendanceRecords.push(record);
        localStorage.setItem("attendanceRecords", JSON.stringify(attendanceRecords));

        // Clear the input fields
        document.getElementById("studentName").value = "";
        document.getElementById("rollNo").value = "";

        // Check if the limit is reached
        if (attendanceRecords.length >= 10) {
            showRecords();
        }
    } else {
        alert("Please enter valid student name and roll number.");
    }
}

function viewRecords() {
    showRecords();
}

function showRecords() {
    var existingRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    var recordsContainer = document.getElementById("records");
    recordsContainer.innerHTML = "";

    if (existingRecords.length > 0) {
        existingRecords.forEach(record => {
            var recordItem = document.createElement("div");
            recordItem.textContent = `Name: ${record.studentName}, Roll No: ${record.rollNo}`;
            recordsContainer.appendChild(recordItem);
        });
    } else {
        var noRecordsItem = document.createElement("div");
        noRecordsItem.textContent = "No records available.";
        recordsContainer.appendChild(noRecordsItem);
    }
}


