$(document).ready(function () {
    $('#name').focus();
});
function validateField(fieldId, errorId, condition, message) {
    const field = $(`#${fieldId}`);
    const error = $(`#${errorId}`);
    if (condition(field.val())) {
        error.text('');
    } else {
        error.text(message);
    }
}

// Validate name
function validateName() {
    validateField('name', 'nameErr', value => value.trim() !== '', 'Name is required.');
}

// Validate email
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField('email', 'emailErr', value => emailRegex.test(value), 'Please enter a valid email.');
}

// Validate zip code
function validateZip(zipId, errorId) {
    validateField(zipId, errorId, value => /^\d{5}$/.test(value), 'Zip code must be 5 digits.');
}

// Attach blur event listeners
$('#name').blur(validateName);
$('#email').blur(validateEmail);
$('#zip').blur(() => validateZip('zip', 'zipErr'));
$('#shipzip').blur(() => validateZip('shipzip', 'shipzipErr'));
$('#copy').change(function () {
    if (this.checked) {
        $('#shipaddr').val($('#address').val());
        $('#shipcity').val($('#city').val());
        $('#shipzip').val($('#zip').val());
        $('#shipstate').val($('#state').val());
    } else {
        $('#shipaddr, #shipcity, #shipzip').val('');
        $('#shipstate').val('');
    }
});
function calculateTotals() {
    let subtotal = 0;

    $('.qty').each(function (index) {
        const quantity = parseInt($(this).val()) || 0;
        const price = parseFloat($(`#price${index + 1}`).text());
        const total = quantity * price;

        $(`#total${index + 1}`).text(total.toFixed(2));
        subtotal += total;
    });

    $('#subt').text(subtotal.toFixed(2));

    // Calculate tax
    const state = $('#shipstate').val();
    const tax = state === 'TX' ? subtotal * 0.08 : 0;
    $('#tax').text(tax.toFixed(2));

    // Calculate shipping
    let shipping = 10;
    if (state === 'TX') shipping = 5;
    if (state === 'CA' || state === 'NY') shipping = 20;

    $('#ship').text(shipping.toFixed(2));

    // Calculate grand total
    const grandTotal = subtotal + tax + shipping;
    $('#gTotal').text(grandTotal.toFixed(2));
}

// Attach blur event to quantity inputs
$('.qty').blur(calculateTotals);
$('#order').submit(function (event) {
    validateName();
    validateEmail();
    validateZip('zip', 'zipErr');
    validateZip('shipzip', 'shipzipErr');

    // Check for errors
    if ($('.error').text().trim() !== '') {
        event.preventDefault();
        alert('Please fix the errors before submitting.');
    }
});
