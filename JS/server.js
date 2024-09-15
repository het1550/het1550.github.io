const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // To handle cross-origin requests

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Serve the contact form (you can remove this if your frontend is hosted elsewhere)
app.get('/', (req, res) => {
    res.send('Contact form backend');
});

// POST route to handle form submissions
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use any email service
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password' // Replace with your email password (consider using environment variables for security)
        }
    });

    // Set up email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with the email address to receive contact form submissions
        subject: `Contact Form Submission from ${name}`,
        text: `
            You have a new contact form submission from:
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error while sending the email');
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
