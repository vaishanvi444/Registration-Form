function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Simple validation
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        return;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        return;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        return;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = 'Please confirm the password.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        return;
    }

    // Additional validation can be added here

    // Simulate server-side validation
    // For a real-world application, make an AJAX request to the server for validation
    // For simplicity, we'll use a timeout to simulate a server response
    setTimeout(function () {
        // Assume the server response is valid for demonstration purposes
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }, 500);
}
