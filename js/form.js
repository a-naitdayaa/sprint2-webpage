export function initFormValidation() {
  const errorMessages = {
    name: {
        valueMissing: 'Name is required',
        tooShort: 'Name must be at least 2 characters'
    },
    email: {
        valueMissing: 'Email is required',
        typeMismatch: 'Please enter a valid email address'
    },
    phone: {
        patternMismatch: 'Please enter a valid phone number'
    },
    message: {
        valueMissing: 'Message is required',
        tooShort: 'Message must be at least 10 characters'
    }
};

const form = document.getElementById('contactForm'); 

function showError(input) {
    const errorElement = input.parentElement.querySelector('.error-message');
    const fieldname = input.id;

    if (input.validity.valueMissing) {
        errorElement.textContent = errorMessages[fieldname].valueMissing || 'This field is required';
    } else if (input.validity.typeMismatch) {
        errorElement.textContent = errorMessages[fieldname].typeMismatch || 'Please enter a valid email address'; 
    } else if (input.validity.tooShort) {
        errorElement.textContent = errorMessages[fieldname].tooShort || `Please enter at least ${input.getAttribute('minlength')} characters`;
    } else if (input.validity.patternMismatch) {
        errorElement.textContent = errorMessages[fieldname].patternMismatch || 'Please enter a valid phone number';
    } else {
        errorElement.textContent = ''; 
    } 

    errorElement.classList.remove('hidden'); 
    input.classList.add('border-red-500');
}

function clearError(input) {
    const errorElement = input.parentElement.querySelector('.error-message');
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
    input.classList.remove('border-red-500');
}

form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.validity.valid) {
            clearError(input);
        } else {
            showError(input);
        }
    });

    input.addEventListener('input', function() {
        if (this.classList.contains('border-red-500')) {
            clearError(this);
        }
    });
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  successMessage.classList.add('hidden');
  
  // Check if form is valid
  if (!form.checkValidity()) {
    // Show errors for all invalid fields
    form.querySelectorAll('input, textarea').forEach(input => {
      if (!input.validity.valid) {
        showError(input);
      }
    });
    return;
  }

  // Show success
  successMessage.classList.remove('hidden');
  form.reset();
});

}