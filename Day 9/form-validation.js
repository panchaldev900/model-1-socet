// Clear error message when user starts typing
document.getElementById('name').addEventListener('input', () => clearError('name'));
document.getElementById('email').addEventListener('input', () => clearError('email'));
document.getElementById('phone').addEventListener('input', () => clearError('phone'));
document.getElementById('password').addEventListener('input', () => clearError('password'));

function clearError(fieldName) {
    const errorElement = document.getElementById(fieldName + 'Error');
    const inputElement = document.getElementById(fieldName);
    errorElement.textContent = '';
    inputElement.classList.remove('error-input');
}

function showError(fieldName, message) {
    const errorElement = document.getElementById(fieldName + 'Error');
    const inputElement = document.getElementById(fieldName);
    errorElement.textContent = message;
    inputElement.classList.add('error-input');
}

function validateName(name) {
    if (name === '') {
        showError('name', 'Name is required');
        return false;
    }
    if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError('name', 'Name can only contain letters and spaces');
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email === '') {
        showError('email', 'Email is required');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email');
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (phone === '') {
        showError('phone', 'Phone is required');
        return false;
    }
    const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
    if (!phoneRegex.test(phone)) {
        showError('phone', 'Please enter a valid phone number');
        return false;
    }
    if (phone.replace(/\D/g, '').length < 10) {
        showError('phone', 'Phone must have at least 10 digits');
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password === '') {
        showError('password', 'Password is required');
        return false;
    }
    if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters');
        return false;
    }
    return true;
}

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validate each field
    if (!validateName(name)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    if (!validatePhone(phone)) isValid = false;
    if (!validatePassword(password)) isValid = false;

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}

document.getElementById('registrationForm').addEventListener('submit', validateForm);
