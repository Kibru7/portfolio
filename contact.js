document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formMessage = document.getElementById('formMessage');

  // Helper: set error
  function setError(element, message) {
    const errorDiv = element.parentElement.querySelector('.form-error');
    errorDiv.textContent = message;
    element.classList.add('error');
  }

  // Helper: clear error
  function clearError(element) {
    const errorDiv = element.parentElement.querySelector('.form-error');
    errorDiv.textContent = '';
    element.classList.remove('error');
  }

  // Validate email
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset messages
    formMessage.textContent = '';
    formMessage.className = 'form-message';

    // Name
    if (!nameInput.value.trim()) {
      setError(nameInput, 'Name is required.');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Email
    if (!emailInput.value.trim()) {
      setError(emailInput, 'Email is required.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      setError(emailInput, 'Please enter a valid email.');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Message
    if (!messageInput.value.trim()) {
      setError(messageInput, 'Message is required.');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      // ✅ In production, use Formspree, EmailJS, or your backend
      // For demo, simulate success
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.classList.add('success');
      contactForm.reset();

      // Optional: Reset errors after success
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    } else {
      formMessage.textContent = 'Please correct the errors above.';
      formMessage.classList.add('error');
    }
  });

  // Real-time validation (optional)
  nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim()) clearError(nameInput);
  });
  emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim()) {
      if (isValidEmail(emailInput.value)) {
        clearError(emailInput);
      }
    }
  });
  messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim()) clearError(messageInput);
  });
});