document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const fullname = document.getElementById('fullname').value.trim();
      const rollNumber = document.getElementById('rollNumber').value.trim();
      const email = document.getElementById('email').value.trim();
      const department = document.getElementById('department').value;

      const errorMessage = document.getElementById('errorMessage');
      const formElement = document.getElementById('registrationForm');
      const successMessage = document.getElementById('successMessage');

      errorMessage.style.display = 'none';
      if (!fullname || !rollNumber || !email || !department) {
        errorMessage.textContent = 'Please fill out all required fields.';
        errorMessage.style.display = 'block';
        return;
      }
      if (rollNumber.length !== 9) {
        errorMessage.textContent = 'Roll Number must be exactly 9 characters long (e.g., 26XX10001).';
        errorMessage.style.display = 'block';
        return;
      }
      formElement.style.display = 'none';
      successMessage.style.display = 'block';
    });