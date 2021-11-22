const express = require("express")
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5000, () => console.log('Server Running'))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "alexander.barbati@gmail.com",
      pass: "1a9l9e5X!",
    },
})
const responseEmail = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
})
  
contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send")
    }
})

router.post('/contact', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const contactMail = {
        from: name,
        to: 'alexander.barbati@gmail.com',
        subject: 'Contact Form',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`
    }
    const responseMail = {
        from: name,
        to: email,
        subject: 'Contact Form Alex Barbati',
        html: `
    <body style="margin: 0; font-family: 'Glory', sans-serif; 
                    background: #333;">
        <div style="
                    display: grid;
                    place-items: center;
                    color: #F0F7EE;
                    margin: 0;
                    padding: 1em;
                ">
            <h1>Hello ${name},</h1>
            <h3 style="font-family: 'Open Sans', sans-serif;">
                I got your message. Thanks for reaching out! We'll talk soon.
            </h3>
            <p>Checkout my links below.</p>
            <div style="display: flex">
                <a href='https://www.linkedin.com/in/alexbarbati-developer/' target="_blank" style="color: #F0F7EE; 
                                            font-weight: bold;
                                            text-decoration: none;
                                            margin: .5em;
                                            padding: .75em;
                                            background: #0a66c2;
                                            border-radius: 4px;
                                            font-family: 'Open Sans', sans-serif;
                                            font-size: .85em;
                                            ">
                    LinkedIn
                </a>
                <a href='https://github.com/ajbarbati' target="_blank" style="color: #F0F7EE; 
                                                font-weight: bold;
                                                text-decoration: none;
                                                margin: .5em;
                                                padding: .75em;
                                                background: #161B22;
                                                border-radius: 4px;
                                                font-family: 'Open Sans', sans-serif;
                                                font-size: .85em;
                                                ">
                    Github
                </a>
                <a href='https://ajbarbati.github.io/Portfolio_Site/' target="_blank" style="color: #333248; 
                                                font-weight: bold;
                                                text-decoration: none;
                                                margin: .5em;
                                                padding: .75em;
                                                background: #F0F7EE;
                                                border-radius: 4px;
                                                font-family: 'Open Sans', sans-serif;
                                                font-size: .85em;
                                                ">
                    Website
                </a>
                <a href='https://codepen.io/ajbarbati' target="_blank" style="color: #F0F7EE; 
                                                font-weight: bold;
                                                text-decoration: none;
                                                margin: .5em;
                                                padding: .75em;
                                                background: #1E1F26;
                                                border-radius: 4px;
                                                font-family: 'Open Sans', sans-serif;
                                                font-size: .85em;
                                                ">
                    Codepen
                </a>
            </div>
        </div>
    </body>`}
    contactEmail.sendMail(contactMail, (error) => {
        if (error) {
            console.log('error', error)
            res.json({ status: 'ERROR' })
        } else {
            res.json({ status: 'Message Sent' })
        }
    })
    contactEmail.sendMail(responseMail, (error) => {
        if (error) {
            console.log('error', error)
            res.json({ status: 'ERROR' })
        } else {
            res.json({ status: 'Message Sent' })
        }
    })
    // responseEmail.sendMail({
    //     from: 'alexander.barbati@gmail.com',
    //     to: email,
    //     subject: 'Message',
    //     text: responseMail
    // }, (error) => {
    //     console.log(error)
    // });
})