const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.pass,
    },
});

export async function POST(req) {
    try {
        const body = await req.json();
        const {first_name, last_name, email, ph_number, message} = body;
        const clean_ph_number = (ph_number) => ph_number.replace(/[^0-9+\-()\s]/g, "").trim();

        const mailcontent = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Email From Portfolio Website",
            html: `<h3>New Message from ${first_name} ${last_name}</h3>
            <p>${message} <br>
            <h3>Contact Details:</h3>
            First Name: ${first_name}<br>
            Last Name: ${last_name}<br>
            Email: ${email}<br>
            Phone: ${clean_ph_number(ph_number)}</p>`,
        };


        const info = await transport.sendMail(mailcontent);

        console.log("Email sent Successfully", info.response);
        return new Response(
            JSON.stringify({success: true, message: "Email Sent"}),
            {status: 200, headers: {"Content-Type": "application/json"}}
        );
    } catch (error) {
        console.error("Error sending Email", error);
        return new Response(
            JSON.stringify({success: false, message: "Failed to Send"}),
            {status: 500, headers: {"Content-Type": "application/json"}}
        );
    }
}
