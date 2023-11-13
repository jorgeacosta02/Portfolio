// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require('dotenv').config();

// const app = express();

// const port = process.env.PORT || 3000;
// // const origin_email = process.env.ORIGIN_EMAIL;
// // const origin_email_password = process.env.ORIGIN_EMAIL_PASSWORD;
// // const destination_email = process.env.DESTINATION_EMAIL

// // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(cors({
//     origin: "https://jorgeacostaportfolio.netlify.app",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     optionsSuccessStatus: 204,
// }));

// const transporter = nodemailer.createTransport({
//     service: "Yahoo",
//     auth: {
//         user: 'jorgeacostadeleon11@yahoo.com', 
//         pass: 'vhyezsztppwzecyw' 
//     }
// });

// app.post("/send-email", (req, res) => {

//     console.log('Received request at /send-mail');

//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     const mailOptions = {
//         from: 'jorgeacostadeleon11@yahoo.com', 
//         to: 'jorgeacostadeleon@yahoo.com', 
//         subject: "Contact message from " + name,
//         text: "Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.json({ success: false, error: error.message });
//         } else {
//             console.log("E-mail send: " + info.response);
//             res.json({ success: true });
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Lerver listening at port ${port}`);
// });



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const mailgunApiUrl = `https://api.mailgun.net/v3/sandboxf908e68beb334b10b3ac9b2f8d27d83e.mailgun.org/messages`;

app.post("/send-email", (req, res) => {
    console.log('Received request at /send-mail');

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const data = {
        from: 'Mailgun Sandbox <postmaster@sandboxf908e68beb334b10b3ac9b2f8d27d83e.mailgun.org>',
        to: `Jorge Acosta <${email}>`,
        subject: `Contact message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    axios.post(mailgunApiUrl, data, {
        auth: {
            username: 'api',
            password: 'RviPMM.&F+4n5nJ',
        },
    })
    .then(response => {
        console.log("E-mail sent successfully", response.data);
        res.header("Access-Control-Allow-Origin", "*"); // Agrega esta línea
        res.json({ success: true });
    })
    .catch(error => {
        console.error(error);
        res.header("Access-Control-Allow-Origin", "*")
        res.json({ success: false, error: error.message });
    });
});

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
