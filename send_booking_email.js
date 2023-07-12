const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '@example.com', // Enter your Gmail email address
        pass: '' // Enter your Gmail password
    }
});

// Handler function to send the email
const sendEmail = (name, email, message) => {
    // Define the email options
    const mailOptions = {
        from: 'Your Name <your-email@example.com>',
        to: 'recipient-email@example.com', // Enter the recipient email address
        subject: 'New Booking Request',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

// Usage example
const name = 'John Doe';
const email = 'johndoe@example.com';
const message = 'I would like to book a session.';
sendEmail(name, email, message);
