function validateAndProceed() {
    const password = document.querySelector('input[placeholder="Enter your password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm your password"]').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // You can add more validations here (e.g., email format, phone number format)

    return true; // Proceed with form submission
}

// Attach the validation function to the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateAndProceed()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
