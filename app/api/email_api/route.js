import emailjs from "@emailjs/nodejs";

export async function POST(req) {
    try {
        const body = await req.json();
        const {first_name, last_name, email, ph_number, message} = body;
        const clean_ph_number = (ph_number) => ph_number.replace(/[^0-9+\-()\s]/g, "").trim();
        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            {
                first_name: first_name,
                last_name: last_name,
                email_id: email,
                ph_number: clean_ph_number(ph_number),
                message: message,
            },
            {publicKey: process.env.EMAILJS_PUBLIC_KEY,
                privateKey: process.env.EMAILJS_PRIVATE_KEY
            },
        );

        console.log("Email sent Successfully", response);

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
