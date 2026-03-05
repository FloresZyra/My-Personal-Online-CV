import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Thank you ${name}!`);
    }

    return (
        <section className="card">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea placeholder="Message"></textarea>
                <button type="submit" id="submitBtn">Send</button>
            </form>
        </section>     
    )
}
export default Contact;