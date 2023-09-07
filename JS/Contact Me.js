function submitForm() {
    // Get form data
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone_number").value;
    const message = document.getElementById("message").value;

    // Create a JavaScript object with the form data
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: message
    };

    // Send a POST request to the server-side script (replace with your server endpoint)
    fetch('process_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully.');
            // You can display a success message to the user here
        } else {
            console.error('Form submission failed.');
            // Handle the error and display a message to the user
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any network or other errors here
    });
}

/*------------------------------
            NAVBAR
------------------------------*/
