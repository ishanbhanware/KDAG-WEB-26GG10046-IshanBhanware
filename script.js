const name = document.getElementById("name");
const email = document.getElementById("email");
const roll = document.getElementById("rollnumber");
const department = document.getElementById("department");
const register = document.getElementById("submit");
const form = document.getElementById("form");
const success = document.getElementById("success");
register.addEventListener("click", () => {
    if (name.value === "" || email.value === "" || roll.value === "" || department.value === "") {
        alert("Please fill out all required fields.");
        return;
    }
    if (roll.value.length !== 9) {
        alert("Roll Number must be exactly 9 characters long (e.g., 26XX10001).");
        return;
    }
    else {
        form.style.display = "none";
        success.style.display = "block";
    }
});
