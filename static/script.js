// DOM Elements
const form = document.getElementById('articleForm');
const submitBtn = document.getElementById('submitBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultsSection = document.getElementById('resultsSection');
const errorSection = document.getElementById('errorSection');
const successResult = document.getElementById('successResult');
const errorMessage = document.getElementById('errorMessage');

// Form validation
function validateForm() {
    const email = document.getElementById('email').value.trim();
    const articleUrl = document.getElementById('articleUrl').value.trim();
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Email validation
    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // URL validation
    if (!articleUrl) {
        showError('urlError', 'Article URL is required');
        isValid = false;
    } else if (!isValidUrl(articleUrl)) {
        showError('urlError', 'Please enter a valid URL');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    // Show loading state
    setLoadingState(true);
    hideResults();

    try {
        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            article_url: formData.get('article_url')
        };

        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            showSuccessResult(result);
        } else {
            showErrorResult(result.detail || 'An error occurred while processing your request');
        }
    } catch (error) {
        console.error('Error:', error);
        showErrorResult('Network error. Please check your connection and try again.');
    } finally {
        setLoadingState(false);
    }
});

function setLoadingState(loading) {
    if (loading) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Processing...';
        loadingSpinner.classList.add('show');
    } else {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Process Article';
        loadingSpinner.classList.remove('show');
    }
}

function showSuccessResult(result) {
    // Populate success result
    document.getElementById('sessionId').textContent = result.session_id;
    document.getElementById('resultEmail').textContent = result.email || document.getElementById('email').value;
    document.getElementById('resultUrl').textContent = result.article_url || document.getElementById('articleUrl').value;
    document.getElementById('resultUrl').href = result.article_url || document.getElementById('articleUrl').value;

    // Show success section
    resultsSection.style.display = 'block';
    errorSection.style.display = 'none';
    successResult.style.display = 'block';

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });

    // Reset form
    form.reset();
}

function showErrorResult(message) {
    errorMessage.textContent = message;
    resultsSection.style.display = 'block';
    errorSection.style.display = 'block';
    successResult.style.display = 'none';

    // Scroll to error
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function hideResults() {
    resultsSection.style.display = 'none';
    errorSection.style.display = 'none';
    successResult.style.display = 'none';
}

// Real-time validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
    } else {
        document.getElementById('emailError').classList.remove('show');
    }
});

document.getElementById('articleUrl').addEventListener('blur', function() {
    const url = this.value.trim();
    if (url && !isValidUrl(url)) {
        showError('urlError', 'Please enter a valid URL');
    } else {
        document.getElementById('urlError').classList.remove('show');
    }
});

// Add some interactive effects
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Add animation to feature items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
