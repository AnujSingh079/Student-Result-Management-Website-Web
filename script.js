// Prevents typed text (like <b>) from being treated as HTML
function escapeHtml(text)
{
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function calculateResult()
{
    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();

    let markIds = ["maths", "computer", "english", "physics", "cprogramming"];

    if (name === "" || roll === "")
    {
        alert("Please enter student name and roll number.");
        return;
    }

    // Make sure every marks field is filled in
    for (let i = 0; i < markIds.length; i++)
    {
        if (document.getElementById(markIds[i]).value === "")
        {
            alert("Please enter marks for all subjects.");
            return;
        }
    }

    let maths = Number(document.getElementById("maths").value);
    let computer = Number(document.getElementById("computer").value);
    let english = Number(document.getElementById("english").value);
    let physics = Number(document.getElementById("physics").value);
    let cprogramming = Number(document.getElementById("cprogramming").value);

    if (
        maths < 0 || maths > 100 ||
        computer < 0 || computer > 100 ||
        english < 0 || english > 100 ||
        physics < 0 || physics > 100 ||
        cprogramming < 0 || cprogramming > 100
    )
    {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let total = maths + computer + english + physics + cprogramming;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let result;

    if (
        maths >= 40 &&
        computer >= 40 &&
        english >= 40 &&
        physics >= 40 &&
        cprogramming >= 40
    )
    {
        result = "PASS";
    }
    else
    {
        result = "FAIL";
    }

    let resultBox = document.getElementById("result");

    resultBox.style.display = "block";

    resultBox.innerHTML =
        "<h2>Student Result</h2>" +
        "<p><b>Name:</b> " + escapeHtml(name) + "</p>" +
        "<p><b>Roll Number:</b> " + escapeHtml(roll) + "</p>" +
        "<hr>" +
        "<p><b>Total Marks:</b> " + total + " / 500</p>" +
        "<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>" +
        "<p><b>Grade:</b> " + grade + "</p>" +
        "<p><b>Result:</b> " + result + "</p>";
}

function resetForm()
{
    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";

    document.getElementById("maths").value = "";
    document.getElementById("computer").value = "";
    document.getElementById("english").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("cprogramming").value = "";

    document.getElementById("result").style.display = "none";
}
