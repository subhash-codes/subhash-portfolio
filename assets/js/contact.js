
    document.addEventListener('DOMContentLoaded', function () {
        let form = document.querySelector('.php-email-form');
        let messageInput = document.querySelector('textarea[name="message"]');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevents the form from submitting in the traditional way

            // Retrieve the entered message from the textarea
            let enteredMessage = messageInput.value;

            // Print the entered message to the console
            console.log('Entered Message:', enteredMessage);

            // Additional logic for sending the message to the server can be added here
        });
    });





// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "shbhrmtk@gmail.com",
//         Password: "shbhrmtk@123",
//         To: 'shbhrmtk@gmail.com',
//         From: "sender@email_address.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }