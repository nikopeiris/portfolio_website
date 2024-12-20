"use client";

import React, {useState} from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {

    const [isclicked, setisclicked] = useState(false);

    const trigger_timer = () => {
        setisclicked(true);
        setTimeout(() => {setisclicked(false);}, 3000);
    };

    const [formdata, setformdata] = useState({first_name: "", last_name: "", ph_number: "", email: "", message: ""});
    const [status, setstatus] = useState(null);

    const handleChange = (e) => {
        setformdata({...formdata, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/email_api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            });

            const data = await response.json();

            if (data.success) {
                setstatus("SUCCESS");
                setformdata({first_name: "", last_name: "", ph_number: "", email: "", message: ""});
                trigger_timer();
            } else {
                setstatus("FAILED");
            }
        } catch (error) {
            console.error("Error", error);
            setstatus("FAILED");
        }
    };

    return (
        <div className="w-full container mx-auto p-6 text-white rounded-lg shadow-lg mt-[80px] xl:mt-[110px]">
            <h1 className="text-3xl font-extrabold mb-4 border-b-2 border-white/70">Contact Me</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="first_name" className="block mb-1 font-bold">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formdata.first_name}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none border border-white focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition duration-2000"
                        required
                        placeholder="Shenol"
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-1 font-bold">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formdata.last_name}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none border border-white focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition duration-2000"
                        required
                        placeholder="Peiris"
                    />
                </div>
                <div>
                    <label htmlFor="ph_number" className="block mb-1 font-bold">Mobile/Phone Number</label>
                    <input
                        type="tel"
                        name="ph_number"
                        value={formdata.ph_number}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none border border-white focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition duration-2000"
                        placeholder="+64 555 123 4567"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9+\-()\s]/g, "");
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none border border-white focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition duration-2000"
                        required
                        placeholder="Nikopeiris123@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 font-bold">Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        value={formdata.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none border border-white focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition duration-2000"
                        required
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded transition duration-2000"
                    size="lg"
                >
                    Send Message
                </Button>
            </form>

            {status === "SUCCESS" && isclicked && (
                <p className="mt-4 text-[#18ef0d] text-center mt-[30px] transition duration-2000">Message sent successfully!!!</p>
            )}
            {status === "FAILED" && (
                <p className="mt-4 text-accent text-center mt-[30px] transition duration-2000">Failed to send the message!!! Please try again later or Contact me directly.</p>
            )}
        </div>
    );
};

export default Contact;