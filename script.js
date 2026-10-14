// Dom Element Selection
const modal = document.getElementById('appointmentModal');
const openModalButtons = document.querySelectorAll('.open-modal-btn');
const closeModalButton = document.querySelector('.close-btn');
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

// Event Listeners to Open the Modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
        // Reset state elements when opening
        bookingForm.classList.remove('hidden');
        successMessage.classList.add('hidden');
        bookingForm.reset();
    });
});

// Event Listener to Close the Modal via Close Button
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal when user clicks outside the modal layout frame
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Dynamic Form Submissions
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop standard browser page reloads

    // Extract input fields text
    const patientName = document.getElementById('patientName').value;
    const department = document.getElementById('department').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    // Output success message inside container dynamically
    successMessage.innerHTML = `Thank you, <strong>${patientName}</strong>!<br>Your appointment for <strong>${department}</strong> on <strong>${appointmentDate}</strong> has been successfully booked.`;
    
    // Toggle element structures visibility
    bookingForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
});
