// Get the form
const form = document.getElementById('yourFormId'); // Replace 'yourFormId' with the actual ID of your form

// Add an event listener to the 'buyNow' button
document.getElementById('buyNow').addEventListener('click', function() {
    
        window.location.href = 'index.html';
    
    });

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form elements
    const fullName = this.elements['name'].value.trim();
    const username = this.elements['username'].value.trim();
    const email = this.elements['email'].value.trim();

    // Validate the form fields
    if (!fullName || !username || !email) {
        alert('Please fill in all required fields.');
        return; // Stop the submission if validation fails
    }

    // If validation passes, you can submit the form or do something else
    // You can remove the preventDefault() call if you want the form to submit normally
});