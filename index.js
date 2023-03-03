function submitForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    if (fname == "" || lname == "" || email == "" || subject == "") {
        alert("Please fill in all fields");
        return false;
    }

    document.getElementById("submit-btn").value = "Submitted!";
    document.getElementById("submit-btn").style.backgroundColor = "green";
    setTimeout(function () {
        document.getElementById("submit-btn").value = "Submit";
        document.getElementById("submit-btn").style.backgroundColor = "";
    }, 2000);
}

document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();
    submitForm();
    document.getElementById("contact-form").reset();
});
