let selectedOption = 'debitCard';

function selectOption(option) {
    selectedOption = option;
    // Reset all checkmarks
    document.getElementById('debitCardCheck').style.display = 'none';
    document.getElementById('existingCustomerCheck').style.display = 'none';

    // Show checkmark for selected option
    document.getElementById(`${option}Check`).style.display = 'inline';
}

function validateForm(event) {
    event.preventDefault();

    const customerId = document.getElementById('customerId').value;

    // Validate customer ID (assuming 10 digits)
    if (!/^\d{10}$/.test(customerId)) {
        alert('Please enter a valid 10-digit Customer ID');
        return false;
    }

    // Store the data in sessionStorage
    sessionStorage.setItem('customerId', customerId);
    sessionStorage.setItem('registrationType', selectedOption);

    // Redirect to appropriate page based on selection
    if (selectedOption === 'debitCard') {
        window.location.href = 'debit-card.html';
    } else {
        window.location.href = 'existing-customer.html';
    }
}

// Function to handle form submission
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberCRN = document.getElementById('rememberCRN').checked;

    // Here you would typically make an API call to your backend
    // For demo purposes, we'll just show an alert
    console.log('Login attempt:', { username, password, rememberCRN });
    alert('Login functionality would be implemented here');
}

// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.querySelector('.show-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Show';
    }
}

// Function to switch between login and register forms
function switchForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.querySelector('.tab:nth-child(1)');
    const registerTab = document.querySelector('.tab:nth-child(2)');

    if (formType === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    }
}

// Function to handle registration
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const mobile = document.getElementById('regMobile').value;
    const password = document.getElementById('regPassword').value;

    // Here you would typically make an API call to your backend
    console.log('Registration attempt:', { name, email, mobile, password });
    alert('Registration functionality would be implemented here');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const isRegisterTab = this.textContent.includes('Register');
            switchForm(isRegisterTab ? 'register' : 'login');
        });
    });

    // Handle banking type dropdown
    const bankingType = document.querySelector('.banking-type');
    bankingType.addEventListener('click', function() {
        // Here you would typically show a dropdown menu
        alert('Banking type selection would be implemented here');
    });
});
