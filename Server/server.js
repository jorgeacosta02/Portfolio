const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const origin_email = process.env.ORIGIN_EMAIL;
const origin_email_password = process.env.ORIGIN_EMAIL_PASSWORD;
const destination_email = process.env.DESTINATION_EMAIL

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Configura el transporte Nodemailer
const transporter = nodemailer.createTransport({
    service: "Yahoo", // Utiliza otro servicio si lo prefieres
    auth: {
        user: origin_email, 
        pass: origin_email_password 
    }
});

// Maneja la solicitud POST del formulario
app.post("/send-email", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Configura el correo electrónico
    const mailOptions = {
        from: origin_email, 
        to: destination_email, 
        subject: "Contact message from " + name,
        text: "Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false, error: error.message });
        } else {
            console.log("E-mail send: " + info.response);
            res.json({ success: true });
        }
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Lerver listening at port ${port}`);
});
