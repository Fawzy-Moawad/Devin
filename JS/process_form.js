const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., 'Gmail' or use SMTP settings
        auth: {
            user: 'fawzy3arafa88@gmail.com', //change this with yours
            pass: 'yourpassword'    //change this with yours
        }
    });

    const mailOptions = {
        from: 'your@email.com', //change this with yours
        to: 'recipient@email.com', // Replace with your recipient's email address
        subject: 'Contact Form Submission',
        text: `
            First Name: ${formData.first_name}
            Last Name: ${formData.last_name}
            Email: ${formData.email}
            Phone Number: ${formData.phone_number}
            Message:
            ${formData.message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
